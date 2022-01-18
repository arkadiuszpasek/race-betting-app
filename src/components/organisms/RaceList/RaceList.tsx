import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Race } from '../../../services/betsApiService/types'
import { RoutingService } from '../../../services/routingService/RoutingService'

interface Props {
  races: Race[]
}
export const RaceList = ({ races }: Props) => {
  return (
    <List>
      {races.map((race) => (
        <Link key={race.id} to={RoutingService.createRaceDetailsUrl(race.id)}>
          <ListItem disablePadding divider>
            <ListItemButton>
              <ListItemText inset primary={race.name} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  )
}
