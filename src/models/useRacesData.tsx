import React, { createContext, useContext } from 'react'
import useSWR from 'swr'
import { Race } from '../services/betsApiService/types'
import { useServices } from './useServices'

interface ProviderValue {
  error?: Error
  data?: Race[]
}
const RacesDataContext = createContext<ProviderValue | undefined>(undefined)
RacesDataContext.displayName = 'RacesDataContext' // for name to display in dev tools

export const RacesDataProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const { betsService } = useServices()

  const { data, error } = useSWR('races', () => betsService.getRaces(), {
    revalidateIfStale: true,
    revalidateOnFocus: false,
  })

  return (
    <RacesDataContext.Provider value={{ data, error }}>
      {children}
    </RacesDataContext.Provider>
  )
}

export const useRacesData = (): ProviderValue => {
  const context = useContext(RacesDataContext)

  if (context === undefined) {
    throw new Error('useRacesData must be used within a RacesDataContext')
  }

  return context as ProviderValue
}
