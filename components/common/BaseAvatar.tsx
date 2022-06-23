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
      className={`${size[variant]} shrink-0 overflow-hidden rounded-full bg-gray-500`}
    >
      <img src={src} alt=" avatar" className="h-full w-full object-cover" />
    </div>
  )
}

export default BaseAvatar
