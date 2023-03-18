import { Popover, Transition } from '@headlessui/react'
import { ReactNode, useState } from 'react'
import { usePopper } from 'react-popper'

import { usePopperPopover } from '@/lib/hooks/popper'
import NotificationItem from '@/components/common/NotificationItem'
import { leaderboard } from '@/database/fixtures/leaderboard'

type Props = {
  children: ReactNode | ReactNode[]
}

const NotificationPopover = ({ children }: Props) => {
  const {
    setReferenceElement,
    setPopperElement,
    setArrowElement,
    styles,
    attributes,
  } = usePopperPopover()

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button ref={setReferenceElement}>{children}</Popover.Button>

          <Popover.Panel
            static
            className="relative z-10"
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <section className="min-w-[300px]">
                <header className="rounded-t bg-gray-200 px-4 py-1">
                  Notifications
                </header>

                <section className="flex flex-col gap-3 rounded-b bg-gray-50 px-4 py-2">
                  <NotificationItem
                    avatarUrl={leaderboard[1].avatarUrl}
                    action="commented on your post"
                    timestamp="48m ago"
                  />

                  <NotificationItem
                    avatarUrl={leaderboard[2].avatarUrl}
                    action="Felipe Caulfield starred your book list"
                    timestamp="1h ago"
                    isRead
                  />
                </section>

                <div
                  ref={setArrowElement}
                  style={styles.arrow}
                  className="-top-[8px] h-0 w-0 border-[10px] border-t-0 border-b-[10px] border-transparent border-b-gray-200"
                />
              </section>
            </Transition>
          </Popover.Panel>
        </>
      )}
    </Popover>
  )
}

export default NotificationPopover
