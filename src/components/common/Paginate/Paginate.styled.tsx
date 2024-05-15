import Container from 'components/common/Container'
import styled, { css } from 'styled-components'
import { breakpoints, gradients, typography } from 'theme/theme'

const { tablet, desktop } = breakpoints

export const PaginateWrapper = styled(Container)(({ theme }) => {
  return css`
    display: flex;
    justify-content: center;

    margin-top: 20px;

    @media (width >= ${tablet}) {
      margin-top: 44px;
    }

    @media (width >= ${desktop}) {
      margin-top: 60px;
    }

    .container {
      display: flex;
      align-items: center;
      gap: 8px;

      @media (width >= ${tablet}) {
        gap: 16px;
      }
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

      @media (width >= ${tablet}) {
        width: 40px;
        height: 40px;
        font-size: ${typography.tablet.sm}px;
      }
    }

    .active {
      background: ${gradients.linearGradientUp};
      color: ${theme.colors.text};
      border: none;
    }

    .arrowBtn {
      width: 20px;
      height: 20px;

      @media (width >= ${tablet}) {
        width: 28px;
        height: 28px;
      }
    }

    .break {
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${theme.colors.grey};

      font-size: ${typography.mobile.xs}px;

      @media (width >= ${tablet}) {
        font-size: ${typography.tablet.sm}px;
      }
    }
  `
})

export const ArrowButton = styled.button<{ direction: 'prev' | 'next' }>(
  ({ direction, theme }) => {
    return css`
      width: 20px;
      height: 20px;
      padding: 0;

      border: none;
      background-color: transparent;
      color: ${theme.colors.arrowPaginate};

      rotate: ${direction === 'prev' ? 90 : 270}deg;

      &:hover {
        cursor: pointer;
      }

      @media (width >= ${tablet}) {
        width: 28px;
        height: 28px;
      }
    `
  }
)
