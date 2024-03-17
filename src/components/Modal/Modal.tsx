import React, { FC, MouseEvent } from 'react'
import { Backdrop, ModalWrapper, CloseBtn } from './Modal.styled'
import { ModalProps } from './Modal.types'
import Close from 'icons/Close'

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget) return
    onClose()
  }
  return (
    <Backdrop onClick={handleClick}>
      <ModalWrapper>
        <CloseBtn onClick={onClose}>
          <Close />
        </CloseBtn>
        {children}
      </ModalWrapper>
    </Backdrop>
  )
}

export default Modal
