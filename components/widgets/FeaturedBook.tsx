import WidgetHeader from '@/components/common/WidgetHeader'
import BaseCover from '@/components/common/BaseCover'
import { getFormattedAuthors } from '@/lib/utils/string'

type Props = {
  title: string
  subtitle: string
  book: {
    id: number
    title: string
    authors: string[]
    coverUrl: string
    summary: string
  }
}

const FeaturedBook = ({ title, subtitle, book }: Props) => {
  return (
    <section>
      <WidgetHeader title={title} subtitle={subtitle} />

      <section className="my-4 flex flex-col items-center gap-y-4 px-6">
        <BaseCover src={book.coverUrl} title={book.title} />

        <div className="w-full">
          <p className="text-center text-lg leading-none">{book.title}</p>
          <p className="text-center italic">
            By {getFormattedAuthors(book.authors)}
          </p>

          <div className="mt-4 leading-5 line-clamp-4">{book.summary}</div>
          <a className="underline" href="#">
            read more
          </a>
        </div>
      </section>
    </section>
  )
}

export default FeaturedBook
