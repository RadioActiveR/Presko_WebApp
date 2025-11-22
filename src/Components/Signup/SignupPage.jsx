import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import "./Signup.css";

export default function SignupPage() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    identificationType: "",
    city: "",
    barangay: "",
    location: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    businessSize: ""
  });

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="signup-container">
      {step === 1 && <Step1 setStep={setStep} updateField={updateField} formData={formData} />}
      {step === 2 && <Step2 setStep={setStep} updateField={updateField} formData={formData} />}
      {step === 3 && <Step3 setStep={setStep} updateField={updateField} formData={formData} />}
      {step === 4 && <Step4 />}
    </div>
  );
}
