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
  arrowPaginate: string
}

export interface ITheme {
  current: 'dark' | 'light'
  colors: IColors
  toggleTheme: () => void
}
