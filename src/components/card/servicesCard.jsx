import "./serviceCard.css"
const ServiceCard = ({ service }) => {
  return (
    <div className="card">
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <p>Price: ${service.price}</p>
    </div>
  );
};

export default ServiceCard;
