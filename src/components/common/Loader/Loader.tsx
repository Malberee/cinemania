import { FC } from 'react'
import { LoaderWrapper } from './Loader.styled'
import { LoaderProps } from './Loader.types'
import { Oval } from 'react-loader-spinner'
import { useTheme } from 'styled-components'

const Loader: FC<LoaderProps> = ({ children }) => {
  const { colors } = useTheme()

  return (
    <LoaderWrapper>
      <Oval color={colors.accent} secondaryColor={colors.accent} />
      {children}
    </LoaderWrapper>
  )
}

export default Loader
