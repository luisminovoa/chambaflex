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
            <h1 className="text-4xl font-bold text-primary mb-4 leading-tight">
              La app que transforma el trabajo informal en <span className="text-secondary">oportunidad digital</span>
            </h1>
            <p className="text-lg text-gray-600">
              Conecta con empleadores y trabajadores calificados por día u hora, en tiempo real.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              A diferencia de otras plataformas, aquí puedes contratar sin publicar, viendo directamente quién está disponible según tu barrio y necesidad.
            </p>
          </div>
          <div>
            <form onSubmit={handleLogin} className="bg-light p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-center text-primary">Iniciar Sesión</h2>
              <div className="mb-4">
                <label className="block text-primary text-sm font-bold mb-2" htmlFor="email">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                  className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="email@ejemplo.com"
                required
              />
            </div>
            <div className="mb-6">
                <label className="block text-primary text-sm font-bold mb-2" htmlFor="password">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                  className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="******************"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-opacity-90 text-primary font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              >
                Iniciar Sesión
              </button>
            </div>
            <div className="text-center">
              <p className="text-gray-500 my-4">o</p>
              <button
                onClick={() => onLogin("worker@google.com")}
                className="bg-white border-2 border-gray-300 hover:bg-gray-100 text-gray-800 font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full flex items-center justify-center"
              >
                <img src="https://www.google.com/favicon.ico" alt="Google icon" className="w-5 h-5 mr-2"/>
                Iniciar Sesión con Google
              </button>
            </div>
            </form>
          </div>
        </div>
      );
    };
