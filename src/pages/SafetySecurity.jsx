const SafetySecurity = () => {
  return (
    <main className="safety-page" style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: '"Helvetica Neue", Arial, sans-serif',
      color: '#333',
      lineHeight: '1.6'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: '300',
        color: '#1a365d',
        textAlign: 'center',
        marginBottom: '30px',
        borderBottom: '2px solid #e2e8f0',
        paddingBottom: '20px'
      }}>
        Safety & Security
      </h1>
      
      <section className="safety-intro" style={{
        backgroundColor: '#f7fafc',
        padding: '30px',
        borderRadius: '8px',
        marginBottom: '40px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <p style={{
          fontSize: '1.1rem',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          color: '#4a5568'
        }}>
          At AviationPro, safety is the foundation of everything we do. We maintain the highest international 
          standards in all aspects of our operations to ensure the well-being of our clients, crew, and the 
          public. Our comprehensive safety management system integrates proactive risk assessment with 
          continuous improvement processes.
        </p>
      </section>
      
      <section className="safety-standards" style={{
        marginBottom: '50px'
      }}>
        <h2 style={{
          fontSize: '1.8rem',
          fontWeight: '400',
          color: '#2d3748',
          marginBottom: '25px',
          textAlign: 'center',
          position: 'relative',
          '::after': {
            content: '""',
            display: 'block',
            width: '80px',
            height: '3px',
            backgroundColor: '#3182ce',
            margin: '15px auto 0'
          }
        }}>
          Our Safety Standards
        </h2>
        
        <div className="standards-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginTop: '40px'
        }}>
          <div className="standard-item" style={{
            backgroundColor: '#fff',
            padding: '25px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            borderTop: '4px solid #3182ce',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-5px)'
            }
          }}>
            <div style={{
              backgroundColor: '#ebf8ff',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '24px', color: '#3182ce' }}>✓</span>
            </div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '500',
              color: '#2d3748',
              marginBottom: '15px'
            }}>
              Certified Operations
            </h3>
            <p style={{ color: '#4a5568' }}>
              All operations meet or exceed FAA, EASA, and ICAO regulations. We maintain 
              Part 145 Repair Station certification and are IS-BAO compliant. Regular 
              audits ensure continuous compliance with all regulatory requirements.
            </p>
          </div>
          
          <div className="standard-item" style={{
            backgroundColor: '#fff',
            padding: '25px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            borderTop: '4px solid #38a169',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-5px)'
            }
          }}>
            <div style={{
              backgroundColor: '#f0fff4',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '24px', color: '#38a169' }}>✈</span>
            </div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '500',
              color: '#2d3748',
              marginBottom: '15px'
            }}>
              Maintenance Excellence
            </h3>
            <p style={{ color: '#4a5568' }}>
              Our aircraft undergo rigorous maintenance checks on manufacturer-recommended 
              schedules plus additional proactive inspections. We utilize predictive 
              maintenance technologies to identify potential issues before they occur.
            </p>
          </div>
          
          <div className="standard-item" style={{
            backgroundColor: '#fff',
            padding: '25px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            borderTop: '4px solid #d53f8c',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-5px)'
            }
          }}>
            <div style={{
              backgroundColor: '#fff5f7',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '24px', color: '#d53f8c' }}>🎓</span>
            </div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '500',
              color: '#2d3748',
              marginBottom: '15px'
            }}>
              Training Programs
            </h3>
            <p style={{ color: '#4a5568' }}>
              Our crew completes 200+ hours of annual training on the latest safety 
              procedures, emergency protocols, and human factors. Training includes 
              full-motion simulator sessions and live scenario drills.
            </p>
          </div>
        </div>
      </section>
      
      <section className="security-measures" style={{
        backgroundColor: '#f7fafc',
        padding: '40px',
        borderRadius: '8px',
        marginTop: '30px'
      }}>
        <h2 style={{
          fontSize: '1.8rem',
          fontWeight: '400',
          color: '#2d3748',
          marginBottom: '25px',
          textAlign: 'center'
        }}>
          Comprehensive Security Measures
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '6px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
          }}>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#2d3748',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                display: 'inline-block',
                width: '24px',
                height: '24px',
                backgroundColor: '#3182ce',
                color: 'white',
                borderRadius: '50%',
                textAlign: 'center',
                lineHeight: '24px',
                marginRight: '10px',
                fontSize: '14px'
              }}>1</span>
              Personnel Security
            </h3>
            <ul style={{
              listStyleType: 'none',
              paddingLeft: '0',
              color: '#4a5568'
            }}>
              <li style={{ marginBottom: '8px', paddingLeft: '34px', position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: '0',
                  color: '#3182ce'
                }}>•</span>
                Comprehensive background checks
              </li>
              <li style={{ marginBottom: '8px', paddingLeft: '34px', position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: '0',
                  color: '#3182ce'
                }}>•</span>
                Recurrent security training
              </li>
              <li style={{ paddingLeft: '34px', position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: '0',
                  color: '#3182ce'
                }}>•</span>
                Two-factor authentication systems
              </li>
            </ul>
          </div>
          
          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '6px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
          }}>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#2d3748',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                display: 'inline-block',
                width: '24px',
                height: '24px',
                backgroundColor: '#38a169',
                color: 'white',
                borderRadius: '50%',
                textAlign: 'center',
                lineHeight: '24px',
                marginRight: '10px',
                fontSize: '14px'
              }}>2</span>
              Facility Security
            </h3>
            <ul style={{
              listStyleType: 'none',
              paddingLeft: '0',
              color: '#4a5568'
            }}>
              <li style={{ marginBottom: '8px', paddingLeft: '34px', position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: '0',
                  color: '#38a169'
                }}>•</span>
                Secure facilities with 24/7 monitoring
              </li>
              <li style={{ marginBottom: '8px', paddingLeft: '34px', position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: '0',
                  color: '#38a169'
                }}>•</span>
                Biometric access control
              </li>
              <li style={{ paddingLeft: '34px', position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: '0',
                  color: '#38a169'
                }}>•</span>
                Perimeter intrusion detection
              </li>
            </ul>
          </div>
          
          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '6px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
          }}>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#2d3748',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                display: 'inline-block',
                width: '24px',
                height: '24px',
                backgroundColor: '#d53f8c',
                color: 'white',
                borderRadius: '50%',
                textAlign: 'center',
                lineHeight: '24px',
                marginRight: '10px',
                fontSize: '14px'
              }}>3</span>
              Operational Security
            </h3>
            <ul style={{
              listStyleType: 'none',
              paddingLeft: '0',
              color: '#4a5568'
            }}>
              <li style={{ marginBottom: '8px', paddingLeft: '34px', position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: '0',
                  color: '#d53f8c'
                }}>•</span>
                Secure flight planning systems
              </li>
              <li style={{ marginBottom: '8px', paddingLeft: '34px', position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: '0',
                  color: '#d53f8c'
                }}>•</span>
                Encrypted communications
              </li>
              <li style={{ paddingLeft: '34px', position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: '0',
                  color: '#d53f8c'
                }}>•</span>
                Regular security audits
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="featured-services" style={{
        margin: '60px 0',
        padding: '40px 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e3e9f7 100%)',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(49,130,206,0.07)',
        maxWidth: '1100px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        <h2 style={{
          fontSize: '2.2rem',
          fontWeight: 700,
          color: '#1a365d',
          textAlign: 'center',
          marginBottom: '40px',
          letterSpacing: '1px',
        }}>
          Our Featured Services
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          justifyContent: 'center',
          alignItems: 'stretch',
          padding: '0 20px',
        }}>
          {/* Private Charter */}
          <div style={{
            background: '#fff',
            borderRadius: '10px',
            boxShadow: '0 2px 12px rgba(49,130,206,0.08)',
            padding: '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'transform 0.3s, box-shadow 0.3s',
          }}>
            <span style={{
              fontSize: '2.5rem',
              color: '#3182ce',
              marginBottom: '18px',
            }}>✈️</span>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 600,
              color: '#2d3748',
              marginBottom: '10px',
              letterSpacing: '0.5px',
            }}>Private Charter</h3>
            <p style={{
              color: '#4a5568',
              textAlign: 'center',
              fontSize: '1.05rem',
              marginBottom: 0,
            }}>
              Luxury private jet charters tailored to your schedule.
            </p>
          </div>
          {/* Aircraft Maintenance */}
          <div style={{
            background: '#fff',
            borderRadius: '10px',
            boxShadow: '0 2px 12px rgba(49,130,206,0.08)',
            padding: '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'transform 0.3s, box-shadow 0.3s',
          }}>
            <span style={{
              fontSize: '2.5rem',
              color: '#38a169',
              marginBottom: '18px',
            }}>🛠️</span>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 600,
              color: '#2d3748',
              marginBottom: '10px',
              letterSpacing: '0.5px',
            }}>Aircraft Maintenance</h3>
            <p style={{
              color: '#4a5568',
              textAlign: 'center',
              fontSize: '1.05rem',
              marginBottom: 0,
            }}>
              Comprehensive maintenance services for all aircraft types.
            </p>
          </div>
          {/* Flight Training */}
          <div style={{
            background: '#fff',
            borderRadius: '10px',
            boxShadow: '0 2px 12px rgba(49,130,206,0.08)',
            padding: '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'transform 0.3s, box-shadow 0.3s',
          }}>
            <span style={{
              fontSize: '2.5rem',
              color: '#d53f8c',
              marginBottom: '18px',
            }}>🎓</span>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 600,
              color: '#2d3748',
              marginBottom: '10px',
              letterSpacing: '0.5px',
            }}>Flight Training</h3>
            <p style={{
              color: '#4a5568',
              textAlign: 'center',
              fontSize: '1.05rem',
              marginBottom: 0,
            }}>
              Professional pilot training programs for all levels.
            </p>
          </div>
        </div>
      </section>
      
      <section className="safety-commitment" style={{
        marginTop: '50px',
        textAlign: 'center',
        padding: '30px',
        backgroundColor: '#ebf8ff',
        borderRadius: '8px'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '400',
          color: '#2b6cb0',
          marginBottom: '20px'
        }}>
          Our Safety Commitment
        </h2>
        <p style={{
          maxWidth: '800px',
          margin: '0 auto',
          color: '#4a5568'
        }}>
          AviationPro maintains an industry-leading safety record through our proactive 
          Safety Management System (SMS). We voluntarily report all safety concerns 
          through our anonymous reporting system and conduct thorough investigations 
          of all incidents to prevent recurrence.
        </p>
      </section>
    </main>
  )
}

export default SafetySecurity