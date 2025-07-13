const JobCard = ({ job }) => {
      return (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">{job.title}</h3>
          <p className="text-gray-700 mb-2">{job.company}</p>
          <p className="text-gray-600 mb-4">{job.location}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Postularse
          </button>
        </div>
      );
    };
