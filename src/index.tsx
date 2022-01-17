import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Services, ServicesContext } from './models/useServices'
import { BetsApiService } from './services/betsApiService/BetsApiService'
import { RacesDataProvider } from './models/useRacesData'
import { SWRConfig } from 'swr'
import { HashRouter } from 'react-router-dom'
import { AppRouting } from './AppRouting'

const localStorageProvider = () => {
  // When initializing, we restore the data from `localStorage` into a map.
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'))

  // Before unloading the app, we write back all the data into `localStorage`.
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()))
    localStorage.setItem('app-cache', appCache)
  })

  // We still use the map for write & read for performance.
  return map
}
const services: Services = {
  betsService: new BetsApiService(),
}
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <SWRConfig value={{ provider: localStorageProvider }}>
        <ServicesContext.Provider value={services}>
          <RacesDataProvider>
            <AppRouting />
          </RacesDataProvider>
        </ServicesContext.Provider>
      </SWRConfig>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)