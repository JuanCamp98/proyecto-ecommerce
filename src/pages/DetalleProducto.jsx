import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";

function DetalleProducto() {
  const { id } = useParams();
  
  const { product, loading, error } = useProduct(id);

  if (loading) return <h2>Cargando...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
  <div>
    <h1>{product.title}</h1>

    <img
      src={product.images?.[0]}
      alt={product.title}
      width="300"
    />

    <p>{product.description}</p>

    <h3>Precio: ${product.price}</h3>

    <p>Categoría: {product.category?.name}</p>

    <button>
      Agregar al carrito
    </button>
  </div>
);
}

export default DetalleProducto;