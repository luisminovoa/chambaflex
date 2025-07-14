const EmployerDashboard = () => {
      return (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Dashboard del Empleador</h2>
            <button
              onClick={() => alert("Redirigir a formulario de nuevo trabajo")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Publicar Nuevo Trabajo
            </button>
          </div>
          <MyJobsScreen />
        </div>
      );
    };
