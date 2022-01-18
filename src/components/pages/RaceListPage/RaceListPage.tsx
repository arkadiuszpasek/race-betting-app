import {
  Breadcrumbs,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useRacesData } from '../../../models/useRacesData'
import { Race } from '../../../services/betsApiService/types'
import { RacesFilter } from '../../molecules/ActivityFilter/ActivityFilter'
import {
  RaceActiveFilter,
  RaceFilter,
  RaceFilters,
} from '../../molecules/ActivityFilter/raceFilters'
import { RaceList } from '../../organisms/RaceList/RaceList'

export const RaceListPage = () => {
  const { data, error } = useRacesData()
  const [filter, setFilter] = useState<RaceFilter | undefined>(RaceActiveFilter)

  const renderError = () => {
    return <div>Error occurred {error?.message}</div>
  }

  const renderLoading = () => {
    return <div>Loading...</div>
  }

  const renderRaces = (races: Race[]) => {
    const filteredRaces = filter
      ? races.filter((race) => filter.predicate(race))
      : races

    return (
      <>
        <RacesFilter
          selected={filter}
          values={RaceFilters}
          onChange={setFilter}
        />
        <RaceList races={filteredRaces} />
      </>
    )
  }

  const renderContent = () => {
    if (!data) {
      return renderLoading()
    }
    if (data && !error) {
      return renderRaces(data)
    }

    return renderError()
  }

  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Stack spacing={2}>
        <Breadcrumbs>
          <Typography color="text.primary">Races</Typography>
        </Breadcrumbs>
        <Divider />
        {renderContent()}
      </Stack>
    </Container>
  )
}
