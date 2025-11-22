export default function Step2({ setStep, updateField, formData }) {
  // Sample barangay options based on city
  const barangays = {
    "City A": ["Dicayas", "Estaka", "Turno"],
    "City B": ["Bagacay", "Bajumpandan", "Tinago"]
  };

  return (
    <div className="step-card">
      <h2>Sign Up</h2>
      <p>Step 2 — Input Your Location</p>

      <select
        className="select-input"
        value={formData.city}
        onChange={(e) => updateField("city", e.target.value)}
      >
        <option value="">Select City / Municipality</option>
        <option value="City A">Dipolog City</option>
        <option value="City B">Dumaguete City</option>
      </select>

      <select
        className="select-input"
        value={formData.barangay}
        onChange={(e) => updateField("barangay", e.target.value)}
      >
        <option value="">Select Barangay</option>
        {formData.city && barangays[formData.city]?.map((b) => (
          <option key={b} value={b}>{b}</option>
        ))}
      </select>

      <input
        type="text"
        className="text-input"
        placeholder="Optional: Pin your exact location"
        value={formData.location}
        onChange={(e) => updateField("location", e.target.value)}
      />

      <button className="back-btn-step" onClick={() => setStep(1)}>
        Back
      </button>

      <button className="next-btn" onClick={() => setStep(3)}>
        Next
      </button>
    </div>
  );
}
