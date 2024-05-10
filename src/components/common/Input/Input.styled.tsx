import styled, { css } from 'styled-components'
import { typography } from 'theme/theme'

export const InputWrapper = styled.div`
  position: relative;
`

export const InputStyles = styled.input<{
  $hasStartContent: boolean
  $hasEndContent: boolean
}>(({ theme, $hasStartContent, $hasEndContent }) => {
  return css`
    width: 100%;
    padding: 11px 0;
    padding-left: ${$hasStartContent ? '40px' : '20px'};
    padding-right: ${$hasEndContent ? '40px' : '20px'};

    font-size: ${typography.mobile.md}px;
    font-weight: 500;

    border-radius: 8px;
    border: 1px solid ${theme.colors.grey};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    color-scheme: ${theme.current};

    transition: border-color 100ms linear;

    &:focus {
      outline: none;
      border-color: ${theme.colors.accent};
    }

    &::placeholder {
      font-size: ${typography.mobile.md}px;
      font-weight: 500;
      color: ${theme.colors.grey};
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0px 40rem ${theme.colors.background} inset;
    }
  `
})

export const ContentWrapper = styled.div<{ $position: 'start' | 'end' }>(
  ({ theme, $position }) => {
    return css`
      position: absolute;
      top: 50%;
      ${$position === 'start' ? 'left: 10px' : 'right: 10px'};

      height: 24px;
      width: 24px;

      transform: translateY(-50%);
      color: ${theme.colors.grey};
    `
  }
)
