import StarIcon from '@/assets/icons/star.svg'

type Props = {
  value: number
}

const BaseRating = ({ value }: Props) => {
  return (
    <p className="flex items-center gap-x-0.5">
      <StarIcon className="text-yellow" />
      <span>{value}</span>
    </p>
  )
}

export default BaseRating
