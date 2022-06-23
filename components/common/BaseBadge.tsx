type Props = { children: number }

const BaseBadge = ({ children }: Props) => {
  return (
    <span className="block shrink rounded bg-gray-100 p-1 text-sm leading-none text-gray-600">
      {children}
    </span>
  )
}

export default BaseBadge
