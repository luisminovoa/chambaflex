// /components/EmployerApplicantsList.js
function EmployerApplicantsList({ jobs, applicants, onContact }) {
  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Postulantes a tus Chambas</h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {jobs.length > 0 ? (
          jobs.map(job => (
            <div key={job.id} className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{job.title}</h3>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <p className="text-gray-600 text-sm mb-4">
                <span className="font-semibold">Fecha:</span> {job.date} | <span className="font-semibold">Hora:</span> {job.time} | <span className="font-semibold">Pago:</span> {job.payment}
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Postulantes:</h4>
              {applicants[job.id] && applicants[job.id].length > 0 ? (
                <div className="space-y-3">
                  {applicants[job.id].map((applicant, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <p className="text-gray-800 font-medium">{applicant.name}</p>
                      <button
                        onClick={() => onContact(applicant.contact)}
                        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm shadow-md"
                      >
                        Contactar (WhatsApp)
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">Nadie se ha postulado aún a esta chamba.</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg">Aún no has publicado ninguna chamba.</p>
        )}
      </div>
    </div>
  );
}
