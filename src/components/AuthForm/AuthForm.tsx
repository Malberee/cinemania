import { FC, useState } from 'react'
import {
  AuthFormWrapper,
  AuthTitle,
  Input,
  SubmitButton,
  Text,
  Link,
} from './AuthForm.styled'
import { AuthFormProps } from './AuthForm.types'

const AuthForm: FC<AuthFormProps> = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <AuthFormWrapper>
      <AuthTitle>{isLogin ? 'Sign In' : 'Sign Up'}</AuthTitle>
      <Input placeholder="E-mail" />
      <Input placeholder="Password" />
      <Text>
        {isLogin
          ? 'you don`t have an account yet?'
          : 'Already have an account?'}{' '}
        <Link onClick={() => setIsLogin((prevState) => !prevState)}>
          {isLogin ? 'Sign Up' : 'Sign In'}
        </Link>
      </Text>
      <SubmitButton>Submit</SubmitButton>
    </AuthFormWrapper>
  )
}

export default AuthForm
