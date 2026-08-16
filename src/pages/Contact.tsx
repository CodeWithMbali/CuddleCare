import "./Contact.css"
import qrImage from "../assets/QR .jpeg"

export function Contact() {
  const bookingUrl =
    "https://mygc.co.za/external/diary/a8416797-22a9-4e1e-a221-bf00666382ac"

  const phoneNumber = "27662719931"

  const whatsappMessage = encodeURIComponent(`Hello Cuddle Care 👋

I would like to book an appointment.

My Name:
Preferred Date:
Preferred Time:
Service:

Thank you`)

  return (
    <main className="contact-page">
      {/* DECORATIVE ELEMENTS */}
      <div className="contact-orb contact-orb-one"></div>
      <div className="contact-orb contact-orb-two"></div>
      <div className="contact-sage-glow"></div>

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <span className="contact-eyebrow">
            We're Here For You
          </span>

          <h1>
            Let’s make your
            <span> visit simple.</span>
          </h1>

          <div className="contact-divider"></div>

          <p>
            Book your appointment online or speak to us directly.
            Our team is here to help you find the right service and
            appointment time.
          </p>

          <div className="contact-practice">
            <span>Registered Practice</span>
            <strong>Practice No. 1021710</strong>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="contact-actions">
        <div className="contact-actions-grid">

          {/* ONLINE */}
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-action-card primary"
          >
            <span className="action-number">01</span>

            <div>
              <span className="action-label">Online</span>
              <h2>Book Appointment</h2>
              <p>
                Choose your preferred service, date and available
                appointment time online.
              </p>
            </div>

            <span className="action-arrow">↗</span>
          </a>

          {/* WHATSAPP */}
          <a
            href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-action-card"
          >
            <span className="action-number">02</span>

            <div>
              <span className="action-label">Message</span>
              <h2>WhatsApp Us</h2>
              <p>
                Send us your full name and surname, preferred date and time + the
                service you would like to book.
              </p>
            </div>

            <span className="action-arrow">↗</span>
          </a>

          {/* CALL */}
          <a
            href="tel:+27662719931"
            className="contact-action-card"
          >
            <span className="action-number">03</span>

            <div>
              <span className="action-label">Call</span>
              <h2>066 271 9931</h2>
              <p>
                Speak to us directly if you need help with your booking
                or have a question.
              </p>
            </div>

            <span className="action-arrow">↗</span>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:info@cuddlecare.clinic"
            className="contact-action-card"
          >
            <span className="action-number">04</span>

            <div>
              <span className="action-label">Email</span>
              <h2>Send an Email</h2>
              <p>
                Reach us at info@cuddlecare.clinic for general enquiries
                and appointment assistance.
              </p>
            </div>

            <span className="action-arrow">↗</span>
          </a>
        </div>
      </section>

      {/* BOOKING + QR */}
      <section className="booking-concierge">
        <div className="booking-concierge-inner">

          <div className="booking-copy">
            <span className="contact-section-label">
              Booking Concierge
            </span>

            <h2>
              Prefer to book from your phone?
            </h2>

            <p>
              Scan the QR code to open our online booking system
              directly.
            </p>

            <div className="booking-reminder">
              <span>When booking manually, please include:</span>

              <ul>
                <li>Your full name and surname</li>
                <li>Your preferred date</li>
                <li>Your preferred time</li>
                <li>The service you would like to book</li>
              </ul>
            </div>

            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="booking-main-button"
            >
              Open Booking System
              <span>→</span>
            </a>
          </div>

          <div className="qr-card">
            <div className="qr-card-glow"></div>

            <span className="qr-label">
              SCAN TO BOOK
            </span>

            <img
              src={qrImage}
              alt="Cuddle Care booking QR code"
            />

            <p>
              Point your phone camera at the QR code.
            </p>
          </div>

        </div>
      </section>

      {/* LOCATION */}
      <section className="location-section">
        <div className="location-inner">

          <div className="location-copy">
            <span className="contact-section-label">
              Visit Us
            </span>

            <h2>Our Location</h2>

            <p>
              Cuddle Care Mother & Baby Clinic
              <br />
              Shop A7, Northview Shopping Center
              <br />
              Northworld, 2188
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Northview+Shopping+Center+Northworld+2188"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-link"
            >
              Get Directions
              <span>↗</span>
            </a>
          </div>

          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps?q=Northview%20Shopping%20Center%20Northworld%202188&output=embed"
              loading="lazy"
              title="Cuddle Care Mother and Baby Clinic location"
            ></iframe>
          </div>

        </div>
      </section>

      {/* HOURS */}
      <section className="hours-section">
        <div className="hours-inner">

          <div className="hours-heading">
            <span className="contact-section-label light">
              Plan Your Visit
            </span>

            <h2>Working Hours</h2>

            <p>
              Please use our online booking system or contact us to
              arrange your appointment.
            </p>
          </div>

          <div className="hours-card">
            <div className="hours-row">
              <span>Monday – Friday</span>
              <strong>09:00 – 18:00</strong>
            </div>

            <div className="hours-row">
              <span>Saturday</span>
              <strong>09:00 – 17:00</strong>
            </div>

            <div className="hours-row closed">
              <span>Sunday</span>
              <strong>Closed</strong>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="contact-final">
        <div className="contact-final-card">
          <span className="contact-section-label">
            Cuddle Care
          </span>

          <h2>
            Your care starts with a conversation.
          </h2>

          <p>
            Not sure which appointment to choose? Chat to us and we’ll
            help you find the right service.
          </p>

          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              "Hello Cuddle Care 👋\n\nI need some help choosing the correct service."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
            <span>→</span>
          </a>
        </div>
      </section>
    </main>
  )
}