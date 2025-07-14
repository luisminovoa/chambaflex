const EmployerDashboard = ({ setView }) => {
      return (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Dashboard del Empleador</h2>
            <div>
              <button
                onClick={() => setView("find-workers")}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-4"
              >
                Buscar Trabajadores
              </button>
              <button
                onClick={() => setView("post-job")}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Publicar Nuevo Trabajo
              </button>
            </div>
          </div>
          <MyJobsScreen />
        </div>
      );
    };
