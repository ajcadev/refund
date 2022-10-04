import { CheckIcon, ChevronDownIcon, ChevronUpIcon, Cross2Icon } from "@radix-ui/react-icons";
import { DialogClose, DialogContent, DialogDescription, DialogIconButton, DialogOverlay, DialogPortal, DialogTitle } from "../../styles/UI/Dialog";
import { SelectContent, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectPortal, SelectRoot, SelectScrollDownButton, SelectScrollUpButton, SelectTrigger, SelectValue, SelectViewport } from "../../styles/UI/Select";
import { FormRefund, Input, Label, SubmitButton } from "./styles";
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const MAXDAYSTOREQUESTREFUND = 45 
const lowerDeadline = new Date((new Date()).setDate((new Date()).getDate()-MAXDAYSTOREQUESTREFUND))


const NoDependentSchema = z.object({
  event: z.string().min(1, 'Informe o evento'),
  numberDoc: z.string().min(1, 'Informe o número do documento'),
  issueDate: z.date().min(lowerDeadline, `Documento fora do prazo de ${MAXDAYSTOREQUESTREFUND}`).max(new Date(), 'Data posterior à data atual'),
  amount: z.number().positive('Informe um valor maior que 0'),
  isDependent: z.literal(false),
  file:
  typeof window === "undefined" // this is required if your app rendered in server side, otherwise just remove the ternary condition
    ? z.undefined()
    : z
        .instanceof(FileList)
        .refine(file => file.length !== 0, {
          message: "File is required",
        })
        .refine(
          file => {
            const fileType = file.item?.(0)?.type || "";
            return fileType === "application/pdf";
          },
          {
            message: "File must be in .pdf format",
          }
        )
        .refine(
          file => {
            const fileSize = file.item?.(0)?.size || 0;
            return fileSize <= 200000;
          },
          { message: "File size must be less than or equal to 200kb" }
        ),
})

const DependentSchema = z.object({
  event: z.string().min(1, 'Informe o evento'),
  numberDoc: z.string().min(1, 'Informe o número do documento'),
  issueDate: z.date().min(lowerDeadline, `Documento fora do prazo de ${MAXDAYSTOREQUESTREFUND}`).max(new Date(), 'Data posterior à data atual'),
  amount: z.number().positive('Informe um valor maior que 0'),
  isDependent: z.literal(true),
  dependent: z.string().min(1, 'Informe o dependente'),
  file:
  typeof window === "undefined" // this is required if your app rendered in server side, otherwise just remove the ternary condition
    ? z.undefined()
    : z
        .instanceof(FileList)
        .refine(file => file.length !== 0, {
          message: "File is required",
        })
        .refine(
          file => {
            const fileType = file.item?.(0)?.type || "";
            return fileType === "application/pdf";
          },
          {
            message: "File must be in .pdf format",
          }
        )
        .refine(
          file => {
            const fileSize = file.item?.(0)?.size || 0;
            return fileSize <= 200000;
          },
          { message: "File size must be less than or equal to 200kb" }
        ),  
})

const newRefundFormSchema = z.discriminatedUnion("isDependent", [
  NoDependentSchema,
  DependentSchema
])

type NewRefundFormSchemaType = z.infer<typeof newRefundFormSchema>;

interface NewRefundModalProps {
  events: {
    id: number
    event: string
    description: string
  }[]
}

export function NewRefundModal({ events }: NewRefundModalProps){
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { isSubmitting, errors },
    reset  } = useForm<NewRefundFormSchemaType>({
    resolver: zodResolver(newRefundFormSchema),
    defaultValues: {
      event: '1827'
    }
  })
  
  async function handleCreateNewRefund(data: NewRefundFormSchemaType) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
    reset()
  }

  const isDependent = watch('isDependent')

  return(
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Novo reembolso</DialogTitle>
        <DialogDescription>Adicione um novo reembolso e aguarde nosso feedback.</DialogDescription>
        <FormRefund onSubmit={handleSubmit(handleCreateNewRefund)}>
            <Controller
              control={control}
              name="event"
              render={({ field }) => {
                return (
                  <Label>
                    <span>Evento</span>
                    <SelectRoot onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger aria-label="Event">
                        <SelectValue placeholder="Selecione um evento…" />
                        <SelectIcon>
                          <ChevronDownIcon />
                        </SelectIcon>
                      </SelectTrigger>
                      <SelectPortal>
                        <SelectContent>
                          <SelectScrollUpButton>
                            <ChevronUpIcon />
                          </SelectScrollUpButton>
                          <SelectViewport>
                            {events.map(event =>{
                              return (
                                <SelectItem key={event.id} value={event.event}>
                                  <SelectItemText>{event.description}</SelectItemText>
                                  <SelectItemIndicator>
                                    <CheckIcon />
                                  </SelectItemIndicator>
                                </SelectItem>
                              )
                            })}
                          </SelectViewport>
                          <SelectScrollDownButton>
                            <ChevronDownIcon />
                          </SelectScrollDownButton>
                        </SelectContent>
                      </SelectPortal>
                    </SelectRoot>
                  </Label>
                )
              }}
            />
            <Label>
              <span>Número do documento</span>
              <Input
                type="text"
                placeholder='Número do documento'
                {...register('numberDoc')}
                aria-invalid={errors.numberDoc ? "true" : "false"} 
              />
              {<p>{errors.numberDoc?.message}</p>}
            </Label>
            <Label>
              <span>Data de emissão</span>
              <Input
                type="date"
                placeholder='Emissão'
                {...register('issueDate', { valueAsDate: true })}
              />
              {errors.issueDate && <p>Informe uma data válida</p>}
              {<p>{errors.issueDate?.message}</p>}
            </Label>

            <Label>
              <span>Valor</span>
              <Input
                type="number"
                step="0.01"
                placeholder='Valor'
                {...register('amount', { valueAsNumber: true })}
              />
              {errors.amount && <p>Informe um valor maior que zero.</p>}
            </Label>
            <Label>
              <span>Arquivo</span>
              <Input
                type="file"
                {...register('file')}
              />
              {errors.file && <p>Informe um arquivo pdf.</p>}
            </Label>


            <Label variant="checkbox">
              <Input
                type="checkbox"
                {...register('isDependent')}
              />
              <span>Despesa é de dependente?</span>
            </Label>
            {isDependent && (
              <Label>
                <span>Dependente</span>
                <Input
                  type="text"
                  placeholder='Nome do dependente'
                  {...register('dependent', {shouldUnregister: true})}
                />
              </Label>
            )}
            {/* <pre>{JSON.stringify(watch())}</pre> */}
            <SubmitButton type="submit" disabled={isSubmitting} variant="green">Criar solicitação</SubmitButton>
        </FormRefund>
        <DialogClose asChild>
          <DialogIconButton aria-label="Close">
            <Cross2Icon />
          </DialogIconButton>
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  )
}

