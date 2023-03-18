import { useEffect, useState } from 'react'

import { notifications as notificationFixture } from '@/database/fixtures/notifications'
import { extraNotification } from '@/database/fixtures/notifications'
import { Notification } from '@/lib/models/system'

export const useNotifications = () => {
  const [notifications, setNotifications] =
    useState<Notification[]>(notificationFixture)

  const handleMarkAsRead = (id: string) => {
    const notificationIndex = notifications.findIndex(
      (notification) => notification.id === id,
    )

    if (notificationIndex !== null) {
      const notificationsCopy = [...notifications]

      notificationsCopy[notificationIndex].isRead = true
      setNotifications(notificationsCopy)
    }
  }

  const playAudio = () => {
    const audio = new Audio(
      'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/coolreads%2Fsounds%2Fnotification.mp3?alt=media',
    )
    audio.play()
  }

  const injectNewNotification = () => {
    setTimeout(() => {
      setNotifications([extraNotification, ...notifications])
      playAudio()
    }, 2000)
  }

  useEffect(
    () =>
      document.body.addEventListener('click', injectNewNotification, {
        capture: true,
        once: true,
      }),
    [],
  )

  return { notifications, handleMarkAsRead }
}
