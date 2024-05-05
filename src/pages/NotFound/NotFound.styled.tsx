import styled, { css } from 'styled-components'
import { breakpoints, typography } from 'theme/theme'

export const NotFoundWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('images/background-desktop.jpg');
`

export const NotFoundText = styled.h1(({ theme }) => {
  const {
    desktop: desktopText,
    tablet: tabletText,
    mobile: mobileText,
  } = typography
  const { tablet, desktop } = breakpoints

  return css`
    display: flex;
    flex-direction: column;

    font-size: ${mobileText.xl}px;
    font-weight: 500;
    text-align: center;
    line-height: 1.2;

    color: ${theme.colors.text};
    text-shadow: 0px 0px 20px #000000;

    @media (width >= ${tablet}) {
      font-size: ${tabletText.xl}px;
    }

    @media (width >= ${desktop}) {
      font-size: ${desktopText.xl}px;
    }
  `
})

export const ErrorCode = styled.span(() => {
  return css`
    font-size: 128px;
  `
})
