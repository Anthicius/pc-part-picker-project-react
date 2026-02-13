import React, { memo } from 'react';

const PartCard = ({ part, category, onSelectPart, isSelected }) => {
  return (
    <div 
      className={`part-card ${isSelected ? 'selected' : ''}`} 
      onClick={() => onSelectPart(part, category)}
    >
      <div className="part-info">
        {console.log("PartCard Rendered", part.name)} 
        <h3>{part.name}</h3>
        <p>Specs: {part.cores || part.vram || part.speed}</p>
      </div>
      <div className="price">${part.price}</div>
    </div>
  );
}

export default memo(PartCard);