import { useNavigate } from "react-router-dom";

export default function Step4() {
  const navigate = useNavigate();

  return (
    <div className="step4-card">
      <h2>Registration Complete!</h2>
      <p>Your account has been successfully created.</p>

      <div className="success-check">✔</div>

      <button className="back-btn" onClick={() => navigate("/")}>
        Back to Homepage
      </button>
    </div>
  );
}
