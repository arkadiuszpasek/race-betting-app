import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RaceDetailsPage } from './components/pages/RaceDetailsPage/RaceDetailsPage'
import { RaceListPage } from './components/pages/RaceListPage/RaceListPage'
import { RoutingService } from './services/routingService/RoutingService'

export const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<RaceListPage />} />
      <Route
        path={RoutingService.raceDetailsUrlTemplate}
        element={<RaceDetailsPage />}
      />
    </Routes>
  )
}
