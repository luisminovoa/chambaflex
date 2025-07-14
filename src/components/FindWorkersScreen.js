const FindWorkersScreen = () => {
      const [filteredWorkers, setFilteredWorkers] = useState(workers);

      const handleSearch = ({ skills, availability, location }) => {
        let results = workers;

        if (skills) {
          results = results.filter((worker) =>
            worker.skills.some((skill) =>
              skill.toLowerCase().includes(skills.toLowerCase())
            )
          );
        }

        if (availability) {
          results = results.filter(
            (worker) => worker.availability === availability
          );
        }

        if (location) {
          results = results.filter((worker) =>
            worker.location.toLowerCase().includes(location.toLowerCase())
          );
        }

        setFilteredWorkers(results);
      };

      return (
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">Encuentra al Talento Ideal</h2>
          <WorkerSearchForm onSearch={handleSearch} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkers.length > 0 ? (
              filteredWorkers.map((worker) => (
                <WorkerCard key={worker.id} worker={worker} />
              ))
            ) : (
              <p className="text-center col-span-full">
                No se encontraron trabajadores con esos criterios.
              </p>
            )}
          </div>
        </div>
      );
    };

    const WorkerSearchForm = ({ onSearch }) => {
      const [skills, setSkills] = useState("");
      const [availability, setAvailability] = useState("");
      const [location, setLocation] = useState("");

      const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ skills, availability, location });
      };

      return (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md mb-6 flex items-end space-x-4"
        >
          <div className="flex-grow">
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
              Habilidades
            </label>
            <input
              type="text"
              id="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="flex-grow">
            <label
              htmlFor="availability"
              className="block text-sm font-medium text-gray-700"
            >
              Disponibilidad
            </label>
            <select
              id="availability"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md"
            >
              <option value="">Cualquiera</option>
              <option value="Tiempo Completo">Tiempo Completo</option>
              <option value="Medio Tiempo">Medio Tiempo</option>
              <option value="Por Proyecto">Por Proyecto</option>
            </select>
          </div>
          <div className="flex-grow">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Ubicación
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Buscar
          </button>
        </form>
      );
    };

    const WorkerCard = ({ worker }) => {
      return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src={worker.photo}
            alt={worker.name}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-bold">{worker.name}</h3>
          <p className="text-gray-600 mb-2">{worker.location}</p>
          <p className="text-sm text-gray-500 mb-4">{worker.bio}</p>
          <div className="mb-4">
            {worker.skills.map((skill) => (
              <span
                key={skill}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {skill}
              </span>
            ))}
          </div>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Contactar
          </button>
        </div>
      );
    };
