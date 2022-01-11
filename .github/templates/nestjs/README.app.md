# ${REPO_NAME}

${REPO_DESCRIPTION}

## Prerequisites

- Minimum [NodeJS](https://nodejs.org) version required: `16`
- Minimum [Yarn](https://yarnpkg.com) version required: `1.20`

## Install

```bash
yarn
```

## Start

```bash
# development
yarn start api
yarn start worker

# watch mode
yarn start:dev api
yarn start:dev worker

# production mode
yarn start:prod api
yarn start:prod worker
```

## Build

```bash
# production mode
yarn build
```

## Test

```bash
# unit tests
yarn test

# e2e tests
yarn test:e2e
```
