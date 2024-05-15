import styled, { css } from 'styled-components'
import { breakpoints, typography } from 'theme/theme'

const { tablet, desktop } = breakpoints

export const MovieDetailsWrapper = styled.div`
  width: 264px;
  font-weight: 500;

  @media (width >= ${tablet}) {
    display: flex;
    gap: 16px;
    width: 660px;
  }

  @media (width >= ${desktop}) {
    width: 786px;
  }
`

export const MoviePoster = styled.img`
  height: 315px;
  margin-bottom: 22px;
  border-radius: 5px;
  object-fit: cover;

  @media (width >= ${tablet}) {
    height: 400px;
    min-width: 294px;
    margin-bottom: 0;
  }

  @media (width >= ${desktop}) {
    min-width: 375px;
    height: 478px;
  }
`

export const MovieTitle = styled.h2(({ theme }) => {
  return css`
    margin-bottom: 29px;
    font-size: ${typography.mobile.lg}px;
    color: ${theme.colors.text};

    @media (width >= ${tablet}) {
      margin-bottom: 26px;
      font-size: ${typography.tablet.lg}px;
    }
  `
})

export const MovieInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  font-size: ${typography.mobile.md}px;

  @media (width >= ${desktop}) {
    font-size: ${typography.desktop.sm}px;
  }
`

export const MovieInfoRow = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`

export const MovieInfoItem = styled.p<{ color: 'grey' | 'white' }>`
  flex: 1;
  color: ${({ theme, color }) =>
    theme.colors[color === 'white' ? 'text' : color]};
`

export const AboutTitle = styled.h3(({ theme }) => {
  return css`
    margin-bottom: 12px;
    text-transform: uppercase;
    font-size: ${typography.mobile.md}px;
    color: ${theme.colors.grey};

    @media (width >= ${desktop}) {
      font-size: ${typography.desktop.sm}px;
    }
  `
})

export const About = styled.p(({ theme }) => {
  return css`
    margin-bottom: 16px;
    font-weight: 400;
    line-height: 20px;
    font-size: ${typography.mobile.sm}px;
    color: ${theme.colors.secondaryText};

    @media (width >= ${desktop}) {
      font-size: ${typography.desktop.xs}px;
    }
  `
})
