import { FC, useState } from 'react'
import {
  HeaderWrapper,
  MenuBtn,
  LogoWrapper,
  Nav,
  NavList,
  NavLink,
  HeaderContainer,
} from './Header.styled'
import { HeaderProps } from './Header.types'
import ThemeSwitcher from 'components/ThemeSwitcher'
import NavMenu from 'components/NavMenu'
import Logo from 'icons/Logo'

const Header: FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoWrapper to="/">
          <Logo />
        </LogoWrapper>
        <MenuBtn onClick={() => setIsOpen(true)}>Menu</MenuBtn>
        <Nav>
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
        </Nav>
        <ThemeSwitcher />
      </HeaderContainer>
      {isOpen && <NavMenu closeMenu={() => setIsOpen(false)} />}
    </HeaderWrapper>
  )
}

export default Header
