/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

// Animation keyframes
const countUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Stats = () => {
  const statsData = [
    { value: 150, suffix: '+', label: 'Aircraft in Fleet', duration: '20+ Years' },
    { value: 25, suffix: 'M+', label: 'Passengers Annually', duration: 'Since 2005' },
    { value: 98.7, suffix: '%', label: 'On-Time Performance', duration: 'Industry Leading' },
    { value: 50, suffix: '+', label: 'Countries Served', duration: 'Global Reach' },
  ];

  return (
    <div css={css`
      max-width: 1440px;
      margin: 0 auto;
      padding: 2rem;
    `}>
      <h2 css={css`
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
        color: white;
        position: relative;
        display: inline-block;
        left: 50%;
        transform: translateX(-50%);
        
        &::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: #fdbb2d;
        }
        
        @media (max-width: 768px) {
          font-size: 2rem;
        }
      `}>Our Impact in Numbers</h2>
      
      <div css={css`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        justify-items: center;
        
        @media (max-width: 600px) {
          grid-template-columns: 1fr;
        }
      `}>
        {statsData.map((stat, index) => (
          <div 
            key={index}
            css={css`
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              border-radius: 16px;
              padding: 2rem;
              text-align: center;
              width: 100%;
              max-width: 300px;
              transition: all 0.3s ease;
              border: 1px solid rgba(255, 255, 255, 0.2);
              animation: ${countUp} 0.6s ease-out ${index * 0.2}s both;
              
              &:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                background: rgba(255, 255, 255, 0.15);
              }
            `}
          >
            <div css={css`
              font-size: 3.5rem;
              font-weight: 700;
              color: white;
              margin-bottom: 0.5rem;
              display: flex;
              justify-content: center;
              align-items: center;
              
              span {
                font-size: 2rem;
                margin-left: 0.25rem;
                animation: ${pulse} 2s infinite;
              }
              
              @media (max-width: 768px) {
                font-size: 2.5rem;
                
                span {
                  font-size: 1.5rem;
                }
              }
            `}>
              {stat.value}
              <span>{stat.suffix}</span>
            </div>
            <h3 css={css`
              font-size: 1.2rem;
              color: white;
              margin-bottom: 0.5rem;
              font-weight: 500;
              
              @media (max-width: 768px) {
                font-size: 1.1rem;
              }
            `}>{stat.label}</h3>
            <p css={css`
              font-size: 0.9rem;
              color: rgba(255, 255, 255, 0.8);
              margin: 0;
              font-style: italic;
            `}>{stat.duration}</p>
          </div>
        ))}
      </div>
      
      {/* Additional decorative elements */}
      <div css={css`
        display: flex;
        justify-content: center;
        margin-top: 3rem;
        
        svg {
          width: 100px;
          height: auto;
          opacity: 0.7;
          animation: ${pulse} 3s infinite;
        }
      `}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      </div>
    </div>
  );
};

export default Stats;