import BellIcon from '@/assets/icons/bell.svg'
import NotificationPopover from '@/components/common/NotificationPopover'

const NotificationButton = () => {
  return (
    <NotificationPopover>
      <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gray-600">
        <BellIcon />
        <span className="absolute top-0.5 right-0 h-[7px] w-[7px] rounded-full bg-white" />
      </div>
    </NotificationPopover>
  )
}

export default NotificationButton
