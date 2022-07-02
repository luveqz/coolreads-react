import BaseButton from '@/components/common/BaseButton'
import LikeButton from '@/components/common/LikeButton'

type Props = {
  likes: number
  comments: string[]
}

const EntryFooter = ({ likes, comments }: Props) => {
  return (
    <section className="mt-3 flex justify-between">
      <div className="flex items-center gap-x-1">
        <LikeButton />
        {likes || ''}
      </div>

      <div className="flex items-center gap-x-4">
        {comments.length ? (
          <a className="underline underline-offset-2" href="#">
            View {comments.length} comments
          </a>
        ) : (
          ''
        )}
        <div className="hidden md:block">
          <BaseButton variant="tertiary">Reply</BaseButton>
        </div>
      </div>
    </section>
  )
}

export default EntryFooter
