import BaseImage from '@/components/common/BaseImage'

type Props = {
  src: string
  title: string
}

const BaseCover = ({ src, title }: Props) => {
  return (
    <div
      className="h-cover w-cover shrink-0 rounded border-2 border-white bg-gray-600"
      title={title}
    >
      <BaseImage src={src} alt={` Cover of "${title}"`} />
    </div>
  )
}

export default BaseCover
