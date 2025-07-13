import React from 'react';
import { GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AuthScreen = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const additionalUserInfo = getAdditionalUserInfo(result);

      // Verificar si el usuario es nuevo
      if (additionalUserInfo?.isNewUser) {
        // Si es nuevo, lo redirigimos a la selección de rol
        navigate('/select-role');
      } else {
        // Si ya existe, lo redirigimos a la página principal
        navigate('/');
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión con Google:', error);
      toast.error('Hubo un error al iniciar sesión. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Únete a ChambaFlex
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Inicia sesión o regístrate con tu cuenta de Google para empezar a encontrar o publicar chambas.
        </p>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors text-lg font-semibold shadow-md"
        >
          <svg className="w-6 h-6 mr-3" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.011 35.896 44 30.273 44 24c0-1.341-.138-2.65-.389-3.917z"></path></svg>
          Continuar con Google
        </button>

        <p className="text-center text-xs text-gray-500 mt-4">
          Al continuar, aceptas nuestros Términos de Servicio y Política de Privacidad.
        </p>
      </div>
    </div>
  );
};

export default AuthScreen;
