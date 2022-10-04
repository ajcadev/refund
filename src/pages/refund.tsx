import { GetStaticProps } from "next";
import { Pencil, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { NewRefundModal } from "../components/NewRefundModal";
import { api } from "../services/api";
import { ButtonIcon, NewRefundButton, RefundContainer, RefundsTable, State } from "../styles/pages/refund";
import { DialogRoot, DialogTrigger } from "../styles/UI/Dialog";
import { dateFormatter, priceFormatter } from "../utils/formatter";

interface Event {
  id: number
  event: string
  description: string  
}

interface State {
  id: number
  state: string
}

interface RefundProps {
  events: Event[]
}

interface Refunds {
  id: string;
  period: string;
  event_id: string;
  number_doc: string;
  issue_date: string;
  amount: number;
  attachment: string;
  event: Event;
  state: State;
}

export default function Refund({ events }: RefundProps) {
  const [refunds, setRefunds] = useState<Refunds[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/api/refunds?_expand=state&_expand=event')
      const data = response.data
      setRefunds(data)
    }
    fetchData()
  },[])

  return (
    <RefundContainer>
      <DialogRoot>
        <DialogTrigger asChild>
          <NewRefundButton variant="green">Novo reembolso</NewRefundButton>
        </DialogTrigger>
        <NewRefundModal events={events} />
      </DialogRoot>
      <RefundsTable>
        <thead>
          <tr>
            <th>período</th>
            <th>evento</th>
            <th>documento</th>
            <th>emissão</th>
            <th>valor</th>
            <th>estado</th>
            <th>arquivo</th>
            <th></th>

          </tr>
        </thead>
        <tbody>
          {refunds.length && (
            refunds.map(refund => {
              console.log(refund.state.state)
              return(
                <tr key={refund.id}>
                  <td>{refund.period}</td>
                  <td>{refund.event.description}</td>
                  <td>{refund.number_doc}</td>
                  <td>{dateFormatter.format(new Date(refund.issue_date))}</td>
                  <td>{priceFormatter.format(refund.amount)}</td>
                  <td><State variant={refund.state.state}>
                    {refund.state.state}</State>
                  </td>
                  <td>{refund.attachment}</td>
                  <td>
                    <ButtonIcon variant='edit'>
                      <Pencil size={16} />
                    </ButtonIcon>
                    <ButtonIcon variant="delete">
                      <Trash size={16} />
                    </ButtonIcon>
                  </td>
                </tr>
              )
            })
          )}
        </tbody>
      </RefundsTable>
    </RefundContainer>
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