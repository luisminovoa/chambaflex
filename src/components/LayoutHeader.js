const LayoutHeader = ({ user, onLogout, setView }) => {
      return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">ChambaExpress</h1>
          <nav>
            {user ? (
              <>
                <button onClick={() => setView("profile")} className="mr-4">
                  Perfil
                </button>
                {user.type === "worker" && (
                  <button onClick={() => setView("my-applications")} className="mr-4">
                    Mis Postulaciones
                  </button>
                )}
                {user.type === "employer" && (
                  <>
                    <button onClick={() => setView("my-jobs")} className="mr-4">
                      Mis Trabajos
                    </button>
                    <button onClick={() => setView("employer")} className="mr-4">
                      Publicar Trabajo
                    </button>
                  </>
                )}
                <button onClick={onLogout}>Cerrar Sesión</button>
              </>
            ) : (
              <button onClick={() => setView("auth")}>Iniciar Sesión</button>
            )}
          </nav>
        </header>
      );
    };
