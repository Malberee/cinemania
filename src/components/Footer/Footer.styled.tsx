import Container from 'components/common/Container'
import styled, { css } from 'styled-components'
import { breakpoints, typography } from 'theme/theme'

export const FooterWrapper = styled.footer`
  font-size: ${typography.mobile.md}px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
`

export const FooterContainer = styled(Container)(() => {
  const { desktop, tablet } = breakpoints

  return css`
    padding: 28px 12px;

    @media (width >= ${tablet}) {
      padding: 40px 12px;
      font-size: ${typography.tablet.md}px;
    }

    @media (width >= ${desktop}) {
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
