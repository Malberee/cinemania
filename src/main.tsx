import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'components/App.tsx'
import { Provider } from 'react-redux'
import store from 'store/store.ts'
import ThemeProvider from 'components/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
