import MobileNavigation from '@/components/mobile/MobileNavigation'
import TheNavigation from '@/components/TheNavigation'
import { ReactNode } from 'react'

type Props = { children: ReactNode }

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <TheNavigation className="hidden md:block" />
      <MobileNavigation className="block md:hidden" />

      {children}
    </div>
  )
}

export default MainLayout
