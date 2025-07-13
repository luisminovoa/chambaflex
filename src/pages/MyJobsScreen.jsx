import React, { useState } from 'react';

const MyJobsScreen = () => {
  // Lógica para obtener los trabajos del empleador actual
  const employerJobs = []; // Simulación
  const applicants = {}; // Simulación

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Mis Ofertas Publicadas</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {employerJobs.length > 0 ? (
          employerJobs.map(job => (
            <div key={job.id} className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{job.title}</h3>
              {/* Más detalles del trabajo y lista de postulantes */}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg">Aún no has publicado ninguna chamba.</p>
        )}
      </div>
    </div>
  );
};

export default MyJobsScreen;
