"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  Code,
  Briefcase,
  ShoppingCart,
  Building,
  GraduationCap,
  Tv,
  MapPin,
  Award,
  School,
  HardHat,
  ShoppingBag,
  Dumbbell,
  Heart,
  Shirt,
  Globe,
  Stethoscope,
  Users,
  ClipboardList,
  FlaskRoundIcon as Flask,
  Pill,
  Receipt,
  BarChart3,
  ChevronRight,
  ExternalLink,
  Ticket,
  DollarSign,
  LineChart,
  ArrowDown,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import { betaCareProject, hugoDressProject, dabiibSoftProject } from "@/data/project-details"
import { VideoShowcase } from "@/components/video-showcase"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const [activeTab, setActiveTab] = useState("all")
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check if there's a tab parameter in the URL
    const tabParam = searchParams.get("tab")
    if (tabParam && ["all", "websites", "branding", "software"].includes(tabParam)) {
      setActiveTab(tabParam)
    }
  }, [searchParams])

  const features = [
    {
      id: 0,
      icon: <Users className="h-6 w-6" />,
      title: "Patient Registration",
      description:
        "Efficiently manage patient information, appointments, and visit history with an intuitive interface.",
    },
    {
      id: 1,
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Doctor Management",
      description: "Schedule and track medical staff activities, specialties, and patient assignments.",
    },
    {
      id: 2,
      icon: <ClipboardList className="h-6 w-6" />,
      title: "Medical Records",
      description: "Comprehensive electronic health records with diagnosis, treatment plans, and medical history.",
    },
    {
      id: 3,
      icon: <Flask className="h-6 w-6" />,
      title: "Lab Investigations",
      description: "Order, track, and store laboratory and imaging results with integrated reporting.",
    },
    {
      id: 4,
      icon: <Pill className="h-6 w-6" />,
      title: "Pharmacy Control",
      description: "Manage medication inventory, prescriptions, and track sales with expiration alerts.",
    },
    {
      id: 5,
      icon: <Receipt className="h-6 w-6" />,
      title: "Financial Modules",
      description: "Handle billing, receipts, insurance claims, and generate detailed financial reports.",
    },
    {
      id: 6,
      icon: <BarChart3 className="h-6 w-6" />,
      title: "HR & Performance",
      description: "Track staff performance, manage payroll, and handle administrative HR functions.",
    },
  ]

  const handleViewProject = (project: any) => {
    // Find the detailed project data
    let detailedProject = null

    if (project.link === "/projects/betacare") {
      detailedProject = betaCareProject
    } else if (project.link === "/projects/hugodress") {
      detailedProject = hugoDressProject
    } else if (project.link === "/projects/dabiib-soft") {
      detailedProject = dabiibSoftProject
    } else {
      detailedProject = project
    }

    setSelectedProject(detailedProject)
    setIsModalOpen(true)
  }

  // Project data organized by category
  const projects = {
    websites: [
      {
        title: "YWDI - Young Women Dialogue Inclusion",
        description: "Non-profit organization website promoting women's inclusion and dialogue in Somalia",
        image: "/images/ywdi-website.jpeg",
        icon: <Globe className="h-5 w-5 text-[#01BABC]" />,
        tags: ["WordPress", "Non-profit", "Organization", "Responsive Design"],
        link: "https://ywdi.org/",
        featured: true,
      },
      {
        title: "HugoDress E-commerce",
        description:
          "A sophisticated fashion e-commerce platform with a vibrant design and intuitive shopping experience.",
        image: "/images/hugodress-screenshot.png",
        icon: <ShoppingCart className="h-5 w-5 text-[#01BABC]" />,
        tags: ["WordPress", "WooCommerce", "Custom Theme", "Responsive Design"],
        link: "https://hugodress.com/",
        featured: true,
      },
      {
        title: "Ministry of Finance Website",
        description: "Official government website for the Ministry of Finance of Hirshabelle State, Somalia.",
        image: "/images/hirshabelle-hero.jpeg",
        icon: <Building className="h-5 w-5 text-[#01BABC]" />,
        tags: ["WordPress", "Custom Theme", "Multilingual", "Document Management"],
        link: "https://hirshabellemof.so/",
        featured: true,
      },
      {
        title: "Hayle Barise Technical Center",
        description:
          "Educational platform for Hayle Barise Technical Development Center with program information and student resources.",
        image: "/images/hayle-barise-hero.png",
        icon: <GraduationCap className="h-5 w-5 text-[#01BABC]" />,
        tags: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
        link: "https://hayle-barise.vercel.app/",
        featured: true,
      },
      {
        title: "Portal Engineering",
        description: "Expert consulting and supervision services for building and road construction projects.",
        image: "/images/portal-engineering.png",
        icon: <HardHat className="h-5 w-5 text-[#01BABC]" />,
        tags: ["WordPress", "Construction", "Engineering", "Consulting"],
        link: "https://portalengineering.so/",
        featured: false,
      },
      {
        title: "Geodacity",
        description: "Comprehensive geospatial solutions and surveying services for accurate mapping and analysis.",
        image: "/images/geodacity.png",
        icon: <MapPin className="h-5 w-5 text-[#01BABC]" />,
        tags: ["WordPress", "Geospatial", "Surveying", "Mapping"],
        link: "https://geodacity.com/",
        featured: false,
      },
      {
        title: "Ogaal TV",
        description: "News and media platform delivering current events and information in Somali language.",
        image: "/images/ogaaltv-new.png",
        icon: <Tv className="h-5 w-5 text-[#01BABC]" />,
        tags: ["WordPress", "News", "Media", "Content Management"],
        link: "https://ogaaltv.so/",
        featured: false,
      },
      {
        title: "SONAK",
        description: "Educational platform offering professional networking and IT training courses.",
        image: "/images/sonak.png",
        icon: <Code className="h-5 w-5 text-[#01BABC]" />,
        tags: ["WordPress", "LMS", "Education", "IT Training"],
        link: "https://sonak.so/",
        featured: false,
      },
      {
        title: "Somali Health Awards",
        description: "Platform recognizing significant contributions in the Somali healthcare sector.",
        image: "/images/somali-health-awards.png",
        icon: <Award className="h-5 w-5 text-[#01BABC]" />,
        tags: ["WordPress", "Healthcare", "Awards", "Community"],
        link: "https://sohaawards.so/",
        featured: false,
      },
      {
        title: "MAJSI - SIU Students Union",
        description: "Official website for the Somali International University Students Union.",
        image: "/images/majsi-siu.png",
        icon: <School className="h-5 w-5 text-[#01BABC]" />,
        tags: ["WordPress", "Education", "University", "Student Portal"],
        link: "https://majsi.siu.edu.so/",
        featured: false,
      },
      {
        title: "Baraarug Consulting Firm",
        description:
          "Professional consulting firm website offering innovative solutions for organizational excellence.",
        image: "/images/baraarug-consulting.png",
        icon: <Briefcase className="h-5 w-5 text-[#01BABC]" />,
        tags: ["WordPress", "Consulting", "Business", "Professional Services"],
        link: "https://bcf.so/",
        featured: false,
      },
      {
        title: "ZoyaExpress",
        description:
          "E-commerce platform for retail products with streamlined shopping experience and secure checkout.",
        image: "/images/zoyaexpress.png",
        icon: <ShoppingBag className="h-5 w-5 text-[#01BABC]" />,
        tags: ["Shopify", "E-commerce", "Retail", "Online Store"],
        link: "https://zoyaexpress.com",
        featured: false,
      },
      {
        title: "Somali Weightlifting Federation",
        description: "Official website for the Somali Weightlifting Federation with event information and resources.",
        image: "/images/swf-somali-weightlifting.png",
        icon: <Dumbbell className="h-5 w-5 text-[#01BABC]" />,
        tags: ["WordPress", "Sports", "Federation", "Events"],
        link: "https://ywdi.org/",
        featured: false,
      },
    ],
    branding: [
      {
        title: "Beta Care Diagnostic Ltd",
        description:
          "Complete brand identity for a healthcare diagnostic center, including logo, color palette, and brand applications.",
        image: "/images/betacare-logo-new.png",
        icon: <Heart className="h-5 w-5 text-[#01BABC]" />,
        tags: ["Healthcare", "Logo Design", "Brand Identity", "Visual Design"],
        link: "/projects/betacare",
        featured: true,
      },
      {
        title: "HugoDress Fashion Brand",
        description:
          "Vibrant brand identity for a fashion e-commerce platform, featuring a bold logo design and energetic color palette.",
        image: "/images/hugodress-logo-embossed.png",
        icon: <Shirt className="h-5 w-5 text-[#01BABC]" />,
        tags: ["Fashion", "Logo Design", "Brand Identity", "E-commerce"],
        link: "/projects/hugodress",
        featured: true,
      },
    ],
    software: [
      {
        title: "Dabiib Soft",
        description:
          "Comprehensive healthcare management system designed specifically for polyclinics with patient registration, medical records, and pharmacy management.",
        image: "/images/dabiib-soft.jpeg",
        icon: <Stethoscope className="h-5 w-5 text-[#01BABC]" />,
        tags: ["Healthcare", "Management System", "Pharmacy", "Accounting"],
        link: "/projects/dabiib-soft",
        featured: true,
      },
    ],
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#0C1E28] to-[#01BABC]/20">
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6 animate-fade-in">
              <Briefcase className="h-5 w-5 mr-2" />
              <span>Our Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
              Penn Creative Lab <span className="text-[#01BABC]">Projects</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Explore our diverse portfolio of projects spanning software development, website design, and brand
              consulting.
            </p>
          </div>
        </div>
      </section>

      {/* Dabiib Soft Showcase Section */}
      <section className="py-24 bg-gradient-to-b from-[#0C1E28] to-[#01BABC]/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-4">
                <Stethoscope className="h-5 w-5 mr-2" />
                <span>Healthcare Software</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Dabiib <span className="text-[#01BABC]">Soft</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                A comprehensive clinical management system tailored for Somali polyclinics.
              </p>
            </div>

            {/* Dashboard Preview */}
            <div className="mb-16 relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#01BABC]/20 bg-[#122C39]">
                <div className="absolute top-0 left-0 right-0 h-12 bg-[#0C1E28] flex items-center px-4 z-10">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-white/70 text-sm font-medium">Dabiib Soft Dashboard</div>
                </div>
                <div className="pt-12">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-20%20at%2022.56.07_37cc421e.jpg-lJuj0kMpx1yUtlCpIXZphX8F98jvaO.jpeg"
                    alt="Dabiib Soft Dashboard"
                    width={1200}
                    height={600}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Features and Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Features List */}
              <div className="lg:col-span-5">
                <div className="bg-[#122C39]/50 backdrop-blur-sm rounded-xl p-6 border border-[#01BABC]/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>

                  <div className="space-y-4">
                    {features.map((feature) => (
                      <div
                        key={feature.id}
                        className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                          activeFeature === feature.id
                            ? "bg-[#01BABC]/20 border border-[#01BABC]/40"
                            : "hover:bg-[#01BABC]/10 border border-transparent"
                        }`}
                        onClick={() => setActiveFeature(feature.id)}
                      >
                        <div className="flex items-start">
                          <div
                            className={`h-10 w-10 rounded-lg ${
                              activeFeature === feature.id ? "bg-[#01BABC]/30" : "bg-[#01BABC]/10"
                            } flex items-center justify-center mr-4`}
                          >
                            <div className={`${activeFeature === feature.id ? "text-[#01BABC]" : "text-[#01BABC]/70"}`}>
                              {feature.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-medium">{feature.title}</h4>
                            {activeFeature === feature.id && (
                              <p className="text-slate-300 text-sm mt-2">{feature.description}</p>
                            )}
                          </div>
                          <ChevronRight
                            className={`h-5 w-5 transition-transform duration-300 ${
                              activeFeature === feature.id ? "text-[#01BABC] rotate-90" : "text-slate-500"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/projects/dabiib-soft"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#01BABC] text-white rounded-lg hover:bg-[#01BABC]/90 transition-colors"
                    >
                      <span>View Project</span>
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Dashboard Stats */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Patients */}
                  <div className="bg-[#122C39]/50 backdrop-blur-sm rounded-xl p-6 border border-[#01BABC]/20">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-[#01BABC] text-sm font-medium mb-2">PATIENTS</div>
                        <div className="text-white text-3xl font-bold">1,444</div>
                        <div className="text-slate-400 text-xs mt-2">Since last month</div>
                      </div>
                      <div className="bg-[#01BABC]/20 p-2 rounded-lg">
                        <Users className="h-6 w-6 text-[#01BABC]" />
                      </div>
                    </div>
                  </div>

                  {/* Tickets */}
                  <div className="bg-[#122C39]/50 backdrop-blur-sm rounded-xl p-6 border border-[#01BABC]/20">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-[#01BABC] text-sm font-medium mb-2">TICKETS</div>
                        <div className="text-white text-3xl font-bold flex items-center">
                          348
                          <ArrowDown className="h-4 w-4 text-red-500 ml-2" />
                        </div>
                        <div className="text-slate-400 text-xs mt-2">Since last month</div>
                      </div>
                      <div className="bg-[#01BABC]/20 p-2 rounded-lg">
                        <Ticket className="h-6 w-6 text-[#01BABC]" />
                      </div>
                    </div>
                  </div>

                  {/* Labs */}
                  <div className="bg-[#122C39]/50 backdrop-blur-sm rounded-xl p-6 border border-[#01BABC]/20">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-[#01BABC] text-sm font-medium mb-2">LABS</div>
                        <div className="text-white text-3xl font-bold">1,308</div>
                        <div className="text-slate-400 text-xs mt-2">Since last month</div>
                      </div>
                      <div className="bg-[#01BABC]/20 p-2 rounded-lg">
                        <Flask className="h-6 w-6 text-[#01BABC]" />
                      </div>
                    </div>
                  </div>

                  {/* Receipts */}
                  <div className="bg-[#122C39]/50 backdrop-blur-sm rounded-xl p-6 border border-[#01BABC]/20">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-[#01BABC] text-sm font-medium mb-2">RECEIPTS</div>
                        <div className="text-white text-3xl font-bold">$12,480.19</div>
                        <div className="text-slate-400 text-xs mt-2">Since last month</div>
                      </div>
                      <div className="bg-[#01BABC]/20 p-2 rounded-lg">
                        <Receipt className="h-6 w-6 text-[#01BABC]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Row Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {/* Quantity in Stock */}
                  <div className="bg-[#122C39]/50 backdrop-blur-sm rounded-xl p-6 border border-[#01BABC]/20">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-[#01BABC] text-sm font-medium mb-2">Quantity In The Stock</div>
                        <div className="text-white text-3xl font-bold">9,516</div>
                      </div>
                      <div className="bg-[#01BABC]/20 p-2 rounded-lg">
                        <Pill className="h-6 w-6 text-[#01BABC]" />
                      </div>
                    </div>
                  </div>

                  {/* Total Purchasing Price */}
                  <div className="bg-[#122C39]/50 backdrop-blur-sm rounded-xl p-6 border border-[#01BABC]/20">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-[#01BABC] text-sm font-medium mb-2">Total Purchasing Price</div>
                        <div className="text-white text-3xl font-bold">$4,293.52</div>
                      </div>
                      <div className="bg-[#01BABC]/20 p-2 rounded-lg">
                        <DollarSign className="h-6 w-6 text-[#01BABC]" />
                      </div>
                    </div>
                  </div>

                  {/* Total Quantity Sold */}
                  <div className="bg-[#122C39]/50 backdrop-blur-sm rounded-xl p-6 border border-[#01BABC]/20">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-[#01BABC] text-sm font-medium mb-2">Total Quantity Sold</div>
                        <div className="text-white text-3xl font-bold">15,003.75</div>
                      </div>
                      <div className="bg-[#01BABC]/20 p-2 rounded-lg">
                        <ShoppingCart className="h-6 w-6 text-[#01BABC]" />
                      </div>
                    </div>
                  </div>

                  {/* Total Selling Price */}
                  <div className="bg-[#122C39]/50 backdrop-blur-sm rounded-xl p-6 border border-[#01BABC]/20">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-[#01BABC] text-sm font-medium mb-2">Total Selling Price</div>
                        <div className="text-white text-3xl font-bold">$12,906.30</div>
                      </div>
                      <div className="bg-[#01BABC]/20 p-2 rounded-lg">
                        <DollarSign className="h-6 w-6 text-[#01BABC]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Monthly Earning */}
                <div className="mt-6 bg-[#122C39]/50 backdrop-blur-sm rounded-xl p-6 border border-[#01BABC]/20">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">Monthly Earning</h3>
                    <div className="bg-[#01BABC]/20 p-2 rounded-lg">
                      <LineChart className="h-5 w-5 text-[#01BABC]" />
                    </div>
                  </div>
                  <div className="h-48 bg-[#0C1E28]/50 rounded-lg flex items-end p-4">
                    <div className="w-full h-full relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#01BABC]/30 to-transparent rounded-lg"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 border-t border-[#01BABC]/30"></div>
                      <div className="absolute top-1/4 left-0 right-0 border-t border-[#01BABC]/20"></div>
                      <div className="absolute top-1/2 left-0 right-0 border-t border-[#01BABC]/20"></div>
                      <div className="absolute top-3/4 left-0 right-0 border-t border-[#01BABC]/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories Tabs */}
      <section className="py-16 md:py-24 bg-[#0c1e28] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#01BABC]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#01BABC]/5 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div id="projects" className="mt-4">
            <Tabs defaultValue={activeTab} className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-between items-center mb-8">
                <TabsList className="bg-[#0c1e28] border-b border-[#01BABC]/20 rounded-none gap-2 p-0 h-auto">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-[#01BABC]/10 data-[state=active]:text-[#01BABC] data-[state=active]:border-[#01BABC] border-b-2 border-transparent rounded-none px-4 py-2"
                  >
                    All Projects
                  </TabsTrigger>
                  <TabsTrigger
                    value="websites"
                    className="data-[state=active]:bg-[#01BABC]/10 data-[state=active]:text-[#01BABC] data-[state=active]:border-[#01BABC] border-b-2 border-transparent rounded-none px-4 py-2"
                  >
                    Websites
                  </TabsTrigger>
                  <TabsTrigger
                    value="branding"
                    className="data-[state=active]:bg-[#01BABC]/10 data-[state=active]:text-[#01BABC] data-[state=active]:border-[#01BABC] border-b-2 border-transparent rounded-none px-4 py-2"
                  >
                    Branding
                  </TabsTrigger>
                  <TabsTrigger
                    value="software"
                    className="data-[state=active]:bg-[#01BABC]/10 data-[state=active]:text-[#01BABC] data-[state=active]:border-[#01BABC] border-b-2 border-transparent rounded-none px-4 py-2"
                  >
                    Software
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* All Projects */}
              <TabsContent value="all" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...projects.websites, ...projects.branding, ...projects.software]
                    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
                    .map((project, index) => (
                      <ProjectCard key={index} project={project} onViewProject={handleViewProject} />
                    ))}
                </div>
              </TabsContent>

              {/* Website Projects */}
              <TabsContent value="websites" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.websites.map((project, index) => (
                    <ProjectCard key={index} project={project} onViewProject={handleViewProject} />
                  ))}
                </div>
              </TabsContent>

              {/* Branding Projects */}
              <TabsContent value="branding" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                {/* Branding Intro Video */}
                <div className="mb-12">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Our Branding Process</h2>
                    <VideoShowcase
                      videoId="7hSat7Oehcw"
                      title="Penn Creative Lab Branding Process"
                      subtitle="Watch how we transform ideas into powerful brand identities"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.branding.map((project, index) => (
                    <ProjectCard key={index} project={project} onViewProject={handleViewProject} />
                  ))}
                </div>
              </TabsContent>

              {/* Software Projects */}
              <TabsContent value="software" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.software.map((project, index) => (
                    <ProjectCard key={index} project={project} onViewProject={handleViewProject} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
