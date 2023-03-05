<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest
  
  <p align="center">A NestJs <a href="http://nodejs.org" target="_blank"></a> app presenting authentication over users with a schema based mongoose document and AuthGuard roles.</p>

## Requirments

This project supposes that docker, docker-compose and mongodb installed.  

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
# watch mode
# production mode

docker-compose up -d --build
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

  Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
