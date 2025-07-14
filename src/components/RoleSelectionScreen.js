const RoleSelectionScreen = ({ onSelectRole }) => {
      return (
        <div className="max-w-md mx-auto mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">¿Cómo quieres continuar?</h2>
          <div className="space-y-4">
            <button
              onClick={() => onSelectRole("employer")}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg text-lg"
            >
              Entrar como Empleador
            </button>
            <button
              onClick={() => onSelectRole("worker")}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-6 rounded-lg text-lg"
            >
              Entrar como Trabajador
            </button>
          </div>
        </div>
      );
    };
