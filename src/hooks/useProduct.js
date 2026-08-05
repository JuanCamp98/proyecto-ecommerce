import { useState, useEffect } from "react";
import { getProductById } from "../services/productService";

function useProduct(id) {

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        setLoading(true);

        setError(null);

        const data = await getProductById(id);

        setProduct(data);


      } catch (err) {

        setError(err.message);

        setProduct(null);

      } finally {

        setLoading(false);

      }

    };

    fetchProduct();

  }, [id]);

  return {

    product,

    loading,

    error,

  };

}

export default useProduct;