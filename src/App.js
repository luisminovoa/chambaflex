const App = () => {
      const [user, setUser] = useState(null);
      const [view, setView] = useState("auth"); // "auth", "role-selection", "worker-dashboard", "employer-dashboard", "profile"

      const handleLogin = (email) => {
        // Mock login, just set a dummy user and move to role selection
        setUser({ email });
        setView("role-selection");
      };

      const handleRoleSelection = (role) => {
        setUser((prevUser) => ({ ...prevUser, type: role }));
        setView(role === "worker" ? "worker-dashboard" : "employer-dashboard");
      };

      const handleLogout = () => {
        setUser(null);
        setView("auth");
      };

      const renderContent = () => {
        switch (view) {
          case "auth":
            return <AuthScreen onLogin={handleLogin} />;
          case "role-selection":
            return <RoleSelectionScreen onSelectRole={handleRoleSelection} />;
          case "worker-dashboard":
            return <WorkerJobList />;
          case "employer-dashboard":
            return <EmployerDashboard setView={setView} />;
          case "profile":
            return <ProfileSetupScreen userType={user.type} />;
          case "my-applications":
            return <MyApplicationsScreen />;
          case "my-jobs":
            return <MyJobsScreen />;
          case "find-workers":
            return <FindWorkersScreen />;
          default:
            return <AuthScreen onLogin={handleLogin} />;
        }
      };

      return (
        <div>
          <LayoutHeader user={user} onLogout={handleLogout} setView={setView} />
          <div className="container mx-auto p-4">{renderContent()}</div>
        </div>
      );
    };
