import styled, { css } from 'styled-components'
import { typography } from 'theme/theme'

export const InputStyles = styled.input(({ theme }) => {
  return css`
    padding: 11px 20px;

    font-size: ${typography.mobile.md}px;
    font-weight: 500;

    border-radius: 8px;
    border: 1px solid ${theme.colors.grey};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};

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
  `
})
