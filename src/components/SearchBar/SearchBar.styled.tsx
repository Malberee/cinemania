import Button from 'components/common/Button'
import Container from 'components/common/Container'
import Input from 'components/common/Input'
import styled, { css } from 'styled-components'
import { breakpoints, staticColors } from 'theme/theme'

const { tablet, desktop } = breakpoints

export const SearchBarContainer = styled(Container)`
  display: flex;
  justify-content: center;

  margin-top: 40px;

  @media (width >= ${tablet}) {
    margin-top: 60px;
  }
`

export const SearchBarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;

  & > div:nth-child(1) {
    flex: 1;
  }

  @media (width >= ${desktop}) {
    max-width: 600px;
  }
`

export const QueryInput = styled(Input)`
  flex: 4;

  @media (width >= ${tablet}) {
    order: -1;
    padding: 13px 20px;
  }
`

export const SearchButton = styled(Button)`
  padding: 11px;
  color: ${staticColors.white};

  @media (width >= ${tablet}) {
    padding: 13px;
  }
`
