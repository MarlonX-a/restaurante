import { FaUserCircle } from "react-icons/fa";
import { useUser } from "../context/useUser";
import { useNavigate } from "react-router-dom";

export function Navbar() {
    const { fotoPerfil } = useUser();
    const navigate = useNavigate();

    const irAlPerfil = () => {
        navigate("/perfil");
    }
  return (
    <nav className="navbar">
        <div className="Izquierda">
            <h1>Picanteria</h1>
        </div>
        <div className="Derecha">
            <ul>
                <li>Inicio</li>
                <li>Sobre nosotros</li>
                <li>Menú</li>
                <li>Contacto</li>
            </ul>

            {fotoPerfil ? (
                <img src={fotoPerfil} alt="Perfil" className="perfil" onClick={irAlPerfil} />
            ) : (
                <FaUserCircle size={40} onClick={irAlPerfil} />
            )}
        </div>
    </nav>
  )
}
