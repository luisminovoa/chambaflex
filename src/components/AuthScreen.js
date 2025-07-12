// /components/AuthScreen.js
function AuthScreen({ onLogin }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Trabajador');

  const handleAuth = () => {
    // Aquí iría la lógica de autenticación/registro real
    // Para esta demo, simulamos un login exitoso
    console.log(`Auth attempt: Email: ${email}, Role: ${role}, Registering: ${isRegistering}`);
    onLogin(role);
  };

  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = result.credential;
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        onLogin('Trabajador');
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        console.error(error);
        alert(errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          {isRegistering ? 'Regístrate' : 'Inicia Sesión'}
        </h2>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors text-lg font-semibold shadow-md mb-4"
        >
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.767-2.088 5.97-6.806 5.97-4.119 0-7.439-3.325-7.439-7.442S8.121 2.563 12.24 2.563c2.438 0 4.045 1.065 4.987 1.977l3.677-3.563C18.785.055 15.227-1.5 12.24 1.5c-7.69 0-13.93 6.24-13.93 13.925C-1.69 23.05 4.55 29.29 12.24 29.29c7.69 0 13.227-5.97 13.227-13.925 0-.99-.14-1.933-.319-2.84z" fill="#EA4335"/>
            <path d="M12.24 10.285V14.4h6.806c-.275 1.767-2.088 5.97-6.806 5.97-4.119 0-7.439-3.325-7.439-7.442S8.121 2.563 12.24 2.563c2.438 0 4.045 1.065 4.987 1.977l3.677-3.563C18.785.055 15.227-1.5 12.24 1.5c-7.69 0-13.93 6.24-13.93 13.925C-1.69 23.05 4.55 29.29 12.24 29.29c7.69 0 13.227-5.97 13.227-13.925 0-.99-.14-1.933-.319-2.84z" fill="#4285F4"/>
            <path d="M12.24 10.285V14.4h6.806c-.275 1.767-2.088 5.97-6.806 5.97-4.119 0-7.439-3.325-7.439-7.442S8.121 2.563 12.24 2.563c2.438 0 4.045 1.065 4.987 1.977l3.677-3.563C18.785.055 15.227-1.5 12.24 1.5c-7.69 0-13.93 6.24-13.93 13.925C-1.69 23.05 4.55 29.29 12.24 29.29c7.69 0 13.227-5.97 13.227-13.925 0-.99-.14-1.933-.319-2.84z" fill="#FBBC05"/>
            <path d="M12.24 10.285V14.4h6.806c-.275 1.767-2.088 5.97-6.806 5.97-4.119 0-7.439-3.325-7.439-7.442S8.121 2.563 12.24 2.563c2.438 0 4.045 1.065 4.987 1.977l3.677-3.563C18.785.055 15.227-1.5 12.24 1.5c-7.69 0-13.93 6.24-13.93 13.925C-1.69 23.05 4.55 29.29 12.24 29.29c7.69 0 13.227-5.97 13.227-13.925 0-.99-.14-1.933-.319-2.84z" fill="#34A853"/>
          </svg>
          Iniciar Sesión con Google
        </button>

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500">o</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            placeholder="tu.correo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {isRegistering && (
          <div className="mb-6">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
              Soy
            </label>
            <select
              id="role"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Trabajador">Trabajador</option>
              <option value="Empleador">Empleador</option>
            </select>
          </div>
        )}

        <button
          onClick={handleAuth}
          className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-colors text-lg font-semibold shadow-md"
        >
          {isRegistering ? 'Registrarme' : 'Iniciar Sesión'}
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          {isRegistering ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-black font-medium hover:underline ml-1"
          >
            {isRegistering ? 'Inicia Sesión' : 'Regístrate aquí'}
          </button>
        </p>
      </div>
    </div>
  );
}
