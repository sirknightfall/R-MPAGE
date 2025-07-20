import React from 'react';
import LikeButton from './LikeButton';

interface CharacterCardProps {
    id: number;
    name: string;
    image: string;
    likes: number;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ id, name, image, likes }) => {
    return (
        <div className="character-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <LikeButton characterId={id} initialLikes={likes} />
        </div>
    );
};

export default CharacterCard;