import useProducts from "../hooks/useProducts";

function Productos() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <h2>Cargando productos...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Productos</h1>

      {products.slice(0, 5).map((product) => (
        <p key={product.id}>
          {product.title}
        </p>
      ))}
    </div>
  );
}

export default Productos;