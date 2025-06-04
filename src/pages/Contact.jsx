/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react'
import ContactForm from '../components/contact/ContactForm'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa'

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

const Contact = () => {
  // Nairobi, Kenya coordinates
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808521119176!2d36.82115931475397!3d-1.2923598359799205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664f5f543%3A0x7c0f83f6b24e7e1f!2sKenya%20International%20Convention%20Centre!5e0!3m2!1sen!2ske!4v1623946787896!5m2!1sen!2ske"

  const contactMethods = [
    {
      icon: <FaMapMarkerAlt css={css`color: #e74c3c;`} />,
      title: "Our Nairobi Office",
      details: [
        "Aviation Plaza, 5th Floor",
        "Mombasa Road, Nairobi",
        "Kenya"
      ]
    },
    {
      icon: <FaPhone css={css`color: #3498db;`} />,
      title: "Call Us",
      details: [
        "Main: +254 700 123 456",
        "Support: +254 711 987 654"
      ]
    },
    {
      icon: <FaEnvelope css={css`color: #f39c12;`} />,
      title: "Email Us",
      details: [
        "info@aviationpro.co.ke",
        "support@aviationpro.co.ke"
      ]
    },
    {
      icon: <FaClock css={css`color: #2ecc71;`} />,
      title: "Working Hours",
      details: [
        "Mon-Fri: 8:00 AM - 6:00 PM",
        "Sat: 9:00 AM - 3:00 PM",
        "Sun: Closed"
      ]
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
                    url('https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover;
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
        `}>Contact AviationPro Kenya</h1>
        <p css={css`
          font-size: 1.5rem;
          max-width: 800px;
          margin: 0 auto 3rem;
          animation: ${fadeIn} 1s ease-out 0.2s both;
          
          @media (max-width: 768px) {
            font-size: 1.2rem;
          }
        `}>
          Whether you're planning your next flight or have questions about our services, 
          our friendly team in Nairobi is ready to assist you with expert advice.
        </p>
        <div css={css`
          animation: ${float} 4s ease-in-out infinite;
          font-size: 2rem;
        `}>
          <FaPaperPlane />
        </div>
      </section>

      {/* Contact Content */}
      <div css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        margin-bottom: 4rem;
        
        @media (max-width: 1024px) {
          grid-template-columns: 1fr;
        }
      `}>
        {/* Contact Information */}
        <div css={css`
          background: white;
          border-radius: 20px;
          padding: 3rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          animation: ${fadeIn} 1s ease-out;
        `}>
          <h2 css={css`
            font-size: 2rem;
            margin-bottom: 2rem;
            color: #1a2a6c;
            position: relative;
            
            &::after {
              content: '';
              position: absolute;
              bottom: -10px;
              left: 0;
              width: 60px;
              height: 4px;
              background: #fdbb2d;
            }
          `}>Our Contact Details</h2>
          
          <p css={css`
            margin-bottom: 2rem;
            font-size: 1.1rem;
            color: #555;
          `}>
            At AviationPro Kenya, we pride ourselves on exceptional customer service. 
            Reach out through any of these channels and we'll respond promptly.
          </p>
          
          <div css={css`
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            
            @media (max-width: 768px) {
              grid-template-columns: 1fr;
            }
          `}>
            {contactMethods.map((method, index) => (
              <div key={index} css={css`
                padding: 1.5rem;
                background: #f8f9fa;
                border-radius: 12px;
                transition: all 0.3s ease;
                animation: ${fadeIn} 1s ease-out ${index * 0.1}s both;
                
                &:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                }
              `}>
                <div css={css`
                  font-size: 1.8rem;
                  margin-bottom: 1rem;
                `}>{method.icon}</div>
                <h3 css={css`
                  margin: 0 0 1rem;
                  color: #1a2a6c;
                  font-size: 1.2rem;
                `}>{method.title}</h3>
                {method.details.map((detail, i) => (
                  <p key={i} css={css`
                    margin: 0.5rem 0;
                    color: #555;
                    font-size: 0.95rem;
                  `}>{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact Form */}
        <div css={css`
          background: white;
          border-radius: 20px;
          padding: 3rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          animation: ${fadeIn} 1s ease-out 0.2s both;
        `}>
          <h2 css={css`
            font-size: 2rem;
            margin-bottom: 2rem;
            color: #1a2a6c;
            position: relative;
            
            &::after {
              content: '';
              position: absolute;
              bottom: -10px;
              left: 0;
              width: 60px;
              height: 4px;
              background: #fdbb2d;
            }
          `}>Send Us a Message</h2>
          
          <p css={css`
            margin-bottom: 2rem;
            font-size: 1.1rem;
            color: #555;
          `}>
            Have a specific inquiry? Fill out this form and our team will get back 
            to you within 24 hours. We're here to make your aviation experience seamless.
          </p>
          
          <ContactForm />
        </div>
      </div>
      
      {/* Google Maps Section */}
      <section css={css`
        margin-bottom: 4rem;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        animation: ${fadeIn} 1s ease-out 0.4s both;
      `}>
        <h2 css={css`
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #1a2a6c;
        `}>Our Location in Nairobi</h2>
        
        <div css={css`
          position: relative;
          padding-bottom: 50%;
          height: 0;
          overflow: hidden;
          
          @media (min-width: 768px) {
            padding-bottom: 40%;
          }
        `}>
          <iframe 
            src={mapEmbedUrl}
            css={css`
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border: none;
            `}
            allowFullScreen
            loading="lazy"
            title="AviationPro Kenya Location"
          />
        </div>
        
        <div css={css`
          background: #1a2a6c;
          color: white;
          padding: 1.5rem;
          text-align: center;
        `}>
          <h3 css={css`margin: 0 0 0.5rem;`}>AviationPro Kenya Headquarters</h3>
          <p css={css`margin: 0; opacity: 0.9;`}>
            Aviation Plaza, Mombasa Road, Nairobi | Parking available on-site
          </p>
        </div>
      </section>
      
      {/* CTA Section */}
      <section css={css`
        text-align: center;
        padding: 4rem 2rem;
        background: linear-gradient(135deg, #fdbb2d 0%, #b21f1f 100%);
        color: white;
        border-radius: 20px;
        margin-bottom: 4rem;
      `}>
        <h2 css={css`
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
        `}>Ready to Take Your Aviation Experience to New Heights?</h2>
        <p css={css`
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto 2.5rem;
          opacity: 0.9;
        `}>
          Our team in Nairobi is standing by to help you with charter flights, 
          aircraft maintenance, or any aviation services you require.
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
          `}>Call Us Now</button>
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
          `}>Email Inquiry</button>
        </div>
      </section>
    </main>
  )
}

export default Contact