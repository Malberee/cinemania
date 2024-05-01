import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'components/App.tsx'
import { Provider } from 'react-redux'
import store from 'store/store.ts'
import ThemeProvider from 'components/ThemeProvider'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter basename="/cinemania/">
      <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
)
