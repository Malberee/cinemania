import { FC } from 'react'
import { Input, SearchBarWrapper } from './SearchBar.styled'
import { SearchBarProps } from './SearchBar.types'
import useAppSelector from 'hooks/useAppSelector'
import { selectGenreList } from 'store/movies/movies.selectors'
import Select from 'components/Select'
import Button from 'components/Button'
import Search from 'icons/Search'

const SearchBar: FC<SearchBarProps> = () => {
  const genres = useAppSelector(selectGenreList)
  const year = new Date().getFullYear()
  const years = Array.from(new Array(90), (_, index) => year - index)
  const optionsYears = years.map((year) =>
    Object.assign({ value: year, label: year })
  )
  const optionsGenres = genres.map((genre) =>
    Object.assign({ value: genre.id, label: genre.name })
  )

  return (
    <SearchBarWrapper>
      <Select placeholder="Genre" options={optionsGenres} key={`genre`} />
      <Select
        placeholder="Year"
        options={optionsYears}
        isSingleValue
        key={`year`}
      />
      <Input placeholder="Search" />
      <Button $isIconOnly>
        <Search />
      </Button>
    </SearchBarWrapper>
  )
}

export default SearchBar
