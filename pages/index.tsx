import type { NextPage } from 'next'
import Head from 'next/head'

import TheFooter from '@/components/TheFooter'
import ActivityTabs from '@/components/ActivityTabs'
import ProfileHeader from '@/components/ProfileHeader'
import ReviewEntry from '@/components/entries/ReviewEntry'
import QuoteEntry from '@/components/entries/QuoteEntry'
import ListEntry from '@/components/entries/ListEntry'
import LeaderBoard from '@/components/widgets/LeaderBoard'
import FeaturedBook from '@/components/widgets/FeaturedBook'
import { review, quote, list } from '@/database/fixtures/recent-activity'
import { featuredBook } from '@/database/fixtures/widgets'

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>Haylee Caulfield | CoolReads</title>
      </Head>

      <div className="mx-auto mt-9 max-w-content-container grid-cols-main gap-x-10 px-5 md:grid">
        <main className="pb-11">
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

        <div className="hidden md:block">
          <aside className="flex flex-col gap-y-10">
            <LeaderBoard />
            <FeaturedBook
              title="Recommended by Haylee"
              subtitle="This week"
              book={featuredBook}
            />
          </aside>

          <TheFooter />
        </div>
      </div>
    </>
  )
}

export default Profile
