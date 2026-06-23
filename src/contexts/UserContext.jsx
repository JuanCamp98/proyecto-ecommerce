import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email) => {
    setUser({
        nombre: "Juan",
        email: email,
    });
  };

  const registro = (nombre, email) => {
    setUser({
        nombre: nombre,
        email: email,
    });
  }

  const logout = () => {
    setUser(null);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        registro,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;