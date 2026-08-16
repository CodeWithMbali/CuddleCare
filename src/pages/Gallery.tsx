import { useState } from "react"
import "./Gallery.css"

import clinic1 from "../assets/clinic1.jpeg"
import clinic2 from "../assets/clinic2.jpeg"
import clinic3 from "../assets/clinic3.jpeg"
import clinic4 from "../assets/clinic4.jpeg"
import clinic5 from "../assets/clinic5.jpeg"
import clinic6 from "../assets/clinic6.jpeg"
import clinic7 from "../assets/clinic7.jpeg"
import clinic8 from "../assets/clinic8.jpeg"
import clinic9 from "../assets/clinic9.jpeg"
import clinic10 from "../assets/clinic10.jpeg"
import clinic11 from "../assets/clinic11.jpeg"
import clinic12 from "../assets/clinic12.jpeg"
import clinic13 from "../assets/clinic13.jpeg"
import clinic14 from "../assets/clinic14.jpeg"
import clinic15 from "../assets/clinic15.jpeg"
import clinic16 from "../assets/clinic16.jpeg"
import clinic17 from "../assets/clinic17.jpeg"
import clinic18 from "../assets/clinic18.jpeg"
import clinic19 from "../assets/clinic19.jpeg"

export function Gallery() {
  const images = [
    clinic1,
    clinic2,
    clinic3,
    clinic4,
    clinic5,
    clinic6,
    clinic7,
    clinic8,
    clinic9,
    clinic10,
    clinic11,
    clinic12,
    clinic13,
    clinic14,
    clinic15,
    clinic16,
    clinic17,
    clinic18,
    clinic19
  ]

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openImage = (index: number) => {
    setSelectedIndex(index)
  }

  const closeLightbox = () => {
    setSelectedIndex(null)
  }

  const showPrevious = () => {
    if (selectedIndex === null) return

    setSelectedIndex(
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
    )
  }

  const showNext = () => {
    if (selectedIndex === null) return

    setSelectedIndex(
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
    )
  }

  return (
    <main className="gallery-page">

      {/* DECORATIVE ELEMENTS */}
      <div className="gallery-orb gallery-orb-one"></div>
      <div className="gallery-orb gallery-orb-two"></div>
      <div className="gallery-orb gallery-orb-three"></div>

      <div className="gallery-sage-glow"></div>

      {/* HERO */}
      <section className="gallery-hero">
        <div className="gallery-hero-inner">

          <span className="gallery-eyebrow">
            Inside Cuddle Care
          </span>

          <h1>
            A space designed
            <span> for comfort & care.</span>
          </h1>

          <div className="gallery-divider"></div>

          <p>
            Step inside Cuddle Care Mother & Baby Clinic 
          </p>

          <div className="gallery-count">
            <span>{images.length}</span>
            <p>moments from our space</p>
          </div>

        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="featured-gallery-section">
        <div className="featured-gallery-card">

          <img
            src={images[0]}
            alt="Cuddle Care clinic interior"
            onClick={() => openImage(0)}
          />

          <div className="featured-gallery-overlay">

            <span>OUR SPACE</span>

            <h2>
              Thoughtfully designed.
              Calmly considered.
            </h2>

            <button onClick={() => openImage(0)}>
              View Image
              <span>↗</span>
            </button>

          </div>

        </div>
      </section>

      {/* EDITORIAL INTRO */}
      <section className="gallery-story">
        <div className="gallery-story-inner">

          <div className="gallery-story-number">
            01
          </div>

          <div className="gallery-story-copy">

            <span className="gallery-section-label">
              The Cuddle Care Experience
            </span>

            <h2>
              More than a clinic.
              <span>A place to feel cared for.</span>
            </h2>

            <p>
              Our environment is designed to feel warm, personal and
              reassuring.
            </p>

          </div>

        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="gallery-grid-section">

        <div className="gallery-grid">

          {images.slice(1).map((img, index) => {
            const realIndex = index + 1

            return (
              <article
                key={realIndex}
                className={`gallery-item gallery-item-${
                  (index % 6) + 1
                }`}
                onClick={() => openImage(realIndex)}
              >

                <img
                  src={img}
                  alt={`Cuddle Care clinic ${realIndex + 1}`}
                />

                <div className="gallery-item-overlay">

                  <span>
                    {String(realIndex + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <p>Cuddle Care</p>
                    <strong>View image ↗</strong>
                  </div>

                </div>

              </article>
            )
          })}

        </div>

      </section>

      {/* GALLERY STATEMENT */}
      <section className="gallery-statement">

        <div className="gallery-statement-inner">

          <span className="gallery-section-label light">
            Calm • Warm • Thoughtful
          </span>

          <h2>
            Healthcare spaces can feel beautiful too.
          </h2>

          <p>
            Every detail matters because feeling comfortable,
            welcomed and cared for is part of the experience.
          </p>

        </div>

      </section>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div
          className="gallery-lightbox"
          onClick={closeLightbox}
        >

          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close image"
          >
            ×
          </button>

          <button
            className="lightbox-arrow lightbox-left"
            onClick={(e) => {
              e.stopPropagation()
              showPrevious()
            }}
            aria-label="Previous image"
          >
            ←
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={images[selectedIndex]}
              alt={`Expanded clinic image ${selectedIndex + 1}`}
            />

            <div className="lightbox-caption">

              <span>
                {String(selectedIndex + 1).padStart(2, "0")}
                {" / "}
                {String(images.length).padStart(2, "0")}
              </span>

              <p>
                Cuddle Care Mother & Baby Clinic
              </p>

            </div>

          </div>

          <button
            className="lightbox-arrow lightbox-right"
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            aria-label="Next image"
          >
            →
          </button>

        </div>
      )}

    </main>
  )
}