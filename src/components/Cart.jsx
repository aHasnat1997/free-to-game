import React from 'react';

const Cart = ({ game }) => {
  // console.log(game);
  const {title,thumbnail,short_description,game_url,genre,publisher} = game;
  return (
    <>
      <div className="card bg-base-100 shadow-xl overflow-hidden">
        <img src={thumbnail} alt="Shoes" />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{short_description}</p>

        </div>
        <a href={game_url} target='_blank' className="btn btn-primary rounded-none">Check Out</a>
      </div>
    </>
  );
};

export default Cart;
