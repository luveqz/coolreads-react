import type { ReactNode } from 'react'
import Link from 'next/link'

type Props = {
  children: ReactNode
  href: string
}

const BaseLink = ({ children, href }: Props) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  )
}

export default BaseLink
