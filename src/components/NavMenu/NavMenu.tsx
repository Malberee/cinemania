import React, { FC, MouseEvent } from 'react'
import { NavMenuWrapper, Backdrop, NavList, NavItem } from './NavMenu.styled'
import { NavMenuProps } from './NavMenu.types'
import Logo from 'icons/Logo'

const NavMenu: FC<NavMenuProps> = ({ closeMenu }) => {
  const handleBackdropClick = (e: MouseEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget) return

    closeMenu()
  }

  return (
    <Backdrop onClick={handleBackdropClick}>
      <NavMenuWrapper>
        <Logo width={32} height={32} />
        <nav>
          <NavList>
            <NavItem>
              <a>Home</a>
            </NavItem>
            <NavItem>
              <a>Catalog</a>
            </NavItem>
            <NavItem>
              <a>My library</a>
            </NavItem>
          </NavList>
        </nav>
      </NavMenuWrapper>
    </Backdrop>
  )
}

export default NavMenu
