import styled, { css } from 'styled-components'
import { ButtonProps } from './Button.types'
import { fontSizes } from './Button.consts'

export const ButtonWrapper = styled.button<Omit<ButtonProps, 'children'>>(
  ({ $isBordered, $isIconOnly, size = 'md', theme }) => {
    return css`
      position: relative;

      display: flex;

      padding: ${$isBordered ? '1px' : $isIconOnly ? '13px' : '12px 24px'};

      background: ${theme.gradients.linearGradientUp};
      border: none;
      border-radius: 74px;

      font-size: ${fontSizes[size]}px;
      font-weight: 500;

      color: ${$isIconOnly
        ? theme.colors.text
        : $isBordered
        ? theme.colors.secondaryText
        : theme.staticColors.darkBg};

      cursor: pointer;

      ${$isBordered &&
      css`
        span {
          display: block;
          padding: 12px 24px;
          background-color: ${theme.colors.background};
          border-radius: 74px;
        }
      `}
    `
  }
)
