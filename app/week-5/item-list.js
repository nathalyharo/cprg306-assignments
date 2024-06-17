"use client";

import React, { useState } from 'react';
import Item from './item.js';
import itemsData from './items.json';

function ItemList(props) {
  const [sortBy, setSortBy] = useState("name");

  // returns a sortedItems array based on the sortBy value (name or category)
  const sortedItems = [...itemsData].sort((a, b) => {
    // Sort by name (default)
    if (sortBy === "name") {
      return a.name.localeCompare(b.name); // sorts item a and b by name by localeCompare (returns -1, 0, 1 depending on the comparison of the two strings)
      // Sort by category (if selected)
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category); // sorts item a and b by category by localeCompare (returns -1, 0, 1 depending on the comparison of the two strings)
    }
    return 0;
  });

  return (
    <div className="w-1/2">

    {/* Buttons for sorting */}
    <div className="flex flex-row justify-center mb-3">
        <button
          className={`w-1/3 border-white rounded-full border p-1 mr-2 ${sortBy === "name" ? "bg-fuchsia-300 text-white" : "text-fuchsia-300"}`}
          onClick={() => setSortBy("name")}
        >Sort by Name</button>

        <button
          className={`w-1/3 border-white rounded-full border p-1 ml-2 ${sortBy === "category" ? "bg-fuchsia-300 text-white" : "text-fuchsia-300"}`}
          onClick={() => setSortBy("category")}
        >Sort by Category</button>
      </div>
      
    {/* List of items */}
    <ul>
      {sortedItems.map((props) => ( // maps through the sortedItems array and returns an Item component for each item in the array
        <Item
          key={props.id}
          name={props.name}
          quantity={props.quantity}
          category={props.category}
        />
      ))}
      </ul>

    </div>
  );
}


export default ItemList;

