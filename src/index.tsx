import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Services, ServicesContext } from './models/useServices'
import { BetsApiService } from './services/betsApiService/BetsApiService'
import { RacesDataProvider } from './models/useRacesData'
import { SWRConfig } from 'swr'
import { HashRouter } from 'react-router-dom'
import { AppRouting } from './AppRouting'
import { ParticipantsDataProvider } from './models/useParticipantsData'

const localStorageProvider = () => {
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'))

  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()))
    localStorage.setItem('app-cache', appCache)
  })

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
            <ParticipantsDataProvider>
              <AppRouting />
            </ParticipantsDataProvider>
          </RacesDataProvider>
        </ServicesContext.Provider>
      </SWRConfig>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
