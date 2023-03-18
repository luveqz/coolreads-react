import { UserProfile } from './auth'

export type Notification = {
  id: string
  subject: Omit<UserProfile, 'bio'>
  predicate: string
  timestamp: string
  isRead?: boolean
}
