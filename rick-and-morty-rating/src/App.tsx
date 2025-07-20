import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import CharacterCard from './components/CharacterCard';
import SearchBar from './components/SearchBar';
import useCharacters from './hooks/useCharacters';
import './App.css';

const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseAnonKey = 'your-supabase-anon-key';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const App = () => {
  const { characters, loading, error, fetchCharacters } = useCharacters();

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Rick and Morty Character Rating</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading && <p>Loading characters...</p>}
      {error && <p>Error loading characters: {error.message}</p>}
      <div className="character-list">
        {filteredCharacters.map(character => (
          <CharacterCard key={character.id} character={character} supabase={supabase} />
        ))}
      </div>
    </div>
  );
};

export default App;