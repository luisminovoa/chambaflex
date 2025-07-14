import { jobHistory } from '../mock/data.js';

const WorkerStats = () => {
      const completedJobs = jobHistory.filter(job => job.status === "Completado" && job.rating);
      const successfulJobs = completedJobs.length;
      const totalRating = completedJobs.reduce((acc, job) => acc + job.rating, 0);
      const averageRating = successfulJobs > 0 ? totalRating / successfulJobs : 0;

      const memberSince = "Enero 2023"; // Still static for simulation
      const trustLevel = successfulJobs >= 3 ? "Trabajador Confiable" : "Nuevo Talento";
      const trustLevelClass = successfulJobs >= 3 ? "bg-green-500 text-white" : "bg-blue-500 text-white";

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
          <h3 className="text-xl font-bold mb-4">Mis Estadísticas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-lg font-semibold">Puntuación General</p>
              <div className="flex justify-center items-center">
                {renderStars(averageRating)}
                <span className="ml-2 text-xl font-bold">{averageRating.toFixed(1)}</span>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold">Trabajos Completados</p>
              <p className="text-2xl font-bold">{successfulJobs}</p>
            </div>
            <div>
              <p className="text-lg font-semibold">Nivel de Confianza</p>
              <p className={`text-lg font-bold px-3 py-1 rounded-full inline-block ${trustLevelClass}`}>{trustLevel}</p>
            </div>
          </div>
        </div>
      );
    };
