import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const useCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');
                const data = await response.json();
                setCharacters(data.results);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    const likeCharacter = async (characterId) => {
        const { data, error } = await supabase
            .from('likes')
            .insert([{ character_id: characterId }]);

        if (error) {
            console.error('Error liking character:', error);
        } else {
            setCharacters((prev) =>
                prev.map((char) =>
                    char.id === characterId ? { ...char, likes: (char.likes || 0) + 1 } : char
                )
            );
        }
    };

    return { characters, loading, error, likeCharacter };
};

export default useCharacters;