import { useState } from "react"

export function Services() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const categories: Record<string, [string, string][]> = {
    "Baby & Child Care": [
      ["Well baby vaccination", "R250.00"],
      ["Vitamin A & deworming (6 months - 5 years)", "R150.00"],
      ["Sick baby consultation", "R450.00"],
      ["Routine baby check-up (milestones)", "R150.00"],
      ["Baby ear piercing & aftercare", "R300.00"]
    ],
    "Adult Consultations": [
      ["Adult acute consultation", "R550.00"],
      ["Adult chronic consultation", "R350.00"]
    ],
    "Family Planning": [
      ["Oral contraceptives", "R150.00"],
      ["Injectable contraceptives", "R150.00"],
      ["Emergency pill", "R250.00"],
      ["Implanon insertion", "R650.00"],
      ["Implanon removal", "R450.00"],
      ["Termination of Pregnancy", "R1600.00"]
    ],
    "Antenatal Care": [
      ["Antenatal care first visit", "R1600.00"],
      ["Antenatal follow-up visit", "R650.00"],
      ["2D ultrasound sonar", "R350.00"],
      ["Antenatal classes", "R450.00"]
    ],
    "Testing & Procedures": [
      ["Pap smear", "R400.00"],
      ["HIV counselling & testing", "R150.00"],
      ["Pregnancy test", "R100.00"],
      ["Blood group testing", "R250.00"],
      ["Removal of sutures", "R350.00"],
      ["Laboratory services consultation (excludes procedure)", "R200.00"]
    ],
    "Wellness & Preventative Care": [
      ["General wellness assessment", "R450.00"],
      ["Glucose & cholesterol test", "R150.00"],
      ["Glucose testing", "R80.00"],
      ["Vitamin injection", "R200.00"],
      ["Vitamin B12 & BCO injection", "R100.00"],
      ["PREP consultation & medication", "R550.00"],
      ["PEP consultation & medication", "R550.00"]
    ],
    "IV Drips": [
      ["Glow Drip", "R650 - R1500"],
      ["Jet Fuel Drip", "R500.00"],
      ["Anti-inflammatory", "R550.00"],
      ["Hangover Drip", "R350.00"],
      ["Immune Booster", "R450.00"],
      ["Hydration Drip", "R350.00"]
    ]
  }

  const phoneNumber = "27662719931"

  const handleWhatsAppBooking = (serviceName: string) => {
    const message = `Hello Cuddle Care 👋

I would like to book the following service:

Service: ${serviceName}

My Name:
Preferred Date:
Preferred Time:

Thank you 🤍`

    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    window.open(url, "_blank")
  }

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #f8f6f2, #ffffff)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* FLOATING SILVER BALLS */}
      <div
        style={{
          position: "absolute",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, #ffffff, #d9d9d9, #bfbfbf)",
          top: "100px",
          left: "-100px",
          opacity: 0.5,
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          animation: "floatLuxury 14s ease-in-out infinite"
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 40% 40%, #ffffff, #cfcfcf, #a6a6a6)",
          bottom: "150px",
          right: "-80px",
          opacity: 0.4,
          boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
          animation: "floatLuxury 18s ease-in-out infinite"
        }}
      />

      {/* HEADER */}
      <section
        style={{
          padding: "120px 40px 80px",
          textAlign: "center",
          position: "relative",
          zIndex: 1
        }}
      >
        <h1
          style={{
            fontSize: "clamp(40px,5vw,70px)",
            fontWeight: 400
          }}
        >
          Our Services
        </h1>

        <div
          style={{
            width: "70px",
            height: "3px",
            backgroundColor: "#c6a75e",
            margin: "20px auto 30px"
          }}
        />

        <p style={{ color: "#5c5c5c" }}>
          Select a category below to explore services and pricing.
        </p>
      </section>

      {/* CATEGORY BUTTONS */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          position: "relative",
          zIndex: 1
        }}
      >
        {Object.keys(categories).map((category) => (
          <div
            key={category}
            onClick={() =>
              setActiveCategory(
                activeCategory === category ? null : category
              )
            }
            style={{
              padding: "18px 28px",
              borderRadius: "14px",
              backdropFilter: "blur(10px)",
              backgroundColor:
                activeCategory === category
                  ? "#111"
                  : "rgba(255,255,255,0.85)",
              color:
                activeCategory === category ? "#fff" : "#2f2f2f",
              border: "1px solid rgba(0,0,0,0.1)",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-4px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            {category}
          </div>
        ))}
      </section>

      {/* SERVICES PANEL */}
      {activeCategory && (
        <section
          style={{
            maxWidth: "900px",
            margin: "60px auto",
            backgroundColor: "#111",
            padding: "60px",
            borderRadius: "20px",
            boxShadow: "0 40px 100px rgba(0,0,0,0.15)",
            color: "#fff",
            position: "relative",
            zIndex: 1
          }}
        >
          <h2 style={{ marginBottom: "40px" }}>
            {activeCategory}
          </h2>

          {categories[activeCategory].map(([service, price], index) => (
            <div
              key={index}
              style={{
                padding: "20px 0",
                borderBottom: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "15px"
                }}
              >
                <div>
                  <div>{service}</div>
                  <div
                    style={{
                      color: "#c6a75e",
                      marginTop: "4px"
                    }}
                  >
                    {price}
                  </div>
                </div>

                <button
                  onClick={() =>
                    handleWhatsAppBooking(service)
                  }
                  style={{
                    backgroundColor: "#c6a75e",
                    color: "#fff",
                    padding: "8px 18px",
                    border: "none",
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontSize: "14px",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform =
                      "translateY(-2px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform =
                      "translateY(0)")
                  }
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  )
}
