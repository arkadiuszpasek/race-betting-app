import { BetsApiService } from './BetsApiService'

const betsApiService = new BetsApiService()

const verifyIsCorrectParticipant = (value: unknown) => {
  expect(value).toBeDefined()
  expect(value).toHaveProperty('id')
  expect(value).toHaveProperty('body')
}
const verifyIsCorrectRace = (value: unknown) => {
  expect(value).toBeDefined()
  expect(value).toHaveProperty('id')
  expect(value).toHaveProperty('name')
  expect(value).toHaveProperty('active')
  expect(value).toHaveProperty('participants')
}

test.skip('should fetch all participants', (done) => {
  betsApiService.getParticipants().then(([participant]) => {
    verifyIsCorrectParticipant(participant)
    done()
  })
})
test.skip('should fetch single participant', (done) => {
  betsApiService.getParticipant(1).then((participant) => {
    verifyIsCorrectParticipant(participant)
    done()
  })
})
test.skip('should fetch all races', (done) => {
  betsApiService.getRaces().then(([race]) => {
    verifyIsCorrectRace(race)
    done()
  })
})
test.skip('should fetch single race', (done) => {
  betsApiService.getRace(1).then((race) => {
    verifyIsCorrectRace(race)
    done()
  })
})
