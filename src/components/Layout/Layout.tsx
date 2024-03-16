import React, { FC } from 'react'
import { LayoutWrapper } from './Layout.styled'
import { LayoutProps } from './Layout.types'
import Header from 'components/Header'
import { Outlet } from 'react-router-dom'

const Layout: FC<LayoutProps> = () => {
  return (
    <LayoutWrapper>
      <Header />
      <main>
        <Outlet />
      </main>
    </LayoutWrapper>
  )
}

export default Layout
