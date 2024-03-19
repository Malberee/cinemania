import styled, { css } from 'styled-components'

export const FooterWrapper = styled.footer(({ theme }) => {
  const { desktop, tablet } = theme.media

  return css`
    padding: 28px 12px;
    font-size: ${({ theme }) => theme.text.mobile.md}px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.grey};
    text-align: center;
    background-color: ${({ theme }) => theme.colors.background};

    @media (${tablet} <= width) {
      padding: 40px 12px;
      font-size: ${({ theme }) => theme.text.tablet.md}px;
    }

    @media (${desktop} <= width) {
      padding: 80px 12px;
    }
  `
})

export const Link = styled.a`
  text-decoration: underline;
  color: inherit;

  transition: color 100ms linear;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`