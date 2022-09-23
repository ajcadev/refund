import { CheckIcon, ChevronDownIcon, ChevronUpIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "../../styles/UI/Button";
import { DialogClose, DialogContent, DialogDescription, DialogIconButton, DialogOverlay, DialogPortal, DialogTitle } from "../../styles/UI/Dialog";
import { SelectContent, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectPortal, SelectRoot, SelectScrollDownButton, SelectScrollUpButton, SelectTrigger, SelectValue, SelectViewport } from "../../styles/UI/Select";
import { Fieldset, Flex, Input, Label } from "./styles";

export function NewRefundModal(){
  return(
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Novo reembolso</DialogTitle>
        <DialogDescription>Adicione um novo reembolso e aguarde nosso feedback.</DialogDescription>
        <form action="">
          <Fieldset>
            <Label htmlFor="event">Evento</Label>
            <SelectRoot>
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
          </Fieldset>
          <Fieldset>
            <Label htmlFor="numberDoc">Número</Label>
            <Input
              id="numberDoc"
              type="text"
              placeholder='Número do documento'
              required
            />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="issueDate">Emissão</Label>
            <Input
              id="issueDate"
              type="date"
              placeholder='Emissão'
              required
            />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="value">Valor</Label>
            <Input
              id="value"
              type="number"
              placeholder='Valor'
              required
            />
          </Fieldset>
          <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
            <Button type="submit" variant="green">Salvar</Button>
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