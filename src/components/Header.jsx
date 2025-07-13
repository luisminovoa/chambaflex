import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ user, userRole, onLogout }) => {
  const activeLinkStyle = {
    color: '#000000',
    fontWeight: '600',
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-20 p-4 sm:px-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
          <NavLink to="/">ChambaFlex</NavLink>
        </h1>
        <nav className="hidden md:flex items-center space-x-4 sm:space-x-6">
          <NavLink to="/" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="text-gray-500 hover:text-black transition-colors">
            Ofertas
          </NavLink>

          {userRole === 'Empleador' && (
            <NavLink to="/post-job" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="text-gray-500 hover:text-black transition-colors">
              Publicar
            </NavLink>
          )}

          {userRole === 'Trabajador' && (
            <NavLink to="/my-applications" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="text-gray-500 hover:text-black transition-colors">
              Postulaciones
            </NavLink>
          )}

          {userRole === 'Empleador' && (
            <NavLink to="/my-jobs" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="text-gray-500 hover:text-black transition-colors">
              Mis Ofertas
            </NavLink>
          )}
        </nav>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <NavLink to="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-black">
                <img src={user.photoURL} alt="Avatar" className="w-8 h-8 rounded-full" />
                <span className="hidden sm:inline">{user.displayName}</span>
              </NavLink>
              <button
                onClick={onLogout}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium shadow-md"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <NavLink to="/login" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium shadow-md">
              Iniciar Sesión
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
