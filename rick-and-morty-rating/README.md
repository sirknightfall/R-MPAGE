# Rick and Morty Character Rating

This project is a React application that allows users to rate characters from the popular show "Rick and Morty". Users can search for characters, like them, and the ratings are stored in a Supabase database.

## Features

- Search for characters by name
- Like characters to rate them
- Store and retrieve ratings using Supabase
- Responsive and user-friendly interface

## Technologies Used

- React
- TypeScript
- Supabase
- Rick and Morty API

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- A Supabase account and project set up

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/rick-and-morty-rating.git
   ```
2. Navigate to the project directory:
   ```
   cd rick-and-morty-rating
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration

1. Set up your Supabase client in `src/supabaseClient.ts` with your Supabase URL and public API key.
2. Ensure that your Supabase database has the necessary tables to store character ratings.

### Running the Application

To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

### Usage

- Use the search bar to find characters by name.
- Click the like button on a character card to rate them.
- Ratings will be stored in the Supabase database.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.