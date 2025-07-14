const JobCard = ({ job }) => {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col border-2 border-transparent hover:border-secondary">
        <h3 className="text-xl font-bold text-primary">{job.title}</h3>
        <p className="text-gray-800">{job.company}</p>
        <div className="text-gray-500 text-sm my-2">
          <p className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
            {job.location}
          </p>
          <p className="flex items-center mt-1">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
            {job.date}
          </p>
        </div>
        <div className="mt-auto">
            <button
                onClick={() => alert("Funcionalidad de ver detalles no implementada todavía.")}
                className="w-full bg-primary hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg"
            >
                Ver Detalles
            </button>
        </div>
      </div>
    );
  };
