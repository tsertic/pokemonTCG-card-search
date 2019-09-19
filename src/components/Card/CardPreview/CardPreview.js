import React from 'react';

const CardPreview = ({ card: { imageUrlHiRes, name } }) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        padding: '4px',
        border: '6px solid black'
      }}
    >
      <img
        style={{ width: '100%', height: '100%' }}
        src={imageUrlHiRes}
        alt={name}
      />
    </div>
  );
};

export default CardPreview;
