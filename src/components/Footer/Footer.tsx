import { FC } from 'react'
import { FooterContainer, FooterWrapper, Link } from './Footer.styled'
import { FooterProps } from './Footer.types'

const Footer: FC<FooterProps> = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        © 2024 | All Rights Reserved | Developed by{' '}
        <Link href="https://github.com/Malberee">Malberee</Link>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
