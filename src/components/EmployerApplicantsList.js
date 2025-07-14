import React from 'react';

const EmployerApplicantsList = ({ setView }) => {
      // Mock data for applicants
      const applicants = [
        { id: 1, name: "Elena Vázquez", skills: "React, CSS, HTML" },
        { id: 2, name: "David Peña", skills: "Node.js, Express, MongoDB" },
        { id: 3, name: "Laura Campos", skills: "Angular, TypeScript, RxJS" },
      ];

      const handleAccept = () => {
        setView("payment");
      };

      return (
        <div className="max-w-4xl mx-auto mt-10">
          <h2 className="text-2xl font-bold mb-6 text-primary">Aplicantes para "Desarrollador Frontend"</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <ul>
              {applicants.map((applicant) => (
                <li key={applicant.id} className="py-4 border-b last:border-b-0">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{applicant.name}</h3>
                      <p className="text-gray-600">{applicant.skills}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={handleAccept}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
                      >
                        Aceptar
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg">
                        Rechazar
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };

export default EmployerApplicantsList;
