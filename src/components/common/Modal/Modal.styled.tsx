import styled, { css } from 'styled-components'
import { breakpoints } from 'theme/theme'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.backdrop};
  backdrop-filter: blur(2px);
  overflow-y: auto;

  @media (width >= 768px) {
    padding: 32px;
  }
`

export const ModalWrapper = styled.div(() => {
  const { desktop, tablet } = breakpoints

  return css`
    position: relative;
    margin: auto;
    padding: 52px 16px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.background};
    overflow: hidden;

    @media (width >= ${tablet}) {
      padding: 44px;
    }

    @media (width >= ${desktop}) {
      padding: 60px;
    }
  `
})

export const CloseBtn = styled.button(() => {
  const { desktop, tablet } = breakpoints

  return css`
    position: absolute;
    top: 20px;
    right: 16px;

    width: 24px;
    height: 24px;
    padding: 0;

    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.secondaryText};

    transition: color 100ms linear;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      cursor: pointer;
    }

    @media (width >= ${tablet}) {
      top: 24px;
      right: 24px;
    }

    @media (width >= ${desktop}) {
      top: 40px;
      right: 40px;
    }
  `
})
