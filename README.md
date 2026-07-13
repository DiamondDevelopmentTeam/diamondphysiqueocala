# Diamond Physique Ocala rebuild

A responsive React + TypeScript + Vite rebuild with an optional Express inquiry API.

## Important: keep your existing images

Copy the code into your current repository and keep the PNG files already located in:

`client/src/assets/images`

The client expects these filenames:

- cover.png
- diamondSalonOcala.png
- entrance.png
- hero.png
- trainer.png
- trainerFace.png
- trainersBack.png
- training.png
- workingout2.png
- workout.png

## Run locally

From the project root:

```bash
npm install
npm run dev
```

Client: `http://localhost:5173`

API: `http://localhost:4000`

## Forms

Both booking and contact submissions are saved to `server/data/submissions.jsonl`.
SMTP forwarding is optional. Copy `server/.env.example` to `server/.env` and add mail credentials to forward submissions to Matthew.

## Static-only deployment

The visual website works without the server. Booking and contact forms require the API. Set `VITE_API_URL` during the client build when the API is hosted on another domain.

