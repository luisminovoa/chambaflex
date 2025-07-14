const LayoutHeader = ({ user, onLogout, setView }) => {
      return (
        <header className="navbar">
          <h1>Chamba Flex</h1>
          <nav>
            <button onClick={() => setView("mission")}>
                Nuestra Misión
            </button>
            {user ? (
              <>
                <button onClick={() => setView("profile")}>
                  Perfil
                </button>
                {user.type === "worker" ? (
                  <>
                    <button onClick={() => setView("worker-dashboard")}>
                      Buscar Trabajos
                    </button>
                    <button onClick={() => setView("my-applications")}>
                      Mis Postulaciones
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => setView("employer-dashboard")}>
                      Dashboard
                    </button>
                    <button onClick={() => setView("my-jobs")}>
                      Mis Trabajos
                    </button>
                  </>
                )}
                <button
                  onClick={onLogout}
                  className="button"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <button
                onClick={() => setView("auth")}
                className="button"
              >
                Iniciar Sesión
              </button>
            )}
          </nav>
        </header>
      );
    };
