import React from 'react';

const ApplicantHistoryScreen = () => {
  // Lógica para obtener el historial del postulante
  const applicantHistory = { name: 'Nombre del Postulante', jobs: [] }; // Simulación

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Historial de {applicantHistory.name}
      </h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {applicantHistory.jobs.length > 0 ? (
          applicantHistory.jobs.map((job, index) => (
            <div key={index} className="bg-white p-5 rounded-2xl shadow-lg border border-gray-200">
              {/* Detalles del trabajo en el historial */}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg">No hay historial de trabajos para mostrar.</p>
        )}
      </div>
    </div>
  );
};

export default ApplicantHistoryScreen;
