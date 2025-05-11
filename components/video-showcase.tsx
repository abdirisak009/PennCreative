"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, Maximize2, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoShowcaseProps {
  videoId: string
  title: string
  subtitle: string
}

export function VideoShowcase({ videoId, title, subtitle }: VideoShowcaseProps) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Create a direct iframe embed instead of using the YouTube API
  useEffect(() => {
    if (!containerRef.current) return

    // Clear any existing content
    containerRef.current.innerHTML = ""

    // Create iframe element
    const iframe = document.createElement("iframe")
    iframe.width = "100%"
    iframe.height = "100%"
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&enablejsapi=0&loop=1&playlist=${videoId}`
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    iframe.style.position = "absolute"
    iframe.style.top = "0"
    iframe.style.left = "0"
    iframe.style.width = "100%"
    iframe.style.height = "100%"
    iframe.style.border = "none"

    // Add iframe to container
    containerRef.current.appendChild(iframe)
    iframeRef.current = iframe

    // Set loaded state after a short delay to ensure iframe has rendered
    setTimeout(() => {
      setIsLoaded(true)
    }, 1000)

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
      }
    }
  }, [videoId])

  // Handle play/pause
  const togglePlayPause = () => {
    if (!iframeRef.current) return

    try {
      const newIsPlaying = !isPlaying
      setIsPlaying(newIsPlaying)

      // Update iframe src to play or pause
      const currentSrc = iframeRef.current.src
      const newSrc = newIsPlaying
        ? currentSrc.replace("autoplay=0", "autoplay=1")
        : currentSrc.replace("autoplay=1", "autoplay=0")

      iframeRef.current.src = newSrc
    } catch (error) {
      console.error("Error toggling play/pause:", error)
    }
  }

  // Handle mute/unmute
  const toggleMute = () => {
    if (!iframeRef.current) return

    try {
      const newIsMuted = !isMuted
      setIsMuted(newIsMuted)

      // Update iframe src to mute or unmute
      const currentSrc = iframeRef.current.src
      const newSrc = newIsMuted ? currentSrc.replace("mute=0", "mute=1") : currentSrc.replace("mute=1", "mute=0")

      iframeRef.current.src = newSrc
    } catch (error) {
      console.error("Error toggling mute:", error)
    }
  }

  // Open full video in new tab
  const openFullVideo = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-[#0a1a24] group">
      {/* Video container with proper aspect ratio */}
      <div className="relative aspect-video w-full overflow-hidden">
        {/* YouTube player container */}
        <div
          ref={containerRef}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.5s ease" }}
        ></div>

        {/* Loading indicator */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0a1a24]">
            <div className="w-12 h-12 border-4 border-[#01BABC]/20 border-t-[#01BABC] rounded-full animate-spin"></div>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a24] via-transparent to-transparent opacity-70 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a24]/50 via-transparent to-[#0a1a24]/50 opacity-50 z-10 pointer-events-none"></div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-20 pointer-events-none">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              {title}
            </h2>
            <p className="text-slate-300 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Controls overlay */}
        <div className="absolute bottom-6 left-6 z-20 flex items-center space-x-4">
          <Button
            onClick={togglePlayPause}
            className="rounded-full w-12 h-12 flex items-center justify-center bg-[#01BABC]/80 hover:bg-[#01BABC] text-[#122C39] border-2 border-[#01BABC]/20 transition-all duration-300"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
          </Button>

          <Button
            onClick={toggleMute}
            className="rounded-full w-12 h-12 flex items-center justify-center bg-[#122C39]/80 hover:bg-[#122C39] text-white border border-[#01BABC]/30 transition-all duration-300"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </Button>
        </div>

        {/* Watch full video button */}
        <Button
          onClick={openFullVideo}
          className="absolute bottom-6 right-6 z-20 bg-[#122C39]/80 hover:bg-[#122C39] text-white border border-[#01BABC]/30 rounded-full px-4 py-2 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Maximize2 className="h-4 w-4 mr-2" />
          Watch Full Video
        </Button>
      </div>

      {/* Animated glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#01BABC]/0 via-[#01BABC]/30 to-[#01BABC]/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-glow"></div>
    </div>
  )
}
