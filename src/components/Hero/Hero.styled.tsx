import { Rating } from 'react-simple-star-rating'
import styled from 'styled-components'
import { breakpoints, staticColors, typography } from 'theme/theme'

const { desktop, tablet } = breakpoints

export const HeroWrapper = styled.div`
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

export const MoviePoster = styled.img`
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

export const HeroInner = styled.div`
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

export const MovieTitle = styled.h2`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 32px;
  color: ${staticColors.white};

  @media (width >= ${tablet}) {
    font-size: 44px;
  }

  @media (width >= ${desktop}) {
    margin-left: 85px;

    font-size: ${typography.desktop.xl}px;
  }
`

export const RatingStars = styled(Rating)`
  height: 16px;
  margin-bottom: 16px;

  @media (width >= ${tablet}) {
    height: 20px;
    margin-bottom: 20px;
  }

  @media (width >= ${desktop}) {
    height: 24px;
    margin-bottom: 28px;
    margin-left: 85px;
  }
`

export const StarWrapper = styled.span`
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

export const MovieOverview = styled.p`
  width: 177px;
  margin-bottom: 20px;
  font-size: ${typography.mobile.md}px;
  color: ${staticColors.white};

  @media (width >= ${tablet}) {
    width: 254px;
    margin-bottom: 28px;
  }

  @media (width >= ${desktop}) {
    width: 367px;
    margin-bottom: 36px;
    margin-left: 85px;
    font-size: ${typography.desktop.sm}px;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;

  @media (width >= ${desktop}) {
    margin-left: 85px;
  }
`
