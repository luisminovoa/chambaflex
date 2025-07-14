const ProfileSetupScreen = ({ userType }) => {
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
        <div className="max-w-2xl mx-auto mt-10">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">
              {isEmployer ? "Perfil de la Empresa" : "Configuración del Perfil"}
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                {isEmployer ? "Nombre de la Empresa" : "Nombre Completo"}
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
                {isEmployer ? "Descripción de la Empresa" : "Biografía"}
              </label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                rows="4"
              ></textarea>
            </div>
            {!isEmployer && (
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skills">
                  Habilidades (separadas por comas)
                </label>
                <input
                  type="text"
                  id="skills"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                />
              </div>
            )}
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Guardar Cambios
              </button>
            </div>
          </form>
          {userType === 'worker' ? <ApplicantHistoryScreen /> : <MyJobsScreen />}
          <Reviews userType={userType} />
        </div>
      );
    };
