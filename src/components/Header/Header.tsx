import { FC, useState } from 'react'
import {
  HeaderWrapper,
  MenuBtn,
  LogoWrapper,
  Nav,
  NavList,
  NavLink,
  HeaderContainer,
  AuthLink,
  HeaderInner,
} from './Header.styled'
import { HeaderProps } from './Header.types'
import ThemeSwitcher from 'components/ThemeSwitcher'
import NavMenu from 'components/NavMenu'
import Logo from 'icons/Logo'
import Modal from 'components/common/Modal'
import AuthForm from 'components/AuthForm'
import useUser from 'hooks/useUser'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { userOperations } from 'store/user'
import toast from 'react-hot-toast'

const Header: FC<HeaderProps> = () => {
  const [authModalIsOpen, setAuthModalIsOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { isLoggedIn } = useUser()

  const dispatch = useAppDispatch()

  const handleAuthClick = () => {
    if (isLoggedIn) {
      toast.promise(dispatch(userOperations.logOut()).unwrap(), {
        loading: 'Loading',
        success: 'Logged out',
        error: 'Error',
      })

      return
    }

    setAuthModalIsOpen(true)
  }

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
              <NavLink to="/catalog?page=1">Catalog</NavLink>
            </li>
            <li>
              <NavLink to="/library?page=1">My library</NavLink>
            </li>
          </NavList>
        </Nav>
        <HeaderInner>
          <AuthLink onClick={handleAuthClick}>
            {isLoggedIn ? 'Sign Out' : 'Sign In'}
          </AuthLink>
          <ThemeSwitcher />
        </HeaderInner>
      </HeaderContainer>
      {isOpen && (
        <NavMenu
          closeMenu={() => setIsOpen(false)}
          handleAuthClick={handleAuthClick}
        />
      )}
      {authModalIsOpen && !isLoggedIn && (
        <Modal onClose={() => setAuthModalIsOpen(false)}>
          <AuthForm closeModal={() => setAuthModalIsOpen(false)} />
        </Modal>
      )}
    </HeaderWrapper>
  )
}

export default Header
