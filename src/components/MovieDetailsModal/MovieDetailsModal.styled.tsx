import styled from 'styled-components'

export const MovieDetailsModalWrapper = styled.div`
  font-weight: 500;
`

export const MoviePoster = styled.img`
  max-width: 248px;
  max-height: 315px;
  margin-bottom: 22px;
  border-radius: 5px;
  object-fit: cover;
`

export const MovieTitle = styled.h2`
  margin-bottom: 29px;
  font-size: ${({ theme }) => theme.text.mobile.lg}px;
  color: ${({ theme }) => theme.colors.text};
`

export const MovieInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`
export const MovieInfoRow = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`
export const MovieInfoItem = styled.p<{ color: 'grey' | 'white' }>`
  flex: 1;
  color: ${({ theme, color }) =>
    theme.colors[color === 'white' ? 'text' : color]};
`

export const AboutTitle = styled.h3`
  margin-bottom: 12px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.text.mobile.md}px;
  color: ${({ theme }) => theme.colors.grey};
`

export const About = styled.p`
  margin-bottom: 16px;
  font-weight: 400;
  line-height: 20px;
  font-size: ${({ theme }) => theme.text.mobile.sm}px;
  color: ${({ theme }) => theme.colors.secondaryText};
`
