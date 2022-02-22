import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div className="main-page">
      <Navbar />
      <Announcement />
      <h1>{cat}</h1>
      <div className="filter-container">
        <div className="filter">
          <span>filter Products:</span>
          <select name="color" onChange={handleFilters}>
            <option disabled>color</option>
            <option>white</option> <option>black</option> <option>red</option>{" "}
            <option>blue</option> <option>yellow</option> <option>green</option>
          </select>
          <select name="size" onChange={handleFilters}>
            <option disabled>Size</option>
            <option>Xs</option> <option>S</option> <option>M</option>{" "}
            <option>L</option> <option>XL</option>
          </select>
        </div>
        <div className="filter">
          <span>Sort Products:</span>
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </div>
  );
};
export default ProductList;
