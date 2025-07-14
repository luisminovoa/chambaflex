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
          <h2 className="text-3xl font-bold mb-2 text-center">Encuentra al Talento Ideal</h2>
          <p className="text-center text-gray-600 mb-6">
            Con un solo clic, los empleadores pueden ver quién está disponible hoy mismo, por hora o por día.
          </p>
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
              <option value="Inmediata">Inmediata</option>
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
        const getAvailabilityClass = (availability) => {
            if (availability === 'Inmediata') return 'bg-secondary text-primary';
            return 'bg-light text-gray-800';
        };

        const renderStars = (rating) => {
            const stars = [];
            for (let i = 1; i <= 5; i++) {
                stars.push(
                    <span key={i} className={`text-xl ${i <= rating ? "text-yellow-400" : "text-gray-300"}`}>
                        &#9733;
                    </span>
                );
            }
            return stars;
        };

        return (
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col text-center border-2 border-transparent hover:border-secondary">
                <img
                    src={worker.photo}
                    alt={worker.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-light"
                />
                <h3 className="text-xl font-bold text-primary">{worker.name}</h3>
                <div className="flex justify-center items-center my-2">
                    {renderStars(worker.rating)}
                    <span className="ml-2 font-bold text-gray-700">{worker.rating.toFixed(1)}</span>
                </div>
                 <p className="text-gray-500 text-sm mb-2 flex items-center justify-center">
                    <svg className="w-4 h-4 mr-1 text-secondary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    {worker.location}
                </p>
                <div className="bg-light p-2 rounded-lg mb-4">
                    <p className="font-semibold text-sm text-gray-700">
                        📅 Hoy: <span className="font-normal">{worker.dailyAvailability}</span>
                    </p>
                </div>
                <div className="mb-4">
                    {worker.skills.slice(0, 3).map((skill) => (
                        <span
                            key={skill}
                            className="inline-block bg-light rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-2 mt-auto">
                    <button className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg">
                        Ver Perfil
                    </button>
                    <button className="w-full bg-secondary hover:bg-opacity-90 text-primary font-bold py-2 px-4 rounded-lg">
                        Contactar
                    </button>
                </div>
            </div>
        );
    };
