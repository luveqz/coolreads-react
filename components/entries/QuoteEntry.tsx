import EntryHeader from '@/components/common/EntryHeader'
import EntryFooter from '@/components/common/EntryFooter'
import BaseAvatar from '@/components/common/BaseAvatar'
import QuoteIcon from '@/assets/icons/quote.svg'

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
  }
  quote: string
  meta: {
    publishedAt: string
    comments: string[]
    likes: number
  }
}

const QuoteEntry = ({ user, book, quote, meta }: Props) => {
  return (
    <article className="flex gap-x-3">
      <div className="hidden md:block">
        <BaseAvatar src={user.avatarUrl} variant="medium" />
      </div>

      <div className="grow">
        {/* Header (Desktop) */}
        <EntryHeader publishedAt={meta.publishedAt}>
          <p>
            <span className="font-bold">{user.fullName}</span> shared a quote
          </p>
        </EntryHeader>

        {/* Card */}
        <section className="rounded bg-gray-400 py-4 px-5">
          {/* Header (Mobile) */}
          <div className="md:hidden">
            <div className="flex items-center gap-x-2 ">
              <BaseAvatar src={user.avatarUrl} variant="medium" />
              <p className="font-bold">{user.fullName}</p>
              <QuoteIcon className="text-gray-300" />
            </div>
            <hr className="mt-2 mb-4 h-0.5 bg-gray-500" />
          </div>

          {/* Content */}
          <section className="flex gap-x-4">
            <div className="hidden w-[50px] shrink-0 md:block">
              <QuoteIcon className="mt-1.5 h-fit w-full text-gray-600" />
            </div>

            <div>
              <div className="leading-5 line-clamp-3">{quote}</div>
              <a className="underline" href="#">
                read more
              </a>

              <div className="text-right">
                <p>
                  ―
                  <span className="font-semibold leading-none">
                    {book.authors[0]}
                  </span>{' '}
                  {book.authors.length > 1 && 'et al.'}
                </p>
                <p className="text-sm italic leading-none text-gray-200">
                  {book.title}
                </p>
              </div>
            </div>
          </section>

          <EntryFooter likes={meta.likes} comments={meta.comments} />
        </section>
      </div>
    </article>
  )
}

export default QuoteEntry
