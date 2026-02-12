export function About() {
  return (
    <div
      style={{
        backgroundColor: "#f8f6f2",
        minHeight: "100vh",
        paddingBottom: "120px",
        position: "relative"
      }}
    >
      {/* Soft Background Accent Strip */}
      <div
        style={{
          position: "absolute",
          top: "300px",
          left: 0,
          width: "100%",
          height: "300px",
          background: "linear-gradient(90deg, rgba(198,167,94,0.1), transparent)",
          zIndex: 0
        }}
      />

      {/* HERO TITLE */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "120px 40px 80px 40px",
          textAlign: "center",
          position: "relative",
          zIndex: 1
        }}
        className="fade-up"
      >
        <h1
          style={{
            fontSize: "clamp(38px, 5vw, 60px)",
            fontWeight: 400,
            color: "#1f1f1f"
          }}
        >
          About Us
        </h1>

        <div className="gold-divider"></div>

        <p
          style={{
            fontSize: "18px",
            color: "#5c5c5c",
            lineHeight: "1.8",
            maxWidth: "700px",
            margin: "0 auto"
          }}
        >
          We are committed to providing compassionate, patient-centred care
          while building long-lasting relationships rooted in trust,
          excellence and community.
        </p>
      </section>

      {/* VISION SECTION */}
      <section
        style={{
          backgroundColor: "#111",
          padding: "100px 40px",
          textAlign: "center",
          position: "relative",
          zIndex: 1
        }}
        className="fade-up"
      >
        <h2
          style={{
            fontSize: "32px",
            color: "#ffffff",
            fontWeight: 400
          }}
        >
          Our Vision
        </h2>

        <div className="gold-divider"></div>

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "40px",
            backgroundColor: "#000",
            borderRadius: "12px"
          }}
        >
          <p
            style={{
              color: "#ffffff",
              fontSize: "20px",
              lineHeight: "1.7"
            }}
          >
            To be a trusted healthcare partner that empowers families to live
            healthier, happier lives through compassionate, patient-centred care.
          </p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section
        style={{
          padding: "120px 40px",
          position: "relative",
          zIndex: 1
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: "center"
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 400
            }}
          >
            Our Mission
          </h2>

          <div className="gold-divider"></div>
        </div>

        <div
          style={{
            maxWidth: "1100px",
            margin: "60px auto 0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px"
          }}
        >
          {[
            "To become recommended through our workmanship by other healthcare professionals and establish trustworthy relationships with allied healthcare providers.",
            "To establish long-lasting, healthy relationships with our clients built on trust, respect and consistent care.",
            "To become active in the community and contribute time and services for the benefit of the community at large."
          ].map((text, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "40px",
                borderRadius: "12px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.2)"
              }}
              className="fade-up"
            >
              <p style={{ lineHeight: "1.8" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section
        style={{
          backgroundColor: "#111",
          padding: "120px 40px",
          textAlign: "center"
        }}
        className="fade-up"
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          <p className="quote-block">
            “Compassion is at the heart of everything we do. Every family
            deserves care that feels personal, safe and empowering.”
          </p>

          <p
            style={{
              marginTop: "30px",
              color: "#c6a75e",
              letterSpacing: "2px",
              fontSize: "14px"
            }}
          >
            — Nurse Zodwa
          </p>
        </div>
      </section>
    </div>
  )
}
