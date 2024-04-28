import { Route, Routes } from 'react-router-dom'
import GlobalStyles from './global'
import Catalog from 'pages/Catalog'
import Home from 'pages/Home'
import Library from 'pages/Library'
import Layout from './Layout'
import { useEffect } from 'react'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { moviesOperations } from 'store/movies'
import useAppSelector from 'hooks/useAppSelector'
import { selectGenreList } from 'store/movies/movies.selectors'
import MovieDetailsModal from './MovieDetailsModal'

const App = () => {
  const dispatch = useAppDispatch()
  const genres = useAppSelector(selectGenreList)

  useEffect(() => {
    dispatch(moviesOperations.fetchTrendingMovies())

    if (!genres.length) {
      dispatch(moviesOperations.fetchGenres())
    }
  }, [dispatch])

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}>
            <Route path=":movieId" element={<MovieDetailsModal />} />
          </Route>
          <Route path="catalog" element={<Catalog />}>
            <Route path=":movieId" element={<MovieDetailsModal />} />
          </Route>
          <Route path="library" element={<Library />}>
            <Route path=":movieId" element={<MovieDetailsModal />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
