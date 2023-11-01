import React, { useState } from "react";
import recipes from "../recipes";

const Menu = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleOrder = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const confirmOrder = () => {
    setShowModal(false);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
    setShowModal(false);
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This week's specials!</h2>
        <button onClick={() => setShowModal(true)}>Order Menu</button>
      </div>
      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>{recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button
                className="orderbtn"
                onClick={() => handleOrder(recipe)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Are you sure?</h3>
            <p>You won't be able to revert this!</p>
            <div className="modal-buttons">
              <button onClick={confirmOrder}>Yes, order it!</button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Menu;
