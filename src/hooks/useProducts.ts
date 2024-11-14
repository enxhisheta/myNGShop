import { useEffect, useState } from "react";
import { Product } from "../types/types";

const useProducts = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data: Product[] = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("No products found in the file.");
        }

        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", (error as Error).message);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
