'use client'

import Head from 'next/head'
import { useEffect } from 'react'
import Slideshow from '../components/slideshow'

export default function Home() {
  useEffect(() => {
    import('../utils/fireworks')
  }, [])

  return (
    <>
      <Head>
        <title>Happy Mother's Day</title>
      </Head>
      <div className="container">
        <h1>Happy Mother’s Day, Mom! ❤️</h1>
        <p>You mean the world to me. Enjoy this little surprise.</p>
        <Slideshow />
        <canvas id="fireworks"></canvas>
      </div>
    </>
  )
}
