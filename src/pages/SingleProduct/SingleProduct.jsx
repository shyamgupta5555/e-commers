import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./singleProduct.scss";

const SingleProduct = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/products");
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const x = data.filter((item) => item._id === id);

  console.log(x);
  return (
    <>
      <div className="box">
        <div className="left-side">
          <img src={x[0]?.productImage} alt="po." />
        </div>
        <div className="right-side">
          <h1>{x[0]?.title}</h1>
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <div className="price">
            {" "}
            price : {x[0]?.currencyFormat}
            {x[0]?.price}
          </div>
          <div className="button">
            <button>Add To Card</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
