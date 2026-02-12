import qrImage from "../assets/QR .jpeg"

export function Contact() {
  return (
    <div
      style={{
        backgroundColor: "#f8f6f2",
        minHeight: "100vh",
        paddingBottom: "120px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Floating Silver Accent */}
      <div
        style={{
          position: "absolute",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, #ffffff, #d9d9d9, #bfbfbf)",
          top: "200px",
          left: "-120px",
          opacity: 0.3,
          animation: "floatLuxury 20s ease-in-out infinite",
          zIndex: 0
        }}
      />

      {/* HEADER */}
      <section
        style={{
          padding: "120px 40px 60px",
          textAlign: "center",
          position: "relative",
          zIndex: 1
        }}
      >
        <h1
          style={{
            fontSize: "clamp(38px,5vw,60px)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400
          }}
        >
          Contact & Booking
        </h1>

        <div
          style={{
            width: "60px",
            height: "3px",
            backgroundColor: "#c6a75e",
            margin: "20px auto 40px"
          }}
        />

        <p style={{ color: "#5c5c5c", fontSize: "18px" }}>
          Book your appointment easily using our online system or contact us directly.
        </p>
      </section>

      {/* BOOKING OPTIONS */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "50px",
          position: "relative",
          zIndex: 1
        }}
      >
        {/* Online Booking */}
        <div
          style={{
            backgroundColor: "#111",
            color: "#fff",
            padding: "50px",
            borderRadius: "20px",
            boxShadow: "0 30px 80px rgba(0,0,0,0.15)"
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Online Booking</h2>

          <a
            href="https://mygc.co.za/external/diary/a8416797-22a9-4e1e-a221-bf00666382ac"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                backgroundColor: "#c6a75e",
                color: "#fff",
                padding: "16px 36px",
                borderRadius: "30px",
                border: "none",
                cursor: "pointer"
              }}
            >
              Book Now
            </button>
          </a>

          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <p style={{ marginBottom: "15px" }}>Scan QR Code</p>
            <img
              src={qrImage}
              alt="QR Code"
              style={{
                width: "160px",
                borderRadius: "12px"
              }}
            />
          </div>
        </div>

        {/* Alternative Booking */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "50px",
            borderRadius: "20px",
            boxShadow: "0 30px 80px rgba(0,0,0,0.1)"
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Alternative Booking</h2>

          <p>If you cannot access the booking system, please send:</p>

          <ul style={{ lineHeight: "2", paddingLeft: "20px" }}>
            <li>Your full name</li>
            <li>Preferred date & time</li>
            <li>Service you'd like to book</li>
          </ul>

          <div style={{ marginTop: "30px", lineHeight: "2" }}>
            <p>
              Call/WhatsApp: <a href="https://wa.me/27662719931" target="_blank">066 271 9931</a>
            </p>
            <p>
              Email: <a href="mailto:info@cuddlecare.clinic">info@cuddlecare.clinic</a>
            </p>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section
        style={{
          marginTop: "120px",
          padding: "0 40px",
          position: "relative",
          zIndex: 1
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2>Our Location</h2>

          <p>
            Cuddle Care Mother and Baby Clinic,  
            Shop A7, Northview Shopping Center,  
            Northworld, 2188
          </p>

          <iframe
            src="https://www.google.com/maps?q=Northview%20Shopping%20Center%20Northworld%202188&output=embed"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "20px" }}
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* WORKING HOURS */}
      <section
        style={{
          marginTop: "120px",
          padding: "0 40px",
          position: "relative",
          zIndex: 1
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            backgroundColor: "#111",
            color: "#fff",
            padding: "60px",
            borderRadius: "20px"
          }}
        >
          <h2 style={{ fontFamily: "'Playfair Display', serif" }}>
            Working Hours
          </h2>

          <div
            style={{
              width: "60px",
              height: "3px",
              backgroundColor: "#c6a75e",
              margin: "20px 0 40px"
            }}
          />

          <p><strong>Monday – Friday:</strong> 09:00am – 6:00pm</p>
          <p><strong>Saturday:</strong> 09:00am – 5:00pm</p>
          <p style={{ color: "#c6a75e" }}>
            <strong>Sunday:</strong> Closed
          </p>
        </div>
      </section>

    </div>
  )
}
