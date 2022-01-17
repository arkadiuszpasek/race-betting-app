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

test('should fetch all participants', (done) => {
  betsApiService.getParticipants().then(([participant]) => {
    console.log(participant)
    verifyIsCorrectParticipant(participant)
    done()
  })
})
test('should fetch single participant', (done) => {
  betsApiService.getParticipant(1).then((participant) => {
    console.log(participant)
    verifyIsCorrectParticipant(participant)
    done()
  })
})
test('should fetch all races', (done) => {
  betsApiService.getRaces().then(([race]) => {
    console.log(race)
    verifyIsCorrectRace(race)
    done()
  })
})
test('should fetch single race', (done) => {
  betsApiService.getRace(1).then((race) => {
    console.log(race)
    verifyIsCorrectRace(race)
    done()
  })
})
