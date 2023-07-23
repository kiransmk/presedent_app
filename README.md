# Problem Description

The goal of the application is to identify and extract questions from chunks of text. Questions are identified by sentences with a question mark at the end. You can use a simple regex to achieve this.

The user will be presented with a text area. They can enter/paste text into the text area and then press a button to process the text.

Below the text area will be a list of all previous processing runs identified by the date and time the run occurred. When a user clicks on a run, they will be taken to a detail page for the run where questions will be displayed as individual rows.

The data should persist between sessions (saved in Supabase).

## Application Setup

Application is built with React + TypeScript + Vite + Supabase + TailwindCss

### Supabase setup

- Create Supabase account
- Create Project
- Create Database for the project is SQL Editor
- Insert test data
- You need reference ID from Project General settings
- You need Anon public key from Project API settings

### Setup Frontend on your local

- Clone this repo

```shell
npm install
cd precedent_app
```

- Create .env.local and save reference ID and Anon public key

```shell
SUPABASE_URL=https://{REFERENCE_ID}.supabase.co
SUPABASE_ANON_PUBLIC={ARON_SECRET_KEY}
```

- Setup is complete
- Start the app

```
npm run dev
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
