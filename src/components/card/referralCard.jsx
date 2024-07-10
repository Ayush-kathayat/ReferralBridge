import "./referralCard.css";
const ReferralCard = ({ referral }) => {
  return (
    <div className="referral-card">
      <h2>
        <strong>Title : </strong>
        {referral.title}
      </h2>
      <h3>
        <strong>Category : </strong>
        {referral.category}
      </h3>
      <p>
        <strong>Description : </strong>
        {referral.description}
      </p>
    </div>
  );
};

export default ReferralCard;
