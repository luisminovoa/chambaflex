const App = () => {
      const [user, setUser] = useState(null);
      const [view, setView] = useState("auth"); // "auth", "worker", "employer", "profile"

      const handleLogin = (email) => {
        // Mock login
        if (email.includes("worker")) {
          setUser({ email, type: "worker" });
          setView("worker");
        } else {
          setUser({ email, type: "employer" });
          setView("employer");
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
          case "worker":
            return <WorkerJobList />;
          case "employer":
            return <EmployerJobForm />;
          case "profile":
            return <ProfileSetupScreen />;
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
