import React, { useState } from 'react';
import JobCard from '../components/JobCard';
import { defaultJobs } from '../mocks/jobs';

const WorkerJobList = ({ onApply }) => {
  const [filterPuesto, setFilterPuesto] = useState('');
  const [filterUbicacion, setFilterUbicacion] = useState('');

  const filteredJobs = defaultJobs.filter(job => {
    const matchesPuesto = filterPuesto ? job.title.toLowerCase().includes(filterPuesto.toLowerCase()) : true;
    const matchesUbicacion = filterUbicacion ? job.location.toLowerCase().includes(filterUbicacion.toLowerCase()) : true;
    return matchesPuesto && matchesUbicacion;
  });

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Chambas Disponibles</h2>
      <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-200 mb-6 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Filtros</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="filterPuesto" className="block text-sm font-medium text-gray-700 mb-2">
              Puesto
            </label>
            <input
              type="text"
              id="filterPuesto"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="Ej: Limpieza, Cocina"
              value={filterPuesto}
              onChange={(e) => setFilterPuesto(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="filterUbicacion" className="block text-sm font-medium text-gray-700 mb-2">
              Ubicación
            </label>
            <input
              type="text"
              id="filterUbicacion"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="Ej: Colonia Roma, CDMX"
              value={filterUbicacion}
              onChange={(e) => setFilterUbicacion(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <JobCard key={job.id} job={job} onApply={onApply} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-lg">No hay chambas disponibles con esos filtros.</p>
        )}
      </div>
    </div>
  );
};

export default WorkerJobList;
