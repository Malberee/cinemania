import styled, { css } from 'styled-components'
import { breakpoints, typography } from 'theme/theme'

export const UpcomingMovieWrapper = styled.div(() => {
  const { desktop, tablet } = breakpoints

  return css`
    padding: 16px 0 12px 0;

    @media (width >= ${tablet}) {
      padding: 22px 0 37px 0;
    }

    @media (width >= ${desktop}) {
      padding: 30px 0 20px 0;
    }
  `
})

export const UpcomingTitle = styled.h4(() => {
  const { desktop, tablet } = breakpoints

  return css`
    margin-bottom: 24px;

    text-transform: uppercase;
    font-size: ${typography.mobile.md};
    font-weight: 500;

    color: ${({ theme }) => theme.colors.text};

    @media (width >= ${tablet}) {
      font-size: ${typography.tablet.lg}px;
    }

    @media (width >= ${desktop}) {
      font-size: ${typography.desktop.lg}px;
    }
  `
})

export const UpcomingMovieInner = styled.div(() => {
  const { desktop } = breakpoints

  return css`
    @media (width >= ${desktop}) {
      display: flex;
      gap: 16px;
    }
  `
})

export const MoviePoster = styled.picture(() => {
  const { desktop, tablet } = breakpoints

  return css`
    img {
      height: 402px;
      margin-bottom: 24px;
      border-radius: 5px;
      object-fit: cover;

      @media (width >= ${tablet}) {
        height: 400px;
        margin-bottom: 32px;
      }

      @media (width >= ${desktop}) {
        height: 458px;
        width: 805px;
        margin-bottom: 32px;
      }
    }
  `
})

export const MovieTitle = styled.h3(({ theme }) => {
  const { desktop, tablet } = breakpoints

  return css`
    margin-bottom: 20px;
    text-transform: uppercase;
    font-size: ${typography.mobile.lg}px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};

    @media (width >= ${tablet}) {
      font-size: ${typography.desktop.lg}px;
    }

    @media (width >= ${desktop}) {
      font-size: 32px;
    }
  `
})

export const MovieInfo = styled.ul(() => {
  const { desktop, tablet } = breakpoints

  return css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 12px;

    margin-bottom: 20px;

    font-weight: 500;

    @media (${desktop} > width >= ${tablet}) {
      grid-template-columns: repeat(4, 1fr);

      li:nth-child(1),
      li:nth-child(2),
      li:nth-child(5),
      li:nth-child(6) {
        order: 0;
      }

      li:nth-child(3),
      li:nth-child(4) {
        order: 1;
      }

      li:nth-child(7),
      li:nth-child(8) {
        order: 3;
      }
    }

    @media (width >= ${desktop}) {
    }
  `
})

export const MovieInfoItem = styled.li<{ color?: 'accent' | 'text' }>(
  ({ theme, color }) => {
    return css`
      color: ${theme.colors[color || 'grey']};
    `
  }
)
export const MovieAbout = styled.div`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.grey};

  h4 {
    margin-bottom: 16px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;
  }

  p {
    font-size: ${typography.mobile.md}px;
    line-height: 20px;
  }
`
