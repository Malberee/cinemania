import styled, { css, useTheme } from 'styled-components'
import { ButtonProps } from './Button.types'
import { fontSizes } from './Button.consts'

export const ButtonWrapper = styled.button<Omit<ButtonProps, 'children'>>(
  ({ isBordered, size = 'md' }) => {
    return css`
      position: relative;
      display: inline-block;
      padding: ${isBordered ? '1px' : '12px 24px'};
      background: ${(props) => props.theme.gradients.linearGradientUp};
      border: none;
      font-size: ${fontSizes[size]}px;
      font-weight: 500;
      border-radius: 74px;

      ${isBordered &&
      css`
        span {
          display: block;
          padding: 12px 24px;
          background-color: ${(props) => props.theme.colors.light.background};
          border-radius: 74px;
          color: ${(props) => props.theme.colors.light.secondaryText};
        }
      `}
    `
  }
)
