import NotificationButton from '@/components/NotificationButton'
import BaseInput from '@/components/common/BaseInput'
import BaseLink from '@/components/common/BaseLink'
import BaseAvatar from '@/components/common/BaseAvatar'
import LogoIcon from '@/assets/icons/logo.svg'

type Props = {
  className?: string
}

const avatarUrl =
  'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/coolreads%2Fhaylee.webp?alt=media'

const TheNavigation = ({ className }: Props) => {
  return (
    <section className={`${className} bg-gray-400 py-2 text-white shadow-card`}>
      <div className="mx-auto flex w-full max-w-content-container items-center justify-between px-5 ">
        <BaseLink href="/">
          <LogoIcon />
        </BaseLink>

        <div className="max-w-[150px]">
          <BaseInput placeholder="Find books..." />
        </div>

        <div className="flex items-center gap-x-10">
          <nav className="hidden gap-x-4 md:flex ">
            <BaseLink href="/">Home</BaseLink>
            <BaseLink href="/">Profile</BaseLink>
          </nav>

          <div className="flex gap-x-4">
            <NotificationButton />

            <BaseAvatar src={avatarUrl} variant="small" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheNavigation
