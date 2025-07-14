const ApplicantHistoryScreen = () => {
      // Mock data for applicant history
      const history = [
        { id: 1, name: "Ana Torres", status: "Contactado" },
        { id: 2, name: "Carlos Ruiz", status: "Rechazado" },
        { id: 3, name: "Beatriz Mendoza", status: "Contratado" },
      ];

      return (
        <div>
          <h2 className="text-2xl font-bold mb-4">Historial de Trabajos</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ul>
              {history.map((applicant) => (
                <li key={applicant.id} className="flex justify-between items-center py-2 border-b">
                  <span>{applicant.name}</span>
                  <span>{applicant.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };
