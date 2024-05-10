import styled, { css } from 'styled-components'
import { NavLink as NavLinkRouter } from 'react-router-dom'
import Container from 'components/common/Container'
import { breakpoints } from 'theme/theme'

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
`

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 15px;
  padding-bottom: 15px;
`

export const LogoWrapper = styled(NavLinkRouter)(() => {
  const { tablet } = breakpoints

  return css`
    width: 32px;
    height: 32px;

    cursor: pointer;

    @media (width >= ${tablet}) {
      width: 48px;
      height: 48px;
    }
  `
})

export const MenuBtn = styled.button(() => {
  const { tablet } = breakpoints

  return css`
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.grey};

    text-transform: uppercase;
    font-weight: 500;

    cursor: pointer;

    @media (width >= ${tablet}) {
      display: none;
    }
  `
})

export const Nav = styled.nav(() => {
  const { tablet } = breakpoints

  return css`
    display: none;

    @media (width >= ${tablet}) {
      display: flex;
    }
  `
})

export const NavList = styled.ul`
  display: flex;
  gap: 32px;
`

export const NavLink = styled(NavLinkRouter)`
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;

  color: ${({ theme }) => theme.colors.grey};

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`
