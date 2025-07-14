const AuthScreen = ({ onLogin }) => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const handleLogin = (e) => {
        e.preventDefault();
        onLogin(email);
      };

      return (
        <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-left p-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
              La app que transforma el <span className="text-blue-600">trabajo informal</span> en <span className="text-green-500">oportunidad digital</span>
            </h1>
            <p className="text-lg text-gray-700">
              Conecta con empleadores y trabajadores calificados por día u hora, en tiempo real.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              A diferencia de otras plataformas, aquí puedes contratar sin publicar, viendo directamente quién está disponible según tu barrio y necesidad.
            </p>
          </div>
          <div>
            <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
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
            <div className="text-center">
              <p className="text-gray-600 my-4">o</p>
              <button
                onClick={() => onLogin("worker@google.com")}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Iniciar Sesión con Google
              </button>
            </div>
            </form>
          </div>
        </div>
      );
    };
