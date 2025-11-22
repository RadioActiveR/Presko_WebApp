import { useNavigate } from "react-router-dom";
import "./LoginCard.css";

export default function LoginCard() {
  const navigate = useNavigate();

  return (
    <div className="LoginCard">
      <h2>Log In</h2>

      <input type="text" placeholder="Email" className="LoginInput" />
      <input type="password" placeholder="Password" className="LoginInput" />

      <button className="LoginButton">Log In</button>

      <p className="Divider">or</p>

      <button 
        className="SignupButton" 
        onClick={() => navigate("/signup")}
      >
        Sign Up
      </button>
    </div>
  );
}
