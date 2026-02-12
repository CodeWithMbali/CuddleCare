import { Link } from "react-router-dom"
import nurse from "../assets/nurse.jpeg"
import "./Home.css"

export function Home() {
  return (
    <div className="home">

      {/* Floating Ball */}
      <div className="floating-ball"></div>

      {/* HERO */}
      <section className="hero container">

        <div className="hero-text fade-in">

          <h1>
            Gentle Care
          </h1>

          <h2 className="gold-title">
            for Mothers, Babies & Families
          </h2>

          <div className="gold-divider"></div>

          <p>
            A calm, trusted space where mothers and families receive
            personalized, professional care from pregnancy through early parenthood.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">
              Book Appointment
            </Link>

            <Link to="/services" className="btn-outline">
              View Services
            </Link>
          </div>

        </div>

        <div className="hero-image fade-in">
          <img src={nurse} alt="Clinic nurse" />
        </div>

      </section>

    </div>
  )
}
