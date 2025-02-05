# My Nest API

Un'API RESTful realizzata con **NestJS** e **PostgreSQL**, completamente containerizzata con **Docker**. Questo progetto fornisce funzionalità di autenticazione utenti, gestione dei post e altre operazioni CRUD. 

## Requisiti

Per eseguire il progetto, avrai bisogno di:

- **Docker** e **Docker Compose** installati sul tuo sistema.

## Clonare il Progetto

Per iniziare, clona il repository del progetto sulla tua macchina locale eseguendo il seguente comando:

git clone https://github.com/tuo-username/my-nest-api.git cd my-nest-api

## Configurazione e Avvio con Docker

Il progetto è già configurato per essere eseguito tramite Docker. Segui questi passaggi:

1. **Creare e avviare il container Docker con PostgreSQL e l'applicazione NestJS:**

    Esegui il comando seguente per costruire e avviare i container tramite **Docker Compose**:

    ```
    docker-compose up --build
    ```

    Questo comando farà partire due container:
    - Un container per il database **PostgreSQL**.
    - Un container per l'applicazione **NestJS**.

    Il parametro `--build` forzerà la ricostruzione delle immagini Docker se hai modificato il codice o i file di configurazione.

2. **Verifica che i container siano in esecuzione:**

    Puoi verificare che i container siano in esecuzione con il comando:

    ```
    docker ps
    ```

    Dovresti vedere il container di PostgreSQL e il container dell'applicazione NestJS elencati.

3. **Accedere al database (opzionale):**

    Se desideri interagire con il database PostgreSQL nel container, puoi entrare nel container e usare `psql` con il seguente comando:

    ```
    docker exec -it <nome-container-postgresql> psql -U postgres
    ```

    Sostituisci `<nome-container-postgresql>` con l'ID del container di PostgreSQL che puoi trovare con il comando `docker ps`.

## Test delle API con Swagger

Una volta che il server è avviato, puoi testare le API utilizzando **Swagger**. Vai all'indirizzo:

http://localhost:3000/api



Swagger ti permetterà di testare facilmente le API, tra cui la creazione di utenti, la gestione dei post e altro. Puoi anche provare le rotte protette autenticandoti.

## Autenticazione e Autorizzazione

Le API sono protette da un sistema di autenticazione basato su **JWT (JSON Web Token)**. Ecco come puoi testare l'autenticazione:

1. **Registrazione di un nuovo utente:**

    Usa la rotta `POST /users/register` per registrare un nuovo utente. Inserisci i dati necessari nel corpo della richiesta (ad esempio, email e password).

2. **Login dell'utente:**

    Una volta registrato l'utente, puoi utilizzare la rotta `POST /auth/login` per ottenere un token JWT. Passa le credenziali (email e password) nel corpo della richiesta.

3. **Accedere alle rotte protette:**

    Usa il token JWT ottenuto nel login per autorizzare le tue richieste. Puoi includerlo nell'intestazione `Authorization` come `Bearer <token>`.

## Contribuire

Se desideri contribuire a questo progetto, sentiti libero di aprire una **pull request**. Assicurati di seguire le linee guida di stile e di testare il codice prima di inviarlo.

## Licenza

Questo progetto è concesso sotto la **MIT License**. Vedi il file [LICENSE](LICENSE) per maggiori dettagli.

<hr>
Original default readme file:
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
