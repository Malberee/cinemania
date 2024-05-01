import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'components/App.tsx'
import { Provider } from 'react-redux'
import store from 'store/store.ts'
import ThemeProvider from 'components/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/cinemania">
      <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
