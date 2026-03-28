# Uber-Style Clone (Hands-On)

A **React Native / Expo** learning project that implements a ride-hailing **style** mobile experience: onboarding carousel, sign-in and sign-up screens, and a tabbed main area (home, rides, chat, profile). This is a **UI and navigation practice exercise**, not a production backend or live maps product.

## Stack

- **Expo** (~51) with **Expo Router** (file-based routing under `app/`)
- **TypeScript**
- **NativeWind** (Tailwind-style classes for React Native)
- **React Native** 0.74

## What you will find

- `(auth)/` — welcome, sign-in, sign-up layouts and forms
- `(root)/(tabs)/` — tab screens: `home`, `rides`, `chat`, `profile`
- Shared UI in `components/` (e.g. `CustomButton`, `InputField`, `OAuth` stub)
- Static assets and copy under `constants/` (onboarding slides, icons)

## Run locally

```bash
npm install
npx expo start
```

Use Expo Go, iOS Simulator, Android Emulator, or a [development build](https://docs.expo.dev/develop/development-builds/introduction/) depending on your needs.

## Scripts

- `npm start` — dev server  
- `npm run reset-project` — Expo starter reset utility (moves example app aside)

