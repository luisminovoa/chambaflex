// Placeholder for JobCard.js
const JobCard = ({ job }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold">{job.title}</h3>
        <p className="text-gray-600">{job.company}</p>
        <p className="text-gray-500">{job.location}</p>
        <p className="text-gray-500">{job.date}</p>
      </div>
    );
  };
