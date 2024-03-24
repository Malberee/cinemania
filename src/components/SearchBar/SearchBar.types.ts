export interface SearchBarProps {}

export interface State {
  year: string
  genre: string[]
  query: string
}

export interface Action {
  type: keyof State
  value: string | string[]
}
