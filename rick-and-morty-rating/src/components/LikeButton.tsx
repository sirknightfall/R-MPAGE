import React, { useState } from 'react';

interface LikeButtonProps {
  characterId: number;
  initialLikes: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ characterId, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = async () => {
    // Increment the like count
    const newLikes = likes + 1;
    setLikes(newLikes);

    // Here you would typically send the new like count to your Supabase database
    // Example:
    // await supabase
    //   .from('characters')
    //   .update({ likes: newLikes })
    //   .eq('id', characterId);
  };

  return (
    <button onClick={handleLike}>
      Like {likes}
    </button>
  );
};

export default LikeButton;