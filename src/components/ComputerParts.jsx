import React from "react";
import { DATA } from "../data/data";
import PartList from "./PartList";

const ComputerParts = ({onSelectPart}) => {
  return (
    <div className="category-grid">
      {Object.entries(DATA).map(([category, partObj]) => (
        <PartList key={category} partInfo={partObj} category={category} onSelectPart={onSelectPart} />
      ))}
    </div>
  );
};

export default ComputerParts;
