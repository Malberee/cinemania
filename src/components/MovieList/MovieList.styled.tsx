import Container from 'components/common/Container'
import styled, { css } from 'styled-components'
import { breakpoints, typography } from 'theme/theme'

const { desktop, tablet } = breakpoints

export const MovieListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 28px;

  margin-top: 16px;

  @media (width >= ${tablet}) {
    margin-top: 32px;
  }
`

export const MovieListContainer = styled(Container)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NotFoundText = styled.p(({ theme }) => {
  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    line-height: 28px;
    font-size: ${typography.mobile.lg}px;
    color: ${theme.colors.text};

    @media (width >= ${tablet}) {
      line-height: 32px;
      font-size: ${typography.tablet.lg}px;
    }

    @media (width >= ${desktop}) {
      padding: 120px 0 20px 0;
      line-height: 36px;
      font-size: 32px;
    }
  `
})
