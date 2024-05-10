import Container from 'components/common/Container'
import styled, { css } from 'styled-components'
import { breakpoints, typography } from 'theme/theme'

export const MovieListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 28px;
`

export const MovieListContainer = styled(Container)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NotFoundText = styled.p(({ theme }) => {
  const { desktop, tablet } = breakpoints

  return css`
    text-align: center;
    line-height: 28px;
    font-size: ${typography.mobile.lg}px;
    color: ${theme.colors.text};

    @media (width >= ${tablet}) {
      line-height: 32px;
      font-size: ${typography.tablet.lg}px;
    }

    @media (width >= ${desktop}) {
      line-height: 36px;
      font-size: 32px;
    }
  `
})
