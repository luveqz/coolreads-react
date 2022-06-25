type Props = {
  src: string
  title: string
}

const BaseCover = ({ src, title }: Props) => {
  return (
    <div className="h-[75px] w-[50px] shrink-0 rounded border-2 border-white">
      <img src={src} alt={` Cover of "${title}"`} />
    </div>
  )
}

export default BaseCover
