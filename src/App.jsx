import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { Toaster } from 'react-hot-toast';
import { auth, db } from './firebaseConfig';
import Header from './components/Header';
import Spinner from './components/Spinner';
import AuthScreen from './pages/AuthScreen';
import WorkerJobList from './pages/WorkerJobList';
import EmployerJobForm from './pages/EmployerJobForm';
import MyApplicationsScreen from './pages/MyApplicationsScreen';
import RoleSelection from './pages/RoleSelection';
import MyJobsScreen from './pages/MyJobsScreen';
import ProfileScreen from './pages/ProfileScreen';
import ApplicantHistoryScreen from './pages/ApplicantHistoryScreen';
// Importa otras páginas que necesites

function App() {
  const [user, setUser] = useState(null); // Objeto de usuario de Firebase
  const [userRole, setUserRole] = useState(null); // 'Trabajador', 'Empleador', o null
  const [loading, setLoading] = useState(true); // Para mostrar un spinner mientras se carga el estado de auth

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // El usuario está conectado, intentamos leer su rol desde Firestore
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserRole(userDoc.data().role);
        } else {
          // El documento del usuario aún no existe, probablemente es un usuario nuevo
          // que está en proceso de seleccionar su rol.
          setUserRole(null);
        }
        setUser(currentUser);
      } else {
        // El usuario no está conectado
        setUser(null);
        setUserRole(null);
      }
      setLoading(false);
    });

    // Limpiar el listener al desmontar el componente
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      setUserRole(null);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Header user={user} userRole={userRole} onLogout={handleLogout} />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<WorkerJobList />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <AuthScreen />}
          />
          <Route
            path="/post-job"
            element={userRole === 'Empleador' ? <EmployerJobForm /> : <Navigate to="/login" />}
          />
          <Route
            path="/my-applications"
            element={userRole === 'Trabajador' ? <MyApplicationsScreen /> : <Navigate to="/login" />}
          />
          <Route
            path="/select-role"
            element={user ? <RoleSelection /> : <Navigate to="/login" />}
          />
          <Route
            path="/my-jobs"
            element={userRole === 'Empleador' ? <MyJobsScreen /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={user ? <ProfileScreen /> : <Navigate to="/login" />}
          />
          <Route
            path="/history/:userId"
            element={userRole === 'Empleador' ? <ApplicantHistoryScreen /> : <Navigate to="/login" />}
          />
          {/* Añade aquí más rutas protegidas o públicas */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
