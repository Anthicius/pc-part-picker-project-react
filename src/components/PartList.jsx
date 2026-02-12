import React from "react";
import PartCard from "./PartCard";

const PartList = ({ partInfo, category, onSelectPart }) => {
  return (
    <div className="category-column" >
      <h2>{category}</h2>
      {partInfo.map((part) => (
        <PartCard key={part.id} part={part} onSelectPart={onSelectPart} />
      ))}
    </div>
  );
};

export default PartList;
