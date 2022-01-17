import { fromPairs } from 'lodash'
import { Participant, ParticipantId, Race, RaceId } from './types'

export class BetsApiService {
  private basePath: string =
    'https://my-json-server.typicode.com/hdjfye/bet-api'

  getRaces(): Promise<Race[]> {
    return fetch(`${this.basePath}/races`).then((res) => res.json())
  }
  getRace(id: RaceId): Promise<Race> {
    return fetch(`${this.basePath}/races/${id}`).then((res) => res.json())
  }

  getParticipants(): Promise<Participant[]> {
    return fetch(`${this.basePath}/participants`).then((res) => res.json())
  }
  getParticipantsAsMap(): Promise<{ [id: ParticipantId]: Participant }> {
    return this.getParticipants()
      .then((values) => values.map((value) => [value.id, value]))
      .then(fromPairs)
  }
  getParticipant(id: ParticipantId): Promise<Participant> {
    return fetch(`${this.basePath}/participants/${id}`).then((res) =>
      res.json()
    )
  }
}
