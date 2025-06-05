/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react'
import MissionVision from '../components/about/MissionVision'
import Team from '../components/about/Team'
import Stats from '../components/home/Stats'


// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const gradientBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

const About = () => {
  return (
    <main css={css({
      maxWidth: '1440px',
      margin: '0 auto',
      overflowX: 'hidden', // Prevent horizontal scroll
      width: '100%', // Ensure main never exceeds viewport
      fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      color: '#333',
      lineHeight: 1.6
    })}>
      {/* Hero Section */}
      <section css={css({
        height: '80vh',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 2rem',
        background: 'linear-gradient(-45deg, #1a2a6c, #b21f1f, #fdbb2d)',
        backgroundSize: '400% 400%',
        animation: `${gradientBackground} 15s ease infinite`,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80) center/cover',
          opacity: 0.2
        }
      })}>
        <h1 css={css({
          fontSize: '4.5rem',
          marginBottom: '1.5rem',
          fontWeight: 800,
          textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
          animation: `${fadeIn} 1s ease-out`,
          
          '@media (maxWidth: 768px)': {
            fontSize: '3rem'
          }
        })}>About AviationPro</h1>
        <p css={css({
          fontSize: '1.8rem',
          maxWidth: '800px',
          marginBottom: '2rem',
          textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
          animation: `${fadeIn} 1s ease-out 0.2s both`,
          
          '@media (maxWidth: 768px)': {
            fontSize: '1.3rem'
          }
        })}>Our story, values, and the team behind our success</p>
        <div css={css({
          width: '80px',
          height: '80px',
          border: '3px solid white',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          animation: `${fadeIn} 1s ease-out 0.4s both`,
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          
          '&:hover': {
            transform: 'scale(1.1)'
          }
        })}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </div>
      </section>
      
      {/* History Section */}
      <section css={css({
        padding: '8rem 2rem',
        background: 'white',
        position: 'relative',
        
        '@media (maxWidth: 768px)': {
          padding: '4rem 1.5rem'
        }
      })}>
        <div css={css({
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          
          '@media (maxWidth: 768px)': {
            gridTemplateColumns: '1fr',
            gap: '2rem'
          }
        })}>
          <div css={css({
            animation: `${fadeIn} 1s ease-out`
          })}>
            <h2 css={css({
              fontSize: '3rem',
              marginBottom: '2rem',
              color: '#1a2a6c',
              position: 'relative',
              display: 'inline-block',
              
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: 0,
                width: '60px',
                height: '4px',
                background: '#fdbb2d'
              }
            })}>Our History</h2>
            <p css={css({
              fontSize: '1.2rem',
              marginBottom: '2rem',
              lineHeight: 1.8
            })}>
              Founded in 2005, AviationPro began as a small charter service with a single aircraft.
              Today, we operate a diverse fleet and provide comprehensive aviation solutions
              to clients worldwide, while maintaining our commitment to excellence and safety.
            </p>
            <p css={css({
              fontSize: '1.2rem',
              lineHeight: 1.8
            })}>
              Our journey from a regional operator to an international aviation leader is a testament
              to our dedication, innovation, and the trust our clients place in us.
            </p>
          </div>
          <div css={css({
            position: 'relative',
            height: '400px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px -10px rgba(0,0,0,0.2)',
            animation: `${fadeIn} 1s ease-out 0.2s both`,
            
            '@media (maxWidth: 768px)': {
              height: '300px'
            }
          })}>
            <img 
              src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="AviationPro history" 
              css={css({
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
                
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              })}
            />
            <div css={css({
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '2rem',
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
              color: 'white'
            })}>
              <h3 css={css({
                margin: 0,
                fontSize: '1.5rem'
              })}>Our First Aircraft</h3>
              <p css={css({
                margin: '0.5rem 0 0',
                opacity: 0.9
              })}>2005 - Cessna 172</p>
            </div>
          </div>
        </div>
        
        {/* Timeline */}
        <div css={css({
          maxWidth: '1200px',
          margin: '6rem auto 0',
          position: 'relative',
          
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: '100%',
            background: '#1a2a6c',
            
            '@media (maxWidth: 768px)': {
              left: '30px'
            }
          }
        })}>
          {[
            { year: '2005', title: 'Company Founded', description: 'Started with single aircraft operations' },
            { year: '2010', title: 'First Expansion', description: 'Added 5 new aircraft to our fleet' },
            { year: '2015', title: 'International Services', description: 'Began operations in 3 new countries' },
            { year: '2020', title: 'Digital Transformation', description: 'Implemented advanced flight management systems' },
            { year: '2023', title: 'Sustainability Initiative', description: 'Committed to carbon-neutral operations by 2030' },
          ].map((item, index) => (
            <div key={index} css={css({
              position: 'relative',
              marginBottom: '3rem',
              animation: `${fadeIn} 1s ease-out ${index * 0.1}s both`,
              
              '@media (maxWidth: 768px)': {
                paddingLeft: '60px'
              },
              
              '@media (minWidth: 769px)': {
                '&:nth-child(odd)': {
                  paddingRight: 'calc(50% + 30px)',
                  textAlign: 'right'
                },
                '&:nth-child(even)': {
                  paddingLeft: 'calc(50% + 30px)'
                }
              }
            })}>
              <div css={css({
                position: 'absolute',
                top: 0,
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: '#fdbb2d',
                border: '4px solid #1a2a6c',
                
                '@media (maxWidth: 768px)': {
                  left: '20px'
                },
                
                '@media (minWidth: 769px)': {
                  left: index % 2 === 0 ? 'calc(50% - 10px)' : 'auto',
                  right: index % 2 !== 0 ? 'calc(50% - 10px)' : 'auto'
                }
              })} />
              <div css={css({
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                
                '@media (minWidth: 769px)': {
                  maxWidth: 'calc(50% - 60px)'
                }
              })}>
                <h3 css={css({
                  margin: '0 0 0.5rem',
                  color: '#1a2a6c',
                  fontSize: '1.3rem'
                })}>{item.title}</h3>
                <p css={css({
                  margin: 0,
                  fontSize: '1rem',
                  color: '#666'
                })}>{item.description}</p>
                <div css={css({
                  marginTop: '0.5rem',
                  fontWeight: 'bold',
                  color: '#fdbb2d'
                })}>{item.year}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Mission & Vision Components */}
      <MissionVision />
      
      {/* Stats Component */}
      <div css={css({
        background: 'linear-gradient(135deg, #1a2a6c 0%, #0d1a4a 100%)',
        padding: '6rem 2rem',
        color: 'white'
      })}>
        <Stats />
      </div>
      
      {/* Team Component */}
      <div css={css({
        padding: '6rem 2rem',
        background: '#f9f9f9'
      })}>
        <Team />
      </div>
      
      {/* CTA Section */}
      <section css={css({
        padding: '6rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(to right, #fdbb2d, #b21f1f)',
        color: 'white'
      })}>
        <h2 css={css({
          fontSize: '2.5rem',
          marginBottom: '1.5rem'
        })}>Ready to Fly With Us?</h2>
        <p css={css({
          fontSize: '1.2rem',
          maxWidth: '700px',
          margin: '0 auto 2.5rem'
        })}>Join thousands of satisfied clients who trust AviationPro for their aviation needs.</p>
        <button css={css({
          background: 'white',
          color: '#1a2a6c',
          border: 'none',
          padding: '1rem 2.5rem',
          fontSize: '1.1rem',
          fontWeight: 600,
          borderRadius: '50px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
          },
          
          '&:active': {
            transform: 'translateY(0)'
          }
        })}>Contact Our Team</button>
      </section>
    </main>
  )
}

export default About