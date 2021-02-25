# Nest + MySQL API

```
npm install

npm start
```

## Nest Commands

```
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Credentials in `db/credentials.ts`

Example data:

```
export default {
  host: 'example.com',
  user: 'johndoe',
  password: 'JohnDoe80!',
  database: 'system'
};
```