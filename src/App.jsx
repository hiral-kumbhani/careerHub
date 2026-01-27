import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import JobDetail from './pages/JobDetail'
import ApplyData from './pages/ApplyData'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Disclaimer from './pages/Disclaimer'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/apply/:id" element={<ApplyData />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/latest-jobs" element={<Home />} />
        <Route path="/govt-jobs" element={<Home />} />
        <Route path="/railway-jobs" element={<Home />} />
        <Route path="/bank-jobs" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
