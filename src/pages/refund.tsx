import { GetStaticProps } from "next";
import { NewRefundModal } from "../components/NewRefundModal";
import { api } from "../services/api";
import { NewRefundButton } from "../styles/pages/refund";
import { DialogRoot, DialogTrigger } from "../styles/UI/Dialog";

interface RefundProps {
  events: {
    id: number
    event: string
    description: string
  }[]
}

export default function Refund({ events }: RefundProps) {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <NewRefundButton>Novo reembolso</NewRefundButton>
      </DialogTrigger>
      <NewRefundModal events={events} />
    </DialogRoot>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/api/events')
  const data = response.data
  return {
    props: { events: data },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}