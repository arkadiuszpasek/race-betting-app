import { createContext, useContext } from 'react'
import { BetsApiService } from '../services/betsApiService/BetsApiService'

export interface Services {
  betsService: BetsApiService
}
export const ServicesContext = createContext<Services | undefined>(undefined)
ServicesContext.displayName = 'ServicesContext' // for name to display in dev tools

export const useServices = (): Services => {
  const context = useContext(ServicesContext)

  if (context === undefined) {
    throw new Error('useServices must be used within a ServicesContext')
  }

  return context as Services
}
