import { useSelector } from 'react-redux'
import { RootState } from 'store/types'

const useAppSelector = useSelector.withTypes<RootState>()

export default useAppSelector
