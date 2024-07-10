import "./comapnycard.css";

const CompanyCard = ({ company }) => {
  return (
    <div className="company-card">
      <h2>{company.name}</h2>
      <p>
        <strong>Industry:</strong> {company.industry}
      </p>
      <p>
        <strong>Description:</strong> {company.description}
      </p>
    </div>
  );
};

export default CompanyCard;
