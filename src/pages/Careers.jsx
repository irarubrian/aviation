/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react'

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Commercial Pilot",
      location: "New York, NY",
      type: "Full-time",
      description: "Fly our state-of-the-art aircraft fleet with competitive routes and schedules."
    },
    {
      id: 2,
      title: "Aircraft Mechanic",
      location: "Los Angeles, CA",
      type: "Full-time",
      description: "Maintain and service our aircraft to the highest safety standards."
    },
    {
      id: 3,
      title: "Flight Dispatcher",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Coordinate flight plans and ensure operational efficiency."
    },
    {
      id: 4,
      title: "Customer Service Representative",
      location: "Remote",
      type: "Part-time",
      description: "Provide exceptional service to our clients and passengers."
    }
  ]

  const benefits = [
    { icon: "💰", title: "Competitive Salaries", description: "Industry-leading compensation packages" },
    { icon: "🏥", title: "Health Coverage", description: "Comprehensive medical, dental, and vision" },
    { icon: "✈️", title: "Travel Benefits", description: "Discounted flights for you and family" },
    { icon: "🎓", title: "Training", description: "Continuous professional development" },
    { icon: "🏖️", title: "Paid Time Off", description: "Generous vacation and holidays" },
    { icon: "💼", title: "Retirement Plans", description: "401(k) with company matching" }
  ]

  return (
    <main css={css`
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 2rem;
      font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
      color: #333;
      line-height: 1.6;
    `}>
      {/* Hero Section */}
      <section css={css`
        text-align: center;
        padding: 6rem 0 4rem;
        background: linear-gradient(rgba(26, 42, 108, 0.9), rgba(26, 42, 108, 0.95)),
                    url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover;
        color: white;
        border-radius: 0 0 40px 40px;
        margin-bottom: 4rem;
      `}>
        <h1 css={css`
          font-size: 4rem;
          margin-bottom: 1.5rem;
          font-weight: 800;
          animation: ${fadeIn} 1s ease-out;
          
          @media (max-width: 768px) {
            font-size: 2.5rem;
          }
        `}>Careers at AviationPro</h1>
        <p css={css`
          font-size: 1.5rem;
          max-width: 800px;
          margin: 0 auto 3rem;
          animation: ${fadeIn} 1s ease-out 0.2s both;
          
          @media (max-width: 768px) {
            font-size: 1.2rem;
          }
        `}>
          Join our team of aviation professionals and be part of an organization
          that values excellence, safety, and innovation.
        </p>
        <button css={css`
          background: #fdbb2d;
          color: #1a2a6c;
          border: none;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: ${fadeIn} 1s ease-out 0.4s both;
          
          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          }
        `}>View Open Positions</button>
      </section>
      
      {/* Benefits Section */}
      <section css={css`
        margin-bottom: 6rem;
      `}>
        <h2 css={css`
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #1a2a6c;
          position: relative;
          
          &::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: #fdbb2d;
          }
        `}>Employee Benefits</h2>
        
        <div css={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        `}>
          {benefits.map((benefit, index) => (
            <div key={index} css={css`
              background: white;
              border-radius: 16px;
              padding: 2rem;
              box-shadow: 0 10px 30px rgba(0,0,0,0.05);
              transition: all 0.3s ease;
              animation: ${fadeIn} 1s ease-out ${index * 0.1}s both;
              
              &:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 40px rgba(0,0,0,0.1);
              }
            `}>
              <div css={css`
                font-size: 2.5rem;
                margin-bottom: 1rem;
              `}>{benefit.icon}</div>
              <h3 css={css`
                margin: 0 0 0.5rem;
                color: #1a2a6c;
              `}>{benefit.title}</h3>
              <p css={css`
                margin: 0;
                color: #666;
              `}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Job Openings Section */}
      <section css={css`
        background: #f8f9fa;
        padding: 4rem 2rem;
        border-radius: 40px;
        margin-bottom: 4rem;
      `}>
        <h2 css={css`
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #1a2a6c;
        `}>Current Openings</h2>
        
        <div css={css`
          max-width: 1000px;
          margin: 0 auto;
        `}>
          {jobOpenings.map((job, index) => (
            <div key={job.id} css={css`
              background: white;
              border-radius: 12px;
              padding: 2rem;
              margin-bottom: 1.5rem;
              box-shadow: 0 5px 15px rgba(0,0,0,0.05);
              transition: all 0.3s ease;
              animation: ${fadeIn} 1s ease-out ${index * 0.1}s both;
              border-left: 4px solid #1a2a6c;
              
              &:hover {
                transform: translateY(-3px);
                box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                border-left: 4px solid #fdbb2d;
              }
              
              display: grid;
              grid-template-columns: 1fr auto;
              gap: 1rem;
              
              @media (max-width: 768px) {
                grid-template-columns: 1fr;
              }
            `}>
              <div>
                <h3 css={css`
                  margin: 0 0 0.5rem;
                  font-size: 1.5rem;
                  color: #1a2a6c;
                `}>{job.title}</h3>
                <div css={css`
                  display: flex;
                  gap: 1.5rem;
                  margin-bottom: 1rem;
                  
                  @media (max-width: 480px) {
                    flex-direction: column;
                    gap: 0.5rem;
                  }
                `}>
                  <span css={css`
                    display: flex;
                    align-items: center;
                    color: #666;
                    
                    &::before {
                      content: '📍';
                      margin-right: 0.5rem;
                    }
                  `}>{job.location}</span>
                  <span css={css`
                    display: flex;
                    align-items: center;
                    color: #666;
                    
                    &::before {
                      content: '🕒';
                      margin-right: 0.5rem;
                    }
                  `}>{job.type}</span>
                </div>
                <p css={css`
                  color: #555;
                  margin: 0;
                `}>{job.description}</p>
              </div>
              <div css={css`
                display: flex;
                align-items: center;
                
                @media (max-width: 768px) {
                  justify-content: flex-end;
                }
              `}>
                <button css={css`
                  background: #1a2a6c;
                  color: white;
                  border: none;
                  padding: 0.8rem 1.8rem;
                  font-size: 1rem;
                  font-weight: 600;
                  border-radius: 8px;
                  cursor: pointer;
                  transition: all 0.3s ease;
                  white-space: nowrap;
                  
                  &:hover {
                    background: #fdbb2d;
                    color: #1a2a6c;
                    transform: translateY(-2px);
                  }
                `}>Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section css={css`
        text-align: center;
        padding: 6rem 2rem;
        background: linear-gradient(135deg, #1a2a6c 0%, #0d1a4a 100%);
        color: white;
        border-radius: 40px;
        margin-bottom: 4rem;
      `}>
        <h2 css={css`
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        `}>Don't See Your Dream Job?</h2>
        <p css={css`
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto 2.5rem;
          opacity: 0.9;
        `}>We're always looking for talented individuals. Send us your resume and we'll contact you when a matching position opens.</p>
        <button css={css`
          background: #fdbb2d;
          color: #1a2a6c;
          border: none;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: ${pulse} 2s infinite;
          
          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            animation: none;
          }
        `}>Submit Your Resume</button>
      </section>
    </main>
  )
}

export default Careers