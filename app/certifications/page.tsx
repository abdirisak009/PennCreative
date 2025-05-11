import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Monitor, Code, CheckCircle, X, Zap, BookOpen, GraduationCap, Sparkles } from "lucide-react"

// First, add the Dialog component imports at the top of the file
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Server, Shield, Cpu, Network, HardDrive, Wrench } from "lucide-react"

// Add these imports at the top of the file
import { Clock, ListChecks, LayoutTemplate, Target, Lightbulb } from "lucide-react"

// Now, add the missing imports at the top of the file
// Add these imports at the top of the file (if not already present)
import { GitBranch, Terminal, Database } from "lucide-react"

export default function CertificationsPage() {
  // Certification data
  const certifications = [
    {
      id: "web-design",
      title: "PCL Web Design Certified",
      icon: <Monitor className="h-6 w-6 text-[#01BABC]" />,
      description:
        "Covers HTML, CSS, responsive layout, and basic UI/UX principles. This certification validates your ability to create visually appealing and functional websites that work across different devices.",
      skills: ["Webdesign Essentials", "WordPress", "Elementor", "Tutor LMS"],
      image: "/placeholder.svg?height=200&width=200",
      color: "from-blue-500/20 to-cyan-500/10",
    },
    // Find the certifications array and update the junior-dev certification object with detailed curriculum information
    // Replace the junior-dev certification object with this:
    {
      id: "junior-dev",
      title: "PCL Junior Developer Certified",
      icon: <Code className="h-6 w-6 text-[#01BABC]" />,
      description:
        "Covers programming basics, logic building, and simple app development. This certification validates your foundational programming skills and ability to develop basic applications.",
      skills: ["HTML", "CSS", "JS Essentials", "React.js", "Version Control"],
      image: "/placeholder.svg?height=200&width=200",
      color: "from-purple-500/20 to-indigo-500/10",
      curriculum: [
        {
          module: "Module 1: Web Fundamentals",
          icon: <Monitor className="h-5 w-5 text-[#01BABC]" />,
          description: "Building the foundation of web development with HTML and CSS",
          topics: [
            "HTML5 Structure and Semantics",
            "CSS3 Styling and Layouts",
            "Responsive Design Principles",
            "CSS Frameworks (Tailwind, Bootstrap)",
            "Web Accessibility Standards",
          ],
          examFocus: true,
        },
        {
          module: "Module 2: JavaScript Essentials",
          icon: <Code className="h-5 w-5 text-[#01BABC]" />,
          description: "Core JavaScript concepts and programming fundamentals",
          topics: [
            "JavaScript Syntax and Data Types",
            "Functions and Scope",
            "DOM Manipulation",
            "Event Handling",
            "Asynchronous JavaScript (Promises, Async/Await)",
          ],
          examFocus: true,
        },
        {
          module: "Module 3: React.js Fundamentals",
          icon: <Sparkles className="h-5 w-5 text-[#01BABC]" />,
          description: "Building interactive user interfaces with React",
          topics: [
            "React Components and JSX",
            "State and Props",
            "Hooks (useState, useEffect)",
            "Component Lifecycle",
            "Handling Forms in React",
          ],
          examFocus: true,
        },
        {
          module: "Module 4: Version Control & Collaboration",
          icon: <GitBranch className="h-5 w-5 text-[#01BABC]" />,
          description: "Managing code and collaborating with other developers",
          topics: [
            "Git Fundamentals",
            "GitHub Workflow",
            "Branching and Merging",
            "Pull Requests and Code Reviews",
            "Collaborative Development Practices",
          ],
          examFocus: true,
        },
        {
          module: "Module 5: Modern Development Tools",
          icon: <Terminal className="h-5 w-5 text-[#01BABC]" />,
          description: "Essential tools for modern web development",
          topics: [
            "Package Managers (npm, yarn)",
            "Build Tools and Bundlers",
            "Development Environments",
            "Browser Developer Tools",
            "Debugging Techniques",
          ],
          examFocus: true,
        },
        {
          module: "Module 6: API Integration",
          icon: <Database className="h-5 w-5 text-[#01BABC]" />,
          description: "Working with APIs and external data sources",
          topics: [
            "RESTful API Concepts",
            "Fetching Data with JavaScript",
            "API Authentication",
            "Error Handling",
            "Data Manipulation and Display",
          ],
          examFocus: false,
        },
      ],
      examDetails: {
        duration: "120 minutes",
        questions: "85 questions",
        format: "Multiple choice, coding challenges, and project implementation",
        passingScore: "70%",
        focusAreas: [
          "HTML/CSS implementation (20%)",
          "JavaScript programming (30%)",
          "React.js fundamentals (25%)",
          "Version control practices (15%)",
          "Development tools and workflow (10%)",
        ],
      },
    },
    // Then, update the certifications array to include detailed curriculum information
    // Find the IT Ready certification object in the certifications array and replace it with this:
    {
      id: "it-ready",
      title: "PCL IT Ready Certified",
      icon: <Monitor className="h-6 w-6 text-[#01BABC]" />,
      description:
        "Focuses on IT fundamentals, hardware/software, and troubleshooting skills. This certification demonstrates your ability to provide technical support and maintain computer systems in a professional environment.",
      skills: [
        "Hardware Fundamentals",
        "Operating Systems",
        "Networking Basics",
        "Troubleshooting",
        "IT Security Essentials",
      ],
      image: "/placeholder.svg?height=200&width=200",
      color: "from-green-500/20 to-emerald-500/10",
      curriculum: [
        {
          module: "Module 1: Computer Hardware",
          icon: <HardDrive className="h-5 w-5 text-[#01BABC]" />,
          description: "Understanding computer components and peripherals",
          topics: [
            "PC Components and Architecture",
            "Storage Devices and Management",
            "Input/Output Devices",
            "Hardware Installation and Configuration",
            "BIOS/UEFI Settings and Management",
          ],
          examFocus: true,
        },
        {
          module: "Module 2: Operating Systems",
          icon: <Cpu className="h-5 w-5 text-[#01BABC]" />,
          description: "Installing, configuring, and maintaining operating systems",
          topics: [
            "Windows Installation and Configuration",
            "Linux Fundamentals",
            "OS Troubleshooting",
            "System Performance Optimization",
            "User Account Management",
          ],
          examFocus: true,
        },
        {
          module: "Module 3: Networking Fundamentals",
          icon: <Network className="h-5 w-5 text-[#01BABC]" />,
          description: "Understanding network concepts and configurations",
          topics: [
            "Network Topologies and Types",
            "IP Addressing and Subnetting",
            "Network Devices and Protocols",
            "Wireless Networking",
            "Network Troubleshooting",
          ],
          examFocus: true,
        },
        {
          module: "Module 4: IT Security",
          icon: <Shield className="h-5 w-5 text-[#01BABC]" />,
          description: "Implementing security best practices",
          topics: [
            "Security Fundamentals",
            "Authentication and Access Control",
            "Malware Prevention and Removal",
            "Data Security and Encryption",
            "Security Policies and Procedures",
          ],
          examFocus: true,
        },
        {
          module: "Module 5: IT Support and Troubleshooting",
          icon: <Wrench className="h-5 w-5 text-[#01BABC]" />,
          description: "Diagnosing and resolving technical issues",
          topics: [
            "Troubleshooting Methodology",
            "Hardware Diagnostics",
            "Software Troubleshooting",
            "Network Issue Resolution",
            "Customer Service Skills",
          ],
          examFocus: true,
        },
        {
          module: "Module 6: Cloud Computing Basics",
          icon: <Server className="h-5 w-5 text-[#01BABC]" />,
          description: "Introduction to cloud services and technologies",
          topics: [
            "Cloud Service Models",
            "Major Cloud Platforms Overview",
            "Cloud Storage Solutions",
            "Basic Cloud Security",
            "Cloud Resource Management",
          ],
          examFocus: false,
        },
      ],
      examDetails: {
        duration: "120 minutes",
        questions: "90 questions",
        format: "Multiple choice, scenario-based, and practical exercises",
        passingScore: "70%",
        focusAreas: [
          "Hardware troubleshooting (25%)",
          "Operating system management (25%)",
          "Networking concepts (20%)",
          "Security implementation (15%)",
          "Technical support procedures (15%)",
        ],
      },
    },
  ]

  // Pricing plans
  const pricingPlans = [
    {
      name: "Course Only",
      price: "$10",
      description: "Access to course materials without certification",
      features: [
        { included: true, text: "Full course access" },
        { included: true, text: "Practice exercises" },
        { included: true, text: "Community support" },
        { included: false, text: "Official certification" },
        { included: false, text: "Proctored exam" },
        { included: false, text: "Instructor support" },
      ],
      cta: "Enroll Now",
      popular: false,
      color: "border-blue-500/20",
      highlight: "bg-blue-500/5",
      icon: <BookOpen className="h-5 w-5 text-[#01BABC]" />,
    },
    {
      name: "Exam Only",
      price: "$15",
      description: "Certification exam without course materials",
      features: [
        { included: false, text: "Full course access" },
        { included: true, text: "Practice exercises" },
        { included: true, text: "Community support" },
        { included: true, text: "Official certification" },
        { included: true, text: "Proctored exam" },
        { included: false, text: "Instructor support" },
      ],
      cta: "Register for Exam",
      popular: false,
      color: "border-purple-500/20",
      highlight: "bg-purple-500/5",
      icon: <Award className="h-5 w-5 text-[#01BABC]" />,
    },
    {
      name: "Exam + Training",
      price: "$25",
      description: "Complete package with course and certification",
      features: [
        { included: true, text: "Full course access" },
        { included: true, text: "Practice exercises" },
        { included: true, text: "Community support" },
        { included: true, text: "Official certification" },
        { included: true, text: "Proctored exam" },
        { included: true, text: "Instructor support" },
      ],
      cta: "Get Complete Package",
      popular: true,
      color: "border-[#01BABC]/30",
      highlight: "bg-[#01BABC]/5",
      icon: <Sparkles className="h-5 w-5 text-[#01BABC]" />,
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C1E28] via-[#122C39] to-[#0a1a24] z-0"></div>

        {/* Animated Geometric Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#01BABC]/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-[#01BABC]/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMUJBQkMiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0zMCAzNGgtMnYtNGgydjR6bTAtNnYtNGgtMnY0aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>

        {/* Floating Certification Icons */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-lg bg-[#01BABC]/10 flex items-center justify-center animate-float">
          <Award className="h-8 w-8 text-[#01BABC]/70" />
        </div>
        <div
          className="absolute top-1/3 right-1/4 w-12 h-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <GraduationCap className="h-6 w-6 text-[#01BABC]/70" />
        </div>
        <div
          className="absolute bottom-1/4 right-1/3 w-14 h-14 rounded-lg bg-[#01BABC]/10 flex items-center justify-center animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Code className="h-7 w-7 text-[#01BABC]/70" />
        </div>

        {/* Glowing Border */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#01BABC]/50 to-transparent"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6 animate-fade-in backdrop-blur-sm border border-[#01BABC]/20">
              <GraduationCap className="h-5 w-5 mr-2" />
              <span>Professional Certifications</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
              Boost Your Career with{" "}
              <span className="text-[#01BABC] relative">
                Industry-Recognized
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#01BABC]/50 rounded-full"></span>
              </span>{" "}
              Certifications
            </h1>
            <p className="text-xl text-slate-300 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Penn Creative Lab offers practical certification exams designed to validate your skills and enhance your
              career prospects in today's competitive job market.
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="bg-[#122C39]/70 backdrop-blur-sm p-4 rounded-lg border border-[#01BABC]/20 transform hover:scale-105 transition-all">
                <div className="text-3xl font-bold text-[#01BABC]">95%</div>
                <div className="text-sm text-slate-300">Employment Rate</div>
              </div>
              <div className="bg-[#122C39]/70 backdrop-blur-sm p-4 rounded-lg border border-[#01BABC]/20 transform hover:scale-105 transition-all">
                <div className="text-3xl font-bold text-[#01BABC]">30+</div>
                <div className="text-sm text-slate-300">Industry Partners</div>
              </div>
              <div className="bg-[#122C39]/70 backdrop-blur-sm p-4 rounded-lg border border-[#01BABC]/20 transform hover:scale-105 transition-all">
                <div className="text-3xl font-bold text-[#01BABC]">1000+</div>
                <div className="text-sm text-slate-300">Certified Professionals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Cards */}
      <section className="py-16 md:py-24 bg-[#0c1e28] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#01BABC]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#01BABC]/5 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Certification Programs</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Choose from our range of industry-relevant certifications designed to validate your skills and boost your
              employability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <Card
                key={cert.id}
                className="bg-gradient-to-br from-[#122C39] to-[#0a1a24] border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-500 overflow-hidden group hover:-translate-y-2 relative"
              >
                <CardContent className="p-0">
                  <div className={`h-32 relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${cert.color}`}></div>
                    <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
                      <div className="relative">
                        <div className="absolute -inset-10 bg-[#01BABC]/10 rounded-full blur-xl animate-pulse"></div>
                        <div className="bg-[#122C39]/80 rounded-full p-4 relative z-10">
                          <Award className="h-12 w-12 text-[#01BABC]" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#0a1a24] to-transparent"></div>
                  </div>
                  <div className="p-6 relative">
                    {/* Glowing corner accents */}
                    <div className="absolute top-0 right-0 w-10 h-10 overflow-hidden">
                      <div className="absolute top-0 right-0 w-1 h-10 bg-[#01BABC]/30"></div>
                      <div className="absolute top-0 right-0 w-10 h-1 bg-[#01BABC]/30"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-10 h-10 overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-1 h-10 bg-[#01BABC]/30"></div>
                      <div className="absolute bottom-0 left-0 w-10 h-1 bg-[#01BABC]/30"></div>
                    </div>

                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mr-3">
                        {cert.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-[#01BABC] transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                    <p className="text-slate-300 mb-6 text-sm">{cert.description}</p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Key Skills Covered:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-[#01BABC] mr-2 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Now, modify the certification card's Button component to use the Dialog
                    // Find the Button inside the certification card mapping and replace it with this Dialog component: */}
                    {cert.id === "it-ready" ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-[#01BABC]/10 hover:bg-[#01BABC] text-[#01BABC] hover:text-[#122C39] font-medium border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
                            Learn More
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl bg-[#122C39] border-[#01BABC]/30 text-white">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                              <Monitor className="h-6 w-6 text-[#01BABC]" />
                              PCL IT Ready Certified
                            </DialogTitle>
                            <DialogDescription className="text-slate-300">
                              Comprehensive curriculum to prepare you for a career in IT support and technical
                              operations
                            </DialogDescription>
                          </DialogHeader>

                          <Tabs defaultValue="curriculum" className="mt-6">
                            <TabsList className="bg-[#0c1e28] border-b border-[#01BABC]/20 w-full justify-start rounded-none gap-4 px-0">
                              <TabsTrigger
                                value="curriculum"
                                className="data-[state=active]:bg-[#01BABC]/10 data-[state=active]:text-[#01BABC] rounded-t-lg rounded-b-none"
                              >
                                Full Curriculum
                              </TabsTrigger>
                              <TabsTrigger
                                value="exam"
                                className="data-[state=active]:bg-[#01BABC]/10 data-[state=active]:text-[#01BABC] rounded-t-lg rounded-b-none"
                              >
                                Exam Focus Areas
                              </TabsTrigger>
                            </TabsList>

                            <TabsContent
                              value="curriculum"
                              className="mt-4 focus-visible:outline-none focus-visible:ring-0"
                            >
                              <ScrollArea className="h-[60vh] pr-4">
                                <div className="space-y-6">
                                  {cert.curriculum.map((module, idx) => (
                                    <div
                                      key={idx}
                                      className="bg-[#0c1e28] p-5 rounded-lg border border-[#01BABC]/20 hover:border-[#01BABC]/50 transition-all"
                                    >
                                      <div className="flex items-start gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-[#01BABC]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                          {module.icon}
                                        </div>
                                        <div className="flex-1">
                                          <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-white">{module.module}</h3>
                                            {module.examFocus && (
                                              <span className="bg-[#01BABC]/20 text-[#01BABC] text-xs px-2 py-1 rounded-full">
                                                Exam Focus
                                              </span>
                                            )}
                                          </div>
                                          <p className="text-slate-300 text-sm mt-1">{module.description}</p>

                                          <div className="mt-4">
                                            <h4 className="text-sm font-medium text-white mb-2">Topics Covered:</h4>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                              {module.topics.map((topic, topicIdx) => (
                                                <li key={topicIdx} className="flex items-center gap-2">
                                                  <CheckCircle className="h-4 w-4 text-[#01BABC] flex-shrink-0" />
                                                  <span className="text-slate-300 text-sm">{topic}</span>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </ScrollArea>
                            </TabsContent>

                            <TabsContent value="exam" className="mt-4 focus-visible:outline-none focus-visible:ring-0">
                              <div className="bg-[#0c1e28] p-6 rounded-lg border border-[#01BABC]/20">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div>
                                    <h3 className="text-lg font-semibold text-white mb-4">Exam Details</h3>
                                    <ul className="space-y-3">
                                      <li className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-[#01BABC]/10 flex items-center justify-center flex-shrink-0">
                                          <Clock className="h-4 w-4 text-[#01BABC]" />
                                        </div>
                                        <div>
                                          <span className="text-slate-400 text-sm">Duration</span>
                                          <p className="text-white">{cert.examDetails.duration}</p>
                                        </div>
                                      </li>
                                      <li className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-[#01BABC]/10 flex items-center justify-center flex-shrink-0">
                                          <ListChecks className="h-4 w-4 text-[#01BABC]" />
                                        </div>
                                        <div>
                                          <span className="text-slate-400 text-sm">Questions</span>
                                          <p className="text-white">{cert.examDetails.questions}</p>
                                        </div>
                                      </li>
                                      <li className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-[#01BABC]/10 flex items-center justify-center flex-shrink-0">
                                          <LayoutTemplate className="h-4 w-4 text-[#01BABC]" />
                                        </div>
                                        <div>
                                          <span className="text-slate-400 text-sm">Format</span>
                                          <p className="text-white">{cert.examDetails.format}</p>
                                        </div>
                                      </li>
                                      <li className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-[#01BABC]/10 flex items-center justify-center flex-shrink-0">
                                          <Target className="h-4 w-4 text-[#01BABC]" />
                                        </div>
                                        <div>
                                          <span className="text-slate-400 text-sm">Passing Score</span>
                                          <p className="text-white">{cert.examDetails.passingScore}</p>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>

                                  <div>
                                    <h3 className="text-lg font-semibold text-white mb-4">Focus Areas</h3>
                                    <div className="space-y-3">
                                      {cert.examDetails.focusAreas.map((area, areaIdx) => (
                                        <div
                                          key={areaIdx}
                                          className="bg-[#122C39] p-3 rounded-md border border-[#01BABC]/20"
                                        >
                                          <div className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-[#01BABC] flex-shrink-0" />
                                            <span className="text-white">{area}</span>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                <div className="mt-8 bg-[#01BABC]/10 p-4 rounded-lg border border-[#01BABC]/30">
                                  <div className="flex items-start gap-3">
                                    <Lightbulb className="h-6 w-6 text-[#01BABC] flex-shrink-0 mt-1" />
                                    <div>
                                      <h4 className="text-white font-medium">Exam Preparation Tips</h4>
                                      <p className="text-slate-300 text-sm mt-1">
                                        Focus on the modules marked as "Exam Focus" in the curriculum. Practice hands-on
                                        troubleshooting scenarios and review the key concepts in each module. Our
                                        practice exams can help you assess your readiness.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </TabsContent>
                          </Tabs>

                          <div className="flex justify-end mt-4">
                            <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39]">
                              Register for Certification
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    ) : cert.id === "junior-dev" ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-[#01BABC]/10 hover:bg-[#01BABC] text-[#01BABC] hover:text-[#122C39] font-medium border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
                            Learn More
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl bg-[#122C39] border-[#01BABC]/30 text-white">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                              <Code className="h-6 w-6 text-[#01BABC]" />
                              PCL Junior Developer Certified
                            </DialogTitle>
                            <DialogDescription className="text-slate-300">
                              Comprehensive curriculum to prepare you for entry-level development roles
                            </DialogDescription>
                          </DialogHeader>

                          <Tabs defaultValue="curriculum" className="mt-6">
                            <TabsList className="bg-[#0c1e28] border-b border-[#01BABC]/20 w-full justify-start rounded-none gap-4 px-0">
                              <TabsTrigger
                                value="curriculum"
                                className="data-[state=active]:bg-[#01BABC]/10 data-[state=active]:text-[#01BABC] rounded-t-lg rounded-b-none"
                              >
                                Full Curriculum
                              </TabsTrigger>
                              <TabsTrigger
                                value="exam"
                                className="data-[state=active]:bg-[#01BABC]/10 data-[state=active]:text-[#01BABC] rounded-t-lg rounded-b-none"
                              >
                                Exam Focus Areas
                              </TabsTrigger>
                            </TabsList>

                            <TabsContent
                              value="curriculum"
                              className="mt-4 focus-visible:outline-none focus-visible:ring-0"
                            >
                              <ScrollArea className="h-[60vh] pr-4">
                                <div className="space-y-6">
                                  {cert.curriculum.map((module, idx) => (
                                    <div
                                      key={idx}
                                      className="bg-[#0c1e28] p-5 rounded-lg border border-[#01BABC]/20 hover:border-[#01BABC]/50 transition-all"
                                    >
                                      <div className="flex items-start gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-[#01BABC]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                          {module.icon}
                                        </div>
                                        <div className="flex-1">
                                          <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-white">{module.module}</h3>
                                            {module.examFocus && (
                                              <span className="bg-[#01BABC]/20 text-[#01BABC] text-xs px-2 py-1 rounded-full">
                                                Exam Focus
                                              </span>
                                            )}
                                          </div>
                                          <p className="text-slate-300 text-sm mt-1">{module.description}</p>

                                          <div className="mt-4">
                                            <h4 className="text-sm font-medium text-white mb-2">Topics Covered:</h4>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                              {module.topics.map((topic, topicIdx) => (
                                                <li key={topicIdx} className="flex items-center gap-2">
                                                  <CheckCircle className="h-4 w-4 text-[#01BABC] flex-shrink-0" />
                                                  <span className="text-slate-300 text-sm">{topic}</span>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </ScrollArea>
                            </TabsContent>

                            <TabsContent value="exam" className="mt-4 focus-visible:outline-none focus-visible:ring-0">
                              <div className="bg-[#0c1e28] p-6 rounded-lg border border-[#01BABC]/20">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div>
                                    <h3 className="text-lg font-semibold text-white mb-4">Exam Details</h3>
                                    <ul className="space-y-3">
                                      <li className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-[#01BABC]/10 flex items-center justify-center flex-shrink-0">
                                          <Clock className="h-4 w-4 text-[#01BABC]" />
                                        </div>
                                        <div>
                                          <span className="text-slate-400 text-sm">Duration</span>
                                          <p className="text-white">{cert.examDetails.duration}</p>
                                        </div>
                                      </li>
                                      <li className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-[#01BABC]/10 flex items-center justify-center flex-shrink-0">
                                          <ListChecks className="h-4 w-4 text-[#01BABC]" />
                                        </div>
                                        <div>
                                          <span className="text-slate-400 text-sm">Questions</span>
                                          <p className="text-white">{cert.examDetails.questions}</p>
                                        </div>
                                      </li>
                                      <li className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-[#01BABC]/10 flex items-center justify-center flex-shrink-0">
                                          <LayoutTemplate className="h-4 w-4 text-[#01BABC]" />
                                        </div>
                                        <div>
                                          <span className="text-slate-400 text-sm">Format</span>
                                          <p className="text-white">{cert.examDetails.format}</p>
                                        </div>
                                      </li>
                                      <li className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-[#01BABC]/10 flex items-center justify-center flex-shrink-0">
                                          <Target className="h-4 w-4 text-[#01BABC]" />
                                        </div>
                                        <div>
                                          <span className="text-slate-400 text-sm">Passing Score</span>
                                          <p className="text-white">{cert.examDetails.passingScore}</p>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>

                                  <div>
                                    <h3 className="text-lg font-semibold text-white mb-4">Focus Areas</h3>
                                    <div className="space-y-3">
                                      {cert.examDetails.focusAreas.map((area, areaIdx) => (
                                        <div
                                          key={areaIdx}
                                          className="bg-[#122C39] p-3 rounded-md border border-[#01BABC]/20"
                                        >
                                          <div className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-[#01BABC] flex-shrink-0" />
                                            <span className="text-white">{area}</span>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                <div className="mt-8 bg-[#01BABC]/10 p-4 rounded-lg border border-[#01BABC]/30">
                                  <div className="flex items-start gap-3">
                                    <Lightbulb className="h-6 w-6 text-[#01BABC] flex-shrink-0 mt-1" />
                                    <div>
                                      <h4 className="text-white font-medium">Exam Preparation Tips</h4>
                                      <p className="text-slate-300 text-sm mt-1">
                                        Focus on building practical projects that combine HTML, CSS, and JavaScript.
                                        Practice React component creation and state management. Make sure you understand
                                        Git workflows and can demonstrate proper version control practices. Our coding
                                        challenges will help you prepare for the practical portions of the exam.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </TabsContent>
                          </Tabs>

                          <div className="flex justify-end mt-4">
                            <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39]">
                              Register for Certification
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <Button className="w-full bg-[#01BABC]/10 hover:bg-[#01BABC] text-[#01BABC] hover:text-[#122C39] font-medium border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
                        Learn More
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-[#01BABC]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-[#01BABC]/5 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Certification Pricing</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Choose the plan that best fits your learning needs and budget. All certifications are available in each
              pricing tier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-[#122C39] to-[#0a1a24] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular ? "border-2 border-[#01BABC]" : "border border-[#01BABC]/20"
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-[#01BABC] text-[#122C39] font-semibold text-xs px-4 py-1 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                <div className={`p-6 ${plan.popular ? "bg-[#01BABC]/10" : ""} relative`}>
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-1 h-16 bg-[#01BABC]/20"></div>
                    <div className="absolute top-0 right-0 w-16 h-1 bg-[#01BABC]/20"></div>
                  </div>

                  <div className="flex items-center mb-2">
                    <div className="h-8 w-8 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mr-3">
                      {plan.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                  </div>
                  <div className="flex items-baseline mb-1">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">/ per certification</span>
                  </div>
                  <p className="text-slate-300 text-sm mb-4">{plan.description}</p>
                </div>
                <div className="p-6 relative">
                  <ul className="space-y-4 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        {feature.included ? (
                          <CheckCircle className="h-5 w-5 text-[#01BABC] mr-3 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-slate-500 mr-3 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-slate-300" : "text-slate-500 line-through"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39]"
                        : "bg-[#01BABC]/10 hover:bg-[#01BABC] text-[#01BABC] hover:text-[#122C39] border border-[#01BABC]/20 hover:border-[#01BABC]"
                    } font-medium transition-all duration-300 relative overflow-hidden group`}
                  >
                    <span className="relative z-10">{plan.cta}</span>
                    <span className="absolute inset-0 bg-[#01BABC]/0 group-hover:bg-[#01BABC]/20 transition-all duration-300"></span>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-[#122C39] rounded-xl p-6 border border-[#01BABC]/20">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-[#01BABC]/10 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <Zap className="h-5 w-5 text-[#01BABC]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Special Offer for Organizations</h3>
                <p className="text-slate-300 mb-4">
                  Looking to certify multiple team members? Contact us for special group rates and custom training
                  programs tailored to your organization's needs.
                </p>
                <Button className="bg-transparent hover:bg-[#01BABC]/10 text-[#01BABC] border border-[#01BABC]/30 hover:border-[#01BABC]">
                  Contact for Group Rates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="py-16 md:py-24 bg-[#0c1e28] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMUJBQkMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aC0ydi00aDJ2NHptMC02di00aC0ydjRoMnpNMzAgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#01BABC]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#01BABC]/30 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Certification Process</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our streamlined certification process makes it easy to validate your skills and earn your credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-[#01BABC]/20 hidden md:block"></div>

            <div className="bg-gradient-to-br from-[#122C39] to-[#0a1a24] p-6 rounded-xl border border-[#01BABC]/20 relative group hover:border-[#01BABC] transition-all duration-300">
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-[#01BABC] text-[#122C39] flex items-center justify-center font-bold text-lg z-10">
                1
              </div>
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-[#01BABC]/50 animate-pulse blur-md"></div>
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4 group-hover:bg-[#01BABC]/20 transition-colors">
                <BookOpen className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Prepare</h3>
              <p className="text-slate-300 text-sm">
                Study with our comprehensive course materials or use your existing knowledge.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#122C39] to-[#0a1a24] p-6 rounded-xl border border-[#01BABC]/20 relative group hover:border-[#01BABC] transition-all duration-300">
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-[#01BABC] text-[#122C39] flex items-center justify-center font-bold text-lg z-10">
                2
              </div>
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-[#01BABC]/50 animate-pulse blur-md"></div>
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4 group-hover:bg-[#01BABC]/20 transition-colors">
                <Code className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Practice</h3>
              <p className="text-slate-300 text-sm">Test your skills with practice exercises and sample questions.</p>
            </div>

            <div className="bg-gradient-to-br from-[#122C39] to-[#0a1a24] p-6 rounded-xl border border-[#01BABC]/20 relative group hover:border-[#01BABC] transition-all duration-300">
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-[#01BABC] text-[#122C39] flex items-center justify-center font-bold text-lg z-10">
                3
              </div>
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-[#01BABC]/50 animate-pulse blur-md"></div>
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4 group-hover:bg-[#01BABC]/20 transition-colors">
                <Monitor className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Take Exam</h3>
              <p className="text-slate-300 text-sm">
                Complete the certification exam with a score of 70% or higher to pass.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#122C39] to-[#0a1a24] p-6 rounded-xl border border-[#01BABC]/20 relative group hover:border-[#01BABC] transition-all duration-300">
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-[#01BABC] text-[#122C39] flex items-center justify-center font-bold text-lg z-10">
                4
              </div>
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-[#01BABC]/50 animate-pulse blur-md"></div>
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4 group-hover:bg-[#01BABC]/20 transition-colors">
                <Award className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Get Certified</h3>
              <p className="text-slate-300 text-sm">
                Receive your digital certificate and showcase your skills to employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#01BABC]/10 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#01BABC]/5 filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Success Stories</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Hear from professionals who have advanced their careers with our certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-[#01BABC]/20 mr-4"></div>
                <div>
                  <h4 className="text-white font-medium">Ahmed Hassan</h4>
                  <p className="text-slate-400 text-sm">Web Developer</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                "The PCL Web Design certification helped me land my first job as a front-end developer. The practical
                focus of the exam prepared me for real-world challenges."
              </p>
              <div className="flex text-[#01BABC]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-[#01BABC]/20 mr-4"></div>
                <div>
                  <h4 className="text-white font-medium">Fatima Omar</h4>
                  <p className="text-slate-400 text-sm">IT Support Specialist</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                "The PCL IT Ready certification gave me the confidence and credentials I needed to transition into a
                technical role. The comprehensive training was invaluable."
              </p>
              <div className="flex text-[#01BABC]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-[#01BABC]/20 mr-4"></div>
                <div>
                  <h4 className="text-white font-medium">Mohamed Ali</h4>
                  <p className="text-slate-400 text-sm">Junior Developer</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                "The PCL Junior Developer certification was the perfect starting point for my programming career. The
                skills I learned are directly applicable to my daily work."
              </p>
              <div className="flex text-[#01BABC]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-white text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-white">How are the exams conducted?</h3>
                <p className="text-slate-300">
                  Our certification exams are conducted online through our secure testing platform. You can take the
                  exam from anywhere with a stable internet connection. The exams include multiple-choice questions,
                  practical exercises, and project-based assessments to thoroughly evaluate your skills.
                </p>
              </div>

              <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-white">What is the passing score?</h3>
                <p className="text-slate-300">
                  The passing score for all certification exams is 70%. Upon passing, you will receive your digital
                  certificate immediately, which you can share on your resume and professional profiles.
                </p>
              </div>

              <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-white">How long are the certifications valid?</h3>
                <p className="text-slate-300">
                  Penn Creative Lab certifications are valid for 2 years. After this period, you can renew your
                  certification by taking a refresher exam at a reduced cost to ensure your knowledge remains current.
                </p>
              </div>

              <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-white">Are there any prerequisites?</h3>
                <p className="text-slate-300">
                  While there are no strict prerequisites for our certification exams, we recommend having basic
                  knowledge in the relevant field. Our preparatory courses can help you build the necessary skills
                  before taking the certification exam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#01BABC]/10 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#01BABC]/5 filter blur-3xl animate-pulse"></div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full border border-[#01BABC]/20 opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full border border-[#01BABC]/10 opacity-20"></div>
        <div className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full bg-[#01BABC]/30 blur-sm"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full bg-[#01BABC]/40 blur-sm"></div>

        {/* Animated certification icon */}
        <div className="absolute top-20 right-[20%] opacity-20">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#01BABC]/10 rounded-full blur-xl animate-pulse"></div>
            <Award className="h-16 w-16 text-[#01BABC]/50 animate-float" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[#122C39] to-[#0a1a24] rounded-2xl p-10 border border-[#01BABC]/20 shadow-lg relative overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1 h-20 bg-[#01BABC]/30"></div>
                <div className="absolute top-0 right-0 w-20 h-1 bg-[#01BABC]/30"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-20 h-20 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-1 h-20 bg-[#01BABC]/30"></div>
                <div className="absolute bottom-0 left-0 w-20 h-1 bg-[#01BABC]/30"></div>
              </div>

              {/* Glowing accent */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#01BABC]/5 rounded-full blur-3xl"></div>

              <div className="text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Certified?</h2>
                <p className="text-xl text-slate-300 mb-8">
                  Take the next step in your career by earning a Penn Creative Lab certification. Our
                  industry-recognized credentials will help you stand out in the job market.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white font-medium relative overflow-hidden group"
                  >
                    <Link href="/contact">
                      <span className="relative z-10">Register for an Exam</span>
                      <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-[#01BABC] text-[#01BABC] hover:bg-[#01BABC]/10 relative overflow-hidden group"
                  >
                    <Link href="/courses">
                      <span className="relative z-10">Prepare with Our Courses</span>
                      <span className="absolute inset-0 bg-[#01BABC]/0 group-hover:bg-[#01BABC]/5 transition-all duration-300"></span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
