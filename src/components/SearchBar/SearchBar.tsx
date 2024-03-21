import React, { FC } from 'react'
import { SearchBarWrapper } from './SearchBar.styled'
import { SearchBarProps } from './SearchBar.types'
import ReactSelect, { StylesConfig } from 'react-select'
import useAppSelector from 'hooks/useAppSelector'
import { selectGenreList } from 'store/movies/movies.selectors'
import { useTheme } from 'styled-components'

const SearchBar: FC<SearchBarProps> = () => {
  const genres = useAppSelector(selectGenreList)
  const theme = useTheme()
  const year = new Date().getFullYear()
  const years = Array.from(new Array(90), (val, index) => year - index)
  const optionsYears = years.map((year) =>
    Object.assign({ value: year, label: year })
  )
  const optionsGenres = genres.map((genre) =>
    Object.assign({ value: genre.id, label: genre.name })
  )

  const SelectStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      backgroundColor: theme.colors.background,
      borderRadius: 8,
      border: `solid 1px ${theme.colors.grey}`,
    }),
    placeholder: (styles) => ({
      ...styles,
      fontWeight: 500,
      color: theme.colors.grey,
    }),
    singleValue: (styles) => ({
      ...styles,
      fontSize: theme.text.mobile.md,
      fontWeight: 500,
      color: theme.colors.grey,
    }),
    indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
    menu: (styles) => ({
      ...styles,
      top: 30,
      borderRadius: 8,
      border: `solid 1px ${theme.colors.grey}`,
      backgroundColor: theme.colors.selectBackground,
      color: theme.colors.secondaryText,
    }),
    option: (styles, { isSelected }) => ({
      ...styles,
      textAlign: 'center',
      fontSize: isSelected ? 18 : theme.text.mobile.md,
      color: isSelected ? theme.colors.accent : theme.colors.text,
      backgroundColor: 'transparent',
    }),
  }

  return (
    <SearchBarWrapper>
      <ReactSelect
        options={optionsGenres}
        placeholder="Genre"
        styles={SelectStyles}
      />
      <ReactSelect
        options={optionsYears}
        defaultValue={{ type: 2024, label: 2024 }}
        styles={SelectStyles}
      />
    </SearchBarWrapper>
  )
}

export default SearchBar
