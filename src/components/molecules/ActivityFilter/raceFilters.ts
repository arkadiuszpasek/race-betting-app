import { Race } from '../../../services/betsApiService/types'

export const enum RaceFilterType {
  Active = 'Active',
  Inactive = 'Inactive',
}

export interface RaceFilter {
  type: RaceFilterType
  predicate: (race: Race) => boolean
}

export const RaceActiveFilter: RaceFilter = {
  type: RaceFilterType.Active,
  predicate: (race: Race) => race.active,
}
export const RaceInactiveFilter: RaceFilter = {
  type: RaceFilterType.Inactive,
  predicate: (race: Race) => !race.active,
}
export const RaceFilters = [RaceInactiveFilter, RaceActiveFilter]
