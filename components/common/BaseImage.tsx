import { useEffect, useState } from 'react'

type Props = {
  src: string
  alt: string
}

const BaseImage = ({ src, alt }: Props) => {
  const [opacity, setOpacity] = useState('opacity-0')
  let imageEl: HTMLImageElement | null = null

  const imageRefCallback = (image: HTMLImageElement | null) => {
    if (image) {
      imageEl = image
      if (image.complete) {
        setOpacity('opacity-100')
      }
    }
  }

  useEffect(() => imageRefCallback(imageEl), [])

  return (
    typeof window && (
      <img
        src={src}
        ref={imageEl}
        alt={alt}
        className={`${opacity} h-full w-full object-cover`}
        onError={() => setOpacity('opacity-0')}
        onLoad={() => setOpacity('opacity-100')}
      />
    )
  )
}

export default BaseImage
