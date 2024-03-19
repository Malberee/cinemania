import styled from 'styled-components'

export const MovieDetailsWrapper = styled.div``

export const MoviePoster = styled.img`
  width: 280px;
  height: 402px;
  border-radius: 5px;
  object-fit: cover;
`

export const MovieTitle = styled.h3`
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.text.mobile.lg}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`

export const MovieInfo = styled.ul`
  margin-bottom: 20px;
`

export const MovieAbout = styled.div`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.grey};

  h4 {
    margin-bottom: 16px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;
  }

  p {
    font-size: ${({ theme }) => theme.text.mobile.md}px;
  }
`
