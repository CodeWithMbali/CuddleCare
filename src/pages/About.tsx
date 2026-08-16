import "./About.css"

export function About() {
  const missionItems = [
    {
      number: "01",
      title: "Professional Excellence",
      text:
        "To become recommended through our workmanship by other healthcare professionals and establish trustworthy relationships with allied healthcare providers."
    },
    {
      number: "02",
      title: "Meaningful Relationships",
      text:
        "To establish long-lasting, healthy relationships with our clients built on trust, respect and consistent care."
    },
    {
      number: "03",
      title: "Community Impact",
      text:
        "To become active in the community and contribute time and services for the benefit of the community at large."
    }
  ]

  return (
    <main className="about">
      {/* Decorative Elements */}
      <div className="about-orb about-orb-one"></div>
      <div className="about-orb about-orb-two"></div>
      <div className="about-sage-glow"></div>

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <span className="about-eyebrow">
            Our Story
          </span>

          <h1>
            Care built on
            <span> trust, compassion & connection.</span>
          </h1>

          <div className="about-divider"></div>

          <p>
            At Cuddle Care, we believe healthcare should feel personal,
            reassuring and centred around the people we care for.
          </p>

          <div className="about-practice">
            <span>Registered Practice</span>
            <strong>Practice No. 1021710</strong>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="about-intro">
        <div className="about-container about-intro-grid">
          <div className="about-intro-number">
            01
          </div>

          <div className="about-intro-copy">
            <span className="about-section-label">
              Who We Are
            </span>

            <h2>
              A thoughtful approach to family healthcare.
            </h2>

            <p>
              We are committed to providing compassionate, patient-centred
              care while building long-lasting relationships rooted in trust,
              excellence and community.
            </p>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="vision-section">
        <div className="about-container vision-grid">
          <div className="vision-heading">
            <span className="about-section-label">
              Our Direction
            </span>

            <h2>Our Vision</h2>

            <div className="vision-line"></div>
          </div>

          <div className="vision-card">
            <span className="vision-mark">“</span>

            <p>
              To be a trusted healthcare partner that empowers families to
              live healthier, happier lives through compassionate,
              patient-centred care.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mission-section">
        <div className="about-container">
          <div className="mission-heading">
            <span className="about-section-label">
              What Guides Us
            </span>

            <h2>Our Mission</h2>

            <p>
              Our mission is reflected in how we care, collaborate and
              contribute to the families and communities around us.
            </p>
          </div>

          <div className="mission-grid">
            {missionItems.map((item) => (
              <article
                className="mission-card"
                key={item.number}
              >
                <span className="mission-number">
                  {item.number}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <div className="mission-card-line"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES STRIP */}
      <section className="about-values">
        <div className="about-container about-values-grid">
          <div>
            <span>Compassionate</span>
            <strong>Care</strong>
          </div>

          <div>
            <span>Meaningful</span>
            <strong>Relationships</strong>
          </div>

          <div>
            <span>Trusted</span>
            <strong>Healthcare</strong>
          </div>

          <div>
            <span>Community</span>
            <strong>Connection</strong>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="quote-section">
        <div className="quote-card">
          <span className="quote-symbol">“</span>

          <p className="quote-block">
            Compassion is at the heart of everything we do. Every family
            deserves care that feels personal, safe and empowering.
          </p>

          <div className="quote-divider"></div>

          <p className="quote-author">
            - Nurse Zodwa
          </p>

          <span className="quote-role">
            Cuddle Care Mother & Baby Clinic
          </span>
        </div>
      </section>
    </main>
  )
}