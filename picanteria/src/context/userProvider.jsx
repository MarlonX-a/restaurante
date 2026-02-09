import { useState } from "react";
import { UserContext } from "./UserContext";

export default function UserProvider({ children }) {
  const [fotoPerfil, setFotoPerfil] = useState(null);

  return (
    <UserContext.Provider value={{ fotoPerfil, setFotoPerfil }}>
      {children}
    </UserContext.Provider>
  );
}
