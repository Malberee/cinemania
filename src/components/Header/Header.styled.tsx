import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 20px 8px;

  background-color: ${({ theme }) => theme.colors.white};
`

export const LogoWrapper = styled.div`
  width: 32px;
  height: 32px;

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
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
