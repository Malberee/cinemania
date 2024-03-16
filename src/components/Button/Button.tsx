import React, { FC } from 'react'
import { ButtonWrapper } from './Button.styled'
import { ButtonProps } from './Button.types'

const Button: FC<ButtonProps> = ({ children, isBordered }) => {
  return (
    <ButtonWrapper isBordered={isBordered}>
      <span>{children}</span>
    </ButtonWrapper>
  )
}

export default Button
