import Button from 'components/Button'
import InputComponent from 'components/Input'
import styled, { css } from 'styled-components'
import { typography } from 'theme/theme'

export const AuthFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 24px;
`

export const AuthTitle = styled.h2(({ theme }) => {
  const { mobile } = typography

  return css`
    text-align: left;
    color: ${theme.colors.text};
    font-size: ${mobile.xl}px;
    font-weight: 500;
    margin-bottom: 16px;
  `
})

export const Input = styled(InputComponent)`
  width: 300px;
`

export const SubmitButton = styled(Button)`
  width: 100%;
`

export const Text = styled.p(({ theme }) => {
  return css`
    color: ${theme.colors.text};
  `
})

export const Link = styled.a(({ theme }) => {
  return css`
    color: ${theme.colors.accent};

    &:hover {
      text-decoration: underline;
    }
  `
})
