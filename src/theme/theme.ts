import { IColors, ITheme } from './theme.types'

export const common: Omit<ITheme, 'colors' | 'toggleTheme'> = {
  text: {
    desktop: {
      xs: 14,
      sm: 16,
      md: 20,
      lg: 28,
      xl: 64,
    },
    tablet: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 24,
      xl: 52,
    },
    mobile: {
      xs: 10,
      sm: 12,
      md: 14,
      lg: 20,
      xl: 40,
    },
  },
  gradients: {
    linearGradientUp: 'linear-gradient(145deg, #ffc226 0%, #f84119 100%)',
    linearGradientDown:
      'linear-gradient(145deg, #f84119 0%, rgba(248, 159, 25, 0.68) 100%)',
  },
  staticColors: {
    grey: '#b7b7b7',
    white: '#ffffff'
  },
}

export const light: IColors = {
  background: '#ffffff',
  accent: '#F87719',
  secondaryBlack: '#282828',
  grey: '#595959',
  white: '#ffffff',
  secondaryText: '#282828',
  backdrop: 'rgba(0, 0, 0, 0.2)',
}

export const dark: IColors = {
  background: '#111111',
  accent: '#F87719',
  secondaryBlack: '#282828',
  grey: '#b7b7b7',
  white: '#000000',
  secondaryText: '#f8f8f8',
  backdrop: 'rgba(0, 0, 0, 0.2)',
}
