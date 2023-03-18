import BaseAvatar from '@/components/common/BaseAvatar'
import { Notification } from '@/lib/models/system'

type Props = Notification & {
  onClick: (id: string) => void
}

const NotificationItem = ({
  id,
  subject,
  predicate,
  timestamp,
  isRead,
  onClick,
}: Props) => {
  const handleClick = () => {
    onClick(id)
  }

  return (
    <button
      className={`${isRead ? 'opacity-60 grayscale' : ''} flex gap-2 text-left`}
      onClick={handleClick}
    >
      <BaseAvatar src={subject.avatarUrl || ''} variant="medium" />

      <p className="leading-5 text-gray-500">
        {subject.fullName} {predicate} ·{' '}
        <span className="text-gray-300">{timestamp}</span>
      </p>
    </button>
  )
}

export default NotificationItem
