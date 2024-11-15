export interface Product {
  id: string;
  name: string;
  imageSrc: string;
  description: string;
  price: number;
}

export interface ThemeContextType {
  darkTheme: boolean;
  toggleTheme: () => void;
}
export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  orderData: OrderData | null;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  createOrder: (personalInfo: PersonalInfo) => void;
  clearCart: () => void;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
}

export interface OrderData {
  personalInfo: PersonalInfo;
  items: CartItem[];
  totalAmount: number;
  orderDate: Date;
  orderId: string;
}
