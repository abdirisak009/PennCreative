"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface VideoHeroProps {
  videoId: string
  headline: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

export function VideoHero({ videoId, headline, subtitle, ctaText, ctaLink }: VideoHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const playerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load YouTube API script
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    // Initialize YouTube player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      if (!playerRef.current) return

      new window.YT.Player(playerRef.current, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          loop: 1,
          playlist: videoId, // Required for looping
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            event.target.playVideo()
            setIsLoaded(true)
          },
        },
      })
    }

    // Clean up
    return () => {
      window.onYouTubeIframeAPIReady = null
    }
  }, [videoId])

  const scrollToContent = () => {
    const servicesSection = document.querySelector("section")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0c1e28]">
        <div
          ref={playerRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1e28]/80 via-[#0c1e28]/60 to-[#0c1e28]/90 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 container mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in max-w-4xl">
          {headline}
        </h1>
        <p
          className="text-2xl md:text-3xl text-[#01BABC] mb-10 animate-fade-in font-light tracking-wide"
          style={{ animationDelay: "0.3s" }}
        >
          {subtitle}
        </p>
        <Button
          asChild
          size="lg"
          className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] font-medium text-lg px-8 py-6 h-auto animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer animate-bounce"
        onClick={scrollToContent}
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-6 w-6 text-[#01BABC]" />
        </div>
      </div>
    </section>
  )
}

// Add type definition for YouTube API
declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: (() => void) | null
  }
}
