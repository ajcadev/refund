import { CheckIcon, ChevronDownIcon, ChevronUpIcon, Cross2Icon } from "@radix-ui/react-icons";
import { DialogClose, DialogContent, DialogDescription, DialogIconButton, DialogOverlay, DialogPortal, DialogTitle } from "../../styles/UI/Dialog";
import { SelectContent, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectPortal, SelectRoot, SelectScrollDownButton, SelectScrollUpButton, SelectTrigger, SelectValue, SelectViewport } from "../../styles/UI/Select";
import { Fieldset, Flex, Input, Label, SubmitButton } from "./styles";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

const MAXDAYSTOREQUESTREFUND = 45 
const lowerDeadline = new Date((new Date()).setDate((new Date()).getDate()-MAXDAYSTOREQUESTREFUND))
const newRefundFormSchema = z.object({
  event: z.string().min(1, 'Informe o evento'),
  numberDoc: z.string().min(1, 'Informe o número do documento'),
  issueDate: z.date().min(lowerDeadline, `Documento fora do prazo de ${MAXDAYSTOREQUESTREFUND}`).max(new Date(), 'Data posterior à data atual'),
  amount: z.number().positive('Informe um valor maior que 0'),
});

type NewRefundFormInputs = z.infer<typeof newRefundFormSchema>;

export function NewRefundModal(){
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
    setValue
  } = useForm<NewRefundFormInputs>({
    resolver: zodResolver(newRefundFormSchema),
    defaultValues: {
      event: '1827'
    }
  })

  async function handleCreateNewRefund(data: NewRefundFormInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
    reset()
  }

  console.log(errors)

  return(
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Novo reembolso</DialogTitle>
        <DialogDescription>Adicione um novo reembolso e aguarde nosso feedback.</DialogDescription>
        <form onSubmit={handleSubmit(handleCreateNewRefund)}>
          <Fieldset>
            <Label htmlFor="event">Evento</Label>
            <Controller
              control={control}
              name="event"
              render={({ field }) => {
                return (
                  <SelectRoot onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="event" aria-label="Event">
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
                          <SelectItem value="1828">
                            <SelectItemText>Creche</SelectItemText>
                            <SelectItemIndicator>
                              <CheckIcon />
                            </SelectItemIndicator>
                          </SelectItem>
                          <SelectItem value="1827">
                            <SelectItemText>Médico</SelectItemText>
                            <SelectItemIndicator>
                              <CheckIcon />
                            </SelectItemIndicator>
                          </SelectItem>
                          <SelectItem value="1966">
                            <SelectItemText>Odonto</SelectItemText>
                            <SelectItemIndicator>
                              <CheckIcon />
                            </SelectItemIndicator>
                          </SelectItem>
                        </SelectViewport>
                        <SelectScrollDownButton>
                          <ChevronDownIcon />
                        </SelectScrollDownButton>
                      </SelectContent>
                    </SelectPortal>
                  </SelectRoot>
                )
              }}
            />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="numberDoc">Número</Label>
            <Input
              id="numberDoc"
              type="text"
              placeholder='Número do documento'
              required
              {...register('numberDoc')}
            />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="issueDate">Emissão</Label>
            <Input
              id="issueDate"
              type="date"
              placeholder='Emissão'
              required
              {...register('issueDate', { valueAsDate: true })}
            />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="amount">Valor</Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              placeholder='Valor'
              required
              {...register('amount', { valueAsNumber: true })}
            />
          </Fieldset>
          <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
            <SubmitButton type="submit" disabled={isSubmitting} variant="green">Salvar</SubmitButton>
          </Flex>
        </form>
        <DialogClose asChild>
          <DialogIconButton aria-label="Close">
            <Cross2Icon />
          </DialogIconButton>
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  )
}

