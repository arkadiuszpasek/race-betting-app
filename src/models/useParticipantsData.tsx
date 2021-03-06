import React, { createContext, useContext } from 'react'
import useSWR from 'swr'
import { Participant, ParticipantId } from '../services/betsApiService/types'
import { useServices } from './useServices'

interface ProviderValue {
  error?: Error
  data?: { [id: ParticipantId]: Participant | undefined }
}
const ParticipantsDataContext = createContext<ProviderValue | undefined>(
  undefined
)
ParticipantsDataContext.displayName = 'ParticipantsDataContext' // for name to display in dev tools

export const ParticipantsDataProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const { betsService } = useServices()

  const { data, error } = useSWR(
    'participants',
    () => betsService.getParticipantsAsMap(),
    { revalidateIfStale: false, revalidateOnFocus: false }
  )

  return (
    <ParticipantsDataContext.Provider value={{ data, error }}>
      {children}
    </ParticipantsDataContext.Provider>
  )
}

export const useParticipantsData = (): ProviderValue => {
  const context = useContext(ParticipantsDataContext)

  if (context === undefined) {
    throw new Error(
      'useParticipantsData must be used within a ParticipantsDataContext'
    )
  }

  return context as ProviderValue
}
