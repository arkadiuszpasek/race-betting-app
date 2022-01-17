import {
  Breadcrumbs,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'
import { useRacesData } from '../../../models/useRacesData'
import { Race } from '../../../services/betsApiService/types'
import { RoutingService } from '../../../services/routingService/RoutingService'
import { BreadcrumbLink } from '../../atoms/BreadcrumbLink/BreadcrumbLink'
import { RaceList } from '../../organisms/RaceList/RaceList'

export const RaceListPage = () => {
  const { data, error } = useRacesData()

  const renderError = () => {
    return <div>Error occurred {error?.message}</div>
  }

  const renderLoading = () => {
    return <div>Error occurred</div>
  }

  const renderRaces = (races: Race[]) => {
    return (
      <RaceList
        races={races}
        generateLink={(race) => RoutingService.createRaceDetailsUrl(race.id)}
      />
    )
  }

  const renderContent = () => {
    if (!data) {
      return renderLoading()
    }
    if (data) {
      return renderRaces(data)
    }

    return renderError()
  }

  return (
    <Container sx={{ paddingY: 4 }}>
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
