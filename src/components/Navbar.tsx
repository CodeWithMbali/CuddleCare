import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path: string) =>
    location.pathname === path ? "active" : ""

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-main">
            CUDDLE CARE
          </span>

          <span className="brand-sub">
            Mother & Baby Clinic
          </span>
        </Link>

        <div className="desktop-nav">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>

          <Link to="/about" className={isActive("/about")}>
            About
          </Link>

          <Link to="/services" className={isActive("/services")}>
            Services
          </Link>

          <Link to="/gallery" className={isActive("/gallery")}>
            Gallery
          </Link>

          <Link to="/contact" className={isActive("/contact")}>
            Contact
          </Link>

          <Link to="/contact" className="nav-book-button">
            Book
          </Link>
        </div>

        <button
          type="button"
          className={`menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link
          to="/"
          className={isActive("/")}
          onClick={closeMenu}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={isActive("/about")}
          onClick={closeMenu}
        >
          About
        </Link>

        <Link
          to="/services"
          className={isActive("/services")}
          onClick={closeMenu}
        >
          Services
        </Link>

        <Link
          to="/gallery"
          className={isActive("/gallery")}
          onClick={closeMenu}
        >
          Gallery
        </Link>

        <Link
          to="/contact"
          className={isActive("/contact")}
          onClick={closeMenu}
        >
          Contact
        </Link>

        <Link
          to="/contact"
          className="mobile-book-button"
          onClick={closeMenu}
        >
          Book Appointment
        </Link>
      </div>
    </nav>
  )
}

export default Navbar