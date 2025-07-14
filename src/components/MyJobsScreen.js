const MyJobsScreen = ({ setView }) => {
      // Mock data for jobs posted by the employer
      const myJobs = [
        { id: 1, title: "Desarrollador Frontend", applicants: 5 },
        { id: 2, title: "Diseñador UX/UI", applicants: 3 },
      ];

      return (
        <div>
          <h2 className="text-2xl font-bold mb-4">Mis Trabajos Publicados</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ul>
              {myJobs.map((job) => (
                <li key={job.id} className="flex justify-between items-center py-2 border-b">
                  <span>{job.title}</span>
                  <button
                    onClick={() => setView("applicants")}
                    className="text-blue-500 hover:underline"
                  >
                    Ver Aplicantes ({job.applicants})
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };
