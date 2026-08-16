import { Link } from "react-router-dom"
import nurse from "../assets/nurse.jpeg"
import "./Home.css"

export function Home() {
  const featuredServices = [
    {
      title: "Baby & Child Care",
      text: "Gentle, thoughtful care from routine check-ups to vaccinations and baby wellness."
    },
    {
      title: "Antenatal Care",
      text: "Pregnancy support, 2D sonar scans, antenatal visits and classes for growing families."
    },
    {
      title: "Women's Wellness",
      text: "Family planning, screenings, consultations and reproductive-health support."
    },
    {
      title: "IV Wellness",
      text: "Hydration, recovery, vitality and skin-support drips tailored to individual wellness goals."
    }
  ]

  return (
    <main className="home">
      {/* Decorative background */}
      <div className="floating-ball ball-one"></div>
      <div className="floating-ball ball-two"></div>
      <div className="sage-glow sage-glow-one"></div>
      <div className="sage-glow sage-glow-two"></div>

      {/* HERO */}
      <section className="home-hero container">
        <div className="hero-copy fade-in">
          <span className="hero-eyebrow">
            Private Maternal • Baby • Family Care
          </span>

          <h1>
            Gentle care,
            <span> through every stage.</span>
          </h1>


          <div className="hero-line"></div>

          <p className="hero-description">
            A calm, trusted space where compassionate healthcare meets
            personalised support - from pregnancy through early parenthood
            and beyond.
          </p>

          <div className="practice-strip">
            <div className="practice-strip-line"></div>

            <div>
              <span>Registered Practice</span>
              <strong>Practice No. 1021710</strong>
            </div>
          </div>

          <div className="hero-actions">
            <Link to="/contact" className="hero-primary">
              Book Appointment
            </Link>

            <Link to="/services" className="hero-secondary">
              Explore Our Care
              <span>→</span>
            </Link>
          </div>


        <div className="hero-visual fade-in">
          <div className="hero-image-wrap">
            <img
              src={nurse}
              alt="Cuddle Care Mother and Baby Clinic nurse"
            />

            <div className="hero-image-card">
              <span>COMPASSIONATE CARE</span>
              <strong>For you & your growing family</strong>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="home-intro">
        <div className="container home-intro-inner">
          <span className="section-number">01</span>

          <div>
            <p className="section-kicker">Thoughtful Healthcare</p>

            <h2>
              Care, beautifully considered.
            </h2>

            <p>
              We believe healthcare should feel personal, welcoming and
              reassuring. Every visit is centred around compassionate care,
              clinical support and the individual needs of you and your family.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="featured-services">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Explore Our Care</p>
              <h2>Care for every stage</h2>
            </div>

            <Link to="/services" className="section-link">
              View all services →
            </Link>
          </div>

          <div className="featured-grid">
            {featuredServices.map((service, index) => (
              <Link
                to="/services"
                className="featured-card"
                key={service.title}
              >
                <span className="featured-number">
                  0{index + 1}
                </span>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <span className="featured-explore">
                  Explore
                  <span>↗</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MASSAGE FEATURE */}
      <section className="massage-feature">
        <div className="container massage-feature-inner">
          <div className="massage-copy">
            <p className="section-kicker">
              Gentle Touch
            </p>

            <h2>
              Baby & Pregnancy Massage
            </h2>

            <p>
              A calming 20-minute experience created for little ones and
              expecting mothers - designed around gentle touch, relaxation,
              comfort and connection.
            </p>

            <div className="massage-price">
              <span>20 Minutes</span>
              <strong>R450</strong>
            </div>

            <Link to="/services" className="sage-button">
              Discover Massage Services
            </Link>
          </div>

          <div className="massage-art">
            <div className="massage-orb large"></div>
            <div className="massage-orb small"></div>

            <div className="massage-quote">
              <span>GENTLE CARE</span>
              <strong>
                A moment of calm for mother and baby.
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* IV FEATURE */}
      <section className="iv-feature">
        <div className="container iv-feature-inner">
          <div>
            <p className="section-kicker light">
              Wellness Collection
            </p>

            <h2>
              Wellness, reimagined.
            </h2>

            <p>
              Explore our curated IV wellness collection - including hydration,
              recovery, vitality, skin-support and women's wellness options.
            </p>
          </div>

          <Link to="/services" className="iv-link">
            Explore IV Wellness
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* VALUES */}
      <section className="home-values">
        <div className="container values-grid">
          <div>
            <span>01</span>
            <h3>Patient-Centred</h3>
            <p>
              Care designed around individual needs, comfort and dignity.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Family-Focused</h3>
            <p>
              Support for mothers, babies, children and the wider family.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Professional Care</h3>
            <p>
              A thoughtful clinical environment built on trust and quality.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Community-Minded</h3>
            <p>
              Care that extends beyond the consultation room.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="home-cta">
        <div className="container home-cta-card">
          <div>
            <p className="section-kicker light">
              Your Care Starts Here
            </p>

            <h2>
              Ready to book your visit?
            </h2>

            <p>
              Choose your service and book online or contact us directly
              for assistance.
            </p>
          </div>

          <div className="home-cta-actions">
            <Link to="/contact" className="cta-light">
              Book Appointment
            </Link>

            <Link to="/services" className="cta-outline">
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}