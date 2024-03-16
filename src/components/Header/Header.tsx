import React, { FC, useState } from 'react'
import {
  HeaderWrapper,
  MenuBtn,
  LogoWrapper,
  NavList,
  NavLink,
} from './Header.styled'
import { HeaderProps } from './Header.types'
import ThemeSwitcher from 'components/ThemeSwitcher'
import NavMenu from 'components/NavMenu'
import Logo from 'icons/Logo'

const Header: FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <MenuBtn onClick={() => setIsOpen(true)}>Menu</MenuBtn>
      <nav>
        <NavList>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/library">My library</NavLink>
          </li>
        </NavList>
      </nav>
      <ThemeSwitcher />
      {isOpen && <NavMenu closeMenu={() => setIsOpen(false)} />}
    </HeaderWrapper>
  )
}

export default Header
