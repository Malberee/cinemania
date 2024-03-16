import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Catalog from 'pages/Catalog'
import Home from 'pages/Home'
import Library from 'pages/Library'
import Layout from './Layout'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="library" element={<Library />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
