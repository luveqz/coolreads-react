import NotificationButton from '@/components/NotificationButton'
import BaseLink from '@/components/common/BaseLink'
import LogoIcon from '@/assets/icons/logo.svg'
import MenuIcon from '@/assets/icons/menu.svg'

type Props = {
  className?: string
}

const MobileNavigation = ({ className }: Props) => {
  return (
    <section className={`${className} bg-gray-400 py-2 text-white shadow-card`}>
      <div className="mx-auto flex w-full max-w-content-container items-center justify-between px-5 ">
        <BaseLink href="/">
          <LogoIcon />
        </BaseLink>

        <div className="flex items-center gap-x-4">
          <NotificationButton />

          <button className="flex h-7 w-7 items-center justify-center">
            <MenuIcon />
          </button>
        </div>
      </div>
    </section>
  )
}

export default MobileNavigation
