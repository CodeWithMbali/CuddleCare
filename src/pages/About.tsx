import "./About.css"

export function About() {
  return (
    <div className="about">
      <div className="about-accent"></div>

      {/* HERO */}
      <section className="about-hero container fade-up">
        <h1>About Us</h1>
        <div className="gold-divider"></div>
        <p>
          We are committed to providing compassionate, patient-centred care
          while building long-lasting relationships rooted in trust,
          excellence and community.
        </p>
      </section>

      {/* VISION */}
      <section className="vision-section fade-up">
        <div className="container">
          <h2>Our Vision</h2>
          <div className="gold-divider"></div>

          <div className="vision-card">
            <p>
              To be a trusted healthcare partner that empowers families to live
              healthier, happier lives through compassionate, patient-centred care.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mission-section container">
        <h2>Our Mission</h2>
        <div className="gold-divider"></div>

        <div className="mission-grid">
          <div className="mission-card fade-up">
            <p>
              To become recommended through our workmanship by other healthcare professionals and establish trustworthy relationships with allied healthcare providers.
            </p>
          </div>

          <div className="mission-card fade-up">
            <p>
              To establish long-lasting, healthy relationships with our clients built on trust, respect and consistent care.
            </p>
          </div>

          <div className="mission-card fade-up">
            <p>
              To become active in the community and contribute time and services for the benefit of the community at large.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="quote-section fade-up">
        <div className="container">
          <p className="quote-block">
            “Compassion is at the heart of everything we do. Every family
            deserves care that feels personal, safe and empowering.”
          </p>
          <p className="quote-author">— Nurse Zodwa</p>
        </div>
      </section>
    </div>
  )
}
