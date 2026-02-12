import React from "react";
import PartCard from "./PartCard";

const PartList = ({ category, parts, selectedPart, onSelectPart }) => {
  return (
    <div className="category-column">
      <h2>{category}</h2>
      {parts.map((part) => (
        <PartCard
          key={part.id}
          part={part}
          isSelected={selectedPart && selectedPart.id === part.id}
          onSelectPart={(p) => onSelectPart(p, category)}
        />
      ))}
    </div>
  );
};

export default PartList;