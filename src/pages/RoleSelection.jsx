import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
import toast from 'react-hot-toast';

const RoleSelection = () => {
  const [role, setRole] = useState('Trabajador');
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleSaveRole = async () => {
    if (!user) {
      toast.error('No se ha encontrado un usuario autenticado. Por favor, inicia sesión de nuevo.');
      navigate('/login');
      return;
    }

    const toastId = toast.loading('Guardando tu rol...');

    try {
      // Guardar el rol y la información del usuario en Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        role: role,
        createdAt: new Date(),
      });

      toast.success('¡Rol guardado con éxito!', { id: toastId });

      // Forzar una actualización del estado en App.jsx
      // Esto se puede hacer de varias maneras, una simple es recargar la página.
      // Una mejor solución sería usar un manejador de estado global (Context, Redux, etc.)
      window.location.href = '/';

    } catch (error) {
      console.error('Error al guardar el rol:', error);
      toast.error('Hubo un error al guardar tu rol. Por favor, inténtalo de nuevo.', { id: toastId });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">¡Bienvenido a ChambaFlex!</h2>
        <p className="text-center text-gray-600 mb-8">
          Para finalizar tu registro, por favor, elige tu rol en la plataforma.
        </p>

        <div className="mb-6">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
            ¿Cómo usarás ChambaFlex?
          </label>
          <select
            id="role"
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Trabajador">Quiero encontrar trabajo (Soy Trabajador)</option>
            <option value="Empleador">Quiero contratar a alguien (Soy Empleador)</option>
          </select>
        </div>

        <button
          onClick={handleSaveRole}
          className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-colors text-lg font-semibold shadow-md"
        >
          Guardar y Continuar
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;
