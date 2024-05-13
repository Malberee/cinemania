import { FC, MouseEvent } from 'react'
import { NavMenuWrapper, Backdrop, AuthLink, NavLink } from './NavMenu.styled'
import { NavMenuProps } from './NavMenu.types'
import Logo from 'icons/Logo'
import useUser from 'hooks/useUser'

const NavMenu: FC<NavMenuProps> = ({ closeMenu, handleAuthClick }) => {
  const { isLoggedIn } = useUser()

  const handleBackdropClick = (e: MouseEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget) return

    closeMenu()
  }

  return (
    <Backdrop onClick={handleBackdropClick}>
      <NavMenuWrapper>
        <Logo width={32} height={32} />
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/catalog">Catalog</NavLink>
            </li>
            <li>
              <NavLink to="/library">My library</NavLink>
            </li>
            <li>
              <AuthLink onClick={handleAuthClick} as="a">
                {isLoggedIn ? 'Sign Out' : 'Sign In'}
              </AuthLink>
            </li>
          </ul>
        </nav>
      </NavMenuWrapper>
    </Backdrop>
  )
}

export default NavMenu
