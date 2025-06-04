// ...component code...
import { Link } from 'react-router-dom'

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <img src={`/images/services/${service.icon}`} alt={service.title} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link to={`/services/${service.id}`} className="btn btn-outline">
        Learn More
      </Link>
    </div>
  )
}

export default ServiceCard