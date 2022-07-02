type Props = {
  src: string
  title: string
}

const BaseCover = ({ src, title }: Props) => {
  return (
    <div
      className="h-cover w-cover shrink-0 rounded border-2 border-white bg-white"
      title={title}
    >
      <img
        src={src}
        alt={` Cover of "${title}"`}
        className="h-full w-full object-cover"
      />
    </div>
  )
}

export default BaseCover
