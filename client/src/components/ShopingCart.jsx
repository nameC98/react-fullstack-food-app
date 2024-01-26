import CartProvider, { CartContaxt } from "../CartContaxt";
import React, { useContext, useEffect } from "react";
function ShopingCart(props) {
  const product = props.product;
  const cart = useContext(CartContaxt);
  const productQuantity = cart.getProductQuantity(product.id);
  const { setProducts, products } = useContext(CartContaxt);

  useEffect(() => {
    setProducts(product);
  }, [product, setProducts]);

  //   console.log(cart.items);

  return (
    <>
      {/*  */}{" "}
      <div className="flex-between gap-3 px-1 name-price-cart-2">
        <div className="flex-row gap-1  name-price-responsive ">
          <div>
            <img
              style={{
                width: "5rem",
                height: "3rem",
              }}
              src={product.Image}
              alt=""
            />
          </div>
          <div className="flex-col gap-0">
            <h4 className="bold">{product.title}</h4>
            <p>{product.description}</p>
          </div>
        </div>

        {/*  */}
        <div className="flex-col gap-1">
          <div className="flex-row gap-2">
            <h5 className="bold">{`$${product.price}`}</h5>
            <p className="order-number">1</p>
          </div>
          <button className="btn" onClick={() => cart.addOneToCart(product.id)}>
            Add to cart
          </button>
          <div className="flex-between">
            <button
              className="btn"
              onClick={() => cart.addOneToCart(product.id)}
            >
              +
            </button>
            <button
              className="btn"
              onClick={() => cart.removeOneFromCart(product.id)}
            >
              -
            </button>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default ShopingCart;
