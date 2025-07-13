import React from 'react';

const JobCard = ({ job, onApply, showApplyButton = true }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
      <p className="text-gray-700 mb-3 text-sm">{job.description}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-600 text-sm mb-4">
        <span className="flex items-center">
          <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          {job.date}
        </span>
        <span className="flex items-center">
          <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          {job.time}
        </span>
        <span className="flex items-center">
          <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          {job.location}
        </span>
      </div>
      <p className="text-lg font-bold text-black mb-4">{job.payment}</p>

      {showApplyButton && (
        <button
          onClick={() => onApply(job.id)}
          className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition-colors font-medium shadow-md"
        >
          Postularme
        </button>
      )}
    </div>
  );
};

export default JobCard;
