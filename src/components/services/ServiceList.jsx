// ...component code...
import { services } from '../../data'
import ServiceCard from './ServiceCard'

const ServiceList = () => {
  return (
    <div className="service-list">
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}

export default ServiceList