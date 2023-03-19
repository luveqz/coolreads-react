import { ReactNode } from 'react'
import { Popover, Transition } from '@headlessui/react'

import { usePopperPopover } from '@/lib/hooks/popper'

type Props = {
  children: ReactNode | ReactNode[]
  message: string
}

const BaseTooltip = ({ children, message }: Props) => {
  const {
    setReferenceElement,
    setPopperElement,
    setArrowElement,
    styles,
    attributes,
  } = usePopperPopover('top', 0)

  return (
    <div>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button ref={setReferenceElement}>
              {children}
            </Popover.Button>

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
                <section className="flex w-56 flex-col gap-3 rounded bg-gray-50 px-4 py-2 text-gray-500">
                  {message}
                </section>

                <div
                  ref={setArrowElement}
                  style={styles.arrow}
                  className="-top-[8px] h-0 w-0 border-[10px] border-t-0 border-b-[10px] border-transparent border-b-gray-50"
                />
              </Transition>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </div>
  )
}

export default BaseTooltip
