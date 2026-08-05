import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Container, TextField, Button, Alert, Typography } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);


  const { login } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    setError("");
    setSuccess(false);

    if (!email || !password) {

      setError(
        "Completa todos los campos."
      );

      return;

    }

    const emailValido =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailValido.test(email)) {

      setError(
        "Ingresa un email válido."
      );

      return;

    }

    login(email);

    setSuccess(true);

    setTimeout(() => {

      navigate("/perfil");

    }, 1000);

  };

  return (

    <Container

      maxWidth="sm"

      sx={{

        mt: 6,

        p: 4,

        backgroundColor: "#ffffff",

        borderRadius: 2,

        boxShadow: 3,

      }}

    >

      <Typography

        variant="h3"

        align="center"

        gutterBottom

      >

        Ingresar

      </Typography>

      {error && (

        <Alert

          severity="error"

          sx={{ mb: 2 }}

        >

          {error}

        </Alert>

      )}

      {success && (

        <Alert

          severity="success"

          sx={{ mb: 2 }}

        >

          Login exitoso. Redirigiendo...

        </Alert>

      )}

      <form onSubmit={handleSubmit}>

        <TextField

          label="Email"

          type="email"

          fullWidth

          sx={{ mb: 2 }}

          value={email}

          onChange={(e) =>
            setEmail(e.target.value)
          }

        />

        <TextField

          label="Contraseña"

          type="password"

          fullWidth

          sx={{ mb: 3 }}

          value={password}

          onChange={(e) =>
            setPassword(e.target.value)
          }

        />

        <Button

          type="submit"

          variant="contained"

          fullWidth

        >

          Ingresar

        </Button>

        <Typography

          sx={{

            mt: 3,

            textAlign: "center",

          }}

        >

          ¿No tienes una cuenta?

        </Typography>

        <Button

          component={Link}

          to="/registro"

          fullWidth

          sx={{ mt: 1 }}

        >

          Registrarse

        </Button>

      </form>

    </Container>

  );

}

export default Login;