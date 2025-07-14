const MyJobsScreen = ({ setView }) => {
      // Mock data for jobs posted by the employer
      const myJobs = [
        { id: 1, title: "Desarrollador Frontend", applicants: 5 },
        { id: 2, title: "Diseñador UX/UI", applicants: 3 },
      ];

      return (
        <div className="max-w-4xl mx-auto mt-10">
          <h2 className="text-2xl font-bold mb-6 text-primary">Mis Trabajos Publicados</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <ul>
              {myJobs.map((job) => (
                <li key={job.id} className="flex justify-between items-center py-4 border-b last:border-b-0">
                  <p className="font-bold text-lg text-gray-800">{job.title}</p>
                  <button
                    onClick={() => setView("applicants")}
                    className="bg-secondary hover:bg-opacity-90 text-primary font-bold py-2 px-4 rounded-lg"
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
