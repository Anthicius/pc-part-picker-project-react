import React from "react";
import PartCard from "./PartCard";

const PartList = ({ parts, category, onSelectPart, selectedPart }) => { 
  return (
    <div className="category-column">
      <h2>{category}</h2>
      {parts.map((part) => (
        <PartCard
          key={part.id}
          part={part}
          category={category}
          isSelected={selectedPart && selectedPart.id === part.id}
          onSelectPart={onSelectPart}
        />
      ))}
    </div>
  );
};

export default PartList;