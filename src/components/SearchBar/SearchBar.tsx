import { FC, FormEvent, memo, useCallback, useReducer } from 'react'
import { Input, SearchBarWrapper } from './SearchBar.styled'
import { Action, SearchBarProps, State } from './SearchBar.types'
import useAppSelector from 'hooks/useAppSelector'
import { selectGenreList } from 'store/movies/movies.selectors'
import Select from 'components/Select'
import Button from 'components/Button'
import Search from 'icons/Search'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { moviesOperations } from 'store/movies'
import useYears from 'hooks/useYears'
import { useSearchParams } from 'react-router-dom'

const reducer = (state: State, action: Action) => {
  return { ...state, [action.type]: action.value }
}

const SearchBar: FC<SearchBarProps> = memo(() => {
  const [filters, dispatchFilters] = useReducer(reducer, {
    year: [],
    genre: [],
    query: '',
  })
  const genres = useAppSelector(selectGenreList)
  const years = useYears(1930, new Date().getFullYear())
  const [searchParams, setSearchParams] = useSearchParams()

  const optionsYears = years.map((year) =>
    Object.assign({ value: year, label: year })
  )
  const optionsGenres = genres.map((genre) =>
    Object.assign({ value: genre.id, label: genre.name })
  )

  const handleChange = (type: keyof State, value: Action['value']) => {
    dispatchFilters({ type, value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    setSearchParams({
      query: filters.query,
      year: filters.year.join(','),
      genre: filters.genre.join(','),
    })
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
        defaultValue={searchParams.get('query') || ''}
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
