import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {alert("Completa todos los campos");
      return;
    }

    login(email);

    alert("Login exitoso");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">
        Ingresar
      </button>
    </form>
  );
}

export default Login;