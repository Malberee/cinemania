import Container from 'components/Container'
import styled, { css } from 'styled-components'

export const SearchBarWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  & > div:nth-child(1) {
    flex: 2;
  }
`

export const Input = styled.input(({ theme }) => {
  return css`
    flex: 1;
    padding: 12px 20px;

    font-size: ${theme.text.mobile.md}px;
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
      font-size: ${theme.text.mobile.md}px;
      font-weight: 500;
      color: ${theme.colors.grey};
    }
  `
})
