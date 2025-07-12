// /App.js
function App() {
  const [currentPage, setCurrentPage] = useState('auth');
  const [userRole, setUserRole] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [jobs, setJobs] = useState(defaultJobs);
  const [applicants, setApplicants] = useState({});
  const [myApplications, setMyApplications] = useState([]);
  const [userProfiles, setUserProfiles] = useState({});
  const [jobHistory, setJobHistory] = useState({});
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [currentApplicantHistory, setCurrentApplicantHistory] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // El usuario está conectado.
        setCurrentUserId(user.uid);
        // Aquí podrías cargar el rol del usuario desde tu base de datos (Firestore, etc.)
        // Por ahora, lo dejaremos como 'Trabajador' por defecto después del login.
      } else {
        // El usuario no está conectado.
        setCurrentUserId(null);
        setUserRole(null);
        setCurrentPage('auth');
      }
    });

    return () => unsubscribe(); // Limpiar el listener al desmontar el componente
  }, []);

  const handleLogin = (role) => {
    // La lógica de `onAuthStateChanged` ya se encarga de la redirección.
    // Solo necesitamos establecer el rol seleccionado por el usuario.
    // Esto es temporal, idealmente el rol se guardaría en la base de datos.
    setUserRole(role);
    setCurrentPage('workerJobs');
  };

  const handleLogout = () => {
    firebase.auth().signOut().then(() => {
      setUserRole(null);
      setCurrentUserId(null);
      setCurrentPage('auth');
      setMyApplications([]);
    }).catch((error) => {
      console.error(error);
    });
  };

  const handleJobPosted = (newJob) => {
    // Asignar el ID del empleador actual al trabajo
    const jobWithEmployerId = { ...newJob, employerId: currentUserId };
    setJobs(prevJobs => [...prevJobs, jobWithEmployerId]);
    alert('¡Chamba publicada con éxito!');
  };

  const handleApply = (jobId) => {
    if (!currentUserId) {
      alert('Debes iniciar sesión para postularte.');
      setCurrentPage('auth');
      return;
    }
    if (!userProfiles[currentUserId] || !userProfiles[currentUserId].name || !userProfiles[currentUserId].phone) {
      alert('Por favor, completa tu perfil (nombre y teléfono) antes de postularte.');
      setCurrentPage('profileSetup');
      return;
    }

    const confirmApply = window.confirm('¿Estás seguro de que quieres postularte a esta chamba?');
    if (!confirmApply) return;

    const applicantName = userProfiles[currentUserId].name;
    const applicantContact = userProfiles[currentUserId].phone;

    setApplicants(prevApplicants => ({
      ...prevApplicants,
      [jobId]: [...(prevApplicants[jobId] || []), { id: currentUserId, name: applicantName, contact: applicantContact }]
    }));
    const appliedJob = jobs.find(job => job.id === jobId);
    if (appliedJob) {
      setMyApplications(prevApps => [...prevApps, { jobId: appliedJob.id, jobTitle: appliedJob.title, status: 'Pendiente', applicantId: currentUserId }]);
    }
    alert('¡Te has postulado con éxito! El empleador te contactará.');
  };

  const handleContactApplicant = (contact) => {
    window.open(`https://wa.me/${contact}`, '_blank');
  };

  const handleProfileSave = (profileData) => {
    setUserProfiles(prevProfiles => ({
      ...prevProfiles,
      [currentUserId]: profileData
    }));
    alert('¡Perfil guardado con éxito!');
  };

  const handleRateApplicant = (applicantId, rating, comment) => {
    setJobHistory(prevHistory => {
      const updatedHistory = { ...prevHistory };
      if (!updatedHistory[applicantId]) {
        updatedHistory[applicantId] = [];
      }
      updatedHistory[applicantId].push({
        jobId: 'ratedJob',
        title: 'Trabajo Calificado',
        date: new Date().toISOString().slice(0, 10),
        rating,
        comment
      });
      return updatedHistory;
    });
  };

  const handleShowHistory = (applicantId) => {
    const history = jobHistory[applicantId] || [];
    const applicantInfo = Object.values(applicants).flat().find(app => app.id === applicantId);
    if (applicantInfo) {
      setCurrentApplicantHistory({ name: applicantInfo.name, jobs: history });
      setShowHistoryModal(true);
    } else {
      alert('No se encontró historial para este postulante.');
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900">
      {userRole ? (
        <LayoutHeader userRole={userRole} onNavigate={setCurrentPage} onLogout={handleLogout} />
      ) : null}

      <main>
        {currentPage === 'auth' && <AuthScreen onLogin={handleLogin} />}
        {currentPage === 'workerJobs' && (
          <WorkerJobList jobs={jobs} onApply={handleApply} />
        )}
        {currentPage === 'postJob' && userRole === 'Empleador' && (
          <EmployerJobForm onJobPosted={handleJobPosted} />
        )}
        {currentPage === 'myApplications' && userRole === 'Trabajador' && (
          <MyApplicationsScreen myApplications={myApplications.filter(app => app.applicantId === currentUserId)} />
        )}
        {currentPage === 'myJobs' && userRole === 'Empleador' && (
          <MyJobsScreen
            jobs={jobs}
            applicants={applicants}
            onContact={handleContactApplicant}
            onRateApplicant={handleRateApplicant}
            onShowHistory={handleShowHistory}
            currentUserId={currentUserId}
          />
        )}
        {currentPage === 'profileSetup' && userRole && (
          <ProfileSetupScreen
            userRole={userRole}
            onProfileSave={handleProfileSave}
            userProfile={userProfiles[currentUserId]}
            jobHistory={userRole === 'Trabajador' ? jobHistory[currentUserId] : null} // Pasar historial solo a trabajador
          />
        )}
      </main>

      {showHistoryModal && currentApplicantHistory && (
        <HistoryScreen
          applicantHistory={currentApplicantHistory}
          onClose={() => setShowHistoryModal(false)}
        />
      )}
    </div>
  );
}
