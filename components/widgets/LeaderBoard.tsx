import BaseAvatar from '@/components/common/BaseAvatar'
import BaseBadge from '@/components/common/BaseBadge'
import BaseButton from '@/components/common/BaseButton'
import BaseInput from '@/components/common/BaseInput'
import BaseLink from '@/components/common/BaseLink'
import { leaderboard } from '@/data'

const LeaderBoard = () => {
  return (
    <section>
      <header className="rounded bg-gray-600 py-3 px-6">
        <p className="text-lg leading-7">20 Reviews Challenge</p>
        <p className="text-base font-bold leading-5">Leaderboard</p>
      </header>

      <section className="my-4 flex flex-col gap-y-4 px-6">
        {leaderboard.map((user) => (
          <BaseLink href="#" key={user.id}>
            <article className="flex items-start gap-x-2.5">
              <BaseAvatar src={user.avatarUrl} variant="medium" />

              <div className="grow">
                <p className="font-bold leading-none line-clamp-1">
                  {user.full_name}
                </p>
                <p className="mt-0.5 block w-fit leading-none text-gray-200">
                  @{user.username}
                </p>
              </div>

              <BaseBadge>{user.points}</BaseBadge>
            </article>
          </BaseLink>
        ))}
      </section>

      <section className="flex gap-x-2.5 px-6">
        <BaseInput placeholder="Find users..." />
        <BaseButton variant="secondary">Find</BaseButton>
      </section>
    </section>
  )
}

export default LeaderBoard
