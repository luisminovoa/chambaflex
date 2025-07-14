import React, { useState } from 'react';
import AuthScreen from './components/AuthScreen';
import RoleSelectionScreen from './components/RoleSelectionScreen';
import WorkerJobList from './components/WorkerJobList';
import EmployerDashboard from './components/EmployerDashboard';
import ProfileSetupScreen from './components/ProfileSetupScreen';
import MyApplicationsScreen from './components/MyApplicationsScreen';
import MyJobsScreen from './components/MyJobsScreen';
import FindWorkersScreen from './components/FindWorkersScreen';
import PostJobScreen from './components/PostJobScreen';
import EmployerApplicantsList from './components/EmployerApplicantsList';
import PaymentScreen from './components/PaymentScreen';
import ContactSlide from './components/ContactSlide';
import LayoutHeader from './components/LayoutHeader';

const App = () => {
      const [user, setUser] = useState(null);
      const [view, setView] = useState("auth"); // "auth", "role-selection", "worker-dashboard", "employer-dashboard", "profile"

      const handleLogin = (email) => {
        // Mock login, just set a dummy user and move to role selection
        setUser({ email });
        setView("role-selection");
      };

      const handleRoleSelection = (role) => {
        console.log("--- handleRoleSelection ---");
        console.log("Role:", role);
        console.log("User before update:", user);
        console.log("View before update:", view);
        const newUser = { ...user, type: role };
        setUser(newUser);
        const newView = role === "worker" ? "worker-dashboard" : "employer-dashboard";
        setView(newView);
        console.log("User after update:", newUser);
        console.log("View after update:", newView);
        console.log("--------------------------");
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
            return <ProfileSetupScreen userType={user.type} setView={setView} />;
          case "my-applications":
            return <MyApplicationsScreen />;
          case "my-jobs":
            return <MyJobsScreen setView={setView} />;
          case "find-workers":
            return <FindWorkersScreen setView={setView} />;
          case "post-job":
            return <PostJobScreen />;
          case "applicants":
            return <EmployerApplicantsList setView={setView} />;
          case "payment":
            return <PaymentScreen setView={setView} />;
          case "mission":
            return <ContactSlide />;
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

export default App;
