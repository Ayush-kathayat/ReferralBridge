import "./serviceCard.css"
const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <h2><strong>Service Id : </strong>{service.id}</h2>
      <p><strong>Brand : </strong>{service.brand}</p>
    </div>
  );
};

export default ServiceCard;
