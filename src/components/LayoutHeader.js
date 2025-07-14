const LayoutHeader = ({ user, onLogout, setView }) => {
      return (
        <header className="bg-primary text-white p-4 flex justify-between items-center shadow-lg">
          <h1 className="text-2xl font-bold">Chamba Flex</h1>
          <nav>
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
        </header>
      );
    };
