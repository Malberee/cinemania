import { FC } from 'react'
import { InputWrapper, InputStyles, ContentWrapper } from './Input.styled'
import { InputProps } from './Input.types'

const Input: FC<InputProps> = ({ startContent, endContent, ...props }) => {
  return (
    <InputWrapper>
      {startContent && (
        <ContentWrapper $position="start">{startContent}</ContentWrapper>
      )}
      <InputStyles
        $hasStartContent={!!startContent}
        $hasEndContent={!!endContent}
        {...props}
      />
      {endContent && (
        <ContentWrapper $position="end">{endContent}</ContentWrapper>
      )}
    </InputWrapper>
  )
}

export default Input
