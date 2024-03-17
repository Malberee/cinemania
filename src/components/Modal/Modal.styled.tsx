import styled, { css } from 'styled-components'

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.backdrop};
`

export const ModalWrapper = styled.div(({ theme }) => {
  const { desktop, tablet } = theme.media

  return css`
    position: relative;
    padding: 52px 16px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.background};

    @media (${tablet} <= width) {
      padding: 44px;
    }

    @media (${desktop} <= width) {
      padding: 60px;
    }
  `
})

export const CloseBtn = styled.button(({ theme }) => {
  const { desktop, tablet } = theme.media

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

    @media (${tablet} <= width) {
      top: 24px;
      right: 24px;
    }

    @media (${desktop} <= width) {
      top: 40px;
      right: 40px;
    }
  `
})
