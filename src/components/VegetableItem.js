import React, { useState } from 'react';

const VegetableItem = ({ vegetable, onBuy, onDelete }) => {
  const [buyQuantity, setBuyQuantity] = useState('');

  const handleBuy = () => {
    const quantityToBuy = parseFloat(buyQuantity);
    if (quantityToBuy <= vegetable.quantity) {
      onBuy(vegetable.name, quantityToBuy);
    }
    setBuyQuantity(''); 
  };

  return (
    <div className="vegetable-item">
      <span>{vegetable.name}</span>
      <span> Rs: {vegetable.price}</span>
      <span> {vegetable.quantity} kg</span>
      <input
        type="number"
        value={buyQuantity}
        onChange={(e) => setBuyQuantity(e.target.value)}
        placeholder="Quantity"
      />
      <button onClick={handleBuy}>Buy</button>
      <button onClick={() => onDelete(vegetable.name)}>Delete</button>
    </div>
  );
};

export default VegetableItem;
