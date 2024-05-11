import { FC, memo, useEffect } from 'react'
import { LibraryWrapper } from './Library.styled'
import { LibraryProps } from './Library.types'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { fetchLibrary } from 'store/user/operation'
import useAppSelector from 'hooks/useAppSelector'
import { selectId } from 'store/user/selectors'

const Library: FC<LibraryProps> = memo(() => {
  const dispatch = useAppDispatch()
  const userId = useAppSelector(selectId)

  useEffect(() => {
    if (userId) {
      dispatch(fetchLibrary(userId))
    }
  }, [dispatch])

  return <LibraryWrapper>Library Component</LibraryWrapper>
})

export default Library
