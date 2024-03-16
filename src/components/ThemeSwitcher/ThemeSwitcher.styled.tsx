import styled from 'styled-components'

export const ThemeSwitcherWrapper = styled.label`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 44px;
  height: 18px;
  padding: 2.5px;

  background: ${(props) => props.theme.gradients.linearGradientUp};
  border-radius: 100px;

  cursor: pointer;

  input {
    position: absolute;
    appearance: none;
  }

  input:checked ~ div {
    translate: -200%;
    rotate: -180deg;
  }

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 24px;
    padding: 3px;
  }
`

export const Thumb = styled.div`
  position: absolute;
  top: 2.5px;
  right: 2.5px;


  height: 13px;
  width: 13px;

  transition: all 200ms ease-in-out;

  @media screen and (min-width: 768px) {
    top: 3px;
    right: 3px;

    height: 18px;
    width: 18px;
  }
`
