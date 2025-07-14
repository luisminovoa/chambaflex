const LayoutHeader = ({ user, onLogout, setView }) => {
      return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Chamba Flex</h1>
          <nav>
            <button onClick={() => setView("mission")} className="mr-6 text-white hover:text-gray-200">
                Nuestra Misión
            </button>
            {user ? (
              <>
                <button onClick={() => setView("profile")} className="mr-4">
                  Perfil
                </button>
                {user.type === "worker" ? (
                  <>
                    <button onClick={() => setView("worker-dashboard")} className="mr-4">
                      Buscar Trabajos
                    </button>
                    <button onClick={() => setView("my-applications")} className="mr-4">
                      Mis Postulaciones
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => setView("employer-dashboard")} className="mr-4">
                      Dashboard
                    </button>
                    <button onClick={() => setView("my-jobs")} className="mr-4">
                      Mis Trabajos
                    </button>
                  </>
                )}
                <button onClick={onLogout}>Cerrar Sesión</button>
              </>
            ) : (
              <button
                onClick={() => setView("auth")}
                className="bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-gray-200"
              >
                Iniciar Sesión
              </button>
            )}
          </nav>
        </header>
      );
    };
