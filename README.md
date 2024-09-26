# Remix Starter

A basic Remix starter.

- [Remix Starter](#remix-starter)
  - [Stack](#stack)
  - [Setup](#setup)
  - [Resources](#resources)

## Stack

- Linting / Code Style
  - [eslint](https://www.npmjs.com/package/eslint)
    - [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
    - [eslint-plugin-check-file](https://www.npmjs.com/package/eslint-plugin-check-file)
      - [Bulletproof React Guide](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-standards.md#file-naming-conventions)
    - [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n)
  - [prettier](https://www.npmjs.com/package/prettier)
    - [@trivago/prettier-plugin-sort-imports](https://npmjs.com/package/@trivago/prettier-plugin-sort-imports)
    - [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss) -[Automatic Class Sorting](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted)
- Environment Variables
  - [@t3-oss/env-core](https://npmjs.com/package/@t3-oss/env-core)
    - [Documentation](https://env.t3.gg/docs/core)
  - [cross-env](https://www.npmjs.com/package/cross-env)
- Styles / UI
  - [tailwindcss](https://www.npmjs.com/package/tailwindcss)
  - [shadcn/ui](https://www.npmjs.com/package/shadcn-ui)
    - [Documentation](https://ui.hadcn.com/docs)
  - [@tabler/icons-react](https://www.npmjs.com/package/@tabler/icons-react)
    - [Tabler Icon Search](https://tabler.io/icons)
- Validation
  - [zod](https://www.npmjs.com/package/zod)
  - [@conform-to/zod](https://www.npmjs.com/package/@conform-to/zod)
    - [Conform | Remix](https://conform.guide/integration/remix)
  - [drizle-zod](https://npmjs.com/package/drizzle-zod)
    - [Drizze Zod Docs](https://orm.drizzle.team/docs/zod)
- Forms
  - [@conform-to/react](https://www.npmjs.com/package/@conform-to/react)
- Database
  - [drizzle-orm](https://www.npmjs.com/package/drizzle-orm)
  - [postgres](https://www.npmjs.com/package/postgres)
  - [drizzle-kit](https://www.npmjs.com/package/drizzle-kit)
- Authentication
  - [remix-auth](https://www.npmjs.com/package/remix-auth)
    - [remix-auth-discord](https://www.npmjs.com/package/remix-auth-discord)

## Setup

1. Install dependencies:

```sh
npm install
```

2. Copy the `.env.example` file:

```sh
cp .env.example .env
```

3. Update the following values in the `.env` file:

```sh
SESSION_SECRET=your-value-here
DISCORD_CLIENT_ID=your-value-here
DISCORD_CLIENT_SECRET=your-value-here
```

4. Start the database:

```sh
docker compose up -d
```

5. Migrate the database:

```sh
npm run db:migrate
```

6. Start the app:

```sh
npm run dev
```

## Resources

- [Remix FAQs](https://remix.run/docs/en/main/guides/faq)
- [Bulletproof React](https://github.com/alan2207/bulletproof-react)
