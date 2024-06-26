import styled, { css } from 'styled-components'
import { ButtonProps } from './Button.types'
import { breakpoints, gradients, staticColors, typography } from 'theme/theme'

const borderedStyles = css`
  padding: 1px;

  transition: all 100ms linear;
  transition-property: background-color, color, scale;

  &:hover,
  &:focus {
    span {
      color: ${staticColors.darkBg};

      background-color: transparent;
    }
  }

  span {
    display: block;
    padding: 12px 24px;
    color: ${({ theme }) => theme.colors.secondaryText};
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 74px;

    transition: inherit;
  }
`

const colorlessStyles = css`
  background: transparent;
  border: 1px solid ${staticColors.white};

  transition: all 100ms linear;
  transition-property: background-color, color, scale;

  &:hover,
  &:focus {
    background-color: ${staticColors.white};

    span {
      color: ${({ theme }) => theme.colors.accent};
      transition: inherit;
    }
  }

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

      transition: scale 100ms linear;

      &:hover,
      &:focus {
        scale: 1.03;
      }

      ${$isBordered && borderedStyles}
      ${$isColorless && colorlessStyles}


      &:disabled {
        opacity: 0.5;

        cursor: default;
      }

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
