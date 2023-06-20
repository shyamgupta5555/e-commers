import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./product.scss";
import axios from "axios";

const Product = () => {
  const [data, setData] = useState([]);
  const category = useParams();
  console.log(category);

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
  console.log(data);

  return (
    <>
      <div className="product-cont">
        {data.map((x, i) => {
          return (
            <div key={x._id} className="product">
              <p>{x.category}</p>
              <div className="image">
                <Link to={`/product/${x._id}`}>
                  <img src={x.productImage} alt="po." />
                </Link>
              </div>
              <div className="desc">
                <p>{x.title}</p>
                <div className="rating">⭐⭐⭐⭐⭐</div>
                <div className="prize">
                  {" "}
                  price : {x.currencyFormat}
                  {x.price}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
