import React, { FC, useState } from 'react'
import { HeaderWrapper, MenuBtn, LogoWrapper } from './Header.styled'
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
      <ThemeSwitcher />
      {isOpen && <NavMenu closeMenu={() => setIsOpen(false)} />}
    </HeaderWrapper>
  )
}

export default Header
