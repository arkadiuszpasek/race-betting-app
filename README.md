![react](https://img.shields.io/badge/React-v17-blue)
![typescript](https://img.shields.io/badge/typescript-blue)
![cra](https://img.shields.io/badge/create--react--app-blue)
![eslint](https://img.shields.io/badge/eslint-blue)
![prettier](https://img.shields.io/badge/prettier-blue)
![mui](https://img.shields.io/badge/MUI-yellowgreen)
![router](https://img.shields.io/badge/react--router-yellowgreen)
![lodash](https://img.shields.io/badge/lodash-yellowgreen)
![swr](https://img.shields.io/badge/swr-yellowgreen)

# Race betting app

## Usage

### Demo

See demo hosted [there](https://arkadiuszpasek.github.io/race-betting-app)

### Local

Running application:

- Clone repo
- cd `race-betting-app`
- `yarn install`
- `yarn start`

App built with node `v16.13.2` (current LTS)

### Roadmap

- Race screen is totally uncontrolled (inputs are not saved), they need to be stored in the app's state
- user can place bet with multiple winners etc., he should be able to choose just one winner etc.
- `Bet` button should be disabled until user chooses his bet for first, second and third place
- rethink and re-do caching/persistance approach

### Notes

#### App state persistence

Application uses react-router to navigate to different screens, therefore refreshing will navigate to same screen.  
Application uses `swr` (cahed in local-storage) for stale-while-revalidate approach:

- what it does: uses stale values when saved
- what it should do: use stale values and display them to user, but revalidate to present new ones
- why it does what it does and not what it should do: we use https://my-json-server.typicode.com/hdjfye/bet-api, no need to overload it with unecessary queries for demo app

#### Hash router
Used because does generate that many problems when hosting on github pages
