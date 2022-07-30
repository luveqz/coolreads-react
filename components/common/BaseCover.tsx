import BaseImage from '@/components/common/BaseImage'

type Props = {
  src: string
  title: string
}

const BaseCover = ({ src, title }: Props) => {
  return (
    <div
      className="h-cover w-cover shrink-0 overflow-hidden rounded bg-gray-600"
      title={title}
    >
      <BaseImage
        src={src}
        alt={` Cover of "${title}"`}
        className="rounded border-2 border-white"
      />
    </div>
  )
}

export default BaseCover
