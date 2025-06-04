import React from 'react'

const SupportOrphans = () => {
  // Inline style objects
  const mainStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f5f5f5',
    color: '#333',
    lineHeight: 1.6,
  }

  const heroStyle = {
    position: 'relative',
    width: '100%',
    height: '60vh',
    backgroundImage:
      "url('https://cdn.pixabay.com/photo/2015/04/17/16/08/poverty-727510_640.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2rem',
  }

  const heroOverlay = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }

  const heroContent = {
    position: 'relative',
    color: '#fff',
    textAlign: 'center',
    maxWidth: '800px',
    padding: '0 1rem',
    zIndex: 2,
  }

  const sectionStyle = {
    maxWidth: '1000px',
    margin: '0 auto 3rem',
    padding: '0 1rem',
  }

  const programDetailsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    alignItems: 'flex-start',
  }

  const programImageStyle = {
    flex: '1 1 300px',
    maxWidth: '400px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  }

  const programTextStyle = {
    flex: '2 1 400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  }

  const waysToHelpStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  }

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '1.5rem',
    marginTop: '0.5rem',
  }

  const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
  }

  const galleryImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  }

  const captionStyle = {
    marginTop: '0.5rem',
    fontSize: '0.9rem',
    color: '#555',
    textAlign: 'center',
  }

  return (
    <main style={mainStyle}>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={heroOverlay}></div>
        <div style={heroContent}>
          <h1 style={{ fontSize: '2.75rem', marginBottom: '0.5rem' }}>
            Supporting Orphans in Aviation
          </h1>
          <p style={{ fontSize: '1.25rem' }}>
            Empowering underprivileged children to soar toward their aviation dreams.
          </p>
        </div>
      </section>

      {/* Program Details */}
      <section style={sectionStyle}>
        <div style={programDetailsStyle}>
          <img
            src="https://cdn.pixabay.com/photo/2019/12/02/18/15/poverty-4668381_640.jpg"
            alt="Young aspirant looking at airplane"
            style={programImageStyle}
          />
          <div style={programTextStyle}>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Our Initiative</h2>
            <p>
              At AviationPro, we firmly believe that passion and potential shouldn’t be
              limited by circumstance. Our “Wings of Hope” program targets orphans and
              financially disadvantaged youth who aspire to careers in aviation—whether as
              pilots, aerospace engineers, maintenance technicians, or air traffic
              controllers. We provide:
            </p>
            <ul style={listStyle}>
              <li>
                <strong>Full scholarships</strong> for ground school and flight hours
                through partner flight academies.
              </li>
              <li>
                <strong>Mentorship</strong> from industry professionals who guide them
                through every step—from exam prep to job placement.
              </li>
              <li>
                <strong>Internship opportunities</strong> with airline operators,
                airports, and MRO (maintenance, repair, and overhaul) facilities.
              </li>
            </ul>
            <p>
              Since our launch in 2022, we have awarded over 50 scholarships, and 80% of
              our mentees are now enrolled in accredited aviation schools or training
              programs.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section style={sectionStyle}>
        <div style={waysToHelpStyle}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>How You Can Help</h3>
          <ul style={listStyle}>
            <li>
              <strong>Sponsor a Child’s Education:</strong> Cover ground school
              tuition, flight simulator hours, or aircraft rental fees.
            </li>
            <li>
              <strong>Donate to Our Aviation Training Fund:</strong> Even a small
              monthly contribution helps pay for uniforms, textbooks, and exam fees.
            </li>
            <li>
              <strong>Volunteer as a Mentor:</strong> Share your industry expertise—help
              with resume building, interview prep, or sit in on mock check rides.
            </li>
            <li>
              <strong>Spread Awareness:</strong> Share our mission on social media, host
              a local fundraiser, or organize a “Career Day” event at your airport.
            </li>
            <li>
              <strong>In-Kind Donations:</strong> Donate gently used flight bags,
              headsets, or study materials.
            </li>
          </ul>
        </div>
      </section>

      {/* Impact Gallery */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '1rem' }}>
          Stories from the Field
        </h2>
        <div style={galleryStyle}>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2017/08/03/22/39/african-child-2578559_640.jpg"
              alt="Smiling orphan student"
              style={galleryImageStyle}
            />
            <p style={captionStyle}>
              Maria, 17, received her first flight lesson scholarship in 2023.
            </p>
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2024/07/01/18/47/homeless-8865891_640.jpg"
              alt="Youth reading aviation manuals"
              style={galleryImageStyle}
            />
            <p style={captionStyle}>
              Jamal, 15, studies aircraft systems after-school in our mentorship
              program.
            </p>
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2019/12/02/18/15/poverty-4668381_640.jpg"
              alt="A young girl looking at airplane runway"
              style={galleryImageStyle}
            />
            <p style={captionStyle}>
              Anika, 16, excels in mathematics—and now dreams of becoming an aerospace
              engineer.
            </p>
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/17/16/08/poverty-727510_640.jpg"
              alt="Orphan child gazing at the sky"
              style={galleryImageStyle}
            />
            <p style={captionStyle}>
              Ruiz, 14, inspires peers by publishing his first article on aviation
              safety.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Info & Contact */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Our Impact to Date</h2>
        <p>
          - <strong>Scholarships Distributed:</strong> 55+
        </p>
        <p>
          - <strong>Active Mentees:</strong> 42
        </p>
        <p>
          - <strong>Partner Flight Schools:</strong> 6 across three continents
        </p>
        <p>
          - <strong>Graduated Mentees Working in Industry:</strong> 14
        </p>
        <p style={{ marginTop: '1rem' }}>
          To learn more, volunteer, or donate, please{' '}
          <a
            href="/contact"
            style={{ color: '#1d4ed8', textDecoration: 'underline' }}
          >
            contact us
          </a>{' '}
          or visit our{' '}
          <a
            href="/donate"
            style={{ color: '#1d4ed8', textDecoration: 'underline' }}
          >
            donation page
          </a>
          . Every contribution—no matter how small—helps a young dream take flight.
        </p>
      </section>
    </main>
  )
}

export default SupportOrphans
