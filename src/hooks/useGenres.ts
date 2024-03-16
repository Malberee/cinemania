import { useSelector } from 'react-redux'
import { moviesSelectors } from 'store/movies'

export const useGenres = (genre_ids: number[]): string[] => {
  const genreList = useSelector(moviesSelectors.selectGenreList)

  const genres = genreList
    .filter((genre) => genre_ids.includes(genre.id))
    .map((genre) => genre.name)

    return genres
}
