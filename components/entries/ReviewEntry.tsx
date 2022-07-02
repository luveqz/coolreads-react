import EntryHeader from '@/components/common/EntryHeader'
import EntryFooter from '@/components/common/EntryFooter'
import BaseAvatar from '@/components/common/BaseAvatar'
import BaseRating from '@/components/common/BaseRating'
import BaseCover from '@/components/common/BaseCover'
import ReviewIcon from '@/assets/icons/review.svg'

type Props = {
  user: {
    id: number
    fullName: string
    username: string
    avatarUrl: string
  }
  book: {
    title: string
    authors: string[]
    coverUrl: string
  }
  review: {
    rating: number
    comment: string
  }
  meta: {
    publishedAt: string
    comments: string[]
    likes: number
  }
}

const ReviewEntry = ({ user, book, review, meta }: Props) => {
  return (
    <article className="flex gap-x-3">
      <div className="hidden md:block">
        <BaseAvatar src={user.avatarUrl} variant="medium" />
      </div>

      <div className="grow">
        {/* Header (Desktop) */}
        <EntryHeader publishedAt={meta.publishedAt}>
          <p>
            <span className="font-bold">{user.fullName}</span> rated a book
          </p>
          <BaseRating value={review.rating} />
        </EntryHeader>

        {/* Card */}
        <section className="rounded bg-gray-400 py-4 px-5">
          <section className="flex gap-x-4">
            <div className="hidden md:block">
              <BaseCover src={book.coverUrl} title={book.title} />
            </div>

            <div>
              {/* Header (Mobile) */}
              <div className="md:hidden">
                <div className="flex items-center gap-x-2 ">
                  <BaseAvatar src={user.avatarUrl} variant="medium" />
                  <p className="font-bold">{user.fullName}</p>
                  <ReviewIcon className="text-gray-300" />
                </div>
                <hr className="mt-2 mb-4 h-0.5 bg-gray-500" />
              </div>

              {/* Content */}
              <div className="flex gap-x-4">
                <div className="md:hidden">
                  <BaseCover src={book.coverUrl} title={book.title} />
                </div>

                <div>
                  <h2 className="text-lg font-bold leading-none">
                    {book.title}
                  </h2>
                  <p>
                    By{' '}
                    <span className="italic">
                      {book.authors.map((author) => author).join(', ')}
                    </span>
                  </p>
                  <div className="md:hidden">
                    <BaseRating value={review.rating} />
                  </div>
                </div>
              </div>
              <div className="mt-2 leading-5 line-clamp-5">
                {review.comment}
              </div>
              <a className="underline" href="#">
                read more
              </a>
            </div>
          </section>

          <EntryFooter likes={meta.likes} comments={meta.comments} />
        </section>
      </div>
    </article>
  )
}

export default ReviewEntry
