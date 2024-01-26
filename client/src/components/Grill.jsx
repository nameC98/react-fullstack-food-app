import React, { useContext } from "react";
import { FaAndroid, FaAppStore, FaShoppingCart, FaTrash } from "react-icons/fa";
import Chicken from "../assets/images2/image8.jpg";
import { getProductData, productsArray } from "./ProductsArrat";
import ShopingCart from "./ShopingCart";
import { CartContaxt } from "../CartContaxt";

function Grill() {
  const cart = useContext(CartContaxt);
  // const productQuantity = cart.getProductQuantity(product.id);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  return (
    <>
      <div className="flex-between cart-container container   pb-4">
        <div className="flex-col relative  shopping-cart">
          <div className="cart-icon-div">
            <FaShoppingCart className="cart-icon " />
            <div className="cart-items-number-div ">
              <p className="cart-items-number">{productsCount}</p>
            </div>
          </div>

          <h4 className="pt-1 cart-headers semi-bold">Your Shopping Cart</h4>
          {cart.items.map((product, idx) => {
            const productData = getProductData(product.id);

            return (
              <div key={idx}>
                <div key={idx}>
                  <div className="name-price-cart">
                    <div className="flex-between  ">
                      <p className="semi-bold">{productData.title}</p>
                      <FaTrash
                        className="icon-color"
                        onClick={() => cart.deleteFromCart(product.id)}
                      />
                    </div>

                    <div className="flex-between">
                      <p className="bold">{`$${productData.price}`}</p>
                      <p className="order-number">{product.quantity}</p>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            );
          })}
          <div className="flex-col gap-1 pb-2 total-cart">
            <div className="total-cart-responsive  gap-1">
              <div className="flex-col gap-1">
                <h5>TOTAL</h5>
                <h4 className="bold">{`$${cart.getTotalCost().toFixed(2)}`}</h4>
              </div>
              <div className="flex-col gap-1">
                <p>Free Shipping</p>
                <div>
                  <button className="btn" onClick={checkout}>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex-col gap-1  order-food">
          <h4 className="cart-headers pt-1 semi-bold">
            Popular Orders Delicious Hot Food!
          </h4>
          {productsArray.map((product, idx) => (
            <ShopingCart product={product} key={idx} />
          ))}
        </div>
      </div>

      {/*  */}
      <section>
        <div className="mobile-apps-container">
          <h4
            style={{
              textAlign: "center",
              paddingBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            Download WingPack App
          </h4>

          <div className="mobile-apps container">
            <div>
              <img
                style={{
                  width: "10rem",
                  height: "8rem",
                }}
                src={Chicken}
                alt=""
              />
            </div>

            <div className="flex-col mobileapp-bottom-section gap-2">
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Culpa, nam! Autem soluta cum magnam ea temporibus error
                  consequatur nostrum quis?
                </p>
              </div>
              <div className="flex-row gap-3">
                <div className="flex-row gap-3 cursor-pointer appstore-bg">
                  <FaAppStore />
                  <div>
                    <p>Available on the</p>
                    <h5 className="semi-bold">App Store</h5>
                  </div>
                </div>
                {/*  */}
                <div className="flex-row gap-3 android-bg cursor-pointer">
                  <FaAndroid />
                  <div>
                    <p>Available on the</p>
                    <h5 className="semi-bold">Play Store</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <footer className="container">
        <div className="footer-content-div3 mt-1"></div>
        <div className="footer-content-div1 container  ">
          <div className="flex ">
            <img
              style={{
                width: "5rem",
                height: "3rem",
              }}
              src={Chicken}
              alt=""
            />
          </div>

          <div>
            <div className=" footer-content   ">
              <h3 className="bold mb-1">Address</h3>
              <div className="flex-col gap-0">
                <p className="footer-link">Harare, Bulawayo, Gweru</p>
                <p className="footer-link">Zimbabwe Windhoek, Namibia</p>
                <p className="footer-link">Lusaka, Zambia</p>
                <p className="footer-link">Maputo, Mozambique</p>
                <p className="footer-link">Gaborone, Botswana</p>
              </div>
            </div>
          </div>

          <div className=" footer-content  ">
            <h3 className="font-bold  mb-1 bold">Our Services</h3>

            <div>
              <ul className="flex-col  gap-0">
                <li className="footer-link"> Online Shopping </li>
                <li className="footer-link"> Free Home Delivery</li>
                <li className="footer-link"> Discount</li>
                <li className="footer-link">Return</li>
                <li className="footer-link">Delivery On Place</li>
              </ul>
            </div>
          </div>

          <div>
            {" "}
            <h3 className="bold pb-1  "> NEWSLETTER </h3>
            <div className="newsletter-div1">
              <div className="flex-col gap-0">
                <p>Subscribe to our newsletter </p>
                <div className="newsletter-inputs-div">
                  <input
                    className="newsletter-email"
                    type="text"
                    placeholder="name"
                  />
                </div>
                <div className="newsletter-inputs-div">
                  <input
                    className="newsletter-email"
                    type="email"
                    name="email"
                    id=""
                    placeholder="email"
                  />
                </div>
              </div>

              <button className="btn">Submit</button>
            </div>
          </div>
        </div>

        <div className="footer-content-div3 bg-[#183f8d] block w-[100%] h-[1px]"></div>
        <div className="pb-3">
          <p className="mt-3 bold ">© 2023 WinPack</p>
        </div>
      </footer>
    </>
  );
}

export default Grill;
