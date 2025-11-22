import { useState, useEffect } from "react";

export default function Step3({ setStep, updateField, formData }) {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  useEffect(() => {
    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  }, [formData.password, formData.confirmPassword]);

  return (
    <div className="step-card">
      <h2>Sign Up</h2>
      <p>Step 3 — Create Your Account</p>

      <input
        type="text"
        className="text-input"
        placeholder="Name"
        value={formData.username}
        onChange={(e) => updateField("username", e.target.value)}
      />

      <input
        type="email"
        className="text-input"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => updateField("email", e.target.value)}
      />

      <div className="password-input-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          className="text-input"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => updateField("password", e.target.value)}
        />
        <button
          type="button"
          className="show-btn"
          onClick={() => setShowPassword(prev => !prev)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <div className="password-input-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          className="text-input"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => updateField("confirmPassword", e.target.value)}
        />
        <button
          type="button"
          className="show-btn"
          onClick={() => setShowPassword(prev => !prev)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      {!passwordMatch && <p className="error-text">Passwords do not match!</p>}

      <input
        type="text"
        className="text-input"
        placeholder="Business Name (optional)"
        value={formData.businessName}
        onChange={(e) => updateField("businessName", e.target.value)}
      />

      <input
        type="text"
        className="text-input"
        placeholder="Business Size (optional)"
        value={formData.businessSize}
        onChange={(e) => updateField("businessSize", e.target.value)}
      />

      <button className="back-btn-step" onClick={() => setStep(2)}>
        Back
      </button>

      <button
        className="next-btn"
        onClick={() => setStep(4)}
        disabled={!passwordMatch || !formData.password || !formData.confirmPassword}
      >
        Next
      </button>
    </div>
  );
}
