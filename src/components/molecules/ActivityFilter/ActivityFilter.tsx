import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'
import { RaceFilter } from './raceFilters'

interface Props {
  onChange(values: RaceFilter): void
  selected: RaceFilter | undefined
  values: RaceFilter[]
}

export const RacesFilter = ({ selected, values, onChange }: Props) => {
  return (
    <ToggleButtonGroup
      color="info"
      size="small"
      value={selected}
      exclusive
      onChange={(_, updatedValue) => onChange(updatedValue)}
    >
      {values.map((value) => (
        <ToggleButton key={value.type} value={value}>
          {value.type}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}
