// ...component code...
import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    alert('Thank you for your message! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} style={{
      background: '#fff',
      borderRadius: '1.2rem',
      boxShadow: '0 4px 24px #0001',
      padding: '2.5rem 2rem',
      maxWidth: '500px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.2rem',
    }}>
      <div className="form-group" style={{marginBottom: '1.2rem'}}>
        <label htmlFor="name" style={{fontWeight: 600, marginBottom: '0.5rem', display: 'block'}}>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '0.8rem',
            borderRadius: '0.5rem',
            border: '1px solid #cbd5e1',
            fontSize: '1rem',
            marginTop: '0.2rem',
            outline: 'none',
            transition: 'border 0.2s',
          }}
        />
      </div>
      <div className="form-group" style={{marginBottom: '1.2rem'}}>
        <label htmlFor="email" style={{fontWeight: 600, marginBottom: '0.5rem', display: 'block'}}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '0.8rem',
            borderRadius: '0.5rem',
            border: '1px solid #cbd5e1',
            fontSize: '1rem',
            marginTop: '0.2rem',
            outline: 'none',
            transition: 'border 0.2s',
          }}
        />
      </div>
      <div className="form-group" style={{marginBottom: '1.2rem'}}>
        <label htmlFor="phone" style={{fontWeight: 600, marginBottom: '0.5rem', display: 'block'}}>Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '0.8rem',
            borderRadius: '0.5rem',
            border: '1px solid #cbd5e1',
            fontSize: '1rem',
            marginTop: '0.2rem',
            outline: 'none',
            transition: 'border 0.2s',
          }}
        />
      </div>
      <div className="form-group" style={{marginBottom: '1.2rem'}}>
        <label htmlFor="message" style={{fontWeight: 600, marginBottom: '0.5rem', display: 'block'}}>Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '0.8rem',
            borderRadius: '0.5rem',
            border: '1px solid #cbd5e1',
            fontSize: '1rem',
            marginTop: '0.2rem',
            outline: 'none',
            transition: 'border 0.2s',
            resize: 'vertical',
          }}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary" style={{
        background: '#3182ce',
        color: '#fff',
        border: 'none',
        padding: '0.9rem 2.2rem',
        borderRadius: '2rem',
        fontSize: '1.1rem',
        fontWeight: 600,
        cursor: 'pointer',
        boxShadow: '0 2px 8px #0002',
        transition: 'background 0.3s, color 0.3s, box-shadow 0.3s',
      }}>Send Message</button>
    </form>
  )
}

export default ContactForm