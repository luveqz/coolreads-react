type Props = {
  children: number
  variant?: 'dark' | 'light'
}

const BaseBadge = ({ children, variant = 'light' }: Props) => {
  const theme = {
    dark: 'bg-gray-400',
    light: 'bg-gray-100 text-gray-600',
  }

  return (
    <span
      className={`${theme[variant]} flex shrink items-center rounded p-1 font-mono text-xs font-normal leading-none`}
    >
      {children}
    </span>
  )
}

export default BaseBadge
