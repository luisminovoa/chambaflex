const WorkerJobList = () => {
      // Mock data for jobs
      const jobs = [
        { id: 1, title: "Desarrollador Frontend", company: "Tech Solutions", location: "Remoto" },
        { id: 2, title: "Diseñador UX/UI", company: "Creative Minds", location: "Ciudad de México" },
        { id: 3, title: "Desarrollador Backend", company: "Server Experts", location: "Guadalajara" },
      ];

      return (
        <div>
          <h2 className="text-2xl font-bold mb-4">Trabajos Disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      );
    };
