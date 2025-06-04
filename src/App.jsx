import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Home from './pages/Home'
import SafetySecurity from './pages/SafetySecurity'
import Services from './pages/Services'
import SupportOrphans from './pages/SupportOrphans'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/support-orphans" element={<SupportOrphans />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/safety-security" element={<SafetySecurity />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App