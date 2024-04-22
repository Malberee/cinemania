import Button from 'components/Button'
import Container from 'components/Container'
import styled, { css } from 'styled-components'
import { breakpoints, staticColors, typography } from 'theme/theme'

export const SearchBarContainer = styled(Container)(() => {
  const { tablet } = breakpoints

  return css`
    display: flex;
    justify-content: center;

    margin-top: 40px;
    margin-bottom: 16px;

    @media (width >= ${tablet}) {
      margin-top: 60px;
      margin-bottom: 32px;
    }
  `
})

export const SearchBarWrapper = styled.div(() => {
  const { desktop } = breakpoints

  return css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;

    max-width: 510px;

    & > div:nth-child(1) {
      flex: 2;
    }

    @media (width >= ${desktop}) {
      /* max-width: 600px; */
    }
  `
})

export const Input = styled.input(({ theme }) => {
  const { tablet } = breakpoints

  return css`
    flex: 4;
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

    @media (width >= ${tablet}) {
      order: -1;
      padding: 13px 20px;
    }
  `
})

export const SearchButton = styled(Button)(({ theme }) => {
  const { tablet } = breakpoints

  return css`
    padding: 11px;
    color: ${staticColors.white};

    @media (width >= ${tablet}) {
      padding: 13px;
    }
  `
})
