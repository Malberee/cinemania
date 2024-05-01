import { FC, MouseEvent, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Backdrop, ModalWrapper, CloseBtn } from './Modal.styled'
import { ModalProps } from './Modal.types'
import Close from 'icons/Close'
import { useNavigate } from 'react-router-dom'

const modalRoot = document.getElementById('modal-root')!

const Modal: FC<ModalProps> = ({ children }) => {
  const navigate = useNavigate()

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget) return
    navigate('..')
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])

  return createPortal(
    <Backdrop onClick={handleClick}>
      <ModalWrapper>
        <CloseBtn onClick={() => navigate('..')}>
          <Close />
        </CloseBtn>
        {children}
      </ModalWrapper>
    </Backdrop>,
    modalRoot
  )
}

export default Modal
