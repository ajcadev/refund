import { NewRefundModal } from "../components/NewRefundModal";
import { DialogRoot, DialogTrigger } from "../styles/UI/Dialog";

export default function Refund() {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <button>Novo reembolso</button>
      </DialogTrigger>
      <NewRefundModal />
    </DialogRoot>
  )
}
