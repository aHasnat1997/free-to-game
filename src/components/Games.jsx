import React, { useEffect, useState } from 'react';
import Cart from './Cart';

const Games = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch('api/game.json')
      .then(res => res.json())
      .then(data => setGames(data));
  }, []);

  return (
    <div className='grid grid-cols-3 gap-8 max-w-screen-xl mx-auto my-8'>
      {games.map(game => <Cart key={game.id} game={game}></Cart>)}
    </div>
  );
};

export default Games;
