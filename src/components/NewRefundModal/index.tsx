import { Cross2Icon } from "@radix-ui/react-icons";
import { DialogClose, DialogContent, DialogDescription, DialogIconButton, DialogOverlay, DialogPortal, DialogTitle } from "../../styles/UI/Dialog";

export function NewRefundModal(){
  return(
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Novo reembolso</DialogTitle>
        <DialogDescription>Adicione um novo reembolso e aguarde nosso feedback.</DialogDescription>
        <DialogClose asChild>
          <DialogIconButton aria-label="Close">
            <Cross2Icon />
          </DialogIconButton>
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  )
}