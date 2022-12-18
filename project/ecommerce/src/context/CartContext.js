import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    setCart(cartItems);
  }, []);

  const findItemsInCart = (id) => {
    const item = cart.find((item) => item.product === id);

    return item;
  };

  const handleQtyDecrement = (product) => {
    //Find the product in the cart
    const item = findItemsInCart(product._id);
    if (!item) {
      return;
    }
    // if exists decrease the qty.
    const newCart = cart.filter((cartItem) => {
      if (cartItem.product === item.product) {
        // if the qty is 1 then remove it from the cart
        if (cartItem.qty === 1) {
          return;
        }
        cartItem.qty = cartItem.qty - 1;
      }
      return cartItem;
    });
    setCart((prev) => {
      return [...newCart];
    });
  };

  const handleQtyIncrement = (product) => {
    //Find the product in the cart
    const item = findItemsInCart(product._id);

    if (!item) {
      //Check if the qty is equal
      if (product.qty < 1) {
        alert("Not enough Quantity");
      }
      setCart((prev) => {
        return [...prev, { product: product._id, qty: 1 }];
      });
      return;
    }
    // Map the cart to have a new array.
    if (product.qty <= item.qty) {
      alert("Not enough qutnaity");
      return;
    }
    const newCart = cart.map((cartItem) => {
      if (cartItem.product === item.product) {
        cartItem.qty = cartItem.qty + 1;
      }
      return cartItem;
    });

    setCart(() => [...newCart]);

    // if exists increase the qty
  };

  const addToCart = (product) => {
    setCart((prev) => {
      return [...prev, { product: product._id, qty: 1 }];
    });
  };

  return (
    <CartContext.Provider
      value={{
        findItemsInCart,
        addToCart,
        handleQtyDecrement,
        handleQtyIncrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
