const JobSearchForm = ({ onSearch }) => {
      const [searchTerm, setSearchTerm] = useState("");
      const [location, setLocation] = useState("");
      const [dateRange, setDateRange] = useState("");

      const handleSearch = (e) => {
        e.preventDefault();
        onSearch({ searchTerm, location, dateRange });
      };

      return (
        <form onSubmit={handleSearch} className="bg-white p-6 rounded-lg shadow-md mb-6 flex items-end space-x-4">
          <div className="flex-grow">
            <label htmlFor="search-term" className="block text-sm font-medium text-gray-700">
              Puesto o palabra clave
            </label>
            <input
              type="text"
              id="search-term"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex-grow">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Ciudad
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="date-range" className="block text-sm font-medium text-gray-700">
              Fecha de publicación
            </label>
            <select
              id="date-range"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">Cualquier fecha</option>
              <option value="24h">Últimas 24 horas</option>
              <option value="7d">Últimos 7 días</option>
              <option value="30d">Últimos 30 días</option>
            </select>
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
