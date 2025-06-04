/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const testimonials = [
  {
    id: 1,
    name: "Isabella Kaka",
    position: "CEO, SkyJet Charters",
    content: "AviationPro transformed our private jet fleet maintenance program. Their predictive maintenance technology reduced our downtime by 40% and their 24/7 support is unparalleled in the industry. The team's attention to detail and strict compliance with safety regulations gives us complete peace of mind.",
    service: "Private Jet Maintenance",
    rating: 5,
    image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=400",
    description: "Private jet undergoing maintenance in our hangar facility"
  },
  {
    id: 2,
    name: "Paul Omenda",
    position: "Director of Operations, AeroLink Airlines",
    content: "Their aircraft engine overhaul service extended our CFM56 engines' lifespan by 3,000 flight hours beyond manufacturer recommendations. The precision in their work and detailed reporting sets a new standard for MRO providers. We've achieved 99.8% dispatch reliability since partnering with AviationPro.",
    service: "Engine Overhaul Services",
    rating: 5,
    image: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Aircraft engineer performing maintenance on jet engine"
  },
  {
    id: 3,
    name: "David Chen",
    position: "Chief Pilot, Pacific Wings",
    content: "The flight training program exceeded all expectations. Their simulator technology and instructor expertise helped our pilots master challenging scenarios we couldn't replicate in actual aircraft. We've seen a 65% reduction in training-related incidents since switching to AviationPro.",
    service: "Flight Training Academy",
    rating: 4,
    image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Flight instructor training student pilot in cockpit"
  }
]

// Reusable card style
const cardStyle = css`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(49,130,206,0.08);
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 8px 32px rgba(49,130,206,0.13);
  }
`

// Reusable image style
const imageStyle = css`
  width: 100%;
  max-width: 320px;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.2rem;
  display: block;
`

const Testimonial = () => {
  return (
    <>
      {/* Feature Services Section (before testimonials) */}
      <section css={css`
        padding: 5rem 2rem 3rem 2rem;
        background: linear-gradient(135deg, #f8fafc 0%, #e9ecef 100%);
        @media (max-width: 768px) {
          padding: 3rem 1rem 2rem 1rem;
        }
      `}>
        <div css={css`
          max-width: 1200px;
          margin: 0 auto 2.5rem auto;
        `}>
          <h2 css={css`
            text-align: center;
            font-size: 2.2rem;
            margin-bottom: 2.5rem;
            color: #1a2a6c;
            font-weight: 700;
            letter-spacing: 1px;
          `}>Our Featured Services</h2>
          <div css={css`
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2.5rem;
            justify-content: center;
            align-items: stretch;
          `}>
            {/* Private Charter */}
            <div css={cardStyle}>
              <img 
                src="https://images.pexels.com/photos/5778604/pexels-photo-5778604.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Private Charter" 
                css={imageStyle} 
              />
              <h3 css={css`
                font-size: 1.3rem;
                font-weight: 600;
                color: #2d3748;
                margin-bottom: 0.7rem;
              `}>Private Charter</h3>
              <p css={css`
                color: #4a5568;
                text-align: center;
                font-size: 1.05rem;
                margin-bottom: 0.5rem;
              `}>
                Luxury private jet charters tailored to your schedule.
              </p>
              <p css={css`
                color: #888;
                font-size: 0.95rem;
              `}>
                Experience the ultimate in flexibility, privacy, and comfort with our bespoke charter solutions.
              </p>
            </div>
            
            {/* Aircraft Maintenance */}
            <div css={cardStyle}>
              <img 
                src="https://images.pexels.com/photos/2059627/pexels-photo-2059627.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Aircraft Maintenance" 
                css={imageStyle} 
              />
              <h3 css={css`
                font-size: 1.3rem;
                font-weight: 600;
                color: #2d3748;
                margin-bottom: 0.7rem;
              `}>Aircraft Maintenance</h3>
              <p css={css`
                color: #4a5568;
                text-align: center;
                font-size: 1.05rem;
                margin-bottom: 0.5rem;
              `}>
                Comprehensive maintenance services for all aircraft types.
              </p>
              <p css={css`
                color: #888;
                font-size: 0.95rem;
              `}>
                Our certified engineers ensure your fleet is always airworthy, safe, and compliant.
              </p>
            </div>
            
            {/* Flight Training */}
            <div css={cardStyle}>
              <img 
                src="https://images.pexels.com/photos/10180160/pexels-photo-10180160.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Flight Training" 
                css={imageStyle} 
              />
              <h3 css={css`
                font-size: 1.3rem;
                font-weight: 600;
                color: #2d3748;
                margin-bottom: 0.7rem;
              `}>Flight Training</h3>
              <p css={css`
                color: #4a5568;
                text-align: center;
                font-size: 1.05rem;
                margin-bottom: 0.5rem;
              `}>
                Professional pilot training programs for all levels.
              </p>
              <p css={css`
                color: #888;
                font-size: 0.95rem;
              `}>
                Train with industry-leading instructors and advanced simulators for real-world readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section css={css`
        padding: 6rem 2rem;
        background: linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%);
        @media (max-width: 768px) {
          padding: 4rem 1rem;
        }
      `}>
        <div css={css`
          max-width: 1200px;
          margin: 0 auto;
        `}>
          <div css={css`
            text-align: center;
            margin-bottom: 4rem;
          `}>
            <span css={css`
              display: inline-block;
              background: rgba(26, 35, 126, 0.1);
              color: #1a237e;
              padding: 0.5rem 1.5rem;
              border-radius: 50px;
              font-weight: 600;
              margin-bottom: 1rem;
              font-size: 0.9rem;
            `}>CLIENT TESTIMONIALS</span>
            <h2 css={css`
              font-size: 2.5rem;
              margin-bottom: 1.5rem;
              color: #1a2a6c;
              position: relative;
              display: inline-block;
              &::after {
                content: '';
                position: absolute;
                bottom: -15px;
                left: 50%;
                transform: translateX(-50%);
                width: 80px;
                height: 4px;
                background: #ff6d00;
                border-radius: 2px;
              }
              @media (max-width: 768px) {
                font-size: 2rem;
              }
            `}>Trusted by Aviation Leaders</h2>
            <p css={css`
              max-width: 700px;
              margin: 0 auto;
              color: #666;
              font-size: 1.1rem;
            `}>Hear from our global clients about their experiences with our aviation services</p>
          </div>

          <div css={css`
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            @media (max-width: 768px) {
              grid-template-columns: 1fr;
            }
          `}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                css={css`
                  background: white;
                  border-radius: 12px;
                  padding: 2rem;
                  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                  transition: all 0.3s ease;
                  animation: ${fadeIn} 0.8s ease-out ${index * 0.2}s both;
                  position: relative;
                  overflow: hidden;
                  &:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
                  }
                  &::before {
                    content: '"';
                    position: absolute;
                    top: 20px;
                    right: 30px;
                    font-size: 6rem;
                    color: rgba(26, 35, 126, 0.05);
                    font-family: serif;
                    line-height: 1;
                  }
                `}
              >
                <div css={css`
                  display: flex;
                  align-items: center;
                  margin-bottom: 1.5rem;
                `}>
                  <div css={css`
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin-right: 1rem;
                    border: 3px solid #e9ecef;
                  `}>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.description}
                      css={css`
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                      `}
                    />
                  </div>
                  <div>
                    <h4 css={css`
                      margin: 0 0 0.2rem;
                      color: #1a2a6c;
                      font-size: 1.2rem;
                    `}>{testimonial.name}</h4>
                    <p css={css`
                      margin: 0;
                      color: #666;
                      font-size: 0.9rem;
                    `}>{testimonial.position}</p>
                  </div>
                </div>
                
                <div css={css`
                  margin-bottom: 1.5rem;
                  position: relative;
                  z-index: 2;
                `}>
                  <p css={css`
                    color: #555;
                    line-height: 1.7;
                    font-style: italic;
                    position: relative;
                    padding-left: 1.5rem;
                    &::before {
                      content: '';
                      position: absolute;
                      left: 0;
                      top: 0;
                      height: 100%;
                      width: 3px;
                      background: linear-gradient(to bottom, #1a2a6c, #ff6d00);
                    }
                  `}>{testimonial.content}</p>
                </div>
                
                <div css={css`
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  border-top: 1px solid #eee;
                  padding-top: 1.5rem;
                `}>
                  <div css={css`
                    background: rgba(26, 35, 126, 0.1);
                    color: #1a237e;
                    padding: 0.3rem 0.8rem;
                    border-radius: 4px;
                    font-size: 0.8rem;
                    font-weight: 600;
                  `}>
                    {testimonial.service}
                  </div>
                  <div css={css`
                    display: flex;
                    align-items: center;
                  `}>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        css={css`
                          width: 18px;
                          height: 18px;
                          fill: ${i < testimonial.rating ? '#ffc107' : '#ddd'};
                          margin-right: 2px;
                        `}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div css={css`
            text-align: center;
            margin-top: 4rem;
          `}>
            <button css={css`
              background: transparent;
              color: #1a2a6c;
              border: 2px solid #1a2a6c;
              padding: 0.8rem 2rem;
              font-size: 1rem;
              font-weight: 600;
              border-radius: 50px;
              cursor: pointer;
              transition: all 0.3s ease;
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              &:hover {
                background: #1a2a6c;
                color: white;
                transform: translateY(-3px);
              }
            `}>
              View All Testimonials
              <svg css={css`width: 16px; height: 16px;`} viewBox="0 0 24 24">
                <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial