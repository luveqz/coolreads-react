import { Placement } from '@popperjs/core'
import { useState } from 'react'
import { usePopper } from 'react-popper'

export const usePopperPopover = (
  arrowPlacement: Placement = 'top-end',
  arrowHorizontalOffset: number = 16,
) => {
  /*--------------------------------------------
    DOM References
  --------------------------------------------*/
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null)

  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null,
  )

  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null)

  /*--------------------------------------------
    Popper Config
  --------------------------------------------*/
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: arrowPlacement,
    modifiers: [
      { name: 'arrow', options: { element: arrowElement, padding: 20 } },
      {
        name: 'offset',
        options: {
          offset: [arrowHorizontalOffset, 8],
        },
      },
    ],
  })

  return {
    setReferenceElement,
    setPopperElement,
    setArrowElement,
    styles,
    attributes,
  }
}
