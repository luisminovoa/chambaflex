const AuthScreen = ({ onLogin }) => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const handleLogin = (e) => {
        e.preventDefault();
        onLogin(email);
      };

      return (
        <div className="section">
          <h1>
            La app que transforma el trabajo informal en <span>oportunidad digital</span>
          </h1>
          <p>
            Conecta con empleadores y trabajadores calificados por día u hora, en tiempo real.
          </p>
          <p>
            A diferencia de otras plataformas, aquí puedes contratar sin publicar, viendo directamente quién está disponible según tu barrio y necesidad.
          </p>
          <form onSubmit={handleLogin}>
            <h2>Iniciar Sesión</h2>
            <div>
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@ejemplo.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******************"
                required
              />
            </div>
            <button type="submit" className="button">
              Iniciar Sesión
            </button>
            <p>o</p>
            <button
              onClick={() => onLogin("worker@google.com")}
              className="button"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google icon" />
              Iniciar Sesión con Google
            </button>
          </form>
        </div>
      );
    };
