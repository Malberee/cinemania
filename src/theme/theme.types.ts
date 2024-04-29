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
  toggleTheme: () => void
}
