import BaseButton from '@/components/common/BaseButton'
import LikeButton from '@/components/common/LikeButton'
import BaseAvatar from '@/components/common/BaseAvatar'
import BaseCover from '@/components/common/BaseCover'
import ReviewIcon from '@/assets/icons/review.svg'
import StarIcon from '@/assets/icons/star.svg'

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
        <header className="mb-2 flex justify-end leading-none md:justify-between">
          <div className="hidden items-end gap-x-3 md:flex">
            <p>
              <span className="font-bold">{user.fullName}</span> rated a book
            </p>

            <p className="flex items-end gap-x-0.5">
              <StarIcon className="text-yellow" />
              {review.rating}
            </p>
          </div>

          <time className="flex items-end text-gray-300">
            {meta.publishedAt}
          </time>
        </header>

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
                  <p className="flex items-center gap-x-0.5 md:hidden">
                    <StarIcon className="text-yellow" />
                    {review.rating}
                  </p>
                </div>
              </div>
              <p className="mt-2 leading-5 line-clamp-[8]">{review.comment}</p>{' '}
              <a className="underline" href="#">
                read more
              </a>
            </div>
          </section>

          {/* Meta */}
          <section className="mt-3 flex justify-between">
            <div className="flex items-center gap-x-1">
              <LikeButton />
              {meta.likes}
            </div>

            <div className="flex items-center gap-x-4">
              <a className="underline underline-offset-2" href="#">
                View 23 comments
              </a>
              <div className="hidden md:block">
                <BaseButton variant="tertiary">Reply</BaseButton>
              </div>
            </div>
          </section>
        </section>
      </div>
    </article>
  )
}

export default ReviewEntry
