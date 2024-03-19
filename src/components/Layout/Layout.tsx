import { FC } from 'react'
import { LayoutWrapper } from './Layout.styled'
import { LayoutProps } from './Layout.types'
import Header from 'components/Header'
import { Outlet } from 'react-router-dom'
import Footer from 'components/Footer'

const Layout: FC<LayoutProps> = () => {
  return (
    <LayoutWrapper>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </LayoutWrapper>
  )
}

export default Layout
