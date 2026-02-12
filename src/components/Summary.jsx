import React from "react";

const Summary = ({ selectedParts }) => {
  const totalPrice = selectedParts.reduce((sum, part) => sum + part.price, 0);
  return (
    <div className="summary-card">
      {selectedParts.map(selectedPart =>
      <div> 
        <p>{selectedPart.name} {selectedPart.price}$</p>
      </div>
      )}
      <p className="total-price">Total Price: {totalPrice}$</p>
    </div>
  );
};

export default Summary;
