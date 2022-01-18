import {
  Box,
  FormControlLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import React from 'react'
import {
  Participant,
  ParticipantId,
} from '../../../services/betsApiService/types'
import { BetType } from './betTypes'

interface Props {
  participants: Participant[]
  selectedFirstPlace?: ParticipantId
  selectedSecondPlace?: ParticipantId
  selectedThirdPlace?: ParticipantId
}
export const ParticipantsList = ({
  participants,
  selectedFirstPlace,
  selectedSecondPlace,
  selectedThirdPlace,
}: Props) => {
  return (
    <List>
      {participants.map(({ id, body }) => (
        <ListItem key={id} divider>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography>{body}</Typography>
            <RadioGroup row name={`row-radio-buttons-group-${id}`}>
              <FormControlLabel
                value={BetType.Winner}
                control={<Radio />}
                label={BetType.Winner}
              />
              <FormControlLabel
                value={BetType.SecondPlace}
                control={<Radio />}
                label={BetType.SecondPlace}
              />
              <FormControlLabel
                value={BetType.ThirdPlace}
                control={<Radio />}
                label={BetType.ThirdPlace}
              />
            </RadioGroup>
          </Box>
        </ListItem>
      ))}
    </List>
  )
}
