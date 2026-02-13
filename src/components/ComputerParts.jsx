import React from "react";
import { DATA } from "../data/data";
import PartList from "./PartList";

const ComputerParts = ({ onSelectPart, selectedParts }) => {
  return (
    <div className="category-grid">
      {Object.entries(DATA).map(([category, partsArray]) => (
        <PartList
          key={category}
          category={category}
          parts={partsArray}
          selectedPart={selectedParts[category]}
          onSelectPart={onSelectPart}
        />
      ))}
    </div>
  );
};

export default ComputerParts;
