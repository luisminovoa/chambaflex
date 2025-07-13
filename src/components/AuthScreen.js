const AuthScreen = ({ onLogin }) => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const handleLogin = (e) => {
        e.preventDefault();
        onLogin(email);
      };

      return (
        <div className="max-w-md mx-auto mt-10">
          <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Iniciar Sesión</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="email@ejemplo.com"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="******************"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-gray-600 mb-4">o</p>
            <button
              onClick={() => onLogin("worker@google.com")}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Iniciar Sesión con Google
            </button>
          </div>
        </div>
      );
    };
