import Button from "./Button";
import logo from "../preskologo.svg";
import img1 from "../images/cafe.jpg";
import img2 from "../images/meat.jpg";
import img3 from "../images/organic-vegetable-farming.jpg";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import LoginCard from "./LoginCard";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="HomePage">
      <Header />

      <div className="HomePage-body">

        {/* RIGHT PANEL — Main content */}
        <div className="HomePage-left"
        >
          <header className="HomePage-header">
            <img src={logo} className="HomePage-logo" alt="logo" />

            <div className="HomePage-image-row">
              <img src={img1} alt="Image 1" className="HomePage-image" />
              <img src={img2} alt="Image 2" className="HomePage-image" />
              <img src={img3} alt="Image 3" className="HomePage-image" />
            </div>
          </header>
        </div>

        {/* LEFT PANEL — Login Card */}
        <div className="HomePage-right">
          <LoginCard />
        </div>

      </div>
    </div>
  );
}

export default HomePage;
