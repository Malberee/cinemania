import styled, { css, useTheme } from 'styled-components'

interface ButtonWrapperProps {
  isBordered?: boolean
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>(
  ({ isBordered }) => {
    const theme = useTheme()

    return css`
      position: relative;
      display: inline-block;
      padding: ${isBordered ? '1px' : '12px 24px'};
      background: ${(props) => props.theme.gradients.linearGradientUp};
      border: none;
      font-size: 18px;
      border-radius: 74px;

      ${isBordered &&
      css`
        span {
          display: block;
          padding: 12px 24px;
          background-color: #fff;
          border-radius: 74px;
        }
      `}
    `
  }
)
