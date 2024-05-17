import { FC, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ModalWrapper, CloseBtn } from './Modal.styled'
import { ModalProps } from './Modal.types'
import Close from 'icons/Close'
import useOutsideClick from 'hooks/useOutsideClick'
import Backdrop from '../Backdrop'

const modalRoot = document.getElementById('modal-root')!

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const ref = useOutsideClick(onClose)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])

  return createPortal(
    <Backdrop>
      <ModalWrapper ref={ref}>
        <CloseBtn onClick={() => onClose()} type="button">
          <Close />
        </CloseBtn>
        {children}
      </ModalWrapper>
    </Backdrop>,
    modalRoot
  )
}

export default Modal
