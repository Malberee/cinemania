import { FC } from 'react'
import { ButtonWrapper } from './Button.styled'
import { ButtonProps } from './Button.types'

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonWrapper {...props}>
      {props.$isIconOnly || !props.$isBordered ? (
        children
      ) : (
        <span>{children}</span>
      )}
    </ButtonWrapper>
  )
}

export default Button
