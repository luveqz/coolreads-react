import BaseCover from '@/components/common/BaseCover'

type Props = {
  books: {
    id: number
    title: string
    authors: string[]
    coverUrl: string
  }[]
}

const BookList = ({ books }: Props) => {
  return (
    <div className="h-[84px] max-w-full overflow-y-hidden">
      <div className="box-content h-full w-full overflow-x-auto pb-4">
        <div className="flex gap-x-5">
          {books.map((book) => (
            <BaseCover src={book.coverUrl} title={book.title} key={book.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BookList
