const API_URL = "https://api.escuelajs.co/api/v1";

export const getProducts = async () => {

  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Error al obtener productos");
  }

  return await response.json();

};

export const getCategories = async () => {

  const response = await fetch(`${API_URL}/categories`);

  if (!response.ok) {
    throw new Error("Error al obtener categorías");
  }

  return await response.json();

};

export async function getProductById(id) {

  const response = await fetch(
    `${API_URL}/products/${id}`
  );

  if (!response.ok) {

    throw new Error("El producto solicitado no existe");

  }

  const data = await response.json();

  if (!data || !data.id) {

    throw new Error("El producto solicitado no existe");

  }

  return data;

}