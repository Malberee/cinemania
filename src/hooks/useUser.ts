import { selectEmail, selectId, selectLibrary } from 'store/user/selectors'
import useAppSelector from './useAppSelector'

const useUser = () => {
  const email = useAppSelector(selectEmail)
  const userId = useAppSelector(selectId)
  const library = useAppSelector(selectLibrary)
  const isLoggedIn = !!email

  return {email, userId, library, isLoggedIn}
}

export default useUser
