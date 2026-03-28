# Image Lab (Mobile)

Cross-platform **React Expo** app for camera-oriented flows, user authentication, and Firestore-backed data. Built to explore React Native, Expo Router, Firebase, and media-related native modules.

## Features

- Email/password sign-up and sign-in with **Firebase Auth**
- **Cloud Firestore** for user profile data
- **Expo Router** file-based navigation (`app/`): auth stack and main app areas
- Camera-related screens and image review flows (see `app/(app)/`)
- **NativeWind** (Tailwind-style) styling

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn
- [Expo CLI](https://docs.expo.dev/get-started/installation/) / `npx expo`
- A [Firebase](https://firebase.google.com/) project with Authentication (Email/Password) and Firestore enabled

## Configuration

Firebase settings are **not** hardcoded. Copy the example env file and fill in values from the Firebase console (Project settings → Your apps → Web app config).

```bash
cp .env.example .env
```

Required variables (all prefixed with `EXPO_PUBLIC_` so Expo can inline them at build time):

- `EXPO_PUBLIC_FIREBASE_API_KEY`
- `EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `EXPO_PUBLIC_FIREBASE_PROJECT_ID`
- `EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `EXPO_PUBLIC_FIREBASE_APP_ID`

See [Expo environment variables](https://docs.expo.dev/guides/environment-variables/) for details.

## Run locally

```bash
npm install
npx expo start
```

Then open in Expo Go, an emulator, or a development build as usual.

## Scripts

| Command | Purpose |
|--------|---------|
| `npm start` | Start Metro / Expo dev server |
| `npm run android` | Open on Android |
| `npm run ios` | Open on iOS |
| `npm run web` | Web target |
| `npm run lint` | ESLint |

## Project layout (high level)

- `app/(auth)/` — sign-in, sign-up, Firebase `config`
- `app/(app)/` — post-auth screens (home, camera, review, etc.)
- `app/_layout.jsx` — root layout
