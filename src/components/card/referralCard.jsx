
import "./referralCard.css";
const ReferralCard = ({ referral }) => {
  return (
    <div className="card">
      <h3>{referral.name}</h3>
      <p>{referral.description}</p>
    </div>
  );
};

export default ReferralCard;
