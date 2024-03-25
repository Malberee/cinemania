import Container from 'components/Container'
import styled, { css } from 'styled-components'

export const MovieListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 28px;
`

export const MovieListContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NotFoundText = styled.p(({ theme }) => {
  const { desktop, tablet } = theme.media

  return css`
    text-align: center;
    line-height: 28px;
    font-size: ${theme.text.mobile.lg}px;
    color: ${theme.colors.text};

    @media (width >= ${tablet}) {
      line-height: 32px;
      font-size: ${theme.text.tablet.lg}px;
    }

    @media (width >= ${desktop}) {
      line-height: 36px;
      font-size: 32px;
    }
  `
})
