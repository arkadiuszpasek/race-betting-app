export type RaceId = number
export type ParticipantId = number

export interface Race {
  id: RaceId
  name: string
  active: boolean
  participants: ParticipantId[]
}

export interface Participant {
  id: ParticipantId
  body: string
}
