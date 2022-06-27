import ActivityTabs from '@/components/ActivityTabs'
import ProfileHeader from '@/components/ProfileHeader'
import ReviewEntry from '@/components/entries/ReviewEntry'
import QuoteEntry from '@/components/entries/QuoteEntry'
import LeaderBoard from '@/components/widgets/LeaderBoard'
import { review, quote } from '@/data/recent-activity'
import type { NextPage } from 'next'

const Profile: NextPage = () => {
  return (
    <div className="mx-auto mt-9 max-w-content-container gap-x-10 px-5 md:flex">
      <main className="pb-11 md:w-8/12">
        <ProfileHeader />
        <ActivityTabs />

        <section className="flex flex-col gap-y-4">
          <ReviewEntry
            user={review.user}
            book={review.book}
            review={review.review}
            meta={review.meta}
          />
          <QuoteEntry
            user={quote.user}
            book={quote.book}
            quote={quote.quote}
            meta={quote.meta}
          />
        </section>
      </main>

      <aside className="hidden md:block md:w-4/12">
        <LeaderBoard />
      </aside>
    </div>
  )
}

export default Profile
