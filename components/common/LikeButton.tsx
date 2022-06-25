import HeartEmptyIcon from '@/assets/icons/heart-empty.svg'
import HeartFullIcon from '@/assets/icons/heart-full.svg'
import { useState } from 'react'

const LikeButton = () => {
  const [isLiked, toggleLike] = useState(false)
  return (
    <button onClick={() => toggleLike(!isLiked)}>
      {isLiked ? <HeartFullIcon /> : <HeartEmptyIcon />}
    </button>
  )
}

export default LikeButton
