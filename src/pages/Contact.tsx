import "./Contact.css"
import qrImage from "../assets/QR .jpeg"

export function Contact() {
  return (
    <div className="contact">
      <div className="contact-accent"></div>

      {/* HEADER */}
      <section className="contact-hero container">
        <h1>Contact, Booking & Working Hours</h1>
        <div className="gold-divider"></div>
        <p>
          Book your appointment easily using our online system or contact us directly.
        </p>
      </section>

      {/* BOOKING OPTIONS */}
      <section className="booking-grid container">
        {/* Online Booking */}
        <div className="booking-card dark">
          <h2>Online Booking</h2>

          <a
            href="https://mygc.co.za/external/diary/a8416797-22a9-4e1e-a221-bf00666382ac"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-primary">Book Now</button>
          </a>

          <div className="qr-section">
            <p>Scan QR Code</p>
            <img src={qrImage} alt="QR Code" />
          </div>
        </div>

        {/* Alternative Booking */}
        <div className="booking-card light">
          <h2>Alternative Booking</h2>

          <p>If you cannot access the booking system, please send:</p>

          <ul>
            <li>Your full name</li>
            <li>Preferred date & time</li>
            <li>Service you'd like to book</li>
          </ul>

          <div className="contact-info">
            <p>
              Call/WhatsApp:{" "}
              <a href="https://wa.me/27662719931" target="_blank">
                066 271 9931
              </a>
            </p>

            <p>
              Email:{" "}
              <a href="mailto:info@cuddlecare.clinic">
                info@cuddlecare.clinic
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="location container">
        <h2>Our Location</h2>

        <p>
          Cuddle Care Mother and Baby Clinic,  
          Shop A7, Northview Shopping Center,  
          Northworld, 2188
        </p>

        <iframe
          src="https://www.google.com/maps?q=Northview%20Shopping%20Center%20Northworld%202188&output=embed"
          loading="lazy"
        ></iframe>
      </section>

      {/* WORKING HOURS */}
      <section className="hours container">
        <div className="hours-card">
          <h2>Working Hours</h2>
          <div className="gold-divider"></div>

          <p><strong>Monday – Friday:</strong> 09:00am – 6:00pm</p>
          <p><strong>Saturday:</strong> 09:00am – 5:00pm</p>
          <p className="closed"><strong>Sunday:</strong> Closed</p>
        </div>
      </section>
    </div>
  )
}
