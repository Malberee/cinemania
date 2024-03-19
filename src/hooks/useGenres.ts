import { moviesSelectors } from 'store/movies'
import useAppSelector from './useAppSelector'

export const useGenres = (genre_ids: number[]): string[] => {
  const genreList = useAppSelector(moviesSelectors.selectGenreList)

  const genres = genreList
    .filter((genre) => genre_ids.includes(genre.id))
    .map((genre) => genre.name)

  return genres
}
