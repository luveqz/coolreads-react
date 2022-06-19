type Props = {
  placeholder: string
}

const BaseInput = ({ placeholder }: Props) => {
  return (
    <input
      className="w-full rounded bg-gray-600 py-1 px-4 placeholder:text-gray-300"
      placeholder={placeholder}
    />
  )
}

export default BaseInput
