import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Link href={"/refund"} prefetch={false}>
      <a>Página de reembolso</a>
    </Link>
  )
}
export default Home