import BaseAvatar from '@/components/common/BaseAvatar'

type Props = {
  avatarUrl: string
  action: string
  timestamp: string
  isRead?: boolean
}

const NotificationItem = ({ avatarUrl, action, timestamp, isRead }: Props) => {
  return (
    <button
      className={`${isRead ? 'opacity-50 grayscale' : ''} flex gap-2 text-left`}
    >
      <BaseAvatar src={avatarUrl} variant="medium" />

      <p className="leading-5 text-gray-500">
        {action} · <span className="text-gray-300">{timestamp}</span>
      </p>
    </button>
  )
}

export default NotificationItem
