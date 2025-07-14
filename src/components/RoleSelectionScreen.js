const RoleSelectionScreen = ({ onSelectRole }) => {
      return (
        <div className="section">
          <h2>¿Cómo quieres continuar?</h2>
          <div className="card" onClick={() => onSelectRole("employer")}>
            <h3>Soy Empleador</h3>
            <p>Quiero contratar talento para mis proyectos.</p>
          </div>
          <div className="card" onClick={() => onSelectRole("worker")}>
            <h3>Soy Trabajador</h3>
            <p>Busco oportunidades para aplicar mis habilidades.</p>
          </div>
        </div>
      );
    };
