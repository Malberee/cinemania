import React, { FC } from 'react'
import { ThemeSwitcherWrapper, Thumb } from './ThemeSwitcher.styled'
import { ThemeSwitcherProps } from './ThemeSwitcher.types'
import ThemeSwitcherThumb from 'icons/ThemeSwitcherThumb'
import Sun from 'icons/Sun'
import Moon from 'icons/Moon'

const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
  return (
    <ThemeSwitcherWrapper>
      <input type="checkbox" />
      <Moon />
      <Sun />
      <Thumb>
        <ThemeSwitcherThumb />
      </Thumb>
    </ThemeSwitcherWrapper>
  )
}

export default ThemeSwitcher
