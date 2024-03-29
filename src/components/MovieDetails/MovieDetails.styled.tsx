import styled, { css } from 'styled-components'

export const MovieDetailsWrapper = styled.div(({ theme }) => {
  const { desktop, tablet } = theme.media

  return css`
    font-weight: 500;

    @media (width >= ${tablet}) {
      display: flex;
      gap: 16px;
    }
  `
})

export const MoviePoster = styled.img(({ theme }) => {
  const { desktop, tablet } = theme.media

  return css`
    height: 315px;
    margin-bottom: 22px;
    border-radius: 5px;
    object-fit: cover;

    @media (width >= ${tablet}) {
      height: 400px;
      min-width: 294px;
      margin-bottom: 0;
    }

    @media (width >= ${desktop}) {
      min-width: 375px;
      height: 478px;
    }
  `
})

export const MovieTitle = styled.h2(({ theme }) => {
  const { desktop, tablet } = theme.media

  return css`
    margin-bottom: 29px;
    font-size: ${theme.text.mobile.lg}px;
    color: ${theme.colors.text};

    @media (width >= ${tablet}) {
      margin-bottom: 26px;
      font-size: ${theme.text.tablet.lg}px;
    }
  `
})

export const MovieInfoList = styled.ul(({ theme }) => {
  const { desktop } = theme.media

  return css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
    font-size: ${theme.text.mobile.md}px;

    @media (width >= ${desktop}) {
      font-size: ${theme.text.desktop.sm}px;
    }
  `
})

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

export const AboutTitle = styled.h3(({ theme }) => {
  const { desktop } = theme.media

  return css`
    margin-bottom: 12px;
    text-transform: uppercase;
    font-size: ${theme.text.mobile.md}px;
    color: ${theme.colors.grey};

    @media (width >= ${desktop}) {
      font-size: ${theme.text.desktop.sm}px;
    }
  `
})

export const About = styled.p(({ theme }) => {
  const { desktop } = theme.media

  return css`
    margin-bottom: 16px;
    font-weight: 400;
    line-height: 20px;
    font-size: ${theme.text.mobile.sm}px;
    color: ${theme.colors.secondaryText};

    @media (width >= ${desktop}) {
      font-size: ${theme.text.desktop.xs}px;
    }
  `
})
