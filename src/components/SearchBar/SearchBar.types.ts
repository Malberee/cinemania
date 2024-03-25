export interface SearchBarProps {}

export interface State {
  query: string
  year: number[]
  genre: number[]
}

export interface Action {
  type: keyof State
  value: (string | number) | (string | number)[]
}
