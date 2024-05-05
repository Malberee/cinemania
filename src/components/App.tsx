import { Route, Routes } from 'react-router-dom'
import GlobalStyles from './global'
import Layout from './Layout'
import { lazy, Suspense, useEffect } from 'react'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { moviesOperations } from 'store/movies'
import useAppSelector from 'hooks/useAppSelector'
import { selectGenreList } from 'store/movies/movies.selectors'
import { trendingMoviesOperations } from 'store/trendingMovies'
import MainLoader from './MainLoader'
import NotFound from 'pages/NotFound'
const Catalog = lazy(() => import('pages/Catalog'))
const Home = lazy(() => import('pages/Home'))
const Library = lazy(() => import('pages/Library'))

const App = () => {
  const dispatch = useAppDispatch()
  const genres = useAppSelector(selectGenreList)

  useEffect(() => {
    dispatch(trendingMoviesOperations.fetchTrendingMovies())

    if (!genres.length) {
      dispatch(moviesOperations.fetchGenres())
    }
  }, [dispatch])

  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<MainLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="library" element={<Library />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
