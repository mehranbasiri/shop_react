import React, { useEffect, useState } from "react";
import axios from "axios";
import { popularProducts } from "../data";
import Product from "./Product";
import { useParams } from "react-router";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       cat
  //         ? `http://localhost:5000/products?cat=${cat}`
  //         : "http://localhost:5000/products"
  //     )
  //     .then((response) => setProducts(response.data));
  // }, [products]);
  // console.log(products);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/products?category=coat`
        );

        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  console.log(filteredProducts);

  useEffect(() => {
    if ((sort = "newest")) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="products-cont">
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 7)
            .map((item) => <Product item={item} key={item.id} />)}
    </div>
  );
};

export default Products;
