import { Link } from "react-router-dom";
import logo from '../preskologow.svg';
import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
      <div className="Header-left">
        <img src={logo} alt="logo" className="Header-logo" />
        <h1 className="Header-title">Presko</h1>
      </div>
      <nav className="Header-nav">
        <Link to="/" className="Header-link">Home</Link>
        <Link to="/about" className="Header-link">About</Link>
        <a href="https://github.com/RadioActiveR" target="_blank" rel="noopener noreferrer" className="Header-link">GitHub</a>
      </nav>
    </header>
  );
}
