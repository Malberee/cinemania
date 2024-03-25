import { IColors, ITheme } from './theme.types'

const text = {
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
}

const gradients = {
  linearGradientUp: 'linear-gradient(145deg, #ffc226 0%, #f84119 100%)',
  linearGradientDown:
    'linear-gradient(145deg, #f84119 0%, rgba(248, 159, 25, 0.68) 100%)',
}

const staticColors = {
  grey: '#b7b7b7',
  white: '#ffffff',
  darkBg: '#111111'
}

const media = {
  desktop: '1280px',
  tablet: '768px',
  mobile: '320px',
}

export const common: Omit<ITheme, 'colors' | 'toggleTheme'> = {
  text,
  gradients,
  staticColors,
  media,
}

export const light: IColors = {
  background: '#ffffff',
  secondaryBackground: '#ffffff',
  accent: '#F87719',
  secondaryBlack: '#282828',
  grey: '#595959',
  text: '#000000',
  secondaryText: '#282828',
  backdrop: 'rgba(0, 0, 0, 0.2)',
  black: '#000000',
  voteSpanBackground: '#f8f8f8',
  selectBackground: '#f8f8f8',
}

export const dark: IColors = {
  background: '#111111',
  secondaryBackground: '#000000',
  accent: '#F87719',
  secondaryBlack: '#111111',
  grey: '#b7b7b7',
  text: '#ffffff',
  secondaryText: '#f8f8f8',
  backdrop: 'rgba(0, 0, 0, 0.2)',
  black: '#ffffff',
  voteSpanBackground: '#ffffff',
  selectBackground: '#1c1c1c'
}
