// /components/LayoutHeader.js
function LayoutHeader({ userRole, onNavigate, onLogout }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10 p-4 sm:px-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">ChambaFlex</h1>
        <nav className="flex items-center space-x-4 sm:space-x-6">
          <button
            onClick={() => onNavigate('workerJobs')}
            className="text-gray-700 hover:text-black font-medium transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10m-4-2h8m-4 2h4m-4-2v-4m0 0h.01"></path></svg>
            Ofertas
          </button>

          {userRole === 'Empleador' && (
            <button
              onClick={() => onNavigate('postJob')}
              className="text-gray-700 hover:text-black font-medium transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              Publicar
            </button>
          )}

          {userRole === 'Trabajador' && (
            <button
              onClick={() => onNavigate('myApplications')}
              className="text-gray-700 hover:text-black font-medium transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              Postulaciones
            </button>
          )}

          {userRole === 'Empleador' && (
            <button
              onClick={() => onNavigate('myJobs')}
              className="text-gray-700 hover:text-black font-medium transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              Mis Ofertas
            </button>
          )}

          {userRole && ( // Solo mostrar si hay un usuario logueado
            <button
              onClick={() => onNavigate('profileSetup')}
              className="text-gray-700 hover:text-black font-medium transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0H9m7 0a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2h2m7 0a2 2 0 00-2-2H9a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2V8a2 2 0 00-2-2z"></path></svg>
              Registro
            </button>
          )}

          <button
            onClick={onLogout}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium shadow-md"
          >
            Cerrar Sesión
          </button>
        </nav>
      </div>
    </header>
  );
}
