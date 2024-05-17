import styled, { css } from 'styled-components'
import { NavLink as NavLinkRouter } from 'react-router-dom'
import Container from 'components/common/Container'
import { breakpoints, typography } from 'theme/theme'

const { tablet } = breakpoints

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

export const LogoWrapper = styled(NavLinkRouter)(({ theme }) => {
  return css`
    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;

    color: ${theme.colors.logoText};

    font-size: ${typography.tablet.lg}px;
    text-decoration: none;

    svg {
      height: 32px;
      width: 32px;

      @media (width >= ${tablet}) {
        height: 48px;
        width: 48px;
      }
    }

    span {
      display: none;

      @media (width >= ${tablet}) {
        display: inline;
      }
    }
  `
})

export const MenuBtn = styled.button`
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

export const Nav = styled.nav`
  display: none;

  @media (width >= ${tablet}) {
    display: flex;
  }
`

export const NavList = styled.ul`
  display: flex;
  gap: 32px;
`

export const NavLink = styled(NavLinkRouter)`
  position: relative;

  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;

  color: ${({ theme }) => theme.colors.grey};

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.grey};
    height: 2px;
    width: 100%;
    transform: scaleX(0);

    transition: transform 100ms linear;
  }

  &:hover,
  &:focus {
    &::after {
      transform: scaleX(1);
    }
  }

  &.active {
    color: ${({ theme }) => theme.colors.accent};

    &::after {
      background-color: ${({ theme }) => theme.colors.accent};
    }

    &:hover,
    &:focus {
      &::after {
        background-color: ${({ theme }) => theme.colors.accent};
      }
    }
  }
`

export const AuthLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;

  color: ${({ theme }) => theme.colors.grey};

  @media (width < ${tablet}) {
    display: none;
  }
`

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`
