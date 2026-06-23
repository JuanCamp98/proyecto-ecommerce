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

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;