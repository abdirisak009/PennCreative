"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Code,
  Users,
  Award,
  Lightbulb,
  BarChart,
  CheckCircle,
  ArrowRight,
  Briefcase,
  TrendingUp,
  Target,
  GraduationCap,
} from "lucide-react"
import { VideoShowcase } from "@/components/video-showcase"
import { ProjectShowcase } from "@/components/project-showcase"
import { StudentTestimonials } from "@/components/student-testimonials"

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: (() => void) | null
  }
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 h-screen flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="tech-pattern-background absolute inset-0 w-full h-full"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#122C39]/90 via-[#122C39]/60 to-[#01BABC]/30 z-10"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
              Empowering the Future Through Creative Technology & Learning
            </h1>
            <p className="text-xl text-slate-300 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Learn. Build. Transform.
            </p>
            <div
              className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button asChild size="lg" className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] font-medium">
                <Link href="/courses">Explore Programs</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#01BABC] text-[#01BABC] hover:bg-[#01BABC]/10"
              >
                <Link href="/services">See Services</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-white hover:text-[#01BABC] hover:bg-white/5">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-2">Scroll Down</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#01BABC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#0c1e28] to-[#122C39]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6 animate-fade-in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="m7 4 10 8-10 8V4Z" />
                </svg>
                <span>Watch Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Discover Penn Creative Lab</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                See how we're transforming education and technology in Somalia through innovative solutions and
                practical skills development.
              </p>
            </div>

            <VideoShowcase
              videoId="WpUL6bw_snI"
              title="Bridging the Gap Between Learning and Real-World Skills"
              subtitle="Our mission is to empower individuals and organizations with the knowledge and skills necessary to thrive in today's rapidly evolving digital landscape."
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-[#01BABC]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Practical Education</h3>
                <p className="text-slate-300">
                  Our courses focus on real-world applications, ensuring students develop skills that are immediately
                  valuable in the workplace.
                </p>
              </div>

              <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-[#01BABC]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Technology Solutions</h3>
                <p className="text-slate-300">
                  We develop custom technology solutions that address specific challenges faced by businesses and
                  organizations in Somalia.
                </p>
              </div>

              <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#01BABC]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Community Impact</h3>
                <p className="text-slate-300">
                  Our work contributes to the development of Somalia's digital economy and creates opportunities for
                  sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#122C39] to-[#0c1e28] z-0"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10 z-0"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#01BABC]/5 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#01BABC]/5 filter blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6 animate-fade-in">
                <Briefcase className="h-5 w-5 mr-2" />
                <span>Consultation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Strategic Guidance for <span className="text-[#01BABC]">Business Success</span>
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Our expert consultants provide insights and strategies to help your business overcome challenges and
                achieve sustainable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 group hover:-translate-y-2">
                <div className="h-16 w-16 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-6 group-hover:bg-[#01BABC]/20 transition-colors">
                  <Lightbulb className="h-8 w-8 text-[#01BABC]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#01BABC] transition-colors">
                  Business Strategy
                </h3>
                <p className="text-slate-300 mb-4">
                  Comprehensive business strategy consulting to help you define your vision, mission, and roadmap for
                  sustainable growth.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-[#01BABC]/10 text-[#01BABC] text-xs rounded-full">Market Analysis</span>
                  <span className="px-2 py-1 bg-[#01BABC]/10 text-[#01BABC] text-xs rounded-full">Growth Planning</span>
                  <span className="px-2 py-1 bg-[#01BABC]/10 text-[#01BABC] text-xs rounded-full">Risk Assessment</span>
                </div>
              </div>

              <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 group hover:-translate-y-2">
                <div className="h-16 w-16 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-6 group-hover:bg-[#01BABC]/20 transition-colors">
                  <TrendingUp className="h-8 w-8 text-[#01BABC]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#01BABC] transition-colors">
                  Digital Transformation
                </h3>
                <p className="text-slate-300 mb-4">
                  Guide your organization through digital transformation with strategic planning and technology
                  selection.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-[#01BABC]/10 text-[#01BABC] text-xs rounded-full">
                    Technology Assessment
                  </span>
                  <span className="px-2 py-1 bg-[#01BABC]/10 text-[#01BABC] text-xs rounded-full">Digital Roadmap</span>
                  <span className="px-2 py-1 bg-[#01BABC]/10 text-[#01BABC] text-xs rounded-full">
                    Process Optimization
                  </span>
                </div>
              </div>

              <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 group hover:-translate-y-2">
                <div className="h-16 w-16 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-6 group-hover:bg-[#01BABC]/20 transition-colors">
                  <Target className="h-8 w-8 text-[#01BABC]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#01BABC] transition-colors">
                  Market Research
                </h3>
                <p className="text-slate-300 mb-4">
                  Data-driven market research to help you understand your target audience, industry trends, and
                  competitive landscape.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-[#01BABC]/10 text-[#01BABC] text-xs rounded-full">
                    Consumer Insights
                  </span>
                  <span className="px-2 py-1 bg-[#01BABC]/10 text-[#01BABC] text-xs rounded-full">
                    Competitor Analysis
                  </span>
                  <span className="px-2 py-1 bg-[#01BABC]/10 text-[#01BABC] text-xs rounded-full">
                    Trend Forecasting
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#01BABC]/10 p-8 rounded-xl border border-[#01BABC]/20 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Our Consultation Approach</h3>
                  <p className="text-slate-300 mb-4">
                    We take a collaborative approach to consultation, working closely with you to understand your unique
                    challenges and opportunities.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#01BABC] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Thorough discovery and needs assessment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#01BABC] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Customized strategies based on your goals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#01BABC] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Implementation support and ongoing guidance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#01BABC] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Measurable results and continuous improvement</span>
                    </li>
                  </ul>
                  <Button asChild className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] font-medium">
                    <Link href="/services/consultation">Explore Consultation Services</Link>
                  </Button>
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/business-notes-concept.jpeg"
                    alt="Business consultation planning with notebook and business concept blocks"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#122C39] via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials Section - Moved up for better flow */}
      <StudentTestimonials />

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Comprehensive educational and technology solutions designed to meet the needs of individuals and
              organizations in Somalia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Online Learning */}
            <Card className="bg-[#122C39] border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-6 group-hover:bg-[#01BABC]/20 transition-colors">
                  <BookOpen className="h-6 w-6 text-[#01BABC]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Online Learning Platform</h3>
                <p className="text-slate-300 mb-4">
                  Flexible, accessible education with video lectures, interactive exercises, and personalized learning
                  paths.
                </p>
                <Link
                  href="/services/online-learning"
                  className="inline-flex items-center text-[#01BABC] hover:text-[#01BABC]/80"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Technology Services */}
            <Card className="bg-[#122C39] border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-6 group-hover:bg-[#01BABC]/20 transition-colors">
                  <Code className="h-6 w-6 text-[#01BABC]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Technology Services</h3>
                <p className="text-slate-300 mb-4">
                  Web and mobile development, UI/UX design, IT consulting, and digital transformation strategies.
                </p>
                <Link
                  href="/services/technology"
                  className="inline-flex items-center text-[#01BABC] hover:text-[#01BABC]/80"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Consulting Services */}
            <Card className="bg-[#122C39] border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-6 group-hover:bg-[#01BABC]/20 transition-colors">
                  <Users className="h-6 w-6 text-[#01BABC]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Consulting Services</h3>
                <p className="text-slate-300 mb-4">
                  Workforce analysis, skills gap assessment, curriculum design, and talent strategy consulting.
                </p>
                <Link
                  href="/services/consulting"
                  className="inline-flex items-center text-[#01BABC] hover:text-[#01BABC]/80"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* University Collaboration */}
            <Card className="bg-[#122C39] border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-6 group-hover:bg-[#01BABC]/20 transition-colors">
                  <GraduationCap className="h-6 w-6 text-[#01BABC]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">University Collaboration</h3>
                <p className="text-slate-300 mb-4">
                  We partner with university technology faculties to design and deliver tailored curricula with
                  comprehensive learning materials.
                </p>
                <Link
                  href="/services/university-collaboration"
                  className="inline-flex items-center text-[#01BABC] hover:text-[#01BABC]/80"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Penn Creative Lab</h2>
              <p className="text-slate-300 mb-6">
                Penn Creative Lab is dedicated to empowering individuals and organizations with the knowledge and skills
                necessary to thrive in today's rapidly evolving digital landscape.
              </p>
              <p className="text-slate-300 mb-6">
                Our vision is to be a leading provider of cutting-edge educational and consulting services that bridge
                the gap between academic learning and real-world application.
              </p>
              <Button asChild className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] font-medium">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden animate-slide-in-right">
              <Image
                src="/images/penn-lab-workspace.png"
                alt="Penn Creative Lab workspace with team members collaborating on design projects"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Core Values</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              The principles that guide our approach to education and technology services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Excellence */}
            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Excellence</h3>
              <p className="text-slate-300">
                We strive for the highest standards in all our educational offerings and technology solutions.
              </p>
            </div>

            {/* Accessibility */}
            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Accessibility</h3>
              <p className="text-slate-300">
                We ensure our services are accessible to diverse learners across different backgrounds.
              </p>
            </div>

            {/* Relevance */}
            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Relevance</h3>
              <p className="text-slate-300">
                Our curriculum and services are designed to meet real-world industry demands and needs.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Innovation</h3>
              <p className="text-slate-300">
                We embrace new technologies and teaching methodologies to stay at the forefront of education.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Integrity</h3>
              <p className="text-slate-300">
                We conduct our business with honesty, transparency, and ethical standards at all times.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Collaboration</h3>
              <p className="text-slate-300">
                We foster partnerships with industry, academia, and communities to create meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Who We Serve</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our educational and technology solutions are designed for a diverse range of stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Government Agencies */}
            <div className="bg-gradient-to-br from-[#122C39] to-[#0c1e28] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="mb-4 h-48 relative rounded-lg overflow-hidden">
                <Image
                  src="/images/government-officials.png"
                  alt="Government officials in Somalia collaborating on digital systems"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122C39] via-transparent to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Government Agencies</h3>
              <p className="text-slate-300">
                Providing specialized training and digital transformation solutions for public sector organizations to
                enhance service delivery and operational efficiency.
              </p>
            </div>

            {/* Private Companies */}
            <div className="bg-gradient-to-br from-[#122C39] to-[#0c1e28] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="mb-4 h-48 relative rounded-lg overflow-hidden">
                <Image
                  src="/images/business-professionals.png"
                  alt="Somali business professionals in a strategy meeting"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122C39] via-transparent to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Private Companies</h3>
              <p className="text-slate-300">
                Empowering businesses with workforce development, digital transformation, and technology solutions to
                drive innovation and sustainable growth in Somalia's emerging markets.
              </p>
            </div>

            {/* University Students */}
            <div className="bg-gradient-to-br from-[#122C39] to-[#0c1e28] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="mb-4 h-48 relative rounded-lg overflow-hidden">
                <Image
                  src="/images/university-students.png"
                  alt="Somali university students collaborating on academic projects"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122C39] via-transparent to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">University Students</h3>
              <p className="text-slate-300">
                Bridging the gap between academic education and practical skills through hands-on training,
                industry-relevant projects, and career development programs for tomorrow's professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <ProjectShowcase />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#01BABC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Skills?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Join Penn Creative Lab today and start your journey towards practical, industry-ready skills that will set
              you apart in the digital economy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] font-medium">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#01BABC] text-[#01BABC] hover:bg-[#01BABC]/10"
              >
                <Link href="/courses">Browse Our Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
