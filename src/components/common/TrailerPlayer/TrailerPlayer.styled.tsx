import styled, { css } from 'styled-components'
import { breakpoints, typography } from 'theme/theme'

const { tablet, desktop } = breakpoints

export const TrailerPlayerWrapper = styled.div`
  .player {
    border-radius: 16px;

    @media (width < ${tablet}) {
      width: 100%;
    }
  }
`

export const ErrorMessage = styled.p(({ theme }) => {
  return css`
    padding: 16px;

    color: ${theme.colors.text};

    font-size: ${typography.mobile.lg}px;
    text-align: center;

    @media (width >= ${tablet}) {
      font-size: ${typography.tablet.lg}px;
    }

    @media (width >= ${desktop}) {
      font-size: 32px;
    }
  `
})
