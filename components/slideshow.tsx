'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

// Image sources for slideshow
const images = [
  '/images/pic1.jpg',
  '/images/pic2.jpg',
  '/images/pic3.jpg',
]

export default function Slideshow() {
  const [index, setIndex] = useState(0)
  const [started, setStarted] = useState(false)
  const [loading, setLoading] = useState(true) // Loading state
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Play the audio only when the slideshow starts
    if (!started) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    if (audioRef.current) {
      audioRef.current.play().catch((err) =>
        console.warn('Autoplay error:', err)
      )
    }

    return () => clearInterval(interval)
  }, [started])

  // Function to handle image load completion
  const handleImageLoad = () => {
    setLoading(false) // Set loading to false once image is loaded
  }

  return (
    <div className="container">
      {/* Fireworks Canvas */}
      <canvas id="fireworks" />

      {/* Start Screen */}
      {!started ? (
        <div className="start-screen">
          <h1>Welcome 💐</h1>
          <button onClick={() => setStarted(true)}>Click Me</button>
        </div>
      ) : (
        <div>
          <audio ref={audioRef} src="/audio/mothers-day.mp3" loop />

          <h1>Happy Mother’s Day, Mom! ❤️</h1>
          <p>Enjoy this little surprise.</p>

          {/* Slideshow Section */}
          <div className="slideshow">
            <div className="slideshow-wrapper">
              {loading && (
                <div className="loader">
                  <div className="spinner"></div>
                </div>
              )}

              <Image
                src={images[index]}
                alt="Moments with Mom"
                layout="fill"
                className={`slideshow-img ${loading ? 'hidden' : ''}`}
                objectFit="cover" // Ensures the image covers the entire container
                objectPosition="center"
                onLoadingComplete={handleImageLoad}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
