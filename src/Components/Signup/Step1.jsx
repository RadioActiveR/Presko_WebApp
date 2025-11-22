import { useNavigate } from "react-router-dom";

export default function Step1({ setStep, updateField, formData }) {
  const navigate = useNavigate();
    
  const types = [
    "Personal Use",
    "Cafe Owner",
    "Restaurant Owner",
    "Grocery Store Owner",
    "Karinderya Owner",
    "Market Vendor",
    "Organic Produce Reseller",
    "Supplier or Farmer",
    "Food Truck Owner",
    "Catering Service Provider"
  ];

  return (
    <div className="step-card">
      <h2>Sign Up</h2>
      <p>Step 1 — Choose Your Identity</p>

      <div className="card-select-row">
        {types.map((type) => (
          <div
            key={type}
            className={"select-card " + (formData.identificationType === type ? "selected" : "")}
            onClick={() => updateField("identificationType", type)}
          >
            {type}
          </div>
        ))}
      </div>

      <button className="back-btn-step" onClick={() => navigate("/")}>
        Back to Home
      </button>

      <button className="next-btn" onClick={() => setStep(2)}>
        Next
      </button>
    </div>
  );
}
