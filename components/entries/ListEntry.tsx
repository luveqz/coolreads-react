import EntryHeader from '@/components/common/EntryHeader'
import EntryFooter from '@/components/common/EntryFooter'
import BaseAvatar from '@/components/common/BaseAvatar'
import BookList from '@/components/common/BookList'
import BooksIcon from '@/assets/icons/books.svg'

type Props = {
  user: {
    id: number
    fullName: string
    username: string
    avatarUrl: string
  }
  books: {
    id: number
    title: string
    authors: string[]
    coverUrl: string
  }[]
  name: string
  meta: {
    publishedAt: string
    comments: string[]
    likes: number
  }
}

const ListEntry = ({ user, books, name, meta }: Props) => {
  return (
    <article className="gap-x-3 md:flex">
      <div className="hidden md:block">
        <BaseAvatar src={user.avatarUrl} variant="medium" />
      </div>

      <div className="grow">
        {/* Header (Desktop) */}
        <EntryHeader publishedAt={meta.publishedAt}>
          <p>
            <span className="font-bold">{user.fullName}</span> shared a new list
          </p>
        </EntryHeader>

        {/* Card */}
        <section className="rounded bg-gray-400 py-4 px-5">
          {/* Header (Mobile) */}
          <div className="md:hidden">
            <div className="flex items-center gap-x-2 ">
              <BaseAvatar src={user.avatarUrl} variant="medium" />
              <p className="font-bold">{user.fullName}</p>
              <BooksIcon className="text-gray-300" />
            </div>
            <hr className="mt-2 mb-4 h-0.5 bg-gray-500" />
          </div>

          {/* Content */}
          <section>
            <p className="mb-3 text-lg font-bold">{name}</p>
            <BookList books={books} />
          </section>

          <EntryFooter likes={meta.likes} comments={meta.comments} />
        </section>
      </div>
    </article>
  )
}

export default ListEntry
