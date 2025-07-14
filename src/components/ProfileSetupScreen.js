import React, { useState } from 'react';
import WorkerStats from './WorkerStats';
import EmployerStats from './EmployerStats';
import ApplicantHistoryScreen from './ApplicantHistoryScreen';
import MyJobsScreen from './MyJobsScreen';
import Reviews from './Reviews';

const ProfileSetupScreen = ({ userType, setView }) => {
      const isEmployer = userType === "employer";
      const [name, setName] = useState(isEmployer ? "Tech Innovations Inc." : "John Doe");
      const [bio, setBio] = useState(
        isEmployer
          ? "Líderes en soluciones de software a medida."
          : "Desarrollador Full-Stack con 5 años de experiencia."
      );
      const [skills, setSkills] = useState("React, Node.js, Python");

      const handleSubmit = (e) => {
        e.preventDefault();
        alert("Perfil actualizado exitosamente!");
      };

      return (
        <div className="max-w-4xl mx-auto mt-10">
          {userType === 'worker' ? <WorkerStats /> : <EmployerStats />}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg mt-6">
            <h2 className="text-2xl font-bold mb-6 text-primary">
              {isEmployer ? "Perfil de la Empresa" : "Configuración del Perfil"}
            </h2>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="name">
                {isEmployer ? "Nombre de la Empresa" : "Nombre Completo"}
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="bio">
                {isEmployer ? "Descripción de la Empresa" : "Biografía"}
              </label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-secondary"
                rows="4"
              ></textarea>
            </div>
            {!isEmployer && (
              <div className="mb-6">
                <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="skills">
                  Habilidades (separadas por comas)
                </label>
                <input
                  type="text"
                  id="skills"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            )}
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="bg-primary hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg"
              >
                Guardar Cambios
              </button>
            </div>
          </form>
          <div className="mt-10">
            {userType === 'worker' ? <ApplicantHistoryScreen /> : <MyJobsScreen setView={setView} />}
          </div>
          {userType === 'employer' && (
            <div className="mt-10">
                <Reviews userType={userType} />
            </div>
           )}
        </div>
      );
    };

export default ProfileSetupScreen;
