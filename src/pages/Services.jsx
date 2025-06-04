import ServiceList from '../components/services/ServiceList';

const Services = () => {
  const services = [
    {
      id: 'aircraft-maintenance',
      title: 'Aircraft Maintenance',
      description: 'Our comprehensive aircraft maintenance services ensure your fleet remains in peak operating condition. We provide scheduled inspections, component replacements, and system diagnostics performed by certified technicians with extensive experience in both commercial and private aircraft. Our maintenance programs are tailored to meet manufacturer specifications and regulatory requirements.',
      imageUrl: 'https://images.pexels.com/photos/2059627/pexels-photo-2059627.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: [
        'Scheduled and unscheduled maintenance',
        'Airframe and powerplant services',
        'Avionics systems maintenance',
        'Component overhaul and repair'
      ]
    },
    {
      id: 'engine-repair',
      title: 'Engine Repair & Overhaul',
      description: 'Specialized engine services performed by our team of highly trained engine specialists. We offer complete engine diagnostics, performance testing, and overhaul services for turbine and piston engines. Our state-of-the-art facilities include engine test cells and specialized equipment to ensure your engines meet or exceed manufacturer performance specifications.',
      imageUrl: 'data:image/jpeg;base64,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',
      features: [
        'Complete engine teardown and inspection',
        'Performance restoration',
        'Component replacement and balancing',
        'Test cell runs and performance verification'
      ]
    },
    {
      id: 'avionics',
      title: 'Avionics Installation & Upgrade',
      description: 'Modernize your aircraft with our cutting-edge avionics solutions. From glass cockpit upgrades to ADS-B compliance installations, our certified avionics technicians ensure seamless integration with your existing systems. We work with all major avionics manufacturers to provide the best solutions for your operational needs.',
      imageUrl: 'https://images.pexels.com/photos/2064123/pexels-photo-2064123.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: [
        'Glass cockpit installations',
        'Navigation and communication upgrades',
        'ADS-B compliance solutions',
        'System integration and testing'
      ]
    },
    {
      id: 'interior-refurbishment',
      title: 'Interior Refurbishment',
      description: 'Transform your aircraft interior with our custom refurbishment services. From luxury VIP configurations to functional corporate layouts, our craftsmen combine aesthetic excellence with functional design. We use only FAA-approved materials and maintain strict weight and balance considerations throughout the process.',
      imageUrl: 'https://cdn.pixabay.com/photo/2024/07/11/22/49/man-8889170_640.jpg',
      features: [
        'Custom cabinetry and upholstery',
        'Entertainment system installations',
        'Lighting and environmental controls',
        'Complete interior tear-out and redesign'
      ]
    },
    {
      id: 'structural-repair',
      title: 'Structural Repair',
      description: 'Our structural repair team handles everything from minor sheet metal repairs to major structural component replacement. Using advanced non-destructive testing techniques and precision repair methods, we restore aircraft structures to original strength and specifications while maintaining all certification requirements.',
      imageUrl: 'https://images.pexels.com/photos/19101602/pexels-photo-19101602/free-photo-of-control-panel-in-a-cockpit.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: [
        'Composite and metal structure repair',
        'Corrosion treatment and prevention',
        'Damage assessment and repair design',
        'FAA-approved repair methodologies'
      ]
    }
  ];

  return (
    <main className="services-page" style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: '"Helvetica Neue", Arial, sans-serif',
      color: '#333'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: '300',
        color: '#1a365d',
        textAlign: 'center',
        marginBottom: '20px',
        borderBottom: '2px solid #e2e8f0',
        paddingBottom: '15px'
      }}>
        Our Aviation Services
      </h1>
      
      <p className="page-intro" style={{
        fontSize: '1.1rem',
        lineHeight: '1.6',
        textAlign: 'center',
        marginBottom: '40px',
        color: '#4a5568',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        We offer comprehensive aviation solutions tailored to your operational requirements and safety standards. 
        Our team of certified professionals delivers exceptional service with meticulous attention to detail, 
        ensuring your aircraft maintains peak performance and compliance with all regulatory requirements.
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '30px',
        marginTop: '50px'
      }}>
        {services.map((service) => (
          <div key={service.id} style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            ':hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }
          }}>
            <div style={{
              height: '200px',
              overflow: 'hidden'
            }}>
              <img 
                src={service.imageUrl} 
                alt={service.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }} 
              />
            </div>
            <div style={{ padding: '25px' }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#2d3748',
                marginBottom: '15px'
              }}>
                {service.title}
              </h2>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                {service.description}
              </p>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '500',
                color: '#2d3748',
                marginBottom: '10px'
              }}>
                Key Features:
              </h3>
              <ul style={{
                marginBottom: '20px',
                paddingLeft: '20px',
                color: '#4a5568'
              }}>
                {service.features.map((feature, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>{feature}</li>
                ))}
              </ul>
              <button
                style={{
                  backgroundColor: '#3182ce',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'background-color 0.3s ease',
                }}
                onClick={() => window.location.href='/services'}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Services;