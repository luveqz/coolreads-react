import { useState } from 'react'
import { usePopper } from 'react-popper'

export const usePopperPopover = () => {
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
    placement: 'top-end',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement, padding: 20 } },
      {
        name: 'offset',
        options: {
          offset: [16, 8],
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
