import { FC, MouseEvent, useEffect } from 'react'
import { NavMenuWrapper, Backdrop, AuthLink, NavLink } from './NavMenu.styled'
import { NavMenuProps } from './NavMenu.types'
import Logo from 'icons/Logo'
import useUser from 'hooks/useUser'
import useOutsideClick from 'hooks/useOutsideClick'

const NavMenu: FC<NavMenuProps> = ({ closeMenu, handleAuthClick }) => {
  const ref = useOutsideClick(closeMenu)
  const { isLoggedIn } = useUser()

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])

  return (
    <Backdrop>
      <NavMenuWrapper ref={ref}>
        <Logo width={32} height={32} />
        <nav>
          <ul>
            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog?page=1" onClick={closeMenu}>
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink to="/library?page=1" onClick={closeMenu}>
                My library
              </NavLink>
            </li>
          </ul>
        </nav>
        <AuthLink onClick={handleAuthClick} as="a">
          {isLoggedIn ? 'Sign Out' : 'Sign In'}
        </AuthLink>
      </NavMenuWrapper>
    </Backdrop>
  )
}

export default NavMenu
