import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useParticipantsData } from '../../../models/useParticipantsData'
import { useRacesData } from '../../../models/useRacesData'
import { Participant, ParticipantId, Race } from '../../../services/betsApiService/types'
import { RoutingService } from '../../../services/routingService/RoutingService'
import { notEmpty } from '../../../utils/array'
import { BreadcrumbLink } from '../../atoms/BreadcrumbLink/BreadcrumbLink'
import { ParticipantsList } from '../../organisms/ParticipantsList/ParticipantsList'

export const RaceDetailsPage = () => {
  const raceId = useParams()[RoutingService.raceDetailsKey]
  const { data: races } = useRacesData()
  const { data: participants } = useParticipantsData();
  const maybeRace = races?.find((r) => r.id.toString() === raceId)

  const renderRaceContent = (race: Race, participants: {[id: ParticipantId]: Participant | undefined}) => {
    const maybeRaceParticipants = race.participants.map(participantId => participants[participantId]);
    const raceParticipants = maybeRaceParticipants.filter(notEmpty);

    if (raceParticipants.length !== maybeRaceParticipants.length) {
      return <Typography>Couldn't find all race participants! :(</Typography>
    }

    return <>
      <ParticipantsList participants={raceParticipants} />
      <Box display="flex" justifyContent="flex-end">
        <TextField id="bet-amount" label="Bet amount" placeholder='$2137.44' />
        <Button variant="outlined" sx={{ marginLeft: 2, paddingX: 18 }}>Bet</Button>
      </Box>
    </>
  };

  const renderRace = (race: Race) => {
    return (
      <>
      <Typography variant="h4">
          {race.name} - {race.active ? "active" : "inactive"}
        </Typography>
        <Divider />
        {participants && renderRaceContent(race, participants)}
      </>
    )
  }


  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Stack spacing={2}>
        <Breadcrumbs>
          <BreadcrumbLink to={RoutingService.baseUrl} text="Races" />
          <Typography color="text.primary">{maybeRace?.name}</Typography>
        </Breadcrumbs>
        <Divider />
        {maybeRace && renderRace(maybeRace)}
      </Stack>
    </Container>
  )
}
