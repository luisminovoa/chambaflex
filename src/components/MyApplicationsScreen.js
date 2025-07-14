const MyApplicationsScreen = () => {
      // Mock data for applications
      const applications = [
        { id: 1, jobTitle: "Desarrollador Frontend", company: "Tech Solutions", status: "En revisión" },
        { id: 2, jobTitle: "Diseñador UX/UI", company: "Creative Minds", status: "Rechazado" },
        { id: 3, jobTitle: "Desarrollador Backend", company: "Server Experts", status: "Aceptado" },
        { id: 4, jobTitle: "Project Manager", company: "Innovate Inc.", status: "En revisión" },
        { id: 5, jobTitle: "Data Scientist", company: "Data Driven Co.", status: "Aceptado" },
      ];

      const getStatusClass = (status) => {
        switch (status) {
          case "Aceptado":
            return "text-green-500";
          case "Rechazado":
            return "text-red-500";
          default:
            return "text-yellow-500";
        }
      };

      return (
        <div className="max-w-4xl mx-auto mt-10">
          <h2 className="text-2xl font-bold mb-6 text-primary">Mis Postulaciones</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <ul>
              {applications.map((app) => (
                <li key={app.id} className="flex justify-between items-center py-4 border-b last:border-b-0">
                  <div>
                    <p className="font-bold text-lg text-gray-800">{app.jobTitle}</p>
                    <p className="text-gray-600">{app.company}</p>
                  </div>
                  <span className={`font-bold text-lg ${getStatusClass(app.status)}`}>{app.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };
