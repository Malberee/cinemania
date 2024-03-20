import styled, { css } from 'styled-components'

export const UpcomingMovieWrapper = styled.div(({ theme }) => {
  const { desktop, tablet } = theme.media

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

export const UpcomingTitle = styled.h4(({ theme }) => {
  const { desktop, tablet } = theme.media

  return css`
    margin-bottom: 24px;

    text-transform: uppercase;
    font-size: ${({ theme }) => theme.text.mobile.md};
    font-weight: 500;

    color: ${({ theme }) => theme.colors.text};

    @media (width >= ${tablet}) {
      font-size: ${({ theme }) => theme.text.tablet.lg}px;
    }

    @media (width >= ${desktop}) {
      font-size: ${({ theme }) => theme.text.desktop.lg}px;
    }
  `
})

export const MoviePoster = styled.picture(({ theme }) => {
  const { desktop, tablet } = theme.media

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

export const MovieTitle = styled.h3`
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.text.mobile.lg}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`

export const MovieInfo = styled.ul`
  margin-bottom: 20px;
`

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
    font-size: ${({ theme }) => theme.text.mobile.md}px;
    line-height: 20px;
  }
`
