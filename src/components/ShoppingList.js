import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [list, setItems]=useState(items);

  function handleFilter(event)
  {
    const newItemsArray=items.filter(item=>
      item.category===event.target.value)
    setItems(newItemsArray);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {list.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
