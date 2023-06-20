import React from "react";
import "./card.scss";

import Carousel from "../Crousel/Crousel";
import { useNavigate, Link } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  const Category = () => {
    navigate("/products/cat?shirt");
  };
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="img">
            <Link className="link" to="products/shirt">
              <img
                src="https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                // srcset=""
              />
               
            </Link>
          </div>
          <div className="cat">shirt</div>

        </div>

   

        <div className="card">
          <div className="img">
            <Link className="link" to="/products/t-shirt">
              <img
                src="https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                // srcset=""
              />
            </Link>
          </div>
          <div className="cat">t-shirt</div>

        </div>
        <div className="card">
          <div className="img">
            <Link className="link" to="/products/jeans">
              <img
                src="https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                // srcset=""
              />
            </Link>
          </div>
          <div className="cat">jeans</div>

        </div>
        <div className="card">
          <div className="img">
            <Link className="link" to="/products/kurta">
              <img
                src="https://raimentz-bucket.s3.us-east-2.amazonaws.com/product_image/EFNVb7c8xbCautTrftjP7p6oflMmXoO1uVSzi3NY.jpg"
                alt=""
                // srcset=""
              />
            </Link>
          </div>
          <div className="cat">kurta - pajama</div>

        </div>
        <div className="card">
          <div className="img">
            <Link className="link" to="/products/jogger">
              <img
                src="https://images.pexels.com/photos/3039888/pexels-photo-3039888.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                // srcset=""
              />
            </Link>
          </div>
          <div className="cat">jogger</div>

        </div>
        <div className="card">
          <div className="img">
            <Link className="link" to="/products/formal-jeans">
              <img
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/trouser/k/r/7/30-tu1-vebnor-original-imagmy6htppy79xn.jpeg?q=70"
                alt=""
             
              />
            </Link>
          </div>
          <div className="cat">formal-jeans</div>

        </div>
      </div>
    </>
  );
};

export default Card;
