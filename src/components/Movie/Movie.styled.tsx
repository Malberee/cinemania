import styled, { css } from 'styled-components'
import { Rating } from 'react-simple-star-rating'

export const MovieWrapper = styled.li(({ theme }) => {
  const { desktop, tablet } = theme.media

  return css`
    position: relative;

    min-width: 100%;
    height: 406px;

    border-radius: 5px;
    overflow: hidden;

    transition: scale 100ms linear;

    &:hover {
      scale: 1.02;
    }

    img {
      object-fit: cover;
    }

    @media (width >= ${tablet}) {
      min-width: auto;
      max-width: 224px;
      height: 325px;
    }

    @media (width >= ${desktop}) {
      max-width: 394px;
      height: 574px;
    }
  `
})

export const MovieInner = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  padding: 16px 12px;

  color: white;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 63.48%,
    rgba(0, 0, 0, 0.9) 92.16%
  );
`

export const StarWrapper = styled.span(({ theme }) => {
  const { desktop, tablet } = theme.media

  return css`
    display: inline-block;
    padding: 0 2px;
    width: 18px;
    height: 14px;

    @media (width >= ${tablet}) {
      width: 14px;
      height: 10px;
    }

    @media (width >= ${desktop}) {
      width: 22px;
      height: 18px;
    }
  `
})

export const RatingStars = styled(Rating)(({ theme }) => {
  const { desktop } = theme.media

  return css`
    height: 14px;

    @media (width >= ${desktop}) {
      height: 18px;
    }
  `
})

export const InfoWrapper = styled.div(({ theme }) => {
  const { desktop } = theme.media

  return css`
    font-size: ${theme.text.mobile.sm}px;
    font-weight: 500;

    @media (width >= ${desktop}) {
      font-size: ${theme.text.desktop.md}px;
    }
  `
})

export const GreyText = styled.p`
  color: ${({ theme }) => theme.staticColors.grey};
  margin-top: 10px;
`
