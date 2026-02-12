import { useState } from "react"

import clinic1 from "../assets/clinic1.jpeg"
import clinic2 from "../assets/clinic2.jpeg"
import clinic3 from "../assets/clinic3.jpeg"
import clinic4 from "../assets/clinic4.jpeg"
import clinic5 from "../assets/clinic5.jpeg"
import clinic6 from "../assets/clinic6.jpeg"
import clinic7 from "../assets/clinic7.jpeg"
import clinic8 from "../assets/clinic8.jpeg"
import introVideo from "../assets/intro.mp4"

export function Gallery() {
  const images = [
    clinic1,
    clinic2,
    clinic3,
    clinic4,
    clinic5,
    clinic6,
    clinic7,
    clinic8
  ]

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div
      style={{
        backgroundColor: "#f8f6f2",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative"
      }}
    >
      {/* FLOATING SILVER BALLS */}
      <div
        style={{
          position: "absolute",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, #ffffff, #d9d9d9, #bfbfbf)",
          top: "200px",
          left: "-120px",
          opacity: 0.7,
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          animation: "floatLuxury 18s ease-in-out infinite",
          zIndex: 0
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 40% 40%, #ffffff, #cfcfcf, #a6a6a6)",
          bottom: "250px",
          right: "-100px",
          opacity: 0.10,
          boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
          animation: "floatLuxury 22s ease-in-out infinite",
          zIndex: 0
        }}
      />

      {/* VIDEO SECTION */}
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
            fontSize: "clamp(40px,6vw,70px)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400
          }}
        >
          Our Space
        </h1>

        <div
          style={{
            width: "70px",
            height: "3px",
            backgroundColor: "#c6a75e",
            margin: "20px auto 60px"
          }}
        />

        {/* Blur Glow Background */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "500px",
            height: "800px",
            background:
              "radial-gradient(circle, rgba(198,167,94,0.25), transparent 70%)",
            filter: "blur(80px)",
            zIndex: 0
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            zIndex: 1
          }}
        >
          <div
            style={{
              width: "min(400px, 90vw)",
              aspectRatio: "9 / 16",
              borderRadius: "24px",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 40px 100px rgba(0,0,0,0.25)",
              border: "2px solid rgba(198,167,94,0.6)"
            }}
          >
            {/* Gold Glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "24px",
                boxShadow: "0 0 60px rgba(198,167,94,0.4)",
                pointerEvents: "none"
              }}
            />

            <video
              src={introVideo}
              autoPlay
              loop
              controls
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>
        </div>
      </section>

      {/* HORIZONTAL SCROLL GALLERY */}
      <section
        style={{
          margin: "100px 0",
          padding: "0 40px",
          position: "relative",
          zIndex: 1
        }}
      >
        <div
          id="scrollContainer"
          style={{
            overflowX: "auto",
            scrollBehavior: "smooth"
          }}
          onScroll={(e) => {
            const el = e.currentTarget
            const scrollPercentage =
              (el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 100

            const progressBar = document.getElementById("progressBar")
            if (progressBar) {
              progressBar.style.width = `${scrollPercentage}%`
            }
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "30px"
            }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                style={{
                  flex: "0 0 auto",
                  width: "clamp(250px, 40vw, 350px)",
                  height: "clamp(350px, 55vw, 450px)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                  transition: "transform 0.4s ease"
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src={img}
                  alt={`Clinic ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={() => {
            const el = document.getElementById("scrollContainer")
            if (el) el.scrollBy({ left: -400, behavior: "smooth" })
          }}
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#ffffff",
            border: "none",
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
          }}
        >
          ←
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => {
            const el = document.getElementById("scrollContainer")
            if (el) el.scrollBy({ left: 400, behavior: "smooth" })
          }}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#ffffff",
            border: "none",
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
          }}
        >
          →
        </button>

        {/* PROGRESS BAR */}
        <div
          style={{
            marginTop: "40px",
            height: "4px",
            backgroundColor: "#e0e0e0",
            borderRadius: "10px",
            overflow: "hidden"
          }}
        >
          <div
            id="progressBar"
            style={{
              height: "100%",
              width: "0%",
              backgroundColor: "#c6a75e",
              transition: "width 0.2s ease"
            }}
          />
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000
          }}
        >
          <img
            src={selectedImage}
            alt="Expanded"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "20px",
              boxShadow: "0 40px 100px rgba(0,0,0,0.5)"
            }}
          />
        </div>
      )}
    </div>
  )
}
