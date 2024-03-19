import React, { FC } from 'react'
import { Container, FooterWrapper, Link } from './Footer.styled'
import { FooterProps } from './Footer.types'

const Footer: FC<FooterProps> = () => {
  return (
    <FooterWrapper>
      <Container>
        © 2024 | All Rights Reserved | Developed by{' '}
        <Link href="https://github.com/Malberee">Malberee</Link>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
