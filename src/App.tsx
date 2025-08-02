import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CommunityPage from './pages/CommunityPage'
import PricingPage from './pages/PricingPage'
import EnterprisePage from './pages/EnterprisePage'
import LearnPage from './pages/LearnPage'
import LoginPage from './pages/LoginPage'
import AppDashboard from './pages/AppDashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/enterprise" element={<EnterprisePage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/app" element={<AppDashboard />} />
      </Routes>
    </Router>
  )
}

export default App