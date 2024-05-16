import { FC, useEffect } from 'react'
import { PrivateRouteProps } from './PrivateRoute.types'
import useUser from 'hooks/useUser'
import { Navigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import useAppSelector from 'hooks/useAppSelector'
import { userSelectors } from 'store/user'
import MainLoader from 'components/MainLoader'

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { isLoggedIn } = useUser()
  const isLoading = useAppSelector(userSelectors.selectIsLoading)

  useEffect(() => {
    // Such a decision is related to this problem: https://stackoverflow.com/questions/62025911/redux-hooks-usedispatch-in-useeffect-calling-action-twice

    const sendToast = setTimeout(() => {
      if (!isLoggedIn && !isLoading) {
        toast.error('You are not authenticated')
      }
    }, 0)

    return () => clearTimeout(sendToast)
  }, [])

  return isLoggedIn ? (
    children
  ) : isLoading ? (
    <MainLoader />
  ) : (
    <Navigate to="/" />
  )
}

export default PrivateRoute
