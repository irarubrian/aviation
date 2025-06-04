// ...component code...
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(26,35,126,0.7),rgba(26,35,126,0.7)), url('https://images.pexels.com/photos/113017/pexels-photo-113017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        position: 'relative',
        borderRadius: '1.5rem',
        boxShadow: '0 8px 32px rgba(26,35,126,0.25)'
      }}
    >
      <div className="hero-content" style={{textAlign: 'center', zIndex: 2}}>
        <h1 style={{fontSize: '3.2rem', fontWeight: 800, letterSpacing: '1px', marginBottom: '1rem', textShadow: '0 4px 24px #0008'}}>
          Elevating Your Aviation Experience
        </h1>
        <div className="hero-gallery" style={{display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap'}}>
          <img src="https://images.pexels.com/photos/27016000/pexels-photo-27016000/free-photo-of-thai-airways-boeing-747-400.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="Thai Airways Boeing 747-400" style={{width: '180px', height: '120px', objectFit: 'cover', borderRadius: '1rem', boxShadow: '0 2px 12px #0005'}} />
          <img src="https://images.pexels.com/photos/20324739/pexels-photo-20324739/free-photo-of-airbus-a320-216-taking-off.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="Airbus A320 Taking Off" style={{width: '180px', height: '120px', objectFit: 'cover', borderRadius: '1rem', boxShadow: '0 2px 12px #0005'}} />
        </div>
        <p style={{fontSize: '1.35rem', marginBottom: '2.2rem', textShadow: '0 2px 8px #0006'}}>
          Premium aviation services with unmatched safety and reliability
        </p>
        <div className="hero-buttons" style={{display: 'flex', gap: '1.2rem', justifyContent: 'center'}}>
          <Link to="/services" className="btn btn-primary">Our Services</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero