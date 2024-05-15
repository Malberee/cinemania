import React, { FC } from 'react'
import { LibraryHeroWrapper, HeroTitle, HeroText } from './LibraryHero.styled'
import { LibraryHeroProps } from './LibraryHero.types'
import Container from 'components/common/Container'

const LibraryHero: FC<LibraryHeroProps> = () => {
  return (
    <LibraryHeroWrapper>
      <Container>
        <HeroTitle>
          Create your <br /> dream cinema
        </HeroTitle>
        <HeroText>
          Is a guide to designing a personalized movie theater experience with
          the right equipment, customized decor, and favorite films. This guide
          helps you bring the cinema experience into your own home with cozy
          seating, dim lighting, and movie theater snacks.
        </HeroText>
      </Container>
    </LibraryHeroWrapper>
  )
}

export default LibraryHero
