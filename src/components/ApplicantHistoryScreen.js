import React from 'react';
import { jobHistory } from '../mock/data';

const ApplicantHistoryScreen = () => {
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
        <div className="max-w-4xl mx-auto mt-10">
          <h2 className="text-2xl font-bold mb-6 text-primary">Historial y Reseñas</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            {jobHistory.map((job) => (
              <div key={job.id} className="py-4 border-b last:border-b-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{job.jobTitle}</h3>
                    <p className="text-gray-600">para {job.company}</p>
                  </div>
                  <span
                    className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      job.status === "Completado" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                    }`}
                  >
                    {job.status}
                  </span>
                </div>
                {job.review && (
                  <div className="mt-3 border-t pt-3">
                    <div className="flex items-center mb-1">
                      {renderStars(job.rating)}
                      <span className="ml-2 font-bold">{job.rating.toFixed(1)}</span>
                    </div>
                    <p className="text-gray-700 italic">"{job.review}"</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    };

export default ApplicantHistoryScreen;
