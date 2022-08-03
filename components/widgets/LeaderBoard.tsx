import WidgetHeader from '@/components/common/WidgetHeader'
import BaseAvatar from '@/components/common/BaseAvatar'
import BaseBadge from '@/components/common/BaseBadge'
import BaseButton from '@/components/common/BaseButton'
import BaseInput from '@/components/common/BaseInput'
import BaseLink from '@/components/common/BaseLink'
import { leaderboard } from '@/database/fixtures/leaderboard'

const LeaderBoard = () => {
  return (
    <section>
      <WidgetHeader title="20 Reviews Challenge" subtitle="Leaderboard" />

      <section className="my-4 flex flex-col gap-y-4 px-6">
        {leaderboard.map((user) => (
          <BaseLink href="#" key={user.id}>
            <article className="flex items-start gap-x-2.5">
              <BaseAvatar src={user.avatarUrl} variant="medium" />

              <div className="grow">
                <p className="font-bold leading-none line-clamp-1">
                  {user.fullName}
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
