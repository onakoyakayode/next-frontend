"use client";

import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    //Add item to cart
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.id === action.product.id
      );

      // Increase quantiy if already added exists
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      //This quantity remains without increasing quantity
      return {
        ...state,
        items: [...state.items, { ...action.product, quantity: 1 }],
      };
    }

    case "INCREASE_QTY": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case "DECREASE_QTY": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        ),
      };
    }

    case "REMOVE_ITEM": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    }

    case "CLEAR_CART": {
      return { ...state, items: [] };
    }

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = (product) => {
    dispatch({ type: "ADD_ITEM", product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const increaseQty = (id) => dispatch({ type: "INCREASE_QTY", id });
  const decreaseQty = (id) => dispatch({ type: "DECREASE_QTY", id });

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const cartCount = state.items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        cartCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
