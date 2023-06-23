import React, { useState } from "react";
import "./Main.css";
import { snacks } from "./api";

const Main = () => {
  const [products, setProducts] = useState(snacks);
  const [searchText, setSearchText] = useState("");

  const [priceClickCnt, setPriceClickCount] = useState(1);
  const [caloriesClickCnt, setcaloriesClickCount] = useState(1);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    const value = e.target.value.toLowerCase();

    const updated = snacks.filter(
      (prod) =>
        prod.product_name.toLowerCase().includes(value) ||
        prod.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(value)
        )
    );

    setProducts(updated);
  };

  const handlePriceSortClick = () => {
    if (priceClickCnt === 1) {
      const updated = snacks.sort((a, b) => a.price - b.price);

      setPriceClickCount(priceClickCnt + 1);
      // console.log(priceClickCnt);
      setProducts(updated);
    }

    else if (priceClickCnt === 2) {
      const updated = snacks.sort((a, b) => b.price - a.price);
      setPriceClickCount(1);

      // console.log(priceClickCnt);
      setProducts(updated);
    }

  };

  const handlecaloriesSortClick = () => {
    if (caloriesClickCnt === 1) {
      const updated = snacks.sort((a, b) => a.calories - b.calories);

      setcaloriesClickCount(caloriesClickCnt + 1);
      // console.log(priceClickCnt);
      setProducts(updated);
    }

    else if (caloriesClickCnt === 2) {
      const updated = snacks.sort((a, b) => b.calories - a.calories);
      setcaloriesClickCount(1);

      // console.log(priceClickCnt);
      setProducts(updated);
    }

  };

  return (
    <div>
      <div className="search-container">
        <input
          onChange={handleInputChange}
          className="input-box"
          type="text"
          placeholder="Search with Products or Ingredients..."
        />
      </div>

      <div className="grid-container">
        <div className="item-h">Id</div>
        <div className="item-h">Product Name</div>
        <div className="item-h">Product Weight</div>
        <div className="item-h sort" onClick={handlePriceSortClick}>
          Price (INR)
        </div>
        <div className="item-h sort" onClick={handlecaloriesSortClick}>Calories</div>
        <div className="item-h">Ingredients</div>
      </div>

      {products.map(
        ({
          id,
          product_name,
          product_weight,
          price,
          calories,
          ingredients,
        }) => (
          <div className="grid-container">
            <div className="item">{id}</div>
            <div className="item">{product_name}</div>
            <div className="item">{product_weight}</div>
            <div className="item">{price}</div>
            <div className="item">{calories}</div>
            <div className="item">{ingredients}</div>
          </div>
        )
      )}
    </div>
  );
};

export default Main;
