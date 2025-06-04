// ...component code...
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">AviationPro</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/support-orphans">Support Orphans</Link></li>
        <li><Link to="/safety-security">Safety & Security</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar