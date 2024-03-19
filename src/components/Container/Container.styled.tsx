import styled, { css } from 'styled-components'

const ContainerWrapper = styled.div(({ theme }) => {
  const { tablet, desktop } = theme.media

  return css`
    margin: 0 auto;
    width: 320px;

    @media (width >= ${tablet}) {
      width: ${tablet};
    }

    @media (width >= ${desktop}) {
      width: ${desktop};
    }
  `
})

export default ContainerWrapper
