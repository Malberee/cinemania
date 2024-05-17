import styled from 'styled-components'
import { breakpoints } from 'theme/theme'

export const BackdropWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.backdrop};
  backdrop-filter: blur(2px);
  overflow-y: auto;

  @media (width >= ${breakpoints.tablet}) {
    padding: 32px;
  }
`
