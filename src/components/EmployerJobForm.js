import React, { useState } from 'react';

const EmployerJobForm = () => {
      const [title, setTitle] = useState("");
      const [company, setCompany] = useState("");
      const [location, setLocation] = useState("");
      const [description, setDescription] = useState("");

      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission, e.g., send to a server
        console.log({ title, company, location, description });
        alert("Trabajo publicado exitosamente!");
      };

      return (
        <div className="max-w-2xl mx-auto mt-10">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-primary">Publicar un Nuevo Trabajo</h2>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="title">
                Título del Trabajo
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="company">
                Empresa
              </label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="location">
                Ubicación
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="description">
                Descripción
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-secondary"
                rows="5"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="bg-primary hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              >
                Publicar Trabajo
              </button>
            </div>
          </form>
        </div>
      );
    };

export default EmployerJobForm;
