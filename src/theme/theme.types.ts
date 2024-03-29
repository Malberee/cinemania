type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface IColors {
  background: string
  secondaryBackground: string
  accent: string
  secondaryBlack: string
  grey: string
  text: string
  secondaryText: string
  backdrop: string
  black: string
  voteSpanBackground: string
  selectBackground: string
}

export interface ITheme {
  colors: IColors
  text: {
    desktop: Record<Size, number>
    tablet: Record<Size, number>
    mobile: Record<Size, number>
  }
  gradients: {
    linearGradientUp: string
    linearGradientDown: string
  }
  staticColors: {
    grey: string
    white: string
    darkBg: string
  }
  media: {
    desktop: string
    tablet: string
    mobile: string
  }
  toggleTheme: () => void
}
