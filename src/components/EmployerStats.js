const EmployerStats = () => {
      const rating = 4.9;
      const memberSince = "Marzo 2022";
      const successfulJobs = 25;
      const trustLevel = successfulJobs > 20 ? "Empleador Verificado" : "Nuevo Empleador";
      const trustLevelClass = successfulJobs > 20 ? "bg-green-500 text-white" : "bg-blue-500 text-white";

      const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        for (let i = 0; i < fullStars; i++) {
          stars.push(<span key={`full-${i}`} className="text-yellow-400 text-2xl">&#9733;</span>);
        }
        if (halfStar) {
          stars.push(<span key="half" className="text-yellow-400 text-2xl">&#9734;</span>);
        }
        for (let i = 0; i < 5 - Math.ceil(rating); i++) {
          stars.push(<span key={`empty-${i}`} className="text-gray-300 text-2xl">&#9733;</span>);
        }
        return stars;
      };

      return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 text-center">
          <h3 className="text-xl font-bold mb-4">Estadísticas de la Empresa</h3>
          <div className="flex justify-around items-center">
            <div>
              <p className="text-lg font-semibold">Puntuación General</p>
              <div className="flex justify-center items-center">
                {renderStars(rating)}
                <span className="ml-2 text-xl font-bold">{rating.toFixed(1)}</span>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold">Miembro Desde</p>
              <p className="text-xl font-bold">{memberSince}</p>
            </div>
            <div>
              <p className="text-lg font-semibold">Confianza</p>
              <p className={`text-lg font-bold px-3 py-1 rounded-full ${trustLevelClass}`}>{trustLevel}</p>
            </div>
          </div>
        </div>
      );
    };
