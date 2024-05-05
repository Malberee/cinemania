import { FC } from 'react'
import { MainLoaderWrapper } from './MainLoader.styled'
import { MainLoaderProps } from './MainLoader.types'
import Loader from 'components/Loader'

const MainLoader: FC<MainLoaderProps> = () => {
  return (
    <MainLoaderWrapper>
      <Loader />
    </MainLoaderWrapper>
  )
}

export default MainLoader
