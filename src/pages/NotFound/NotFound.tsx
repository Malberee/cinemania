import { FC } from 'react'
import { NotFoundWrapper, NotFoundText, ErrorCode } from './NotFound.styled'
import { NotFoundProps } from './NotFound.types'
import Button from 'components/common/Button'
import { useNavigate } from 'react-router-dom'

const NotFound: FC<NotFoundProps> = () => {
  const navigate = useNavigate()

  return (
    <NotFoundWrapper>
      <NotFoundText>
        Page not found. <ErrorCode>404</ErrorCode>
      </NotFoundText>
      <Button onClick={() => navigate('/')}>Back to home</Button>
    </NotFoundWrapper>
  )
}

export default NotFound
