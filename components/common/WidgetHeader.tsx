type Props = {
  title: string
  subtitle: string
}

const WidgetHeader = ({ title, subtitle }: Props) => {
  return (
    <header className="rounded bg-gray-600 py-3 px-6">
      <p className="text-lg leading-none">{title}</p>
      <p className="mt-1 text-base leading-5 text-gray-100">{subtitle}</p>
    </header>
  )
}

export default WidgetHeader
