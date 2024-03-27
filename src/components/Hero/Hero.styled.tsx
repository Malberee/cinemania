import { Rating } from 'react-simple-star-rating'
import styled, { css } from 'styled-components'

export const HeroWrapper = styled.div(({ theme }) => {
  const { desktop, tablet } = theme.media

  return css`
    position: relative;
    height: 380px;
    overflow: hidden;

    @media (width >= ${tablet}) {
      height: 432px;
    }

    @media (width >= ${desktop}) {
      height: 720px;
    }
  `
})

export const MoviePoster = styled.img(({ theme }) => {
  const { desktop, tablet } = theme.media

  return css`
    position: absolute;
    left: 50px;
    object-fit: cover;
    height: 100%;

    @media (width >= ${tablet}) {
      left: 100px;
    }

    @media (width >= ${desktop}) {
      left: 180px;
    }
  `
})

export const HeroInner = styled.div(({ theme }) => {
  const { desktop, tablet } = theme.media

  return css`
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;
    padding: 40px 0;

    background: linear-gradient(82deg, #111 28.7%, transparent 100%);

    @media (width >= ${tablet}) {
      padding: 36px 0;
    }

    @media (width >= ${desktop}) {
      padding: 118px 0;
    }
  `
})

export const MovieTitle = styled.h2(({ theme }) => {
  const { desktop, tablet } = theme.media

  return css`
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 32px;
    color: ${({ theme }) => theme.staticColors.white};

    @media (width >= ${tablet}) {
      font-size: 44px;
    }

    @media (width >= ${desktop}) {
      font-size: ${theme.text.desktop.xl}px;
    }
  `
})

export const RatingStars = styled(Rating)(({ theme }) => {
  const { desktop, tablet } = theme.media

  return css`
    height: 16px;
    margin-bottom: 16px;

    @media (width >= ${tablet}) {
      height: 20px;
      margin-bottom: 20px;
    }

    @media (width >= ${desktop}) {
      height: 24px;
      margin-bottom: 28px;
    }
  `
})

export const StarWrapper = styled.span(({ theme }) => {
  const { desktop, tablet } = theme.media

  return css`
    display: inline-block;
    height: 16px;
    width: 20px;
    padding: 0 2px;

    @media (width >= ${tablet}) {
      height: 20px;
      width: 24px;
    }

    @media (width >= ${desktop}) {
      height: 24px;
      width: 28px;
    }
  `
})

export const MovieOverview = styled.p(({ theme }) => {
  const { desktop, tablet } = theme.media

  return css`
    width: 177px;
    margin-bottom: 20px;
    font-size: ${theme.text.mobile.md}px;
    color: ${theme.staticColors.white};

    @media (width >= ${tablet}) {
      width: 254px;
      margin-bottom: 28px;
    }

    @media (width >= ${desktop}) {
      width: 367px;
      margin-bottom: 36px;
      font-size: ${theme.text.desktop.sm}px;
    }
  `
})

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
`
