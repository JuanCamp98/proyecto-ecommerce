import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {

  const [user, setUser] = useState(null);

  const [registeredUser, setRegisteredUser] = useState(null);

  const login = (email) => {

    if (
      registeredUser &&
      registeredUser.email === email
    ) {

      setUser({

        nombre: registeredUser.nombre,

        email: registeredUser.email,

      });

    } else {

      setUser({

        nombre: "Juan",

        email: email,

      });

    }

  };

  const registro = (nombre, email) => {

    setRegisteredUser({

      nombre,

      email,

    });

  };

  const logout = () => {

    setUser(null);

  };

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