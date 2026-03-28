# Perceptron Labs–Style Forum

Full-stack **simulation ideas forum**: users submit a name, title, and comment; visitors **upvote** ideas **Reddit-style**. Ideas are sorted by vote count, then by recency. Data is **persistent** (SQLite via Prisma), and **Redis** backs shared counters / synchronization so multiple app instances behave consistently when you run several dev servers on different ports.

## Stack

- **Next.js** (App Router)
- **Prisma** + **SQLite**
- **Redis** (`ioredis`)
- **Tailwind CSS**

## Setup

### 1. Redis

Run Redis locally (default port **6379**), for example:

```bash
docker run -d -p 6379:6379 redis:alpine
```

Optional: set `REDIS_URL` (see `.env.example`). If unset, the app uses `redis://127.0.0.1:6379`.

### 2. Environment and database

```bash
cp .env.example .env
npm install
npx prisma migrate dev
```

### 3. Development

```bash
npm run dev
```

To simulate multiple users, run additional instances on other ports (examples):

- **PowerShell:** `$env:PORT=4000; npm run dev`
- **cmd:** `set PORT=4000 && npm run dev`
- **bash:** `PORT=4000 npm run dev`

Reload each instance to see vote changes propagate according to your Redis-backed logic.

### Useful commands

- `npx prisma studio` — browse SQLite data  
- `npm run build` / `npm start` — production build and serve

## Brief assignment context

This repo implements a take-home–style brief: forum for future simulation ideas, sorted by votes, with design cues aligned to a research-style landing page.
