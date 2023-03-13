import BaseImage from '@/components/common/BaseImage'

type Props = {
  variant: 'small' | 'medium' | 'large'
  src: string
}

const BaseAvatar = ({ src, variant }: Props) => {
  const size = {
    small: 'h-7 w-7',
    medium: 'h-[34px] w-[34px]',
    large: 'h-20 w-20',
  }

  return (
    <div
      className={`${size[variant]} relative shrink-0 overflow-hidden rounded-full bg-gray-600`}
    >
      <BaseImage src={src} alt=" Avatar" />

      <div className="absolute top-0 h-full w-full rounded-full border-2 border-gray-600/10" />
    </div>
  )
}

export default BaseAvatar
