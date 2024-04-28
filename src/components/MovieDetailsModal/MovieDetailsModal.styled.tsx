import styled from 'styled-components'

export const MovieDetailsModalWrapper = styled.div``

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  width: 100%;
`

export const LoadingText = styled.p`
  color: ${({ theme }) => theme.colors.text};
`
