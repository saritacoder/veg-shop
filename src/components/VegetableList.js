import React from 'react';
import VegetableItem from './VegetableItem';

const VegetableList = ({ vegetables, onBuy, onDelete }) => {
  const total = vegetables.length; 

  return (
    <div>
      <h2>Vegetable List</h2>
      {vegetables.map((vegetable) => (
        <VegetableItem
          key={vegetable.name}
          vegetable={vegetable}
          onBuy={onBuy}
          onDelete={onDelete}
        />
      ))}
      <h3>Total: {total}</h3>
    </div>
  );
};

export default VegetableList;
