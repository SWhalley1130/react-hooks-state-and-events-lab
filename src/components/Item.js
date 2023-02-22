import React, { useState } from "react";

function Item({ name, category }) {

  const [className, setClassName]=useState("");

  function handleCartButton()
  {
    if (className==="")
    {
      setClassName("in-cart");
    }
    else {setClassName("")}
  }

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartButton}>Add to Cart</button>
    </li>
  );
}

export default Item;
