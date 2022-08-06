import { createContext, ReactNode, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getUserByUsername } from '@/database/graphql/api'
import { User } from '@/.output/graphql'

const AuthContext = createContext<User | undefined>(undefined)

type Props = {
  children: ReactNode | ReactNode[]
}

const AuthProvider = ({ children }: Props) => {
  const { data } = useQuery(['user'], () =>
    getUserByUsername({ username: 'goldenfish' }),
  )
  let user
  if (data?.user) user = data.user
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
