import { FC, InputHTMLAttributes } from 'react'
import { InputStyles } from './Input.styled'

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <InputStyles {...props} />
}

export default Input
