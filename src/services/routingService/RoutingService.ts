import { RaceId } from '../betsApiService/types'

export class RoutingService {
  public static readonly baseUrl = '/'
  public static readonly raceDetailsKey = 'raceId'
  public static readonly raceDetailsUrlBase = '/race'

  public static readonly raceDetailsUrlTemplate = `${this.raceDetailsUrlBase}/:${this.raceDetailsKey}`

  public static createRaceDetailsUrl(raceId: RaceId): string {
    return `${this.raceDetailsUrlBase}/${raceId}`
  }
}
