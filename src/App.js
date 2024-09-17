import React, { useState } from 'react';
import AddVegetableForm from './components/AddVegetableForm';
import VegetableList from './components/VegetableList';
import './App.css';

const App = () => {
  const [veg, setVeg] = useState([]); 

  const addVegetable = (vegetable) => {
    setVeg((preVeg) => [...preVeg, vegetable]);
  };

  // const buyVegetable = (name, quantityToBuy) => {
  //   setVegetables((prevVeggies) =>
  //     prevVeggies
  //       .map((veg) =>
  //         veg.name === name
  //           ? { ...veg, quantity: veg.quantity - quantityToBuy }
  //           : veg
  //       )
  //       .filter((veg) => veg.quantity > 0) 
  //   );
  // };


  const buyVegetable = (name, quantityToBuy) => {
    setVeg((preVeg) =>
      preVeg.map((veg) =>
        veg.name === name
          ? {
              ...veg,
              quantity: veg.quantity - quantityToBuy,
            }
          : veg
      ).filter(veg => veg.quantity > 0) // Only keep vegetables with quantity > 0
    );
  };
  
  const deleteVegetable = (name) => {
    setVeg((preVeg) =>
      preVeg.filter((veg) => veg.name !== name)
    );
  };

  return (
    <div className="app">
      <h1>VEG SHOP</h1>
      <AddVegetableForm onAddVegetable={addVegetable} />
      <VegetableList
        vegetables={veg}
        onBuy={buyVegetable}
        onDelete={deleteVegetable}
      />
    </div>
  );
};

export default App;
