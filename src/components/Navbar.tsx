import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const location = useLocation()

  const linkStyle = (path: string) => ({
    padding: "10px 18px",
    borderRadius: "6px",
    textDecoration: "none",
    color: location.pathname === path ? "#000" : "#fff",
    backgroundColor:
      location.pathname === path ? "#ffffff" : "transparent",
    transition: "all 0.3s ease",
    fontSize: "14px",
    letterSpacing: "1px"
  })

  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #111, #1c1c1c)",
        padding: "20px 40px",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >
        <div
          style={{
            color: "#fff",
            fontWeight: 500,
            letterSpacing: "3px",
            fontSize: "16px"
          }}
        >
          CUDDLE CARE MOTHER & BABY CLINIC
        </div>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <Link
            to="/"
            style={linkStyle("/")}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            HOME
          </Link>

          <Link to="/about" style={linkStyle("/about")}>ABOUT</Link>
          <Link to="/services" style={linkStyle("/services")}>SERVICES</Link>
          <Link to="/gallery" style={linkStyle("/gallery")}>GALLERY</Link>
          <Link to="/contact" style={linkStyle("/contact")}>CONTACT</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
