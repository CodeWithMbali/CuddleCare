import { useState, useRef } from "react"
import "./Gallery.css"

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
  const scrollRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el || !progressRef.current) return

    const scrollPercentage =
      (el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 100

    progressRef.current.style.width = `${scrollPercentage}%`
  }

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" })
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" })
  }

  return (
    <div className="gallery">
      <div className="gallery-accent-1"></div>
      <div className="gallery-accent-2"></div>

      {/* VIDEO SECTION */}
      <section className="gallery-hero container">
        <h1>Our Space</h1>
        <div className="gold-divider"></div>

        <div className="video-wrapper">
          <div className="video-glow"></div>
          <video
            src={introVideo}
            autoPlay
            loop
            controls
            playsInline
          />
        </div>
      </section>

      {/* IMAGE SCROLL */}
      <section className="gallery-scroll container">
        <div
          className="scroll-container"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="gallery-card"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`Clinic ${index + 1}`} />
            </div>
          ))}
        </div>

        <button className="arrow left" onClick={scrollLeft}>
          ←
        </button>
        <button className="arrow right" onClick={scrollRight}>
          →
        </button>

        <div className="progress-bar">
          <div ref={progressRef} className="progress-fill"></div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Expanded view" />
        </div>
      )}
    </div>
  )
}
