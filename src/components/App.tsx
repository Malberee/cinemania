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
import { userOperations, userSelectors } from 'store/user'
import { useTheme } from 'styled-components'
import PrivateRoute from './PrivateRoute'
import useAppSelector from 'hooks/useAppSelector'
const Catalog = lazy(() => import('pages/Catalog'))
const Home = lazy(() => import('pages/Home'))
const Library = lazy(() => import('pages/Library'))

const App = () => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(userSelectors.selectIsLoading)
  const { colors } = useTheme()

  useEffect(() => {
    // Such a decision is related to this problem: https://stackoverflow.com/questions/62025911/redux-hooks-usedispatch-in-useeffect-calling-action-twice

    const init = setTimeout(() => {
      dispatch(userOperations.initAuth())
      dispatch(trendingMoviesOperations.fetchTrendingMovies())
      dispatch(moviesOperations.fetchGenres())
    }, 0)

    return () => clearTimeout(init)
  }, [])

  return (
    <>
      <GlobalStyles />
      {isLoading ? (
        <MainLoader />
      ) : (
        <Suspense fallback={<MainLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="catalog" element={<Catalog />} />
              <Route
                path="library"
                element={
                  <PrivateRoute>
                    <Library />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      )}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 2000,
          style: {
            backgroundColor: colors.background,
            color: colors.text,
          },
        }}
      />
    </>
  )
}

export default App
