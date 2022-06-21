import ProfileInfo from '@/components/ProfileInfo'
import type { NextPage } from 'next'

const Profile: NextPage = () => {
  return (
    <div className="mx-auto mt-9 max-w-content-container gap-x-10 px-5 md:flex">
      <main className="md:w-8/12">
        <ProfileInfo />
      </main>

      <aside className="md:w-4/12"></aside>
    </div>
  )
}

export default Profile
