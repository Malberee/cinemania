import styled, { css } from 'styled-components'
import { breakpoints, typography } from 'theme/theme'

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
`

export const SelectTrigger = styled.button(({ theme }) => {
  const { tablet } = breakpoints

  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    width: 100%;
    padding: 11px 20px;

    font-size: ${typography.mobile.md}px;
    font-weight: 500;

    border-radius: 8px;
    border: solid 1px ${theme.colors.grey};
    background-color: transparent;
    color: ${theme.colors.grey};

    cursor: pointer;

    transition: border-color 100ms linear;

    &:focus {
      border-color: ${theme.colors.accent};
      outline: none;
    }

    @media (width >= ${tablet}) {
      padding: 13px 20px;
    }
  `
})

export const IconsWrapper = styled.div`
  display: flex;
  gap: 8px;
`

export const CloseWrapper = styled.a`
  width: 16px;
  height: 16px;
  padding: 0;

  border: none;
  color: ${({ theme }) => theme.colors.grey};
  background-color: transparent;

  cursor: pointer;
`

export const ChevronWrapper = styled.div<{ $isOpen: boolean }>(
  ({ $isOpen }) => {
    return css`
      width: 16px;
      height: 16px;

      rotate: ${$isOpen ? '180deg' : '0deg'};

      transition: rotate 150ms linear;
    `
  }
)

export const OptionList = styled.ul<{ $isOpen: boolean }>(
  ({ theme, $isOpen }) => {
    return css`
      position: absolute;
      top: 100%;
      z-index: 1;

      display: ${$isOpen ? 'flex' : 'none'};
      flex-direction: column;

      min-width: 100%;
      max-height: 269px;
      padding: 12px 27px;

      text-align: center;

      border-radius: 8px;
      border: solid 1px ${theme.colors.grey};
      background-color: ${theme.colors.selectBackground};
      overflow-x: auto;

      &::-webkit-scrollbar {
        display: none;
      }
    `
  }
)

export const OptionItem = styled.li<{ $isSelected: boolean }>(
  ({ theme, $isSelected }) => {
    return css`
      padding: 6px 0;

      font-size: ${$isSelected ? 18 : typography.mobile.md}px;
      text-decoration: none;

      color: ${$isSelected ? theme.colors.accent : theme.colors.text};

      cursor: pointer;

      transition: all 100ms linear;

      &:hover {
        color: ${theme.colors.accent};
      }
    `
  }
)
