import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">JENOGECHI</div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/content">Content</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}