// /components/HistoryScreen.js
function HistoryScreen({ applicantHistory, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg">
        <h3 className="text-2xl font-bold mb-4">Historial de {applicantHistory.name}</h3>

        {applicantHistory.jobs.length > 0 ? (
          <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {applicantHistory.jobs.map((job, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <p className="font-semibold text-gray-900">{job.title}</p>
                <p className="text-sm text-gray-700">{job.date} - {job.payment}</p>
                {job.rating && (
                  <p className="text-sm text-gray-600 mt-1">Calificación: {job.rating} estrellas</p>
                )}
                {job.comment && (
                  <p className="text-sm text-gray-600">Comentario: "{job.comment}"</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No hay historial de trabajos para este postulante.</p>
        )}

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
