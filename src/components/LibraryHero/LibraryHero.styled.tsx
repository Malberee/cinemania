import styled from 'styled-components'
import { breakpoints, staticColors, typography } from 'theme/theme'

const { tablet, desktop } = breakpoints

export const LibraryHeroWrapper = styled.div`
  height: 380px;
  padding: 40px 0;

  background: linear-gradient(77deg, #111 28.7%, transparent 70%),
    url('images/background.jpg');
  background-size: cover;
  background-position: 25%;
  background-repeat: no-repeat;
  background-color: white;

  @media (width >= ${tablet}) {
    height: 372px;
    padding: 60px 0;
  }

  @media (width >= ${desktop}) {
    height: 660px;
    padding: 169px 0;
  }
`

export const HeroTitle = styled.h1`
  margin-bottom: 8px;

  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  text-transform: capitalize;

  color: ${staticColors.white};

  @media (width >= ${tablet}) {
    font-size: 44px;
  }

  @media (width >= ${desktop}) {
    margin-bottom: 16px;
    margin-left: 85px;
    font-size: ${typography.desktop.xl}px;
  }
`

export const HeroText = styled.p`
  width: 249px;
  font-size: ${typography.mobile.md}px;
  line-height: 1.2;
  color: ${staticColors.secondaryText};

  @media (width >= ${tablet}) {
    width: 357px;
  }

  @media (width >= ${desktop}) {
    width: 464px;
    margin-left: 85px;
    font-size: ${typography.tablet.md}px;
  }
`
