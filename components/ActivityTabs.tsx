import BaseTab from '@/components/common/BaseTab'

const ActivityTabs = () => {
  return (
    <div className="mb-4 h-16 w-[calc(100%_+_1.25rem)] overflow-hidden">
      <div className="box-content h-full overflow-x-auto pb-4">
        <nav className="relative flex min-w-fit justify-between gap-x-8 pr-5 text-xl font-semibold">
          <BaseTab label="Recent Activity" isActive />
          <BaseTab label="Reviews" counter={4} />
          <BaseTab label="Quotes" counter={13} />
          <BaseTab label="Lists" counter={2} />

          <hr className="absolute bottom-0 left-0 -z-10 h-1 w-[calc(100%_-_1.25rem)] bg-gray-600" />
        </nav>
      </div>
    </div>
  )
}

export default ActivityTabs
