import { NewRefundModal } from "../components/NewRefundModal";
import { NewRefundButton } from "../styles/pages/refund";
import { DialogRoot, DialogTrigger } from "../styles/UI/Dialog";

export default function Refund() {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <NewRefundButton>Novo reembolso</NewRefundButton>
      </DialogTrigger>
      <NewRefundModal />
    </DialogRoot>
  )
}
