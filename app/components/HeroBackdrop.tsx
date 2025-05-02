'use client'

import { useEffect, useRef } from 'react'

export default function HeroBackdrop() {
  const videoRef = useRef<HTMLVideoElement>(null)
  
  // Set up video playback
  useEffect(() => {
    if (videoRef.current) {
      // Start playing as soon as possible
      videoRef.current.play().catch(err => {
        console.log('Video autoplay was prevented:', err)
      })
    }
  }, [])
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        className="object-cover w-full h-full"
      >
        <source src="/images/hero/Little Boy Mascot low.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
} 