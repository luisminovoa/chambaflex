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
        <div className="card">
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <div>
            {job.employerRating && (
              <>
                {renderStars(job.employerRating)}
                <span>
                  {job.employerRating.toFixed(1)}
                </span>
              </>
            )}
          </div>
          <p>
            <svg viewBox="0 0 20 20"><path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" /></svg>
            {job.location}
          </p>
          <button className="button">
            Postularse
          </button>
        </div>
      );
    };
