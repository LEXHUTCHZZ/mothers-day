import confetti from 'canvas-confetti'

const canvas = document.getElementById('fireworks')
if (canvas) {
  const myConfetti = confetti.create(canvas, { resize: true, useWorker: true })

  setInterval(() => {
    myConfetti({
      particleCount: 100,
      spread: 160,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.6
      },
      colors: ['#ff4081', '#ffd700', '#ffffff']
    })
  }, 1500)
}
