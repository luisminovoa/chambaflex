const RoleSelectionScreen = ({ onSelectRole }) => {
      return (
        <div className="max-w-2xl mx-auto mt-10 md:mt-20 p-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">¿Cómo quieres continuar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              onClick={() => onSelectRole("employer")}
              className="bg-light p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-secondary"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">Soy Empleador</h3>
              <p className="text-gray-600">Quiero contratar talento para mis proyectos.</p>
            </div>
            <div
              onClick={() => {
                console.log("Worker role selected in RoleSelectionScreen");
                onSelectRole("worker");
              }}
              className="bg-light p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-secondary"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">Soy Trabajador</h3>
              <p className="text-gray-600">Busco oportunidades para aplicar mis habilidades.</p>
            </div>
          </div>
        </div>
      );
    };
