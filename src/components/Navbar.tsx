import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path: string) =>
    location.pathname === path ? "active" : ""

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          CUDDLE CARE MOTHER & BABY CLINIC
        </div>

        <div
          className={`nav-links ${menuOpen ? "open" : ""}`}
        >
          <Link
            to="/"
            className={isActive("/")}
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className={isActive("/about")}
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            to="/services"
            className={isActive("/services")}
            onClick={() => setMenuOpen(false)}
          >
            SERVICES
          </Link>
          <Link
            to="/gallery"
            className={isActive("/gallery")}
            onClick={() => setMenuOpen(false)}
          >
            GALLERY
          </Link>
          <Link
            to="/contact"
            className={isActive("/contact")}
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
          </Link>
        </div>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
