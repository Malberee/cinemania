import { FC, FormEvent, memo, useState } from 'react'
import {
  AuthFormWrapper,
  AuthTitle,
  Input,
  SubmitButton,
  Text,
  Link,
  ToggleVisibilityButton,
  LoaderWrapper,
} from './AuthForm.styled'
import { AuthFormProps } from './AuthForm.types'
import Email from 'icons/Email'
import Lock from 'icons/Lock'
import Show from 'icons/Show'
import Hide from 'icons/Hide'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { userOperations } from 'store/user'
import useAppSelector from 'hooks/useAppSelector'
import { selectIsLoading } from 'store/user/selectors'
import Loader from 'components/common/Loader'
import toast from 'react-hot-toast'

const AuthForm: FC<AuthFormProps> = memo(({ closeModal }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const isLoading = useAppSelector(selectIsLoading)
  const dispatch = useAppDispatch()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { email, password } = e.currentTarget
    const credentials = { email: email.value, password: password.value }

    if (isLogin) {
      toast
        .promise(
          dispatch(
            userOperations.auth({
              ...credentials,
              action: 'login',
            })
          ).unwrap(),
          { loading: 'Loading...', success: 'You are signed in!', error: 'Error!' }
        )
        .then(closeModal)
    } else {
      toast
        .promise(
          dispatch(
            userOperations.auth({
              ...credentials,
              action: 'register',
            })
          ).unwrap(),
          {
            loading: 'Loading...',
            success: 'You are signed up!',
            error: 'Error!',
          }
        )
        .then(closeModal)
    }
  }

  return (
    <AuthFormWrapper onSubmit={handleSubmit}>
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      <AuthTitle>{isLogin ? 'Sign In' : 'Sign Up'}</AuthTitle>
      <Input
        required
        placeholder="E-mail"
        type="email"
        name="email"
        startContent={<Email />}
      />
      <Input
        required
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
          ? 'You don`t have an account yet?'
          : 'Already have an account?'}{' '}
        <Link onClick={() => setIsLogin((prevState) => !prevState)}>
          {isLogin ? 'Sign Up' : 'Sign In'}
        </Link>
      </Text>
      <SubmitButton type="submit" disabled={isLoading}>
        Submit
      </SubmitButton>
    </AuthFormWrapper>
  )
})

export default AuthForm
