import ActivityTabs from '@/components/ActivityTabs'
import ProfileHeader from '@/components/ProfileHeader'
import ReviewEntry from '@/components/entries/ReviewEntry'
import QuoteEntry from '@/components/entries/QuoteEntry'
import ListEntry from '@/components/entries/ListEntry'
import LeaderBoard from '@/components/widgets/LeaderBoard'
import { review, quote, list } from '@/data/recent-activity'
import type { NextPage } from 'next'
import TheFooter from '@/components/TheFooter'

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
          <ListEntry
            user={list.user}
            books={list.books}
            name={list.name}
            meta={list.meta}
          />
        </section>
      </main>

      <div className="hidden md:block md:w-4/12">
        <aside>
          <LeaderBoard />
        </aside>

        <TheFooter />
      </div>
    </div>
  )
}

export default Profile
