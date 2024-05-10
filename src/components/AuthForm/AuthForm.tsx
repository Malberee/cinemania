import { FC, FormEvent, useState } from 'react'
import {
  AuthFormWrapper,
  AuthTitle,
  Input,
  SubmitButton,
  Text,
  Link,
  ToggleVisibilityButton,
} from './AuthForm.styled'
import { AuthFormProps } from './AuthForm.types'
import Email from 'icons/Email'
import Lock from 'icons/Lock'
import Show from 'icons/Show'
import Hide from 'icons/Hide'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { register } from 'store/auth/operations'

const AuthForm: FC<AuthFormProps> = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useAppDispatch()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email, password } = e.currentTarget
    dispatch(register({ email: email.value, password: password.value }))
  }

  return (
    <AuthFormWrapper onSubmit={handleSubmit}>
      <AuthTitle>{isLogin ? 'Sign In' : 'Sign Up'}</AuthTitle>
      <Input
        placeholder="E-mail"
        type="email"
        name="email"
        startContent={<Email />}
      />
      <Input
        placeholder="Password"
        type={showPassword ? 'text' : 'password'}
        name="password"
        startContent={<Lock />}
        endContent={
          <ToggleVisibilityButton
            type="button"
            onClick={() => setShowPassword((prevState) => !prevState)}
          >
            {showPassword ? <Show /> : <Hide />}
          </ToggleVisibilityButton>
        }
      />
      <Text>
        {isLogin
          ? 'you don`t have an account yet?'
          : 'Already have an account?'}{' '}
        <Link onClick={() => setIsLogin((prevState) => !prevState)}>
          {isLogin ? 'Sign Up' : 'Sign In'}
        </Link>
      </Text>
      <SubmitButton type="submit">Submit</SubmitButton>
    </AuthFormWrapper>
  )
}

export default AuthForm
