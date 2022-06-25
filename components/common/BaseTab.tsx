import BaseBadge from '@/components/common/BaseBadge'

type Props = {
  label: string
  counter?: number
  isActive?: boolean
}

const BaseTab = ({ label, counter, isActive = false }: Props) => {
  return (
    <div>
      <button className="flex gap-x-2 whitespace-nowrap leading-6">
        {label} {counter && <BaseBadge variant="dark">{counter}</BaseBadge>}
      </button>
      <hr className={`${!isActive && 'invisible'} mt-1.5 h-1 bg-white`} />
    </div>
  )
}

export default BaseTab
