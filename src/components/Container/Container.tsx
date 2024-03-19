import React, { FC } from 'react'
import { ContainerWrapper } from './Container.styled'
import { ContainerProps } from './Container.types'

const Container: FC<ContainerProps> = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>
}

export default Container
