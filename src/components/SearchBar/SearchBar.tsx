import { FC, FormEvent, memo, useReducer } from 'react'
import {
  QueryInput,
  SearchBarContainer,
  SearchBarWrapper,
  SearchButton,
} from './SearchBar.styled'
import { Action, SearchBarProps, State } from './SearchBar.types'
import useAppSelector from 'hooks/useAppSelector'
import { selectGenreList } from 'store/movies/movies.selectors'
import Select from 'components/Select'
import Search from 'icons/Search'
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
    <SearchBarContainer onSubmit={handleSubmit} as="form">
      <SearchBarWrapper>
        <Select
          placeholder="Genre"
          isClearable
          options={optionsGenres}
          onValueChange={(value: (number | string)[]) =>
            handleChange('genre', value)
          }
          key="genre"
        />
        <Select
          placeholder="Year"
          options={optionsYears}
          isSingleValue
          onValueChange={(value: (number | string)[]) =>
            handleChange('year', value)
          }
          key="year"
        />
        <QueryInput
          placeholder="Search"
          name="query"
          defaultValue={searchParams.get('query') || ''}
          onChange={(e) => handleChange('query', e.target.value)}
          tabIndex={0}
        />

        <SearchButton $isIconOnly type="submit">
          <Search />
        </SearchButton>
      </SearchBarWrapper>
    </SearchBarContainer>
  )
})

export default SearchBar
