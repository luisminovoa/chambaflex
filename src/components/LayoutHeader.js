const LayoutHeader = ({ user, onLogout, setView }) => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      return (
        <header className="bg-primary text-white p-4 flex justify-between items-center shadow-lg relative">
          <h1 className="text-2xl font-bold">Chamba Flex</h1>
          <nav className="hidden md:flex items-center">
            <button onClick={() => setView("mission")} className="mr-6 font-semibold hover:text-secondary">
                Nuestra Misión
            </button>
            {user ? (
              <>
                <button onClick={() => setView("profile")} className="mr-4 font-semibold hover:text-secondary">
                  Perfil
                </button>
                {user.type === "worker" ? (
                  <>
                    <button onClick={() => setView("worker-dashboard")} className="mr-4 font-semibold hover:text-secondary">
                      Buscar Trabajos
                    </button>
                    <button onClick={() => setView("my-applications")} className="mr-4 font-semibold hover:text-secondary">
                      Mis Postulaciones
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => setView("employer-dashboard")} className="mr-4 font-semibold hover:text-secondary">
                      Dashboard
                    </button>
                    <button onClick={() => setView("my-jobs")} className="mr-4 font-semibold hover:text-secondary">
                      Mis Trabajos
                    </button>
                  </>
                )}
                <button
                  onClick={onLogout}
                  className="bg-secondary text-primary font-bold py-2 px-4 rounded-lg hover:bg-opacity-90"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <button
                onClick={() => setView("auth")}
                className="bg-secondary text-primary font-bold py-2 px-4 rounded-lg hover:bg-opacity-90"
              >
                Iniciar Sesión
              </button>
            )}
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl p-2 z-10 md:hidden">
              <nav className="flex flex-col space-y-2">
                <button onClick={() => {setView("mission"); toggleMenu();}} className="text-primary font-semibold hover:bg-light p-2 rounded-md">
                    Nuestra Misión
                </button>
                {user ? (
                  <>
                    <button onClick={() => {setView("profile"); toggleMenu();}} className="text-primary font-semibold hover:bg-light p-2 rounded-md">
                      Perfil
                    </button>
                    {user.type === "worker" ? (
                      <>
                        <button onClick={() => {setView("worker-dashboard"); toggleMenu();}} className="text-primary font-semibold hover:bg-light p-2 rounded-md">
                          Buscar Trabajos
                        </button>
                        <button onClick={() => {setView("my-applications"); toggleMenu();}} className="text-primary font-semibold hover:bg-light p-2 rounded-md">
                          Mis Postulaciones
                        </button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => {setView("employer-dashboard"); toggleMenu();}} className="text-primary font-semibold hover:bg-light p-2 rounded-md">
                          Dashboard
                        </button>
                        <button onClick={() => {setView("my-jobs"); toggleMenu();}} className="text-primary font-semibold hover:bg-light p-2 rounded-md">
                          Mis Trabajos
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => {onLogout(); toggleMenu();}}
                      className="bg-secondary text-primary font-bold py-2 px-4 rounded-lg hover:bg-opacity-90"
                    >
                      Cerrar Sesión
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {setView("auth"); toggleMenu();}}
                    className="bg-secondary text-primary font-bold py-2 px-4 rounded-lg hover:bg-opacity-90"
                  >
                    Iniciar Sesión
                  </button>
                )}
              </nav>
            </div>
          )}
        </header>
      );
    };
