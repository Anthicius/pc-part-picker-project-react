import React, { useMemo } from "react";

const Summary = ({ selectedParts }) => {
  const partsList = Object.values(selectedParts).filter(p => p !== null);

const totalPrice = useMemo(() => 
    partsList.reduce((sum, part) => sum + part.price, 0), 
    [partsList]
  );

  return (
    <div className="summary-card">
      {partsList.map((part) => (
        <div key={part.id}>
          <p>
            {part.name} <span className="price">${part.price}</span>
          </p>
        </div>
      ))}
      <p className="total-price">Total Price: ${totalPrice}</p>
    </div>
  );
};

export default Summary;