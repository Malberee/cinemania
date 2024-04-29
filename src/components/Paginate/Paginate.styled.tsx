import Container from 'components/Container'
import styled, { css } from 'styled-components'
import { gradients, typography } from 'theme/theme'

export const PaginateWrapper = styled(Container)(({ theme }) => {
  return css`
    display: flex;
    justify-content: center;

    .container {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .page {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 24px;
      height: 24px;

      border: solid 1px ${theme.colors.grey};
      color: ${theme.colors.grey};
      border-radius: 100vw;

      font-size: ${typography.mobile.xs}px;
    }

    .active {
      background: ${gradients.linearGradientUp};
      color: ${theme.colors.text};
      border: none;
    }

    .arrowBtn {
      width: 20px;
      height: 20px;
    }

    .break {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 24px;
      height: 24px;

      color: ${theme.colors.grey};

      font-size: ${typography.mobile.xs}px;
    }
  `
})

export const ArrowButton = styled.button<{ direction: 'prev' | 'next' }>(
  ({ direction }) => {
    return css`
      width: 20px;
      height: 20px;
      padding: 0;

      border: none;
      background-color: transparent;
      color: white;

      rotate: ${direction === 'prev' ? 90 : 270}deg;
    `
  }
)
