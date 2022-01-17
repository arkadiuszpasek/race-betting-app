import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Race } from '../../../services/betsApiService/types'

interface Props {
  races: Race[]
  generateLink(race: Race): string
}
export const RaceList = ({ races, generateLink }: Props) => {
  return (
    <List>
      {races.map((race) => (
        <Link key={race.id} to={generateLink(race)}>
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
