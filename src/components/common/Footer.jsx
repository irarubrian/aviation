import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#0d1a4a',
      color: '#ffffff',
      padding: '60px 20px 0',
      fontFamily: '"Helvetica Neue", Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(56, 178, 172, 0.1) 0%, transparent 70%)',
        zIndex: '1'
      }}></div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
        paddingBottom: '60px',
        position: 'relative',
        zIndex: '2'
      }}>
        {/* Company Info */}
        <div style={{ paddingRight: '20px' }}>
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            marginBottom: '20px',
            color: '#ffffff',
            position: 'relative',
            display: 'inline-block'
          }}>
            AviationPro
            <span style={{
              position: 'absolute',
              bottom: '-10px',
              left: '0',
              width: '50px',
              height: '3px',
              backgroundColor: '#4fd1c5'
            }}></span>
          </h3>
          <p style={{
            color: '#a0aec0',
            lineHeight: '1.6',
            marginBottom: '20px'
          }}>
            Leading the way in aviation excellence since 2005. Providing world-class services with uncompromising safety standards.
          </p>
          <div style={{
            display: 'flex',
            gap: '15px',
            marginTop: '25px'
          }}>
            <a href="#" style={{
              color: '#ffffff',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: '#4fd1c5',
                transform: 'translateY(-3px)'
              }
            }}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" style={{
              color: '#ffffff',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: '#4fd1c5',
                transform: 'translateY(-3px)'
              }
            }}>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" style={{
              color: '#ffffff',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: '#4fd1c5',
                transform: 'translateY(-3px)'
              }
            }}>
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#ffffff',
            position: 'relative',
            paddingBottom: '10px',
            '::after': {
              content: '""',
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '40px',
              height: '2px',
              backgroundColor: '#4fd1c5'
            }
          }}>
            Quick Links
          </h4>
          <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '0'
          }}>
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About Us' },
              { path: '/services', label: 'Services' },
              { path: '/safety', label: 'Safety' },
              { path: '/careers', label: 'Careers' },
              { path: '/contact', label: 'Contact' }
            ].map((link, index) => (
              <li key={index} style={{
                marginBottom: '12px'
              }}>
                <Link to={link.path} style={{
                  color: '#a0aec0',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  '::before': {
                    content: '"» "',
                    color: '#4fd1c5',
                    opacity: '0',
                    transition: 'all 0.3s ease'
                  },
                  ':hover': {
                    color: '#ffffff',
                    transform: 'translateX(5px)',
                    '::before': {
                      opacity: '1'
                    }
                  }
                }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h4 style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#ffffff',
            position: 'relative',
            paddingBottom: '10px',
            '::after': {
              content: '""',
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '40px',
              height: '2px',
              backgroundColor: '#4fd1c5'
            }
          }}>
            Contact Us
          </h4>
          <address style={{
            fontStyle: 'normal',
            color: '#a0aec0',
            lineHeight: '1.8'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '15px'
            }}>
              <i className="fas fa-map-marker-alt" style={{
                color: '#4fd1c5',
                marginRight: '15px',
                marginTop: '3px'
              }}></i>
              <p style={{ margin: '0' }}>
                123 Aviation Way<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px'
            }}>
              <i className="fas fa-phone-alt" style={{
                color: '#4fd1c5',
                marginRight: '15px'
              }}></i>
              <p style={{ margin: '0' }}>+1 (123) 456-7890</p>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px'
            }}>
              <i className="fas fa-envelope" style={{
                color: '#4fd1c5',
                marginRight: '15px'
              }}></i>
              <p style={{ margin: '0' }}>info@aviationpro.com</p>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <i className="fas fa-clock" style={{
                color: '#4fd1c5',
                marginRight: '15px'
              }}></i>
              <p style={{ margin: '0' }}>Mon-Fri: 8:00 AM - 6:00 PM</p>
            </div>
          </address>
        </div>
        
        {/* Newsletter */}
        <div>
          <h4 style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#ffffff',
            position: 'relative',
            paddingBottom: '10px',
            '::after': {
              content: '""',
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '40px',
              height: '2px',
              backgroundColor: '#4fd1c5'
            }
          }}>
            Newsletter
          </h4>
          <p style={{
            color: '#a0aec0',
            lineHeight: '1.6',
            marginBottom: '20px'
          }}>
            Subscribe to our newsletter for the latest updates and industry insights.
          </p>
          <form style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            <input type="email" placeholder="Your email address" style={{
              padding: '12px 15px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              '::placeholder': {
                color: '#a0aec0'
              },
              ':focus': {
                outline: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.2)'
              }
            }} />
            <button type="submit" style={{
              backgroundColor: '#4fd1c5',
              color: '#0d1a4a',
              border: 'none',
              padding: '12px 20px',
              borderRadius: '4px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              ':hover': {
                backgroundColor: '#38b2ac',
                transform: 'translateY(-2px)'
              }
            }}>
              <i className="fas fa-paper-plane"></i> Subscribe
            </button>
          </form>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: '20px 0',
        textAlign: 'center',
        position: 'relative',
        zIndex: '2'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          '@media (min-width: 768px)': {
            flexDirection: 'row',
            justifyContent: 'space-between'
          }
        }}>
          <p style={{
            margin: '0',
            color: '#a0aec0',
            fontSize: '0.9rem'
          }}>
            &copy; {new Date().getFullYear()} AviationPro. All rights reserved.
          </p>
          <div style={{
            display: 'flex',
            gap: '20px'
          }}>
            <a href="#" style={{
              color: '#a0aec0',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease',
              ':hover': {
                color: '#4fd1c5'
              }
            }}>
              Privacy Policy
            </a>
            <a href="#" style={{
              color: '#a0aec0',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease',
              ':hover': {
                color: '#4fd1c5'
              }
            }}>
              Terms of Service
            </a>
            <a href="#" style={{
              color: '#a0aec0',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease',
              ':hover': {
                color: '#4fd1c5'
              }
            }}>
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer