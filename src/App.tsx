import { ThemeProvider } from "./store/ThemeContext";
import { CartProvider } from "./store/CartContext";
import Layout from "./UI/Layout";

import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider>
        <CartProvider>
          <Layout>
            <AppRoutes />
          </Layout>
        </CartProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
