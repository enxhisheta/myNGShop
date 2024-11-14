import { createContext, useState, useContext, ReactNode } from "react";
import {
  Product,
  CartItem,
  CartContextType,
  PersonalInfo,
  OrderData,
} from "../types/types";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [orderData, setOrderData] = useState<OrderData | null>(null);

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

  const createOrder = (personalInfo: PersonalInfo) => {
    const totalAmount = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setOrderData({
      personalInfo,
      items: [...cart],
      totalAmount,
      orderDate: new Date(),
      orderId: `ORD-${Date.now()}`,
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        orderData,
        addToCart,
        removeFromCart,
        updateQuantity,
        createOrder,
        clearCart,
      }}
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
