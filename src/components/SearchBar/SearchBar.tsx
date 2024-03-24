import { FC, FormEvent, memo, useCallback, useEffect, useReducer } from 'react'
import { Input, SearchBarWrapper } from './SearchBar.styled'
import { Action, SearchBarProps, State } from './SearchBar.types'
import useAppSelector from 'hooks/useAppSelector'
import { selectGenreList } from 'store/movies/movies.selectors'
import Select from 'components/Select'
import Button from 'components/Button'
import Search from 'icons/Search'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { moviesOperations } from 'store/movies'

const reducer = (state: State, action: Action) => {
  return { ...state, [action.type]: action.value }
}

const SearchBar: FC<SearchBarProps> = memo(() => {
  const [state, dispatchFilters] = useReducer(reducer, {
    year: '',
    genre: [],
    query: '',
  })
  const genres = useAppSelector(selectGenreList)
  const dispatch = useAppDispatch()
  const year = new Date().getFullYear()
  const years = Array.from(new Array(90), (_, index) => year - index)
  const optionsYears = years.map((year) =>
    Object.assign({ value: year, label: year })
  )
  const optionsGenres = genres.map((genre) =>
    Object.assign({ value: genre.id, label: genre.name })
  )

  const handleChange = (type: keyof State, value: string) => {
    dispatchFilters({ type, value })
  }

  useEffect(() => {
    console.log(state)
  }, [state])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('text')

    dispatch(moviesOperations.fetchMovies({ type: 'byQuery', query: state }))
  }

  return (
    <SearchBarWrapper onSubmit={handleSubmit} as="form">
      <Select
        placeholder="Genre"
        isClearable
        options={optionsGenres}
        onValueChange={useCallback(
          (value: (number | string)[]) => handleChange('genre', value),
          []
        )}
        key="genre"
      />
      <Select
        placeholder="Year"
        options={optionsYears}
        isSingleValue
        onValueChange={useCallback(
          (value: (number | string)[]) => handleChange('year', value),
          []
        )}
        key="year"
      />
      <Input
        placeholder="Search"
        name="query"
        onChange={(e) => handleChange('query', e.target.value)}
        tabIndex={0}
      />
      <Button $isIconOnly type="submit">
        <Search />
      </Button>
    </SearchBarWrapper>
  )
})

export default SearchBar
