"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ImageGallery } from "@/components/image-gallery"
import { PDFPreview } from "@/components/pdf-preview"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ChevronLeft,
  Paintbrush,
  Palette,
  Layout,
  FileText,
  ArrowRight,
  ShoppingBag,
  Scissors,
  Shirt,
  Sparkles,
} from "lucide-react"

export default function HugoDressProjectPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const overviewRef = useRef<HTMLDivElement>(null)
  const brandingRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const guidelinesRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      if (
        overviewRef.current &&
        scrollPosition >= overviewRef.current.offsetTop &&
        brandingRef.current &&
        scrollPosition < brandingRef.current.offsetTop
      ) {
        setActiveSection("overview")
      } else if (
        brandingRef.current &&
        scrollPosition >= brandingRef.current.offsetTop &&
        galleryRef.current &&
        scrollPosition < galleryRef.current.offsetTop
      ) {
        setActiveSection("branding")
      } else if (
        galleryRef.current &&
        scrollPosition >= galleryRef.current.offsetTop &&
        guidelinesRef.current &&
        scrollPosition < guidelinesRef.current.offsetTop
      ) {
        setActiveSection("gallery")
      } else if (guidelinesRef.current && scrollPosition >= guidelinesRef.current.offsetTop) {
        setActiveSection("guidelines")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  const projectImages = [
    { src: "/images/hugodress-logo-main.png", alt: "HugoDress main logo" },
    { src: "/images/hugodress-mockup-1.png", alt: "HugoDress logo mockup" },
    { src: "/images/hugodress-mockup-2.png", alt: "HugoDress branding on shopping bag" },
    { src: "/images/hugodress-mockup-3.png", alt: "HugoDress website design" },
    { src: "/images/hugodress-screenshot.png", alt: "HugoDress website screenshot" },
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Fixed Side Navigation */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col items-start space-y-8">
          <button
            onClick={() => scrollToSection(overviewRef)}
            className={`flex items-center space-x-3 group ${activeSection === "overview" ? "text-[#e91e63]" : "text-gray-400"}`}
          >
            <div
              className={`h-px w-10 transition-all duration-300 ${activeSection === "overview" ? "w-16 bg-[#e91e63]" : "bg-gray-300 group-hover:bg-gray-500"}`}
            ></div>
            <span className="text-sm font-medium">Overview</span>
          </button>

          <button
            onClick={() => scrollToSection(brandingRef)}
            className={`flex items-center space-x-3 group ${activeSection === "branding" ? "text-[#e91e63]" : "text-gray-400"}`}
          >
            <div
              className={`h-px w-10 transition-all duration-300 ${activeSection === "branding" ? "w-16 bg-[#e91e63]" : "bg-gray-300 group-hover:bg-gray-500"}`}
            ></div>
            <span className="text-sm font-medium">Branding</span>
          </button>

          <button
            onClick={() => scrollToSection(galleryRef)}
            className={`flex items-center space-x-3 group ${activeSection === "gallery" ? "text-[#e91e63]" : "text-gray-400"}`}
          >
            <div
              className={`h-px w-10 transition-all duration-300 ${activeSection === "gallery" ? "w-16 bg-[#e91e63]" : "bg-gray-300 group-hover:bg-gray-500"}`}
            ></div>
            <span className="text-sm font-medium">Gallery</span>
          </button>

          <button
            onClick={() => scrollToSection(guidelinesRef)}
            className={`flex items-center space-x-3 group ${activeSection === "guidelines" ? "text-[#e91e63]" : "text-gray-400"}`}
          >
            <div
              className={`h-px w-10 transition-all duration-300 ${activeSection === "guidelines" ? "w-16 bg-[#e91e63]" : "bg-gray-300 group-hover:bg-gray-500"}`}
            ></div>
            <span className="text-sm font-medium">Guidelines</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ opacity, scale }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#e91e63]/10 to-[#e91e63]/5"></div>
          <div className="absolute inset-0 flex items-center justify-center p-10">
            <Image
              src="/images/hugodress-logo-main.png"
              alt="HugoDress"
              width={600}
              height={400}
              className="object-contain max-w-full max-h-full"
            />
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-0 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-gray-500 mb-2">Scroll to explore</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#e91e63] animate-bounce"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={overviewRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/projects"
              className="inline-flex items-center text-gray-500 hover:text-[#e91e63] mb-12 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Projects
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
                <span className="text-[#e91e63] font-bold">Hugo</span>Dress
              </h1>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full">Fashion Brand</span>
                <span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full">E-commerce</span>
                <span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full">Logo Design</span>
                <span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full">Brand Identity</span>
                <span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full">Web Design</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                <div>
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Project Overview</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700">
                      HugoDress approached us to create a vibrant, fashion-forward brand identity for their new
                      e-commerce platform specializing in women's dresses. The brand needed to appeal to a young,
                      style-conscious audience while conveying quality and sophistication.
                    </p>

                    <p className="text-gray-700 mt-4">
                      Our team developed a bold, contemporary visual identity centered around a distinctive logo that
                      combines a stylized "H" with fashion elements. The vibrant pink color palette creates an
                      energetic, feminine aesthetic that stands out in the competitive fashion market.
                    </p>
                  </div>

                  <div className="mt-8">
                    <Button asChild className="bg-[#e91e63] hover:bg-[#e91e63]/90 text-white">
                      <a href="https://hugodress.com" target="_blank" rel="noopener noreferrer">
                        Visit Website
                      </a>
                    </Button>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Services Provided</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#e91e63]/10 flex items-center justify-center mr-3 mt-0.5">
                        <Paintbrush className="h-3.5 w-3.5 text-[#e91e63]" />
                      </div>
                      <span className="text-gray-700">Brand Strategy & Positioning</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#e91e63]/10 flex items-center justify-center mr-3 mt-0.5">
                        <Scissors className="h-3.5 w-3.5 text-[#e91e63]" />
                      </div>
                      <span className="text-gray-700">Logo & Visual Identity Design</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#e91e63]/10 flex items-center justify-center mr-3 mt-0.5">
                        <Palette className="h-3.5 w-3.5 text-[#e91e63]" />
                      </div>
                      <span className="text-gray-700">Color Palette & Typography</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#e91e63]/10 flex items-center justify-center mr-3 mt-0.5">
                        <ShoppingBag className="h-3.5 w-3.5 text-[#e91e63]" />
                      </div>
                      <span className="text-gray-700">Packaging & Print Materials</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#e91e63]/10 flex items-center justify-center mr-3 mt-0.5">
                        <Layout className="h-3.5 w-3.5 text-[#e91e63]" />
                      </div>
                      <span className="text-gray-700">Website Design & Development</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#e91e63]/10 flex items-center justify-center mr-3 mt-0.5">
                        <FileText className="h-3.5 w-3.5 text-[#e91e63]" />
                      </div>
                      <span className="text-gray-700">Brand Guidelines Documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branding Section */}
      <section ref={brandingRef} className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-12">
                <div className="h-12 w-12 rounded-full bg-[#e91e63]/10 flex items-center justify-center mr-4">
                  <Shirt className="h-6 w-6 text-[#e91e63]" />
                </div>
                <h2 className="text-3xl font-semibold text-gray-900">Brand Identity</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Logo Design</h3>
                  <p className="text-gray-700 mb-6">
                    The HugoDress logo combines a stylized "H" with fashion elements, creating a distinctive mark that's
                    both memorable and versatile. The vibrant pink color adds energy and femininity, while the clean
                    typography ensures readability across all applications.
                  </p>

                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <Image
                      src="/images/hugodress-logo-main.png"
                      alt="HugoDress Logo"
                      width={400}
                      height={200}
                      className="object-contain w-full h-auto"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Color Palette</h3>
                  <p className="text-gray-700 mb-6">
                    The color palette centers around a vibrant pink that conveys energy and femininity, complemented by
                    deep black for contrast and sophistication. Secondary neutral tones provide balance and versatility
                    across various applications.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="h-24 rounded-lg bg-[#e91e63] mb-2"></div>
                      <p className="text-sm font-medium text-gray-900">Primary Pink</p>
                      <p className="text-xs text-gray-500">#E91E63</p>
                    </div>
                    <div>
                      <div className="h-24 rounded-lg bg-black mb-2"></div>
                      <p className="text-sm font-medium text-gray-900">Primary Black</p>
                      <p className="text-xs text-gray-500">#000000</p>
                    </div>
                    <div>
                      <div className="h-24 rounded-lg bg-gray-200 mb-2"></div>
                      <p className="text-sm font-medium text-gray-900">Light Gray</p>
                      <p className="text-xs text-gray-500">#E5E5E5</p>
                    </div>
                    <div>
                      <div className="h-24 rounded-lg bg-white border border-gray-200 mb-2"></div>
                      <p className="text-sm font-medium text-gray-900">White</p>
                      <p className="text-xs text-gray-500">#FFFFFF</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Typography</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Primary Font</h4>
                    <p className="text-5xl font-bold text-gray-900 mb-2">Montserrat</p>
                    <p className="text-gray-700">
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ
                      <br />
                      abcdefghijklmnopqrstuvwxyz
                      <br />
                      1234567890
                    </p>
                  </div>

                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Secondary Font</h4>
                    <p className="text-5xl font-light text-gray-900 mb-2">Raleway</p>
                    <p className="text-gray-700">
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ
                      <br />
                      abcdefghijklmnopqrstuvwxyz
                      <br />
                      1234567890
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-[#e91e63]/10 flex items-center justify-center mr-4">
                    <Sparkles className="h-6 w-6 text-[#e91e63]" />
                  </div>
                  <h2 className="text-3xl font-semibold text-gray-900">Brand Gallery</h2>
                </div>
              </div>

              <ImageGallery images={projectImages} className="bg-white" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section ref={guidelinesRef} className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-[#e91e63]/10 flex items-center justify-center mr-4">
                    <FileText className="h-6 w-6 text-[#e91e63]" />
                  </div>
                  <h2 className="text-3xl font-semibold text-gray-900">Brand Guidelines</h2>
                </div>
              </div>

              <PDFPreview
                pdfUrl="/documents/hugodress-brand-guidelines.pdf"
                coverImage="/images/hugodress-profile.png"
                title="HugoDress Brand Guidelines"
                className="bg-white"
              />

              <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Brand Guidelines Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <div className="h-12 w-12 rounded-full bg-[#e91e63]/10 flex items-center justify-center mb-4">
                      <div className="text-xl font-bold text-[#e91e63]">01</div>
                    </div>
                    <h4 className="text-lg font-medium mb-2 text-gray-900">Logo Usage</h4>
                    <p className="text-gray-700">
                      Detailed guidelines for logo placement, sizing, spacing, and usage restrictions across different
                      media.
                    </p>
                  </div>

                  <div>
                    <div className="h-12 w-12 rounded-full bg-[#e91e63]/10 flex items-center justify-center mb-4">
                      <div className="text-xl font-bold text-[#e91e63]">02</div>
                    </div>
                    <h4 className="text-lg font-medium mb-2 text-gray-900">Color Applications</h4>
                    <p className="text-gray-700">
                      Specifications for color usage in print and digital formats, including CMYK, RGB, and hex values.
                    </p>
                  </div>

                  <div>
                    <div className="h-12 w-12 rounded-full bg-[#e91e63]/10 flex items-center justify-center mb-4">
                      <div className="text-xl font-bold text-[#e91e63]">03</div>
                    </div>
                    <h4 className="text-lg font-medium mb-2 text-gray-900">Brand Voice</h4>
                    <p className="text-gray-700">
                      Guidance on tone, messaging, and communication style to maintain brand consistency.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Project Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="text-3xl font-semibold mb-2 text-gray-900">Ready to see more?</h2>
                <p className="text-gray-700">Explore our other branding projects</p>
              </div>

              <div className="mt-6 md:mt-0">
                <Button asChild className="bg-[#e91e63] hover:bg-[#e91e63]/90 text-white">
                  <Link href="/projects" className="flex items-center">
                    View All Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
