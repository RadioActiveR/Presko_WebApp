import './AboutPage.css';
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function AboutPage() {
  const navigate = useNavigate();
   
  return (
    <div>
        <Header />
    <div>
        <header className="AboutPage-header">
            <h1 className="AboutPage-title">
                About Presko
            </h1>
            <p className="AboutPage-p">
                Type of Business: Technology-Based Agritech App<br /><br />

                Target Market/Audience:<br />
                · Grocery or market store owners<br />
                · Food business owners (restaurants, cafés, catering services)<br />
                · Organic produce resellers or local market managers<br /><br />

                Benefits:<br />
                · Automatic stock and expiry tracking<br />
                · Real-time price comparison from nearby markets<br />
                · GPS-based nearest supplier locator<br />
                · Seasonal produce alerts (availability, pricing, quality updates)<br />
                · Data insights for better inventory management<br />
                · Helps reduce waste and overstocking
            </p>
            <Button text="Go Back Home" onClick={() => navigate("/")} />
        </header>
    </div>
    </div>
  );
}