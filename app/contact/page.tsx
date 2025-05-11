"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Contact Penn Creative Lab"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">Contact Us</h1>
            <p className="text-xl text-slate-300 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Have questions or want to learn more about our services? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#122C39] p-8 rounded-xl border border-[#01BABC]/20 animate-slide-in-left">
              <h2 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h2>

              {submitSuccess ? (
                <div className="bg-[#01BABC]/20 border border-[#01BABC] rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
                  <p className="text-slate-300">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <Button
                    className="mt-4 bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39]"
                    onClick={() => setSubmitSuccess(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-[#0c1e28] border-[#01BABC]/30 focus:border-[#01BABC] text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-[#0c1e28] border-[#01BABC]/30 focus:border-[#01BABC] text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        className="bg-[#0c1e28] border-[#01BABC]/30 focus:border-[#01BABC] text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        required
                        rows={5}
                        className="bg-[#0c1e28] border-[#01BABC]/30 focus:border-[#01BABC] text-white resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] font-medium"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#01BABC]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Our Location</h3>
                    <p className="text-slate-300">
                      Mogadishu, Somalia
                      <br />
                      Main Office: 123 Education Street
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#01BABC]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Email Us</h3>
                    <p className="text-slate-300">
                      General Inquiries: info@penn.so
                      <br />
                      Support: support@penn.so
                      <br />
                      Admissions: admissions@penn.so
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#01BABC]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Call Us</h3>
                    <p className="text-slate-300">
                      Main Office: +252 61 2049476
                      <br />
                      Student Support: +252 61 2049476
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center hover:bg-[#01BABC]/20 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-6 w-6 text-[#01BABC]" />
                    </a>
                    <a
                      href="#"
                      className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center hover:bg-[#01BABC]/20 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-6 w-6 text-[#01BABC]" />
                    </a>
                    <a
                      href="#"
                      className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center hover:bg-[#01BABC]/20 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-6 w-6 text-[#01BABC]" />
                    </a>
                    <a
                      href="#"
                      className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center hover:bg-[#01BABC]/20 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-6 w-6 text-[#01BABC]" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 h-[300px] relative rounded-xl overflow-hidden">
                {/* This would be a Google Map in a real implementation */}
                <div className="absolute inset-0 bg-[#0c1e28] flex items-center justify-center">
                  <p className="text-slate-400">Map of Mogadishu, Somalia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Find answers to common questions about our services and programs.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20">
              <h3 className="text-xl font-semibold mb-2 text-white">What types of courses do you offer?</h3>
              <p className="text-slate-300">
                We offer a wide range of courses in technology, business, and professional skills. Our courses are
                designed to be practical and industry-relevant, with a focus on skills that are in high demand in the
                job market.
              </p>
            </div>

            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20">
              <h3 className="text-xl font-semibold mb-2 text-white">Are your certificates recognized?</h3>
              <p className="text-slate-300">
                Yes, our certificates are approved by the Ministry of Education and recognized by leading employers in
                Somalia and beyond. We also partner with universities and industry associations to ensure our
                credentials have value in the job market.
              </p>
            </div>

            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20">
              <h3 className="text-xl font-semibold mb-2 text-white">
                How can organizations partner with Penn Creative Lab?
              </h3>
              <p className="text-slate-300">
                We offer various partnership opportunities for organizations, including customized training programs,
                technology consulting, and talent development initiatives. Contact our partnerships team to discuss how
                we can work together.
              </p>
            </div>

            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20">
              <h3 className="text-xl font-semibold mb-2 text-white">Do you offer scholarships or financial aid?</h3>
              <p className="text-slate-300">
                Yes, we have scholarship programs for qualified students, as well as flexible payment options. We
                believe in making quality education accessible to all, regardless of financial circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
