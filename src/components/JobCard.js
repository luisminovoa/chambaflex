const JobCard = ({ job }) => {
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
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col border-2 border-transparent hover:border-secondary">
          <h3 className="text-xl font-bold text-primary mb-2">{job.title}</h3>
          <p className="text-gray-800 font-semibold mb-1">{job.company}</p>
          <div className="flex items-center mb-2">
            {job.employerRating && (
              <>
                {renderStars(job.employerRating)}
                <span className="ml-2 text-sm font-bold text-gray-600">
                  {job.employerRating.toFixed(1)}
                </span>
              </>
            )}
          </div>
          <p className="text-gray-500 text-sm mb-4 flex items-center">
            <svg className="w-4 h-4 mr-1 text-secondary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
            {job.location}
          </p>
          <div className="flex-grow"></div>
          <button className="w-full mt-auto bg-secondary hover:bg-opacity-90 text-primary font-bold py-3 px-4 rounded-lg">
            Postularse
          </button>
        </div>
      );
    };
