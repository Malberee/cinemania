import styled, { css } from 'styled-components'
import { ButtonProps } from './Button.types'
import { breakpoints, gradients, staticColors, typography } from 'theme/theme'

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
  border: 1px solid ${staticColors.white};

  span {
    color: ${staticColors.white};
    background-color: transparent;
  }
`

export const ButtonWrapper = styled.button<Omit<ButtonProps, 'children'>>(
  ({ $isIconOnly, $isBordered, $isColorless, theme }) => {
    const { desktop, tablet } = breakpoints

    return css`
      position: relative;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: ${$isIconOnly ? '11px' : '12px 24px'};

      font-size: ${typography.mobile.sm}px;
      font-weight: 500;

      background: ${gradients.linearGradientUp};
      border: none;
      border-radius: 74px;

      color: ${$isIconOnly ? theme.colors.text : staticColors.darkBg};

      cursor: pointer;

      ${$isBordered && borderedStyles}
      ${$isColorless && colorlessStyles}

      @media (width >= ${tablet}) {
        font-size: ${typography.tablet.sm}px;
        line-height: 20px;
      }

      @media (width >= ${desktop}) {
        font-size: ${typography.desktop.sm}px;
        line-height: 24px;
      }
    `
  }
)
