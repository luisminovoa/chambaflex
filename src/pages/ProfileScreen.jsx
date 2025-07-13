import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const ProfileScreen = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserProfile(userDoc.data());
        }
      }
      setLoading(false);
    };

    fetchUserProfile();
  }, [user]);

  if (loading) {
    return <div>Cargando perfil...</div>;
  }

  if (!userProfile) {
    return <div>No se encontró el perfil del usuario.</div>;
  }

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Mi Perfil</h2>
        <div className="flex items-center justify-center mb-6">
          <img src={userProfile.photoURL} alt="Foto de perfil" className="w-24 h-24 rounded-full" />
        </div>
        <p className="text-center text-xl font-semibold">{userProfile.displayName}</p>
        <p className="text-center text-gray-600 mb-4">{userProfile.email}</p>
        <p className="text-center text-lg font-bold text-blue-600">{userProfile.role}</p>
        {/* Aquí se podría añadir más información del perfil y la opción de editarlo */}
      </div>
    </div>
  );
};

export default ProfileScreen;
