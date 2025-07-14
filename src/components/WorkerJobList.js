import { peruvianJobs } from '../mock/data.js';

const WorkerJobList = () => {
      const [filteredJobs, setFilteredJobs] = useState(peruvianJobs);

      const handleSearch = ({ searchTerm, location, dateRange }) => {
        let jobs = peruvianJobs;

        if (searchTerm) {
          jobs = jobs.filter((job) =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }

        if (location) {
          jobs = jobs.filter((job) =>
            job.location.toLowerCase().includes(location.toLowerCase())
          );
        }

        if (dateRange) {
          const now = new Date();
          const daysToSubtract = {
            "24h": 1,
            "7d": 7,
            "30d": 30,
          }[dateRange];
          const dateLimit = new Date(now.setDate(now.getDate() - daysToSubtract));
          jobs = jobs.filter((job) => new Date(job.date) >= dateLimit);
        }

        setFilteredJobs(jobs);
      };

      return (
        <div className="p-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-primary">Encuentra tu Próximo Trabajo</h2>
          <JobSearchForm onSearch={handleSearch} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
              <p className="text-center col-span-full">No se encontraron trabajos con esos criterios.</p>
            )}
          </div>
        </div>
      );
    };
