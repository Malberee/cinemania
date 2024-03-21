import Container from 'components/Container'
import styled, { css } from 'styled-components'

export const SearchBarWrapper = styled(Container)`
  display: flex;
  gap: 12px;
`

export const Input = styled.input(({ theme }) => {
  return css`
    padding: 12px 20px;

    font-size: ${theme.text.mobile.md}px;
    font-weight: 500;

    border-radius: 8px;
    border: 1px solid ${theme.colors.grey};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};

    &::placeholder {
      font-size: ${theme.text.mobile.md}px;
      font-weight: 500;
      color: ${theme.colors.grey};
    }
  `
})
