// CategoryList.js
import React from 'react';

const CategoryList = ({ categories, onSelectCategory }) => (
  <div className="p-4">
    <h2 className="text-2xl font-semibold mb-4">Categories</h2>
    <ul className="list-none">
      {categories.map((category) => (
        <li key={category.id} className="mb-2">
          <button
            className="text-blue-500 hover:underline transition"
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default CategoryList;
