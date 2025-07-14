import React from 'react';
import MyJobsScreen from './MyJobsScreen';

const EmployerDashboard = ({ setView }) => {
      return (
        <div className="max-w-4xl mx-auto mt-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-primary">Dashboard del Empleador</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setView("find-workers")}
                className="bg-secondary hover:bg-opacity-90 text-primary font-bold py-2 px-4 rounded-lg"
              >
                Buscar Trabajadores
              </button>
              <button
                onClick={() => setView("post-job")}
                className="bg-primary hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg"
              >
                Publicar Nuevo Trabajo
              </button>
            </div>
          </div>
          <MyJobsScreen setView={setView} />
        </div>
      );
    };

export default EmployerDashboard;
