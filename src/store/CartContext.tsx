import { createContext, useState, useContext, ReactNode } from "react";
import { Product } from "../types/types";
import { CartItem, CartContextType } from "../types/types";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const updateLocalStorage = (cart: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const addToCart = (product: Product, quantity: number) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      const updatedCart =
        existingProductIndex >= 0
          ? prevCart.map((item, index) =>
              index === existingProductIndex
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          : [...prevCart, { ...product, quantity }];

      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
