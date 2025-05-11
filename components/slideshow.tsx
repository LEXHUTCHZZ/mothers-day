'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const images = [
  '/images/pic1.jpg',
  '/images/pic2.jpg',
  '/images/pic3.jpg',
]

export default function Slideshow() {
  const [index, setIndex] = useState(0)
  const [started, setStarted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
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

  return (
    <div className="container">
      <canvas id="fireworks" />

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

          <div className="slideshow">
            <div className="slideshow-wrapper">
              <Image
                src={images[index]}
                alt="Moments with Mom"
                layout="fill"
                objectFit="cover"
                className="slideshow-img"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
