"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building,
  GraduationCap,
  Landmark,
  ArrowRight,
  CheckCircle,
  Target,
  BarChart,
  Zap,
  MessageSquare,
  Users,
  Database,
  Shield,
  Cloud,
  Code,
  LineChart,
  Cpu,
  Server,
  Globe,
  TrendingUp,
  FileText,
  Menu,
  X,
  Play,
  Pause,
  ChevronDown,
  ChevronUp,
  Monitor,
  Briefcase,
  BookMarked,
  Brain,
  Network,
  Lock,
} from "lucide-react"

export default function ConsultationPage() {
  const [activeTab, setActiveTab] = useState("business")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Client categories
  const clientCategories = [
    {
      id: "business",
      title: "Business",
      icon: <Building className="h-6 w-6" />,
      description:
        "Strategic technology guidance for businesses to drive innovation, optimize operations, and maintain competitive advantage.",
      image: "/images/business-professionals.png",
      color: "from-blue-600 to-cyan-500",
      services: [
        {
          title: "Digital Transformation",
          description: "End-to-end strategy for modernizing your business technology landscape",
          icon: <Zap />,
        },
        {
          title: "Cloud Migration",
          description: "Seamless transition to cloud infrastructure with minimal disruption",
          icon: <Cloud />,
        },
        {
          title: "Data Strategy",
          description: "Unlock the value of your data with advanced analytics and insights",
          icon: <Database />,
        },
        {
          title: "Cybersecurity",
          description: "Protect your business with comprehensive security assessments and solutions",
          icon: <Shield />,
        },
      ],
    },
    {
      id: "government",
      title: "Government",
      icon: <Landmark className="h-6 w-6" />,
      description:
        "Specialized technology advisory for government agencies to enhance service delivery and operational efficiency.",
      image: "/images/government-officials.png",
      color: "from-emerald-600 to-green-500",
      services: [
        {
          title: "Digital Government",
          description: "Modernize citizen services with user-centered digital solutions",
          icon: <Globe />,
        },
        {
          title: "Secure Systems",
          description: "Implement robust security protocols for sensitive government data",
          icon: <Lock />,
        },
        {
          title: "IT Modernization",
          description: "Update legacy systems while maintaining continuity of operations",
          icon: <Server />,
        },
        {
          title: "Regulatory Compliance",
          description: "Navigate complex technology regulations with expert guidance",
          icon: <FileText />,
        },
      ],
    },
    {
      id: "university",
      title: "University",
      icon: <GraduationCap className="h-6 w-6" />,
      description:
        "Technology advisory services tailored for higher education to enhance learning experiences and research capabilities.",
      image: "/images/university-students.png",
      color: "from-amber-500 to-yellow-400",
      services: [
        {
          title: "EdTech Integration",
          description: "Enhance learning with cutting-edge educational technology",
          icon: <Monitor />,
        },
        {
          title: "Research Computing",
          description: "Advanced computing infrastructure for academic research",
          icon: <Brain />,
        },
        {
          title: "Campus Technology",
          description: "Comprehensive technology planning for modern campuses",
          icon: <Network />,
        },
        {
          title: "Student Systems",
          description: "Streamlined information systems for improved student experience",
          icon: <Users />,
        },
      ],
    },
  ]

  // Case studies
  const caseStudies = [
    {
      title: "Enterprise Cloud Migration",
      client: "Fortune 500 Financial Services Firm",
      challenge: "Modernize legacy infrastructure while maintaining security",
      solution: "Phased migration with hybrid cloud architecture",
      results: "40% cost reduction, 60% faster deployments",
      image: "/images/portal-engineering.png",
      category: "business",
    },
    {
      title: "Digital Service Transformation",
      client: "State Government Agency",
      challenge: "Modernize citizen-facing services with legacy integration",
      solution: "API-first architecture with modern front-end",
      results: "85% increase in online service adoption",
      image: "/images/hirshabelle-mof-mockup.png",
      category: "government",
    },
    {
      title: "Research Computing Platform",
      client: "Leading Research University",
      challenge: "Create scalable computing for diverse research needs",
      solution: "Cloud-based research platform with specialized environments",
      results: "3x increase in research computing capacity",
      image: "/images/penn-lab-workspace.png",
      category: "university",
    },
    {
      title: "Data Analytics Implementation",
      client: "Global Retail Corporation",
      challenge: "Leverage customer data for personalized experiences",
      solution: "Integrated data platform with real-time analytics",
      results: "27% increase in customer engagement",
      image: "/images/ai-tools-custom.png",
      category: "business",
    },
    {
      title: "Cybersecurity Enhancement",
      client: "Federal Defense Agency",
      challenge: "Strengthen security posture against advanced threats",
      solution: "Zero-trust architecture with continuous monitoring",
      results: "95% reduction in security incidents",
      image: "/images/hirshabelle-mof.png",
      category: "government",
    },
    {
      title: "Learning Management System",
      client: "Multi-Campus University System",
      challenge: "Unify learning platforms across multiple campuses",
      solution: "Cloud-based LMS with custom integrations",
      results: "40% improvement in student engagement metrics",
      image: "/images/penn-workspace.png",
      category: "university",
    },
  ]

  // FAQ items
  const faqItems = [
    {
      question: "How do you tailor your advisory services to different organizations?",
      answer:
        "We begin with a comprehensive assessment of your current technology landscape, organizational goals, and specific challenges. This allows us to develop a customized advisory approach that addresses your unique needs rather than applying a one-size-fits-all solution. Our team brings specialized expertise in different sectors, ensuring that our recommendations are relevant to your specific organizational context.",
    },
    {
      question: "What is your approach to technology vendor selection?",
      answer:
        "Our vendor selection process is vendor-neutral and focused on your specific requirements. We help you define clear selection criteria, conduct thorough market analysis, facilitate demos and proofs of concept, and provide objective evaluations. Our goal is to ensure you select technology partners that best meet your needs, budget constraints, and long-term strategic objectives.",
    },
    {
      question: "How do you measure the success of your advisory services?",
      answer:
        "We establish clear, measurable objectives at the beginning of our engagement, aligned with your organizational goals. These might include cost reduction targets, performance improvements, user adoption metrics, or business outcome measures. We implement regular review cycles to track progress against these objectives and adjust our approach as needed to ensure we deliver tangible value.",
    },
    {
      question: "What is your typical engagement timeline?",
      answer:
        "Engagement timelines vary based on the scope and complexity of your needs. Initial assessments typically take 2-4 weeks, strategic roadmap development 4-8 weeks, and implementation guidance can range from several months to ongoing support. We're flexible in our approach and can adapt our timeline to your specific requirements and constraints.",
    },
    {
      question: "How do you stay current with rapidly evolving technologies?",
      answer:
        "Our advisors maintain continuous professional development through industry certifications, partnerships with leading technology providers, participation in technology conferences and forums, and ongoing research. We also maintain an internal knowledge sharing platform where our team collaborates on emerging technology trends and best practices.",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Floating Navigation */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrollY > 100 ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            <span className="text-[#01BABC]">Tech</span>Advisory
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-gray-700 dark:text-gray-300 hover:text-[#01BABC] dark:hover:text-[#01BABC] transition-colors"
            >
              Services
            </Link>
            <Link
              href="#case-studies"
              className="text-gray-700 dark:text-gray-300 hover:text-[#01BABC] dark:hover:text-[#01BABC] transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="#approach"
              className="text-gray-700 dark:text-gray-300 hover:text-[#01BABC] dark:hover:text-[#01BABC] transition-colors"
            >
              Our Approach
            </Link>
            <Link
              href="#faq"
              className="text-gray-700 dark:text-gray-300 hover:text-[#01BABC] dark:hover:text-[#01BABC] transition-colors"
            >
              FAQ
            </Link>
            <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-white">
              <Link href="#contact">Get Started</Link>
            </Button>
          </div>

          <button className="md:hidden text-gray-700 dark:text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="#services"
                className="text-gray-700 dark:text-gray-300 hover:text-[#01BABC] dark:hover:text-[#01BABC] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#case-studies"
                className="text-gray-700 dark:text-gray-300 hover:text-[#01BABC] dark:hover:text-[#01BABC] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="#approach"
                className="text-gray-700 dark:text-gray-300 hover:text-[#01BABC] dark:hover:text-[#01BABC] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Approach
              </Link>
              <Link
                href="#faq"
                className="text-gray-700 dark:text-gray-300 hover:text-[#01BABC] dark:hover:text-[#01BABC] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-white w-full">
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 z-0"></div>

        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden z-0">
          <div className="absolute -right-10 top-10 w-80 h-80 rounded-full bg-[#01BABC]/10 filter blur-3xl"></div>
          <div className="absolute right-40 bottom-20 w-60 h-60 rounded-full bg-blue-500/10 filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6">
                <Cpu className="h-5 w-5 mr-2" />
                <span>Technology Advisory</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                Transform Your <span className="text-[#01BABC]">Technology</span> Strategy
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
                Expert technology guidance tailored for businesses, government agencies, and universities to drive
                innovation and achieve strategic objectives.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-white group">
                  <Link href="#services" className="flex items-center">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Link href="#case-studies">View Case Studies</Link>
                </Button>
              </div>

              <div className="mt-12 flex items-center space-x-8">
                <div className="flex -space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white dark:border-gray-900">
                    B
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white dark:border-gray-900">
                    G
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white dark:border-gray-900">
                    U
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Trusted by <span className="font-semibold">200+</span> organizations
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-[#01BABC]/20 mix-blend-overlay z-10"></div>
                <Image
                  src="/images/penn-team-collaboration.png"
                  alt="Technology advisory services"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <button
                    className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  >
                    {isVideoPlaying ? (
                      <Pause className="h-6 w-6 text-[#01BABC]" />
                    ) : (
                      <Play className="h-6 w-6 text-[#01BABC] ml-1" />
                    )}
                  </button>
                </div>
              </div>

              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-10 -left-10 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Success Rate</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">98%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-10 right-10 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Clients</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">200+</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6">
                <Briefcase className="h-5 w-5 mr-2" />
                <span>Our Services</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Tailored Advisory Solutions
              </h2>

              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We provide specialized technology guidance for different organizational environments, addressing unique
                challenges and opportunities.
              </p>
            </motion.div>
          </div>

          <Tabs defaultValue="business" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100 dark:bg-gray-800 p-1">
                {clientCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-[#01BABC] px-6 py-2"
                  >
                    <div className="flex items-center">
                      {category.icon}
                      <span className="ml-2">{category.title}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {clientCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 mix-blend-overlay`}
                        ></div>
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="lg:col-span-3">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                        {category.title} Technology Advisory
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 mb-8">{category.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {category.services.map((service, index) => (
                          <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                              <div className="flex items-start">
                                <div className="h-10 w-10 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mr-4 flex-shrink-0">
                                  {service.icon}
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                                    {service.title}
                                  </h4>
                                  <p className="text-gray-600 dark:text-gray-400 text-sm">{service.description}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      <div className="mt-8">
                        <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-white group">
                          <Link href="#contact" className="flex items-center">
                            Request {category.title} Consultation
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6">
                <BookMarked className="h-5 w-5 mr-2" />
                <span>Success Stories</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Client Success Stories
              </h2>

              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Explore how our technology advisory services have helped organizations achieve their strategic
                objectives.
              </p>
            </motion.div>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                className={`px-4 py-2 rounded-md ${
                  activeTab === "business"
                    ? "bg-white dark:bg-gray-700 text-[#01BABC] shadow-sm"
                    : "text-gray-600 dark:text-gray-400"
                }`}
                onClick={() => setActiveTab("business")}
              >
                Business
              </button>
              <button
                className={`px-4 py-2 rounded-md ${
                  activeTab === "government"
                    ? "bg-white dark:bg-gray-700 text-[#01BABC] shadow-sm"
                    : "text-gray-600 dark:text-gray-400"
                }`}
                onClick={() => setActiveTab("government")}
              >
                Government
              </button>
              <button
                className={`px-4 py-2 rounded-md ${
                  activeTab === "university"
                    ? "bg-white dark:bg-gray-700 text-[#01BABC] shadow-sm"
                    : "text-gray-600 dark:text-gray-400"
                }`}
                onClick={() => setActiveTab("university")}
              >
                University
              </button>
            </div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies
                .filter((study) => study.category === activeTab)
                .map((study, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-white font-semibold text-lg">{study.title}</h3>
                        <p className="text-gray-300 text-sm">{study.client}</p>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Challenge:</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Solution:</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Results:</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{study.results}</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button
                          variant="outline"
                          className="w-full border-gray-200 dark:border-gray-700 text-[#01BABC] hover:bg-[#01BABC]/5 group"
                        >
                          <Link href="#" className="flex items-center justify-center w-full">
                            View Full Case Study
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#01BABC]/5 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6">
                <Target className="h-5 w-5 mr-2" />
                <span>Our Methodology</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                A Proven Advisory Approach
              </h2>

              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our structured methodology ensures consistent, high-quality advisory services tailored to your specific
                technology needs.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Assessment",
                description:
                  "Comprehensive evaluation of your current technology landscape, identifying strengths, gaps, and opportunities.",
                icon: <Target className="h-6 w-6 text-[#01BABC]" />,
              },
              {
                number: "02",
                title: "Strategy",
                description:
                  "Development of a tailored technology roadmap aligned with your organizational goals and priorities.",
                icon: <LineChart className="h-6 w-6 text-[#01BABC]" />,
              },
              {
                number: "03",
                title: "Implementation",
                description:
                  "Expert guidance throughout the implementation process, ensuring successful technology adoption.",
                icon: <Code className="h-6 w-6 text-[#01BABC]" />,
              },
              {
                number: "04",
                title: "Optimization",
                description:
                  "Ongoing evaluation and refinement of your technology strategy to adapt to changing needs.",
                icon: <BarChart className="h-6 w-6 text-[#01BABC]" />,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg h-full">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-gray-200 dark:text-gray-800 mb-4">{step.number}</div>
                    <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-white">
              <Link href="#contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6">
                <MessageSquare className="h-5 w-5 mr-2" />
                <span>FAQ</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Frequently Asked Questions
              </h2>

              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Find answers to common questions about our technology advisory services.
              </p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="mb-4"
              >
                <div
                  className={`border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden ${
                    expandedFaq === index ? "shadow-md" : ""
                  }`}
                >
                  <button
                    className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  {expandedFaq === index && (
                    <div className="px-6 py-4 bg-white dark:bg-gray-950">
                      <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-[#01BABC]/10 dark:bg-[#01BABC]/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#01BABC]/10 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-[#01BABC] p-8 md:p-12 text-white">
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Technology Strategy?</h2>
                    <p className="mb-8 text-white/90">
                      Schedule a consultation with our technology advisors to discuss your challenges and explore
                      solutions.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>Free initial consultation</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>Tailored recommendations</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>Senior technology advisor</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-900 p-8 md:p-12">
                    <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                      Request Your Consultation
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                          placeholder="Your email"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Organization Type
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                          <option value="">Select organization type</option>
                          <option value="business">Business</option>
                          <option value="government">Government</option>
                          <option value="university">University</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Message
                        </label>
                        <textarea
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                          rows={3}
                          placeholder="Tell us about your technology challenges"
                        ></textarea>
                      </div>

                      <Button className="w-full bg-[#01BABC] hover:bg-[#01BABC]/80 text-white">Submit Request</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="text-[#01BABC]">Tech</span>Advisory
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Expert technology guidance for businesses, government agencies, and universities.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-[#01BABC]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-[#01BABC]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-[#01BABC]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-[#01BABC]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#01BABC]">
                    Business Advisory
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#01BABC]">
                    Government Advisory
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#01BABC]">
                    University Advisory
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#01BABC]">
                    Technology Assessment
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#01BABC]">
                    Digital Transformation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#01BABC]">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#01BABC]">
                    Whitepapers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#01BABC]">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#01BABC]">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#01BABC]">
                    Technology Guides
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Contact
              </h4>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-400">123 Tech Avenue</li>
                <li className="text-gray-600 dark:text-gray-400">Suite 456</li>
                <li className="text-gray-600 dark:text-gray-400">San Francisco, CA 94107</li>
                <li className="text-gray-600 dark:text-gray-400 mt-4">info@techadvisory.com</li>
                <li className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} TechAdvisory. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
