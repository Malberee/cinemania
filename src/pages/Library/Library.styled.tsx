import Button from 'components/common/Button'
import styled from 'styled-components'
import { breakpoints } from 'theme/theme'

const { tablet, desktop } = breakpoints

export const LibraryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const SearchMovieButton = styled(Button)`
  margin-top: 20px;

  @media (width >= ${tablet}) {
    margin-top: 24px;
  }

  @media (width >= ${desktop}) {
    margin-top: 28px;
  }
`
