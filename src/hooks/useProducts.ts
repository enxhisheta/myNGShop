import { useEffect, useState } from "react";
import { Product } from "../types/types";

const useProducts = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/products");
      const data: Product[] = await response.json();
      setProducts(data);
    } catch (err) {
      setError("Failed to load products");
      console.error("Error loading products:", err);
    } finally {
      setLoading(false);
    }
  };

  const createProduct = async (data: Omit<Product, "id">) => {
    try {
      const newProduct = {
        ...data,
        id: products ? Math.max(...products.map((p) => p.id)) + 1 : 1,
        price: Number(data.price),
      };

      const response = await fetch("http://localhost:3001/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) throw new Error("Failed to create product");

      fetchProducts();
      return true;
    } catch (error) {
      setError("Failed to create product");
      console.error("Error creating product:", error);
      return false;
    }
  };

  return { products, loading, error, createProduct };
};

export default useProducts;
