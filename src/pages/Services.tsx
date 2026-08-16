import { useState } from "react"
import "./Services.css"

type Service = {
  name: string
  price: string
  info: string
  notice?: string
}

export function Services() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [openInfo, setOpenInfo] = useState<string | null>(null)

  const categories: Record<string, Service[]> = {
    "Baby & Child Care": [
      {
        name: "Well baby vaccination",
        price: "R350.00",
        info:
          "Routine childhood vaccination support according to the baby's vaccination needs and available stock.",
        notice:
          "R350 applies to government vaccine stock. Private vaccine stock is priced separately and may depend on your medical aid benefits."
      },
      {
        name: "Vitamin A & deworming (6 months - 5 years)",
        price: "R150.00",
        info:
          "Preventative child-health support for eligible babies and children, provided according to age and clinical requirements."
      },
      {
        name: "Sick baby consultation",
        price: "R450.00",
        info:
          "A clinical consultation for babies who are unwell, including assessment and guidance based on the baby's symptoms and clinical findings."
      },
      {
        name: "Routine baby check-up (milestones)",
        price: "R250.00",
        info:
          "A routine check-up focusing on growth, developmental milestones and general wellbeing."
      },
      {
        name: "Baby ear piercing & aftercare",
        price: "R450.00",
        info:
          "Baby ear piercing with guidance on appropriate aftercare and keeping the piercing area clean while it heals."
      }
    ],

    "Massage & Relaxation": [
      {
        name: "Baby Massage",
        price: "R450.00",
        info:
          "A gentle 20-minute baby massage session designed to encourage relaxation, comforting touch and parent-baby bonding. Research suggests infant massage may offer benefits in some settings, although responses vary from baby to baby.",
        notice:
          "20-minute session. Please let the clinic know about any illness, skin condition or other health concern before the massage."
      },
      {
        name: "Pregnancy Belly Massage",
        price: "R450.00",
        info:
          "A gentle 20-minute pregnancy-focused massage intended to promote relaxation and ease everyday muscular tension and discomfort associated with pregnancy.",
        notice:
          "20-minute session. Suitability should be assessed during pregnancy, particularly where there are pregnancy complications or other medical concerns."
      }
    ],

    "Adult Consultations": [
      {
        name: "Adult acute consultation",
        price: "R550.00",
        info:
          "A consultation for a new or short-term health concern, with clinical assessment and appropriate care guidance."
      },
      {
        name: "Adult chronic consultation",
        price: "R350.00",
        info:
          "A follow-up or management consultation for an existing long-term health condition."
      }
    ],

    "Family Planning": [
      {
        name: "Oral contraceptives",
        price: "R200.00",
        info:
          "Family-planning consultation and oral contraceptive supply where clinically appropriate.",
        notice:
          "Current stock: Microval is available. Triphasil and Nordette are currently out of stock."
      },
      {
        name: "Injectable contraceptives",
        price: "R200.00",
        info:
          "Family-planning consultation and administration of an injectable contraceptive when clinically appropriate."
      },
      {
        name: "Emergency pill",
        price: "R250.00",
        info:
          "Emergency contraception for eligible patients following an appropriate consultation."
      },
      {
        name: "Implanon insertion",
        price: "R650.00",
        info:
          "Insertion of a contraceptive implant following appropriate assessment and counselling."
      },
      {
        name: "Implanon removal",
        price: "R450.00",
        info:
          "Removal of an existing contraceptive implant following appropriate clinical assessment."
      },
      {
        name: "Termination of Pregnancy",
        price: "R2500.00",
        info:
          "Please contact the clinic directly for confidential information about this service, eligibility, the process and any required consultation."
      }
    ],

    "Antenatal Care": [
      {
        name: "Antenatal care first visit",
        price: "R1600.00",
        info:
          "A comprehensive first antenatal appointment to begin or continue pregnancy care and assess maternal wellbeing."
      },
      {
        name: "Antenatal follow-up visit",
        price: "R650.00",
        info:
          "A follow-up pregnancy-care appointment to monitor progress and address ongoing antenatal needs."
      },
      {
        name: "2D ultrasound sonar",
        price: "R350.00",
        info:
          "This service is a 2D sonar scan. Please contact the clinic if you need information about what can be assessed during your appointment."
      },
      {
        name: "Gender reveal scan",
        price: "R500.00",
        info:
          "A pregnancy scan appointment where fetal sex may be assessed when gestational age and fetal position allow."
      },
      {
        name: "Antenatal classes",
        price: "R450.00",
        info:
          "Educational support to help expecting parents prepare for pregnancy, birth and early parenthood."
      }
    ],

    "Testing & Procedures": [
      {
        name: "Pap smear",
        price: "R400.00",
        info:
          "A cervical screening procedure used to collect cells from the cervix for laboratory assessment."
      },
      {
        name: "HIV counselling & testing",
        price: "R150.00",
        info:
          "Confidential HIV counselling and testing with appropriate pre- and post-test support."
      },
      {
        name: "Pregnancy test",
        price: "R100.00",
        info:
          "Pregnancy testing with guidance on appropriate next steps based on the result."
      },
      {
        name: "Blood group testing",
        price: "R250.00",
        info:
          "Testing to determine your blood group where required."
      },
      {
        name: "Removal of sutures",
        price: "R450.00",
        info:
          "Clinical removal of sutures once the wound has reached an appropriate stage of healing."
      },
      {
        name: "Laboratory services consultation (excludes procedure)",
        price: "R200.00",
        info:
          "A consultation relating to laboratory investigations. Laboratory tests and procedures are charged separately."
      }
    ],

    "Wellness & Preventative Care": [
      {
        name: "General wellness assessment",
        price: "R450.00",
        info:
          "A general health and wellness consultation with appropriate screening based on your needs."
      },
      {
        name: "Glucose & cholesterol test",
        price: "R150.00",
        info:
          "Point-of-care screening for glucose and cholesterol levels."
      },
      {
        name: "Glucose testing",
        price: "R80.00",
        info:
          "A blood-glucose screening test."
      },
      {
        name: "Vitamin injection",
        price: "R200.00",
        info:
          "Vitamin injection administered following assessment of suitability and the product being provided."
      },
      {
        name: "Vitamin B12 & BCO injection",
        price: "R100.00",
        info:
          "Vitamin injection service provided following appropriate assessment."
      },
      {
        name: "PREP consultation & medication",
        price: "R550.00",
        info:
          "A consultation relating to HIV pre-exposure prophylaxis, including suitability assessment and appropriate clinical guidance."
      },
      {
        name: "PEP consultation & medication",
        price: "R550.00",
        info:
          "A consultation relating to HIV post-exposure prophylaxis following a potential exposure. Prompt assessment is important."
      }
    ],

    "IV Drips": [
      {
        name: "Oasis",
        price: "R400.00",
        info:
          "HYDRATION & RECOVERY - Designed to replenish fluids and support hydration and recovery."
      },
      {
        name: "Elevate",
        price: "R700.00",
        info:
          "ENERGY & IMMUNE SUPPORT - Formulated to support energy, mental clarity and general wellness."
      },
      {
        name: "Vitality",
        price: "From R1150.00",
        info:
          "NAD+ CELLULAR WELLNESS - A wellness-focused NAD+ infusion intended to support cellular energy and overall vitality."
      },
      {
        name: "Radiance",
        price: "R1400.00",
        info:
          "SKIN HEALTH & COLLAGEN SUPPORT - A wellness infusion formulated to support skin health, collagen-related nutrition and overall skin appearance."
      },
      {
        name: "Restore",
        price: "R1200.00",
        info:
          "MUSCLE & TISSUE RECOVERY - Designed to complement hydration and recovery following physical activity or periods of fatigue."
      },
      {
        name: "Renewal",
        price: "R750.00",
        info:
          "SKIN REPAIR & REJUVENATION - A wellness infusion formulated to support normal skin health and a refreshed appearance."
      },
      {
        name: "Metabo-Fit",
        price: "R900.00",
        info:
          "FITNESS & METABOLIC SUPPORT - Designed as supportive wellness care alongside healthy nutrition, activity and lifestyle habits."
      },
      {
        name: "Lumina",
        price: "R1300.00",
        info:
          "SKIN BRIGHTENING & ANTIOXIDANT SUPPORT - Formulated with a focus on antioxidant and skin-wellness support."
      },
      {
        name: "Balance",
        price: "R850.00",
        info:
          "WOMEN'S WELLNESS & REPRODUCTIVE HEALTH - A wellness-focused infusion intended to complement women's general wellbeing."
      },
      {
        name: "Flourish",
        price: "R940.00",
        info:
          "VITALITY & WELLNESS SUPPORT - Designed to complement hydration, daily vitality and overall wellbeing."
      },
      {
        name: "Venofer® Iron Drip",
        price: "From R850.00",
        info:
          "IRON REPLENISHMENT - Venofer® contains iron sucrose and is used for iron replacement in appropriate patients.",
        notice:
          "BY PRESCRIPTION ONLY. A valid prescription from your healthcare practitioner is required. Some medical aids may cover treatment — please confirm your available benefits directly with your medical aid."
      }
    ],

    "IV Add-ons": [
      {
        name: "Vitamin B12 Booster",
        price: "R100.00",
        info:
          "Optional Vitamin B12 add-on, subject to clinical suitability."
      },
      {
        name: "Vitamin C Booster",
        price: "R70.00",
        info:
          "Optional Vitamin C add-on, subject to clinical suitability."
      },
      {
        name: "Glutathione Booster",
        price: "R300.00",
        info:
          "Optional glutathione add-on, subject to clinical suitability."
      },
      {
        name: "Zinc Booster",
        price: "R70.00",
        info:
          "Optional zinc add-on, subject to clinical suitability."
      },
      {
        name: "Magnesium Booster",
        price: "R100.00",
        info:
          "Optional magnesium add-on, subject to clinical suitability."
      }
    ]
  }

  const phoneNumber = "27662719931"

  const handleWhatsAppBooking = (serviceName: string) => {
    const message = `Hello Cuddle Care 👋

I would like to book the following service:

Service: ${serviceName}

My Name and Surname:
Preferred Date:
Preferred Time:

Thank you`

    const encodedMessage = encodeURIComponent(message)

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
      "noopener,noreferrer"
    )
  }

  const toggleInfo = (category: string, service: string) => {
    const infoKey = `${category}-${service}`

    setOpenInfo((current) =>
      current === infoKey ? null : infoKey
    )
  }

  return (
    <main className="services-page">
      {/* Decorative silver/sage elements */}
      <div className="services-orb services-orb-one"></div>
      <div className="services-orb services-orb-two"></div>
      <div className="services-sage-glow"></div>

      {/* HEADER */}
      <section className="services-hero">
        <div className="services-hero-inner">
          <span className="services-eyebrow">
            Cuddle Care
          </span>

          <h1>Care for Every Stage</h1>

          <div className="services-divider"></div>

          <p>
            Explore our healthcare, wellness and family-care services.
            Select a category below, then tap the information icon for
            additional details about a service.
          </p>

          <div className="info-demo">
            <span className="mini-info-icon">i</span>
            <span>Look out for this button for more information.</span>
          </div>
        </div>
      </section>

      {/* CATEGORY BUTTONS */}
      <section className="services-categories">
        <div className="services-category-grid">
          {Object.keys(categories).map((category) => (
            <button
              type="button"
              key={category}
              className={`services-category-card ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => {
                setActiveCategory(
                  activeCategory === category ? null : category
                )
                setOpenInfo(null)
              }}
            >
              <span>{category}</span>

              <span className="category-arrow">
                {activeCategory === category ? "−" : "+"}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* SELECT CATEGORY MESSAGE */}
      {!activeCategory && (
        <section className="services-empty-state">
          <div className="services-empty-card">
            <span>Explore</span>
            <h2>Select a category above</h2>
            <p>
              Services, pricing, additional information and booking
              options will appear here.
            </p>
          </div>
        </section>
      )}

      {/* ACTIVE SERVICES */}
      {activeCategory && (
        <section className="services-list-section">
          <div className="services-panel">
            <div className="services-panel-heading">
              <div>
                <span className="services-panel-label">
                  Currently viewing
                </span>

                <h2>{activeCategory}</h2>
              </div>

              <button
                type="button"
                className="close-category"
                onClick={() => {
                  setActiveCategory(null)
                  setOpenInfo(null)
                }}
                aria-label="Close category"
              >
                ×
              </button>
            </div>

            <div className="service-items">
              {categories[activeCategory].map(
                (service, index) => {
                  const infoKey = `${activeCategory}-${service.name}`
                  const isInfoOpen = openInfo === infoKey

                  return (
                    <article
                      className={`service-item ${
                        isInfoOpen ? "info-open" : ""
                      }`}
                      key={`${service.name}-${index}`}
                    >
                      <div className="service-main-row">
                        <div className="service-copy">
                          <span className="service-number">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div>
                            <h3>{service.name}</h3>
                            <p className="service-price">
                              {service.price}
                            </p>
                          </div>
                        </div>

                        <div className="service-actions">
                          <button
                            type="button"
                            className={`service-info-button ${
                              isInfoOpen ? "active" : ""
                            }`}
                            onClick={() =>
                              toggleInfo(
                                activeCategory,
                                service.name
                              )
                            }
                            aria-label={`More information about ${service.name}`}
                            aria-expanded={isInfoOpen}
                          >
                            i
                          </button>

                          <button
                            type="button"
                            className="service-book-button"
                            onClick={() =>
                              handleWhatsAppBooking(service.name)
                            }
                          >
                            Book
                            <span aria-hidden="true">→</span>
                          </button>
                        </div>
                      </div>

                      {isInfoOpen && (
                        <div className="service-info-panel">
                          <div className="info-heading">
                            <span className="info-icon-static">
                              i
                            </span>
                            <h4>About this service</h4>
                          </div>

                          <p>{service.info}</p>

                          {service.notice && (
                            <div className="service-notice">
                              <strong>Good to know</strong>
                              <p>{service.notice}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </article>
                  )
                }
              )}
            </div>
          </div>
        </section>
      )}

      {/* FOOT NOTE */}
      <section className="services-footnote">
        <div className="services-footnote-inner">
          <p>
            Not sure which service to book?
          </p>

          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              "Hello Cuddle Care 👋\n\nI would like some help choosing the correct service."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat to us on WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}