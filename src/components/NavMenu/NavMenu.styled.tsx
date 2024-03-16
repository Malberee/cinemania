import styled from 'styled-components'

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.backdrop};
`

export const NavMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  height: 100%;
  width: 204px;
  padding: 8px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.secondaryText};
  border-radius: 0 8px 8px 0;
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
`

export const NavLink = styled.a`
  display: block;
  text-transform: uppercase;
  padding: 12px;
  cursor: pointer;
`