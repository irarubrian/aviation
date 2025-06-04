/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react'
import { FaGraduationCap, FaWrench, FaChartLine, FaMedal, FaHandshake } from 'react-icons/fa'

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`

const Education = () => {
  const programs = [
    {
      id: 1,
      title: "Pilot Training Program",
      duration: "12-18 months",
      requirements: "High school diploma, FAA medical certificate",
      description: "Comprehensive flight training from Private Pilot through Commercial Pilot certificates with instrument rating.",
      icon: <FaGraduationCap css={css`color: #3498db;`} />,
      highlight: "Includes 250 hours of flight time"
    },
    {
      id: 2,
      title: "Aircraft Maintenance Technician",
      duration: "24 months",
      requirements: "High school diploma, mechanical aptitude",
      description: "FAA-approved curriculum covering airframe and powerplant maintenance, avionics, and modern repair techniques.",
      icon: <FaWrench css={css`color: #e74c3c;`} />,
      highlight: "Earn your A&P certification"
    },
    {
      id: 3,
      title: "Aviation Management Degree",
      duration: "4 years",
      requirements: "High school diploma",
      description: "Bachelor's degree program combining business administration with specialized aviation operations knowledge.",
      icon: <FaChartLine css={css`color: #2ecc71;`} />,
      highlight: "Includes internship opportunities"
    }
  ]

  const scholarships = [
    {
      name: "Women in Aviation Scholarship",
      amount: "$10,000",
      deadline: "March 15, 2024",
      icon: <FaMedal css={css`color: #9b59b6;`} />
    },
    {
      name: "Veterans Flight Training Grant",
      amount: "$15,000",
      deadline: "Rolling admissions",
      icon: <FaHandshake css={css`color: #e67e22;`} />
    },
    {
      name: "Aviation Maintenance Award",
      amount: "$7,500",
      deadline: "May 1, 2024",
      icon: <FaWrench css={css`color: #1abc9c;`} />
    }
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
        `}>Aviation Education Programs</h1>
        <p css={css`
          font-size: 1.5rem;
          max-width: 800px;
          margin: 0 auto 3rem;
          animation: ${fadeIn} 1s ease-out 0.2s both;
          
          @media (max-width: 768px) {
            font-size: 1.2rem;
          }
        `}>
          AviationPro is committed to developing the next generation of aviation
          professionals through comprehensive education and training programs.
        </p>
        <div css={css`
          animation: ${float} 4s ease-in-out infinite;
          font-size: 2rem;
        `}>
          <FaGraduationCap />
        </div>
      </section>

      {/* Programs Section */}
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
        `}>Our Aviation Programs</h2>
        
        <div css={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        `}>
          {programs.map((program, index) => (
            <div key={program.id} css={css`
              background: white;
              border-radius: 16px;
              padding: 2.5rem;
              box-shadow: 0 10px 30px rgba(0,0,0,0.05);
              transition: all 0.3s ease;
              animation: ${fadeIn} 1s ease-out ${index * 0.1}s both;
              border-top: 5px solid #1a2a6c;
              
              &:hover {
                transform: translateY(-10px);
                box-shadow: 0 15px 40px rgba(0,0,0,0.1);
              }
            `}>
              <div css={css`
                font-size: 2.5rem;
                margin-bottom: 1.5rem;
              `}>{program.icon}</div>
              <h3 css={css`
                margin: 0 0 1rem;
                color: #1a2a6c;
                font-size: 1.5rem;
              `}>{program.title}</h3>
              
              <div css={css`
                display: flex;
                align-items: center;
                margin: 1rem 0;
                color: #555;
                
                &::before {
                  content: '⏱️';
                  margin-right: 0.5rem;
                  font-size: 1.2rem;
                }
              `}>
                <strong css={css`margin-right: 0.5rem;`}>Duration:</strong> {program.duration}
              </div>
              
              <div css={css`
                display: flex;
                align-items: flex-start;
                margin: 1rem 0;
                color: #555;
                
                &::before {
                  content: '📝';
                  margin-right: 0.5rem;
                  font-size: 1.2rem;
                }
              `}>
                <div>
                  <strong css={css`margin-right: 0.5rem;`}>Requirements:</strong> {program.requirements}
                </div>
              </div>
              
              <p css={css`
                margin: 1.5rem 0;
                color: #555;
                font-size: 1rem;
                line-height: 1.6;
              `}>{program.description}</p>
              
              <div css={css`
                background: #f8f9fa;
                padding: 1rem;
                border-radius: 8px;
                margin: 1.5rem 0;
                display: flex;
                align-items: center;
                
                &::before {
                  content: '✨';
                  margin-right: 0.5rem;
                  font-size: 1.2rem;
                }
              `}>
                {program.highlight}
              </div>
              
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
                width: 100%;
                margin-top: 1rem;
                
                &:hover {
                  background: #fdbb2d;
                  color: #1a2a6c;
                  transform: translateY(-2px);
                }
              `}>Learn More</button>
            </div>
          ))}
        </div>
      </section>
      
      {/* Scholarships Section */}
      <section css={css`
        background: linear-gradient(135deg, #1a2a6c 0%, #0d1a4a 100%);
        padding: 4rem 2rem;
        border-radius: 20px;
        margin-bottom: 4rem;
        color: white;
      `}>
        <h2 css={css`
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
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
        `}>Scholarship Opportunities</h2>
        
        <p css={css`
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
          font-size: 1.2rem;
          opacity: 0.9;
        `}>
          We offer several scholarship programs for qualified candidates who demonstrate
          financial need and a strong commitment to a career in aviation.
        </p>
        
        <div css={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto 3rem;
        `}>
          {scholarships.map((scholarship, index) => (
            <div key={index} css={css`
              background: rgba(255,255,255,0.1);
              border-radius: 12px;
              padding: 2rem;
              transition: all 0.3s ease;
              animation: ${fadeIn} 1s ease-out ${index * 0.1}s both;
              border: 1px solid rgba(255,255,255,0.2);
              
              &:hover {
                transform: translateY(-5px);
                background: rgba(255,255,255,0.15);
              }
            `}>
              <div css={css`
                font-size: 2rem;
                margin-bottom: 1rem;
              `}>{scholarship.icon}</div>
              <h3 css={css`
                margin: 0 0 0.5rem;
                font-size: 1.3rem;
              `}>{scholarship.name}</h3>
              <div css={css`
                display: flex;
                justify-content: space-between;
                margin: 1rem 0;
                padding-bottom: 1rem;
                border-bottom: 1px solid rgba(255,255,255,0.2);
              `}>
                <span>Amount:</span>
                <strong>{scholarship.amount}</strong>
              </div>
              <div css={css`
                display: flex;
                justify-content: space-between;
              `}>
                <span>Deadline:</span>
                <strong>{scholarship.deadline}</strong>
              </div>
            </div>
          ))}
        </div>
        
        <div css={css`
          text-align: center;
        `}>
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
            
            &:hover {
              transform: translateY(-3px);
              box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            }
          `}>View All Scholarships</button>
        </div>
      </section>
      
      {/* CTA Section */}
      <section css={css`
        text-align: center;
        padding: 6rem 2rem;
        background: linear-gradient(to right, #fdbb2d, #b21f1f);
        color: white;
        border-radius: 20px;
        margin-bottom: 4rem;
      `}>
        <h2 css={css`
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        `}>Ready to Launch Your Aviation Career?</h2>
        <p css={css`
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto 2.5rem;
        `}>
          Our admissions team is standing by to help you choose the perfect program
          and guide you through the application process.
        </p>
        <div css={css`
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          
          @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
          }
        `}>
          <button css={css`
            background: white;
            color: #1a2a6c;
            border: none;
            padding: 1rem 2.5rem;
            font-size: 1.1rem;
            font-weight: 600;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            
            &:hover {
              transform: translateY(-3px);
              box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            }
          `}>Apply Now</button>
          <button css={css`
            background: transparent;
            color: white;
            border: 2px solid white;
            padding: 1rem 2.5rem;
            font-size: 1.1rem;
            font-weight: 600;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            
            &:hover {
              background: rgba(255,255,255,0.1);
              transform: translateY(-3px);
            }
          `}>Request Info</button>
        </div>
      </section>
    </main>
  )
}

export default Education