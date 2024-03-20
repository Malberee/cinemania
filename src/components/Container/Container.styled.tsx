import styled, { css } from 'styled-components'

const ContainerWrapper = styled.div(({ theme }) => {
  const { tablet, desktop } = theme.media

  return css`
    margin: 0 auto;
    width: 320px;
    padding: 0 20px;

    @media (width >= ${tablet}) {
      width: ${tablet};
      padding: 0 32px;
    }

    @media (width >= ${desktop}) {
      width: ${desktop};
    }
  `
})

export default ContainerWrapper
