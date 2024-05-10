import { FC } from 'react'
import { ThemeSwitcherWrapper, Thumb } from './ThemeSwitcher.styled'
import { ThemeSwitcherProps } from './ThemeSwitcher.types'
import ThemeSwitcherThumb from 'icons/ThemeSwitcherThumb'
import Sun from 'icons/Sun'
import Moon from 'icons/Moon'
import { useTheme } from 'styled-components'

const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
  const { current, toggleTheme } = useTheme()

  return (
    <ThemeSwitcherWrapper>
      <input
        type="checkbox"
        checked={current === 'dark'}
        onChange={toggleTheme}
      />
      <Moon />
      <Sun />
      <Thumb>
        <ThemeSwitcherThumb />
      </Thumb>
    </ThemeSwitcherWrapper>
  )
}

export default ThemeSwitcher
