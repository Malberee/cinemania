// import './App.scss'
import { Route, Routes } from 'react-router-dom'
import GlobalStyles from './global'
import Catalog from 'pages/Catalog'
import Home from 'pages/Home'
import Library from 'pages/Library'
import Layout from './Layout'
import Modal from './Modal'
import { useState } from 'react'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>OPEN MODAL</button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>tsfsdfsdfsfsdfsdf</Modal>
      )}
      <GlobalStyles />
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
