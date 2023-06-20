import React from "react";
import "./cart.scss";
const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart">
        <div className="left">
          <div className="heading">Shopping Cart</div>
          <div className="line"></div>
          <div className="items">
            <div className="image">
              <img
                src="https://m.media-amazon.com/images/I/71t935elMsL._AC_AA180_.jpg"
                alt=".jbj"
               
              />
            </div>
            <div className="content">
              <div className="title pad">
                <p>
                  Amazon Essentials Men's Regular-Fit Quick-Dry Golf Polo Shirt
                  (Available in Big & Tall), Black, Small
                </p>
              </div>
              <div className="price pad">
                <h4>$400</h4>
              </div>
              <div className="color pad flex">
                <h4>color : </h4> <span>black</span>
              </div>
              <div className="size pad flex">
                <h4>Size : </h4> <span>small</span>
              </div>
              <div className="others pad">
                <div htmlFor="quantity" className="quantity">
                  Qty:
                  <select
                    id="quantity"

                    // value={quantity}
                    // onChange={handleQuantityChange}
                  >
                    <option className="option" value={1}>
                      1
                    </option>
                    <option className="option" value={2}>
                      2
                    </option>
                    <option className="option" value={3}>
                      3
                    </option>
                    <option className="option" value={3}>
                      4
                    </option>
                    <option className="option" value={3}>
                      5
                    </option>
                    <option className="option" value={3}>
                      6
                    </option>
                    <option className="option" value={3}>
                      7
                    </option>
                    <option className="option" value={3}>
                      8
                    </option>
                    <option className="option" value={3}>
                      9
                    </option>
                    <option className="option" value={3}>
                      10
                    </option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                <p>delete</p>
              </div>
            </div>
          </div>
          <div className="line"></div>
        </div>
        <div className="right">
          <div className="top">
            <div className="checkout">
              <h3>Subtotal (1 item) : </h3>
              <span>$18.90</span>
            </div>
            <button className="btn-checkout">proceed to checkout</button>
          </div>
          <div className="bottom">
            <div className="history">
              <span>
                Customers Who Bought Items in Your Recent History Also Bought
              </span>
            </div>

            <div className="addon">
              <div className="image">
                <img
                  src="https://m.media-amazon.com/images/I/71t935elMsL._AC_AA180_.jpg"
                  alt=".png"
                  
                />
              </div>
              <div className="desc">
                <div className="title pad">
                  <span>newssadasdadasdasd..</span>
                </div>
                <div className="rating pad">⭐⭐⭐⭐⭐</div>
                <div className="cost pad">$222</div>
                <button className="cart-btn">add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
