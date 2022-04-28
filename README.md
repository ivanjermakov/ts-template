# ts-template

Telegram bot template project using typescript, telegraf, jasmine and dotenv

## Features

- Typescript entry point `index.ts`
- Scripts for building and running
- Unit testing with [jasmine](https://github.com/jasmine/jasmine)
- Environment variable driven config with [dotenv](https://github.com/motdotla/dotenv)
- GitHub actions pipeline for `npm run test`

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

## Setup

1. Clone the project
   ```
   git clone -b telegraf https://github.com/ivanjermakov/ts-template <project-name>
   cd <project-name>
   ```

2. Install dependencies
   ```
   npm install
   ```
3. Start the app
   ```
   npm run start
   ```

## Initial customization

1. Update `package.json`
   ```
   ...
   "name": "<project-name>",
   ...
   "description": "<project-description>",
   ...
   ```

2. Update `LICENSE` (MIT by default)

3. Replace `README.md`

4. Write your code with `index.ts` as an entry point