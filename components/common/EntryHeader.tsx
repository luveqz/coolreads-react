import { ReactNode } from 'react'

type Props = {
  publishedAt: string
  children: ReactNode | ReactNode[]
}

const EntryHeader = ({ publishedAt, children }: Props) => {
  return (
    <header className="mb-2 flex justify-end leading-none md:justify-between">
      <div className="hidden items-end gap-x-3 md:flex">{children}</div>
      <time className="flex items-end text-gray-300">{publishedAt}</time>
    </header>
  )
}

export default EntryHeader
