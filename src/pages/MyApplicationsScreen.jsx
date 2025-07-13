import React from 'react';

const MyApplicationsScreen = ({ myApplications }) => {
  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Mis Postulaciones</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {myApplications && myApplications.length > 0 ? (
          myApplications.map((app, index) => (
            <div key={index} className="bg-white p-5 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{app.jobTitle}</h3>
                  <p className="text-gray-600">Estado: <span className="font-medium text-black">{app.status}</span></p>
                </div>
                {app.status === 'Completado' && (
                  <button
                    onClick={() => alert('Funcionalidad de calificar empleador en desarrollo')}
                    className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition-colors text-sm shadow-md"
                  >
                    Calificar Empleador
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg">Aún no te has postulado a ninguna chamba.</p>
        )}
      </div>
    </div>
  );
};

export default MyApplicationsScreen;
