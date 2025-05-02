'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined') {
      // Google Analytics tracking
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: pathname,
          page_title: document.title,
          page_location: window.location.href,
        })
      }
      
      // Track session start time for duration calculation
      const sessionStartTime = new Date().getTime()
      
      // Send initial page visit notification to custom API
      fetch('/api/track-visit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page: pathname,
          referrer: document.referrer,
          userAgent: navigator.userAgent,
          duration: 0, // Initial visit, duration not yet known
        }),
      }).catch(err => console.error('Failed to send visit data:', err))
      
      // Track when user leaves the page to calculate duration
      const handleUnload = () => {
        const sessionEndTime = new Date().getTime()
        const durationInSeconds = (sessionEndTime - sessionStartTime) / 1000
        
        // Track in Google Analytics
        if (window.gtag) {
          window.gtag('event', 'session_duration', {
            page_path: pathname,
            duration_seconds: durationInSeconds,
          })
        }
        
        // Send final duration data via beacon API (more reliable for beforeunload events)
        navigator.sendBeacon('/api/track-visit', JSON.stringify({
          page: pathname,
          referrer: document.referrer,
          userAgent: navigator.userAgent,
          duration: durationInSeconds,
        }))
      }
      
      window.addEventListener('beforeunload', handleUnload)
      
      return () => {
        window.removeEventListener('beforeunload', handleUnload)
      }
    }
  }, [pathname, searchParams])

  return null
} 