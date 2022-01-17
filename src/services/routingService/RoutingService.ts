import { RaceId } from '../betsApiService/types'

export class RoutingService {
  public static readonly racesUrl = '/'
  public static readonly raceIdKey = 'raceId'
  public static readonly raceDetailsUrlBase = '/race'

  public static readonly raceDetailsUrlTemplate = `${this.raceDetailsUrlBase}/:${this.raceIdKey}`

  public static createRaceDetailsUrl(raceId: RaceId): string {
    return `${this.raceDetailsUrlBase}/${raceId}`
  }
}
