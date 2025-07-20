# Rick and Morty Character Rating

A React web app that lets users search and rate Rick and Morty characters using [rickandmortyapi.com](https://rickandmortyapi.com/). User likes are stored in a Supabase database. Built for Codespaces for easy development from anywhere.

## Features

- Browse and search Rick and Morty characters
- Like (rate) your favorite characters
- Persistent likes using Supabase
- Responsive and easy to use

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Supabase project (get your API keys from [supabase.com](https://supabase.com/))
- GitHub Codespaces (optional, for cloud development)

### Setup

1. **Clone the repo:**
   ```sh
   git clone https://github.com/yourusername/rick-and-morty-rating.git
   cd rick-and-morty-rating
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure Supabase:**
   - Copy `.env.example` to `.env` and fill in your Supabase URL and anon key.

4. **Start the app:**
   ```sh
   npm start
   ```

### Codespaces

Open this repo in GitHub Codespaces for a ready-to-code environment.

## Project Structure

- `src/components` – React UI components
- `src/hooks` – Custom React hooks
- `src/supabaseClient.ts` – Supabase client setup

## License

MIT
