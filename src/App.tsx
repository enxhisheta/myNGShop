import { ThemeProvider } from "./store/ThemeContext";
import Layout from "./UI/Layout";

import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
