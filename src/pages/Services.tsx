import { useState } from "react"
import "./Services.css"

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
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="services">
      <div className="services-accent"></div>

      {/* HEADER */}
      <section className="services-hero container">
        <h1>Our Services</h1>
        <div className="gold-divider"></div>
        <p>Select a category below and scroll down to explore services and pricing.</p>
      </section>

      {/* CATEGORY GRID */}
      <section className="category-grid container">
        {Object.keys(categories).map((category) => (
          <div
            key={category}
            className={`category-card ${activeCategory === category ? "active" : ""}`}
            onClick={() =>
              setActiveCategory(activeCategory === category ? null : category)
            }
          >
            {category}
          </div>
        ))}
      </section>

      {/* SERVICES PANEL */}
      {activeCategory && (
        <section className="services-panel container fade-up">
          <h2>{activeCategory}</h2>

          {categories[activeCategory].map(([service, price], index) => (
            <div key={index} className="service-row">
              <div>
                <p className="service-name">{service}</p>
                <p className="service-price">{price}</p>
              </div>

              <button
                className="book-btn"
                onClick={() => handleWhatsAppBooking(service)}
              >
                Book
              </button>
            </div>
          ))}
        </section>
      )}
    </div>
  )
}
