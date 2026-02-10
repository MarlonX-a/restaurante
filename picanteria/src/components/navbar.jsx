import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import { useUser } from "../context/useUser";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Navbar() {
    const { fotoPerfil } = useUser();
    const navigate = useNavigate();

    const irAlPerfil = () => {
        navigate("/perfil");
    }
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-extrabold text-orange-600 tracking-wide">
                Picanteria
            </h1>
            <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                <li className="hover:text-orange-600 transition cursor-pointer">
                    Inicio
                </li>
                <li className="hover:text-orange-600 transition cursor-pointer">
                    Sobre nosotros
                </li>
                <li className="hover:text-orange-600 transition cursor-pointer">
                    Menú
                </li>
                <li className="hover:text-orange-600 transition cursor-pointer">
                    Contacto
                </li>
            </ul>
            <div
                onClick={() => irAlPerfil()}
                className="cursor-pointer"
            >
                {fotoPerfil ? (
                    <img
                        src={fotoPerfil} 
                        alt="Perfil" 
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-orange-500 hover:scale-105 transition"
                    />
                ) : (
                    <FaUserCircle className="text-4xl text-gray-700 hover:text-orange-500 transition"/>
                )}
            </div>
        </div>
    </nav>
  )
}
