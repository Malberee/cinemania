import { FC, useEffect, useState } from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import { ThemeProviderProps, ThemeVariants } from './ThemeProvider.types'
import * as themes from 'theme/theme'

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeVariants>(
    (localStorage.getItem('theme') || 'light') as ThemeVariants
  )

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <Provider theme={{ colors: themes[theme], toggleTheme }}>
      {children}
    </Provider>
  )
}

export default ThemeProvider
