import {
  Breadcrumbs,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useRacesData } from '../../../models/useRacesData'
import { RoutingService } from '../../../services/routingService/RoutingService'
import { BreadcrumbLink } from '../../atoms/BreadcrumbLink/BreadcrumbLink'

export const RaceDetailsPage = () => {
  const raceId = useParams()[RoutingService.raceIdKey]
  const { data } = useRacesData()
  const race = data?.find((r) => r.id.toString() === raceId)

  const renderContent = () => <></>

  return (
    <Container sx={{ paddingY: 4 }}>
      <Stack spacing={2}>
        <Breadcrumbs>
          <BreadcrumbLink to={RoutingService.racesUrl} text="Races" />
          <Typography color="text.primary">{race?.name}</Typography>
        </Breadcrumbs>
        <Divider />
        {renderContent()}
      </Stack>
    </Container>
  )
}
