import styled from 'styled-components'

export const ThemeSwitcherWrapper = styled.label`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 60px;
  height: 24px;
  padding: 3px;

  background: ${(props) => props.theme.gradients.linearGradientUp};
  border-radius: 100px;

  input {
    position: absolute;
    appearance: none;
  }

  input:checked ~ div {
    translate: -200%;
    rotate: -180deg;
  }
`

export const Thumb = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
  height: 18px;
  width: 18px;

  transition: all 200ms ease-in-out;
`
