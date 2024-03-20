import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const WeeklyTrendsWrapper = styled.div(({ theme }) => {
  const { desktop, tablet } = theme.media

  return css`
    padding: 40px 0 16px 0;

    @media (width >= ${tablet}) {
      padding: 52px 0 22px 0;
    }

    @media (width >= ${desktop}) {
      padding: 80px 0 30px 0;
    }
  `
})

export const TrendsHeader = styled.div(({ theme }) => {
  const { desktop, tablet } = theme.media

  return css`
    display: flex;
    justify-content: space-between;

    margin-bottom: 24px;

    font-size: ${({ theme }) => theme.text.mobile.md};
    font-weight: 500;

    @media (width >= ${tablet}) {
      font-size: ${({ theme }) => theme.text.tablet.lg}px;
    }

    @media (width >= ${desktop}) {
      font-size: ${({ theme }) => theme.text.desktop.lg}px;
    }
  `
})

export const TrendsTitle = styled.h2`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
`

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.accent};
`

export const TrendsList = styled.ul(({ theme }) => {
  const { tablet } = theme.media

  return css`
    display: flex;
    gap: 20px;

    @media (width <= ${tablet}) {
      overflow-y: auto;
    }
  `
})
