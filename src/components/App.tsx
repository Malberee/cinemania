import { Route, Routes } from 'react-router-dom'
import GlobalStyles from './global'
import Layout from './Layout'
import { lazy, Suspense, useEffect } from 'react'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { moviesOperations } from 'store/movies'
import { trendingMoviesOperations } from 'store/trendingMovies'
import MainLoader from './MainLoader'
import NotFound from 'pages/NotFound'
import { Toaster } from 'react-hot-toast'
import { initAuth } from 'store/user/operation'
const Catalog = lazy(() => import('pages/Catalog'))
const Home = lazy(() => import('pages/Home'))
const Library = lazy(() => import('pages/Library'))

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // Such a decision is related to this problem: https://stackoverflow.com/questions/62025911/redux-hooks-usedispatch-in-useeffect-calling-action-twice

    const init = setTimeout(() => {
      dispatch(initAuth())
      dispatch(trendingMoviesOperations.fetchTrendingMovies())
      dispatch(moviesOperations.fetchGenres())
    }, 0)

    return () => clearTimeout(init)
  }, [])

  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<MainLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="library" element={<Library />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster position="top-right" />
    </>
  )
}

export default App
