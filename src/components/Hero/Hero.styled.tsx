import styled, { css } from 'styled-components'

export const HeroWrapper = styled.div`
  position: relative;
  height: 380px;
`

export const MoviePoster = styled.img`
  object-fit: cover;
  height: 100%;
`

export const HeroInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  background: linear-gradient(82deg, #111 28.7%, transparent 100%);
`

export const MovieTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  color: ${({ theme }) => theme.staticColors.white};
`

export const MovieOverview = styled.p(({ theme }) => {
  const { dekstop, tablet } = theme.media

  return css`
    width: 177px;
    text-overflow: ellipsis;
    font-size: ${theme.text.mobile.md}px;
    color: ${theme.staticColors.white};
  `
})

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
`
