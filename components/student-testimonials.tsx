"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Volume2, VolumeX, Play, Pause, ExternalLink, Quote, Star, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Video testimonial data
const videoTestimonials = [
  {
    id: 1,
    name: "Eng. Ayuub",
    role: "Web Designer",
    course: "PCL Webdesign Certified",
    rating: 5,
    videoId: "xIEl9GuOdWY",
    quote: "Penn Creative Lab's curriculum transformed my understanding of web design and development.",
    company: "Tech Solutions Somalia",
    projectUrl: "https://github.com/eng-ayub",
  },
  {
    id: 2,
    name: "Eng Abdikani Ese Elmi",
    role: "Web Designer",
    course: "PCL Webdesign Certified",
    rating: 5,
    videoId: "-aWnMszxbRo",
    quote: "The practical skills I learned at Penn Creative Lab helped me create professional websites like HugoDress.",
    company: "Health Tech Innovations",
    projectUrl: "https://hugodress.com/",
  },
]

// Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
  )
}

export function StudentTestimonials() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [isLoaded, setIsLoaded] = useState([false, false])
  const [isPlaying, setIsPlaying] = useState([true, true])
  const [isMuted, setIsMuted] = useState([true, true])
  const playerRefs = useRef([null, null])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  // Mark video as loaded
  const handleVideoLoad = (index) => {
    const newLoaded = [...isLoaded]
    newLoaded[index] = true
    setIsLoaded(newLoaded)
  }

  // Toggle play/pause
  const togglePlay = (index) => {
    const newIsPlaying = [...isPlaying]
    newIsPlaying[index] = !newIsPlaying[index]
    setIsPlaying(newIsPlaying)

    // Access the iframe's contentWindow to control the video
    if (playerRefs.current[index] && playerRefs.current[index].contentWindow) {
      if (newIsPlaying[index]) {
        playerRefs.current[index].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
      } else {
        playerRefs.current[index].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
      }
    }
  }

  // Toggle mute/unmute
  const toggleMute = (index) => {
    const newIsMuted = [...isMuted]
    newIsMuted[index] = !newIsMuted[index]
    setIsMuted(newIsMuted)

    // Access the iframe's contentWindow to control the video
    if (playerRefs.current[index] && playerRefs.current[index].contentWindow) {
      if (newIsMuted[index]) {
        playerRefs.current[index].contentWindow.postMessage('{"event":"command","func":"mute","args":""}', "*")
      } else {
        playerRefs.current[index].contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', "*")
      }
    }
  }

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-64 w-96 h-96 rounded-full bg-[#01BABC]/10 blur-[100px]"></div>
        <div className="absolute bottom-1/3 -right-64 w-96 h-96 rounded-full bg-[#01BABC]/10 blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-radial from-[#01BABC]/5 to-transparent opacity-30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6"
          >
            <GraduationCap className="h-5 w-5 mr-2" />
            <span>Student Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
            }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Hear From Our Students
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
            }}
            className="text-slate-300 max-w-2xl mx-auto"
          >
            Our students are making an impact across Somalia's tech landscape. Watch their stories and discover how Penn
            Creative Lab has transformed their careers.
          </motion.p>
        </div>

        {/* Video Testimonials Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {videoTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.3 + index * 0.2,
                  },
                },
              }}
              className="relative group"
            >
              {/* Main Card */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#122C39] to-[#0c1e28] border border-[#01BABC]/20 group-hover:border-[#01BABC]/50 transition-all duration-500 transform group-hover:scale-[1.02] group-hover:shadow-[0_20px_80px_-20px_rgba(1,186,188,0.3)]">
                {/* Video Container - Perfectly Fitted */}
                <div className="aspect-video w-full relative overflow-hidden">
                  {/* Loading Placeholder */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-[#122C39] to-[#0c1e28] flex items-center justify-center transition-opacity duration-500 z-10 ${
                      isLoaded[index] ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full border-4 border-[#01BABC]/30 border-t-[#01BABC] animate-spin"></div>
                  </div>

                  {/* YouTube iframe with improved fitting */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <iframe
                      ref={(el) => (playerRefs.current[index] = el)}
                      src={`https://www.youtube.com/embed/${testimonial.videoId}?enablejsapi=1&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${testimonial.videoId}`}
                      title={`${testimonial.name}'s Testimonial`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      className="absolute inset-0 w-full h-full"
                      onLoad={() => handleVideoLoad(index)}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "100%",
                        height: "100%",
                        transform: "translate(-50%, -50%)",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  {/* Custom Video Controls */}
                  <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
                    {/* Play/Pause Button */}
                    <button
                      onClick={() => togglePlay(index)}
                      className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#01BABC]/80 hover:text-[#0c1e28] transition-colors duration-300"
                      aria-label={isPlaying[index] ? "Pause video" : "Play video"}
                    >
                      {isPlaying[index] ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                    </button>

                    {/* Mute/Unmute Button */}
                    <button
                      onClick={() => toggleMute(index)}
                      className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#01BABC]/80 hover:text-[#0c1e28] transition-colors duration-300"
                      aria-label={isMuted[index] ? "Unmute video" : "Mute video"}
                    >
                      {isMuted[index] ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </button>
                  </div>

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e28] via-[#0c1e28]/70 to-transparent opacity-90 z-10"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative z-20">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                      <p className="text-[#01BABC]">{testimonial.role}</p>
                      <p className="text-sm text-slate-300">at {testimonial.company}</p>
                    </div>
                    <Badge className="bg-[#01BABC] text-[#0c1e28] font-medium whitespace-nowrap">
                      {testimonial.course}
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  <blockquote className="text-slate-200 mb-5 relative pl-6">
                    <Quote className="absolute top-0 left-0 h-4 w-4 text-[#01BABC]" />"{testimonial.quote}"
                  </blockquote>

                  <Button
                    asChild
                    className="w-full bg-[#01BABC]/10 hover:bg-[#01BABC] text-[#01BABC] hover:text-[#0c1e28] border border-[#01BABC]/30 hover:border-[#01BABC] transition-all duration-300"
                  >
                    <a
                      href={testimonial.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      View Student Project <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-[#01BABC]/30 rounded-tr-xl z-20"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-[#01BABC]/30 rounded-bl-xl z-20"></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#01BABC]/0 via-[#01BABC]/30 to-[#01BABC]/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } },
          }}
          className="mt-16 text-center"
        >
          <Button asChild className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] font-medium">
            <a href="/courses">Explore Our Courses</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
