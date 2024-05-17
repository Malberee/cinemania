import { FC } from 'react'
import { BackdropWrapper } from './Backdrop.styled'
import { BackdropProps } from './Backdrop.types'

const Backdrop: FC<BackdropProps> = ({ children }) => {
  return <BackdropWrapper>{children}</BackdropWrapper>
}

export default Backdrop
