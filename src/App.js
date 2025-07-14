const App = () => {
      const [user, setUser] = useState(null);
      const [view, setView] = useState("auth"); // "auth", "worker-dashboard", "employer-dashboard", "profile"

      const handleLogin = (email) => {
        // Mock login
        if (email.includes("worker")) {
          setUser({ email, type: "worker" });
          setView("worker-dashboard");
        } else {
          setUser({ email, type: "employer" });
          setView("employer-dashboard");
        }
      };

      const handleLogout = () => {
        setUser(null);
        setView("auth");
      };

      const renderContent = () => {
        switch (view) {
          case "auth":
            return <AuthScreen onLogin={handleLogin} />;
          case "worker-dashboard":
            return <WorkerJobList />;
          case "employer-dashboard":
            return <EmployerDashboard />;
          case "profile":
            return <ProfileSetupScreen userType={user.type} />;
          case "my-applications":
            return <MyApplicationsScreen />;
          case "my-jobs":
            return <MyJobsScreen />;
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
