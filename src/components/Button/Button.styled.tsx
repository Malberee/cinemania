import styled, { css } from 'styled-components'
import { ButtonProps } from './Button.types'

const borderedStyles = css`
  padding: 1px;

  span {
    display: block;
    padding: 12px 24px;
    color: ${({ theme }) => theme.colors.secondaryText};
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 74px;
  }
`

const colorlessStyles = css`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.staticColors.white};
  span {
    background-color: transparent;
  }
`

export const ButtonWrapper = styled.button<Omit<ButtonProps, 'children'>>(
  ({ $isIconOnly, $isBordered, $isColorless, theme }) => {
    const { desktop, tablet } = theme.media

    return css`
      position: relative;

      padding: ${$isIconOnly ? '13px' : '12px 24px'};

      font-size: ${theme.text.mobile.sm}px;
      font-weight: 500;

      background: ${theme.gradients.linearGradientUp};
      border: none;
      border-radius: 74px;

      color: ${$isIconOnly ? theme.colors.text : theme.staticColors.darkBg};

      cursor: pointer;

      ${$isBordered && borderedStyles}
      ${$isColorless && colorlessStyles}

      @media (width >= ${tablet}) {
        font-size: ${theme.text.tablet.sm}px;
        line-height: 20px;
      }

      @media (width >= ${desktop}) {
        font-size: ${theme.text.desktop.sm}px;
        line-height: 24px;
      }
    `
  }
)
