const EmployerApplicantsList = ({ setView }) => {
      // Mock data for applicants
      const applicants = [
        { id: 1, name: "Elena Vázquez", skills: "React, CSS, HTML" },
        { id: 2, name: "David Peña", skills: "Node.js, Express, MongoDB" },
        { id: 3, name: "Laura Campos", skills: "Angular, TypeScript, RxJS" },
      ];

      const handleAccept = () => {
        setView("payment");
      };

      return (
        <div>
          <h2 className="text-2xl font-bold mb-4">Aplicantes para "Desarrollador Frontend"</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ul>
              {applicants.map((applicant) => (
                <li key={applicant.id} className="py-2 border-b">
                  <h3 className="font-bold">{applicant.name}</h3>
                  <p className="text-gray-600">{applicant.skills}</p>
                  <div className="mt-2">
                    <button
                      onClick={handleAccept}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded mr-2"
                    >
                      Aceptar
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                      Rechazar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };
