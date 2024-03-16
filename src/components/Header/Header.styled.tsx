import styled from 'styled-components'
import { NavLink as NavLinkRouter } from 'react-router-dom'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 20px 8px;

  background-color: ${({ theme }) => theme.colors.white};
`

export const LogoWrapper = styled.a`
  width: 32px;
  height: 32px;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`

export const MenuBtn = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grey};

  text-transform: uppercase;
  font-weight: 500;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavList = styled.ul`
  display: flex;
  gap: 32px;

  @media screen and (max-width: 767px) {
    display: none;
  }
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
