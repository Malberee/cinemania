import styled, { css } from 'styled-components'

export const SelectWrapper = styled.div`
  position: relative;
`

export const SelectTrigger = styled.div(({ theme }) => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 22px;

    padding: 12px 20px;

    font-size: ${theme.text.mobile.md}px;
    font-weight: 500;

    border-radius: 8px;
    border: solid 1px ${theme.colors.grey};
    color: ${theme.colors.grey};

    transition: border-color 100ms linear;

    &:focus {
      border-color: ${theme.colors.accent};
      outline: none;
    }
  `
})

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
      font-size: ${$isSelected ? 18 : theme.text.mobile.md}px;
      color: ${$isSelected ? theme.colors.accent : theme.colors.text};

      transition: all 100ms linear;

      a {
        display: inline-block;
        padding: 6px 0;
      }
    `
  }
)
