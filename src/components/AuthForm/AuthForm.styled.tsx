import Button from 'components/common/Button'
import InputComponent from 'components/common/Input'
import styled, { css } from 'styled-components'
import { typography } from 'theme/theme'

export const AuthFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
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

export const Input = styled(InputComponent)``

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

export const ToggleVisibilityButton = styled.button(({ theme }) => {
  return css`
    height: 100%;
    width: 100%;
    padding: 0;
    color: ${theme.colors.grey};
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  `
})

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backdrop};
`
