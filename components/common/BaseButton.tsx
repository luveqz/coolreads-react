import type { ReactNode } from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant: 'primary' | 'secondary' | 'tertiary'
}

const BaseButton = ({ children, variant = 'primary' }: Props) => {
  return (
    <button className={`${variant}-btn rounded py-1.5 px-2.5 leading-5`}>
      {children}
    </button>
  )
}

export default BaseButton
