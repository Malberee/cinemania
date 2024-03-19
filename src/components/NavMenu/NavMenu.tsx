import { FC, MouseEvent } from 'react'
import { NavMenuWrapper, Backdrop, NavList, NavLink } from './NavMenu.styled'
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
            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" onClick={closeMenu}>
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink to="/library" onClick={closeMenu}>
                My library
              </NavLink>
            </li>
          </NavList>
        </nav>
      </NavMenuWrapper>
    </Backdrop>
  )
}

export default NavMenu
