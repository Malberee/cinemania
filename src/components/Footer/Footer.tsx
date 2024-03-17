import React, { FC } from 'react'
import { FooterWrapper, Link } from './Footer.styled'
import { FooterProps } from './Footer.types'

const Footer: FC<FooterProps> = () => {
  return (
    <FooterWrapper>
      © 2024 | All Rights Reserved | Developed by{' '}
      <Link href="https://github.com/Malberee">Malberee</Link>
    </FooterWrapper>
  )
}

export default Footer
