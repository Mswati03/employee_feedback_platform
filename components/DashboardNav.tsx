import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MessageCircle, LogOut, Home, Settings, Users } from "lucide-react";
import Dashboard from "./Dashboard";
import FeedbackForm from "./Feedbackform";
import FeedbackList from "./Feedbacklist";
import Profile from "./Profile";

// Components

function DashboardNavigation() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-white h-screen fixed shadow-lg">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-blue-600">Feedback Hub</h1>
            </div>
            <nav className="mt-6">
              <NavLink to="/dashboard" icon={<Home />}>
                Dashboard
              </NavLink>
              <NavLink to="/submit-feedback" icon={<MessageCircle />}>
                Submit Feedback
              </NavLink>
              <NavLink to="/feedback" icon={<Users />}>
                View Feedback
              </NavLink>
              <NavLink to="/profile" icon={<Settings />}>
                Profile
              </NavLink>
              <button className="w-full flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-blue-600">
                <LogOut className="w-5 h-5 mr-3" />
                Sign Out
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="ml-64 flex-1 p-8">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/submit-feedback" element={<FeedbackForm />} />
              <Route path="/feedback" element={<FeedbackList />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

function NavLink({
  to,
  children,
  icon,
}: {
  to: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={to}
      className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
    >
      <span className="w-5 h-5 mr-3">{icon}</span>
      {children}
    </a>
  );
}

export default DashboardNavigation;
