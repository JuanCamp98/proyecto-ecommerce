import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./routes/AppRouter";
import { useContext } from "react";
import { CartContext } from "./contexts/CartContext";
import { Snackbar, Alert } from "@mui/material";

function App() {

  const { mensaje } = useContext(CartContext);

  return (
    <>
      <Navbar />

      <AppRouter />

      <Snackbar
        open={Boolean(mensaje)}
        autoHideDuration={3000}
      >
        <Alert
          severity="success"
          variant="filled"
        >
          {mensaje}
        </Alert>
      </Snackbar>

      <Footer />
    </>
  );
}

export default App;