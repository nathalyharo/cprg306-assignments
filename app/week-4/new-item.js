"use client";

import { useState } from 'react';

export function NewItem() {
    // state initialization
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    // form submission handler
    function handleSubmit(e) {
        e.preventDefault();

        // item object
        const item = {
            name,
            quantity,
            category
        };

        console.log(item);

        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

        // reset values
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-start space-x-4 border-2 rounded-md bg-purple-200">
            <div className="flex flex-col space-y-4 w-7/10">
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="p-2 border-2 rounded-md w-full bg-pink-300"
                    placeholder="Name"
                    required
                />
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    min={1} 
                    max={99} 
                    className="p-2 border-2 rounded-md w-full"
                    style={{ borderColor: '#FF69B4', backgroundColor: '#FFD1DC' }}
                    placeholder="Quantity"
                    required
                />
                <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-2 border-2 rounded-md w-full"
                    style={{ borderColor: '#FF69B4', backgroundColor: '#FFD1DC' }}
                    required
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <button 
                type="submit" 
                className="text-white rounded-md w-12 h-12 flex items-center justify-center"
                style={{ backgroundColor: '#FF69B4' }}
            >
                Add
            </button>
        </form>
    );
}

export default NewItem;
