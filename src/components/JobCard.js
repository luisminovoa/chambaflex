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
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
          <h3 className="text-xl font-bold mb-2">{job.title}</h3>
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
          <p className="text-gray-600 mb-4">{job.location}</p>
          <div className="flex-grow"></div>
          <button className="w-full mt-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Postularse
          </button>
        </div>
      );
    };
