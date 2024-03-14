import { Provider } from 'react-redux'

import { App } from '@/application'
import store, { persistor } from '@/redux/store'
import { createRoot } from 'react-dom/client'
import { PersistGate } from 'redux-persist/es/integration/react'

import './styles/index.scss'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/700.css'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <PersistGate loading={'Loading...'} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
