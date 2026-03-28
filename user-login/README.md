# User Login (OTP Flow UI)

**React Web App** demo for a **two-step login**: enter a 10-digit mobile number, then enter a **4-digit OTP** UI. OTP “send” and “verify” are **simulated on the client** (no SMS provider or backend). It shows form flow, validation, and component composition.

## What it demonstrates

- Controlled inputs and basic phone validation (length, digits-only)
- Conditional render: phone form vs OTP entry (`Enterotp` component)
- Functional components with React hooks

## Run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm test` — CRA test runner  
- `npm run build` — production build  

## Tech

- React 18
- Create React App
