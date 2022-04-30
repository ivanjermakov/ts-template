# ts-template

Typescript template project for working with PostgreSQL using Prisma

## Usage
```
> set('a', 'hello')
{
  id: 2,
  createdAt: 2022-04-30T10:45:07.426Z,
  key: 'a',
  value: 'hello'
}
> get('a')
'hello'
> del('a')
'deleted'
> get('a')
'not found'
> 
```

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
   git clone https://github.com/ivanjermakov/ts-template <project-name>
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

1. Update all `/<.*>/` templates across the project (e.g. `<project-name>` or `<password>`)

3. Update `LICENSE` (MIT by default)

4. Replace `README.md`
 
5. Write your code with `index.ts` as an entry point