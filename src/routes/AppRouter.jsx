import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import DetalleProducto from "../pages/DetalleProducto";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Carrito from "../pages/Carrito";
import Perfil from "../pages/Perfil";
import Contacto from "../pages/Contacto";
import CompraExitosa from "../pages/CompraExitosa";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/producto/:id" element={<DetalleProducto />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/compra-exitosa" element={<CompraExitosa />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;