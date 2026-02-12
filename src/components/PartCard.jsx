import React from 'react';

const PartCard = ({ part, onSelectPart, isSelected }) => {
  return (
    <div 
      className={`part-card ${isSelected ? 'selected' : ''}`} 
      onClick={() => onSelectPart(part)}
    >
      <div className="part-info">
        <h3>{part.name}</h3>
        <p>Specs: {part.cores || part.vram || part.speed}</p>
      </div>
      <div className="price">${part.price}</div>
    </div>
  );
}

export default PartCard;