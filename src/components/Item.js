import React, { useState } from "react";

function Item({ name, category }) {

  const [className, setClassName]=useState('');
  const [buttonText, setButtonText]=useState("Add to Cart")
  let checkIfItemNeeded=true;

  function handleCartButton()
  {
    console.log(checkIfItemNeeded)
    if (checkIfItemNeeded)
    {
      setClassName("in-cart");
      setButtonText("Remove from Cart")
    }
    else 
    {
      setClassName("");
      setButtonText("Add to Cart");
    }
    checkIfItemNeeded = !checkIfItemNeeded;
    console.log(checkIfItemNeeded);
  }

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartButton}>{buttonText}</button>
    </li>
  );
}

export default Item;
