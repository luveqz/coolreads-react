import BaseAvatar from '@/components/common/BaseAvatar'
import BaseButton from '@/components/common/BaseButton'

const avatarUrl =
  'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/coolreads%2Fhaylee.webp?alt=media'

const ProfileInfo = () => {
  return (
    <section className="mb-9 flex flex-col items-center gap-x-5 md:mb-16 md:flex-row md:items-start">
      <BaseAvatar src={avatarUrl} variant="large" />

      <div className="flex grow flex-wrap text-center md:text-left">
        {/* User Info */}
        <div className="my-2 grow md:order-1">
          <h1 className="text-2xl font-semibold md:text-3xl ">
            Haylee Caulfield
          </h1>
          <p className="text-lg leading-5 text-gray-200">@goldenfish</p>
        </div>

        {/* Description */}
        <div className="basis-full md:order-3">
          <p className="mx-auto max-w-xs md:max-w-none">
            I could’ve told you my whole autobiography, but I didn’t felt like
            it.
          </p>
        </div>

        {/* Action */}
        <div className="mt-4 flex shrink-0 basis-full items-start justify-center md:order-2 md:basis-auto">
          <BaseButton variant="tertiary">Follow</BaseButton>
        </div>
      </div>
    </section>
  )
}

export default ProfileInfo
