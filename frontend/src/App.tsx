import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Jobs } from './pages/Jobs';
import { JobDetail } from './pages/JobDetail';
import { Login } from './pages/Login';
import { CandidateDashboard } from './pages/CandidateDashboard';
import { HRDashboard } from './pages/HRDashboard';
import { CreateJob } from './pages/CreateJob';
import { AdminDashboard } from './pages/AdminDashboard';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:slug" element={<JobDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<CandidateDashboard />} />
            <Route path="/hr/dashboard" element={<HRDashboard />} />
            <Route path="/hr/jobs/create" element={<CreateJob />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/profile" element={<div className="py-12"><h1>Profile</h1></div>} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
