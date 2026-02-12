import { Link } from "react-router-dom"
import nurse from "../assets/nurse.jpeg"

export function Home() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #f4f1ed, #ffffff)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Floating Ball 1 */}
      <div
        style={{
          position: "absolute",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, #ffffff, #cfcfcf, #9e9e9e)",
          top: "120px",
          left: "-80px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
          opacity: 0.7,
          animation: "floatLuxury 12s ease-in-out infinite"
        }}
      />

      {/* Floating Ball 2 */}
      <div
        style={{
          position: "absolute",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 40% 40%, #ffffff, #d9d9d9, #a6a6a6)",
          bottom: "120px",
          right: "-60px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
          opacity: 0.8,
          animation: "floatLuxury 15s ease-in-out infinite"
        }}
      />

      {/* HERO SECTION */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 40px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "80px",
          position: "relative",
          zIndex: 1
        }}
      >
        {/* LEFT */}
        <div style={{ flex: "1 1 500px" }}>
          <h1
            style={{
              fontSize: "clamp(38px, 5vw, 64px)",
              fontWeight: 200,
              lineHeight: "1.1",
              letterSpacing: "-1.5px",
              color: "#111"
            }}
          >
            Gentle Care
            <br />
            <span style={{ color: "#c6a75e" }}>
              for Mothers, Babies & Families
            </span>
          </h1>

          <p
            style={{
              marginTop: "30px",
              fontSize: "18px",
              color: "#666",
              lineHeight: "1.8",
              maxWidth: "520px"
            }}
          >
            A calm, trusted space where mothers, babies and families
            receive personalized, professional care from pregnancy
            through early parenthood.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              flexWrap: "wrap",
              gap: "20px"
            }}
          >
            {/* BOOK APPOINTMENT */}
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <button
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  padding: "16px 40px",
                  border: "none",
                  borderRadius: "6px",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-3px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                BOOK APPOINTMENT
              </button>
            </Link>

            {/* VIEW SERVICES */}
            <Link to="/services" style={{ textDecoration: "none" }}>
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "#000",
                  padding: "16px 40px",
                  border: "2px solid #000",
                  borderRadius: "6px",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#000"
                  e.currentTarget.style.color = "#fff"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.color = "#000"
                }}
              >
                VIEW SERVICES
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div style={{ flex: "1 1 450px" }}>
          <img
            src={nurse}
            alt="Clinic nurse"
            style={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 40px 100px rgba(0,0,0,0.25)"
            }}
          />
        </div>
      </section>
    </div>
  )
}
