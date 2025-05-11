"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Paintbrush,
  Code,
  PenTool,
  Zap,
  ExternalLink,
  MessageSquare,
  ImageIcon,
  Sparkles,
  Bot,
  Wand2,
  Layers,
  Cpu,
  Palette,
  Layout,
  FileText,
  PresentationIcon,
  Star,
  Search,
  Bookmark,
  TrendingUp,
  Lightbulb,
  Aperture,
  Gem,
  Feather,
  Video,
  Mic,
  Eraser,
  Framer,
  Github,
  Terminal,
  Maximize,
} from "lucide-react"

export default function AIToolsPage() {
  const [activeSection, setActiveSection] = useState("")
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sections = document.querySelectorAll("section[id]")

      // Update active section for navigation
      let currentSection = ""
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionHeight = (section as HTMLElement).offsetHeight
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id") || ""
        }
      })
      setActiveSection(currentSection)

      // Check if we should make the navigation sticky
      setIsSticky(scrollPosition > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  // Design Tools
  const designTools = [
    {
      name: "Canva AI",
      description: "Create stunning posters, infographics, and marketing materials with AI-powered design assistance.",
      icon: <Paintbrush className="h-8 w-8 text-[#01BABC]" />,
      link: "https://www.canva.com/",
      color: "from-purple-500/20 to-pink-500/10",
      tags: ["Design", "Marketing", "Social Media"],
      rating: 4.8,
    },
    {
      name: "Khroma",
      description:
        "AI color palette generator that learns your preferences and creates personalized color combinations.",
      icon: <Palette className="h-8 w-8 text-[#01BABC]" />,
      link: "https://www.khroma.co/",
      color: "from-blue-500/20 to-indigo-500/10",
      tags: ["Colors", "Design", "Branding"],
      rating: 4.6,
    },
    {
      name: "Looka",
      description: "AI-powered logo maker that creates custom, professional logos based on your preferences.",
      icon: <Aperture className="h-8 w-8 text-[#01BABC]" />,
      link: "https://looka.com/",
      color: "from-green-500/20 to-emerald-500/10",
      tags: ["Logo", "Branding", "Identity"],
      rating: 4.5,
    },
    {
      name: "Uizard",
      description: "Transform hand-drawn sketches into digital UI designs with AI-powered recognition technology.",
      icon: <Layout className="h-8 w-8 text-[#01BABC]" />,
      link: "https://uizard.io/",
      color: "from-amber-500/20 to-yellow-500/10",
      tags: ["UI/UX", "Wireframing", "Prototyping"],
      rating: 4.7,
    },
    {
      name: "Designs.ai",
      description: "Create complete marketing kits including logos, videos, banners, and mockups with AI assistance.",
      icon: <Layers className="h-8 w-8 text-[#01BABC]" />,
      link: "https://designs.ai/",
      color: "from-red-500/20 to-rose-500/10",
      tags: ["Marketing", "Branding", "Video"],
      rating: 4.4,
    },
    {
      name: "Artboard Studio",
      description: "Create professional product mockups and scenes with AI-powered composition and editing tools.",
      icon: <Framer className="h-8 w-8 text-[#01BABC]" />,
      link: "https://artboard.studio/",
      color: "from-cyan-500/20 to-teal-500/10",
      tags: ["Mockups", "Product", "3D"],
      rating: 4.5,
    },
  ]

  // Text Generation Tools
  const textTools = [
    {
      name: "ChatGPT",
      description:
        "Versatile AI assistant that can generate text, answer questions, and help with various writing tasks.",
      icon: <MessageSquare className="h-8 w-8 text-[#01BABC]" />,
      link: "https://chat.openai.com/",
      color: "from-green-500/20 to-emerald-500/10",
      tags: ["Writing", "Research", "Creative"],
      rating: 4.9,
    },
    {
      name: "Copy.ai",
      description: "Generate high-quality marketing copy, blog posts, and social media content with AI assistance.",
      icon: <FileText className="h-8 w-8 text-[#01BABC]" />,
      link: "https://www.copy.ai/",
      color: "from-blue-500/20 to-sky-500/10",
      tags: ["Marketing", "Copywriting", "Social Media"],
      rating: 4.6,
    },
    {
      name: "Jasper",
      description: "AI content platform that helps create marketing copy, blog posts, and long-form content.",
      icon: <PenTool className="h-8 w-8 text-[#01BABC]" />,
      link: "https://www.jasper.ai/",
      color: "from-orange-500/20 to-amber-500/10",
      tags: ["Content", "Marketing", "SEO"],
      rating: 4.7,
    },
    {
      name: "Notion AI",
      description: "Integrated AI writing assistant that helps draft, edit, and summarize content within Notion.",
      icon: <Feather className="h-8 w-8 text-[#01BABC]" />,
      link: "https://www.notion.so/product/ai",
      color: "from-neutral-500/20 to-stone-500/10",
      tags: ["Productivity", "Notes", "Summaries"],
      rating: 4.5,
    },
    {
      name: "Sudowrite",
      description: "AI writing tool designed specifically for creative writers, novelists, and storytellers.",
      icon: <Sparkles className="h-8 w-8 text-[#01BABC]" />,
      link: "https://www.sudowrite.com/",
      color: "from-purple-500/20 to-violet-500/10",
      tags: ["Creative", "Fiction", "Stories"],
      rating: 4.4,
    },
    {
      name: "Writesonic",
      description: "AI writing platform for creating SEO-optimized blog posts, ads, and marketing content.",
      icon: <Bot className="h-8 w-8 text-[#01BABC]" />,
      link: "https://writesonic.com/",
      color: "from-indigo-500/20 to-blue-500/10",
      tags: ["SEO", "Blogs", "Ads"],
      rating: 4.5,
    },
  ]

  // Presentation Tools
  const presentationTools = [
    {
      name: "Beautiful.ai",
      description: "AI-powered presentation software that automatically designs slides as you add content.",
      icon: <PresentationIcon className="h-8 w-8 text-[#01BABC]" />,
      link: "https://www.beautiful.ai/",
      color: "from-blue-500/20 to-indigo-500/10",
      tags: ["Presentations", "Design", "Business"],
      rating: 4.7,
    },
    {
      name: "Tome.app",
      description: "AI-powered storytelling format that generates visually stunning, narrative-driven presentations.",
      icon: <Bookmark className="h-8 w-8 text-[#01BABC]" />,
      link: "https://tome.app/",
      color: "from-purple-500/20 to-violet-500/10",
      tags: ["Storytelling", "Narrative", "Visual"],
      rating: 4.8,
    },
    {
      name: "Pitch",
      description: "Collaborative presentation platform with AI-powered design and data visualization tools.",
      icon: <TrendingUp className="h-8 w-8 text-[#01BABC]" />,
      link: "https://pitch.com/",
      color: "from-green-500/20 to-emerald-500/10",
      tags: ["Collaboration", "Teams", "Data"],
      rating: 4.6,
    },
    {
      name: "Gamma.app",
      description: "Create beautiful, web-based presentations and documents with AI-generated content and design.",
      icon: <Lightbulb className="h-8 w-8 text-[#01BABC]" />,
      link: "https://gamma.app/",
      color: "from-amber-500/20 to-yellow-500/10",
      tags: ["Web-based", "Interactive", "Modern"],
      rating: 4.7,
    },
    {
      name: "SlidesAI",
      description: "Generate complete presentations from text prompts or outlines with AI-powered slide creation.",
      icon: <Wand2 className="h-8 w-8 text-[#01BABC]" />,
      link: "https://www.slidesai.io/",
      color: "from-red-500/20 to-rose-500/10",
      tags: ["Automation", "Time-saving", "Content"],
      rating: 4.5,
    },
    {
      name: "Prezo",
      description: "AI presentation tool that transforms your ideas into visually engaging slides with minimal effort.",
      icon: <Maximize className="h-8 w-8 text-[#01BABC]" />,
      link: "https://prezo.ai/",
      color: "from-cyan-500/20 to-teal-500/10",
      tags: ["Visual", "Simple", "Quick"],
      rating: 4.4,
    },
  ]

  // Code Generator Tools
  const codeTools = [
    {
      name: "GitHub Copilot",
      description: "AI pair programmer that suggests code completions based on context from comments and code.",
      icon: <Github className="h-8 w-8 text-[#01BABC]" />,
      link: "https://github.com/features/copilot",
      color: "from-neutral-500/20 to-stone-500/10",
      tags: ["Coding", "Productivity", "Suggestions"],
      rating: 4.9,
    },
    {
      name: "Codeium",
      description: "Free AI-powered code completion tool that works across multiple IDEs and programming languages.",
      icon: <Code className="h-8 w-8 text-[#01BABC]" />,
      link: "https://codeium.com/",
      color: "from-blue-500/20 to-indigo-500/10",
      tags: ["Free", "Multi-language", "IDE"],
      rating: 4.7,
    },
    {
      name: "Replit Ghostwriter",
      description: "AI coding assistant integrated into Replit that helps generate, explain, and transform code.",
      icon: <Terminal className="h-8 w-8 text-[#01BABC]" />,
      link: "https://replit.com/ghostwriter",
      color: "from-orange-500/20 to-amber-500/10",
      tags: ["Online IDE", "Learning", "Explanation"],
      rating: 4.6,
    },
  ]

  // Editor's Picks
  const editorsPicks = [
    {
      name: "RunwayML",
      description: "Advanced AI video editing platform with tools for content generation, editing, and visual effects.",
      icon: <Video className="h-8 w-8 text-[#01BABC]" />,
      link: "https://runwayml.com/",
      color: "from-purple-500/20 to-pink-500/10",
      tags: ["Video", "Editing", "VFX"],
      rating: 4.8,
    },
    {
      name: "Leonardo.ai",
      description: "Advanced AI art generation platform with fine-tuned control over styles and compositions.",
      icon: <ImageIcon className="h-8 w-8 text-[#01BABC]" />,
      link: "https://leonardo.ai/",
      color: "from-blue-500/20 to-indigo-500/10",
      tags: ["Art", "Generation", "Creative"],
      rating: 4.7,
    },
    {
      name: "Durable",
      description: "AI website builder that creates complete, customized websites in under a minute.",
      icon: <Zap className="h-8 w-8 text-[#01BABC]" />,
      link: "https://durable.co/",
      color: "from-green-500/20 to-emerald-500/10",
      tags: ["Website", "Builder", "Quick"],
      rating: 4.6,
    },
    {
      name: "Voicemaker",
      description: "Create realistic AI voiceovers in multiple languages and styles for videos and presentations.",
      icon: <Mic className="h-8 w-8 text-[#01BABC]" />,
      link: "https://voicemaker.in/",
      color: "from-amber-500/20 to-yellow-500/10",
      tags: ["Voice", "Audio", "Multilingual"],
      rating: 4.5,
    },
    {
      name: "Cleanup.pictures",
      description: "AI-powered tool that removes unwanted objects, people, or text from images with a simple brush.",
      icon: <Eraser className="h-8 w-8 text-[#01BABC]" />,
      link: "https://cleanup.pictures/",
      color: "from-red-500/20 to-rose-500/10",
      tags: ["Photo Editing", "Removal", "Cleanup"],
      rating: 4.7,
    },
  ]

  // Tool Card Component
  const ToolCard = ({ tool, featured = false }) => (
    <Card
      className={`bg-[#122C39] border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-500 overflow-hidden group hover:-translate-y-2 ${featured ? "border-[#01BABC]/50" : ""}`}
    >
      <CardContent className="p-0">
        <div className={`h-32 bg-gradient-to-r ${tool.color} relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#122C39]/80 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
              {tool.icon}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#122C39] to-transparent"></div>

          {featured && (
            <div className="absolute top-3 right-3 bg-[#01BABC] text-[#0C1E28] text-xs font-bold px-2 py-1 rounded-full flex items-center">
              <Star className="h-3 w-3 mr-1 fill-[#0C1E28]" />
              Editor&apos;s Pick
            </div>
          )}

          <div className="absolute top-3 left-3 bg-[#0C1E28]/70 text-[#01BABC] text-xs font-medium px-2 py-1 rounded-full flex items-center">
            <Star className="h-3 w-3 mr-1 fill-[#01BABC]/20" />
            {tool.rating}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#01BABC] transition-colors">
            {tool.name}
          </h3>
          <p className="text-slate-300 mb-4 text-sm">{tool.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tool.tags.map((tag, index) => (
              <span key={index} className="text-xs bg-[#0C1E28] text-[#01BABC]/80 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto">
            <Button
              asChild
              className="w-full bg-[#01BABC]/10 hover:bg-[#01BABC] text-[#01BABC] hover:text-[#122C39] font-medium border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300"
            >
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                Try Now <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="pt-24 bg-[#0C1E28]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C1E28] via-[#122C39] to-[#0C1E28]"></div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#01BABC]/10 filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#01BABC]/5 filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-[#01BABC]/10 filter blur-2xl"></div>

          {/* Animated Floating Icons */}
          <div className="absolute top-1/4 left-1/4 animate-float-slow opacity-20">
            <Paintbrush className="h-16 w-16 text-[#01BABC]" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float opacity-20" style={{ animationDelay: "1s" }}>
            <MessageSquare className="h-12 w-12 text-[#01BABC]" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-float-slow opacity-20" style={{ animationDelay: "2s" }}>
            <Code className="h-14 w-14 text-[#01BABC]" />
          </div>
          <div className="absolute top-2/3 right-1/3 animate-float opacity-20" style={{ animationDelay: "1.5s" }}>
            <PresentationIcon className="h-10 w-10 text-[#01BABC]" />
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6 animate-fade-in">
              <Cpu className="h-5 w-5 mr-2" />
              <span>Discover the Future</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
              Explore the Best <span className="text-[#01BABC]">AI Tools</span> for Every Need
            </h1>
            <p className="text-xl text-slate-300 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Curated collection of powerful AI tools to enhance your creativity, productivity, and workflow.
            </p>

            <div className="relative max-w-xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for AI tools..."
                  className="w-full bg-[#0A1A24] border border-[#01BABC]/20 focus:border-[#01BABC] rounded-full py-3 pl-12 pr-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#01BABC]/20"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button
                className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white font-medium"
                onClick={() => scrollToSection("design-tools")}
              >
                Design Tools
              </Button>
              <Button
                variant="outline"
                className="border-[#01BABC] text-[#01BABC] hover:bg-[#01BABC]/10"
                onClick={() => scrollToSection("text-tools")}
              >
                Text Generation
              </Button>
              <Button
                variant="outline"
                className="border-[#01BABC] text-[#01BABC] hover:bg-[#01BABC]/10"
                onClick={() => scrollToSection("presentation-tools")}
              >
                Presentations
              </Button>
              <Button
                variant="outline"
                className="border-[#01BABC] text-[#01BABC] hover:bg-[#01BABC]/10"
                onClick={() => scrollToSection("editors-picks")}
              >
                Editor&apos;s Picks
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div
        className={`sticky top-20 z-50 bg-[#0A1A24]/80 backdrop-blur-lg border-y border-[#01BABC]/10 py-3 transition-all duration-300 ${isSticky ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between overflow-x-auto hide-scrollbar">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("design-tools")}
                className={`flex items-center whitespace-nowrap px-3 py-2 rounded-full text-sm font-medium transition-colors ${activeSection === "design-tools" ? "bg-[#01BABC]/20 text-[#01BABC]" : "text-slate-300 hover:text-white"}`}
              >
                <Paintbrush className="h-4 w-4 mr-2" />
                Design Tools
              </button>
              <button
                onClick={() => scrollToSection("text-tools")}
                className={`flex items-center whitespace-nowrap px-3 py-2 rounded-full text-sm font-medium transition-colors ${activeSection === "text-tools" ? "bg-[#01BABC]/20 text-[#01BABC]" : "text-slate-300 hover:text-white"}`}
              >
                <FileText className="h-4 w-4 mr-2" />
                Text Generation
              </button>
              <button
                onClick={() => scrollToSection("presentation-tools")}
                className={`flex items-center whitespace-nowrap px-3 py-2 rounded-full text-sm font-medium transition-colors ${activeSection === "presentation-tools" ? "bg-[#01BABC]/20 text-[#01BABC]" : "text-slate-300 hover:text-white"}`}
              >
                <PresentationIcon className="h-4 w-4 mr-2" />
                Presentations
              </button>
              <button
                onClick={() => scrollToSection("code-tools")}
                className={`flex items-center whitespace-nowrap px-3 py-2 rounded-full text-sm font-medium transition-colors ${activeSection === "code-tools" ? "bg-[#01BABC]/20 text-[#01BABC]" : "text-slate-300 hover:text-white"}`}
              >
                <Code className="h-4 w-4 mr-2" />
                Code Generators
              </button>
              <button
                onClick={() => scrollToSection("editors-picks")}
                className={`flex items-center whitespace-nowrap px-3 py-2 rounded-full text-sm font-medium transition-colors ${activeSection === "editors-picks" ? "bg-[#01BABC]/20 text-[#01BABC]" : "text-slate-300 hover:text-white"}`}
              >
                <Star className="h-4 w-4 mr-2" />
                Editor&apos;s Picks
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Design Tools Section */}
      <section id="design-tools" className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#01BABC]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#01BABC]/5 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center mb-12">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#01BABC]/20 to-[#01BABC]/5 flex items-center justify-center mr-6 border border-[#01BABC]/20">
              <Paintbrush className="h-8 w-8 text-[#01BABC]" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">AI for Design & Creativity</h2>
              <p className="text-slate-300 mt-2">
                Powerful AI tools that enhance your creative process and design workflow
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designTools.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Text Generation Tools Section */}
      <section id="text-tools" className="py-16 md:py-24 bg-[#0A1A24] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-[#01BABC]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-[#01BABC]/5 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center mb-12">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#01BABC]/20 to-[#01BABC]/5 flex items-center justify-center mr-6 border border-[#01BABC]/20">
              <FileText className="h-8 w-8 text-[#01BABC]" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">AI for Writing & Content Creation</h2>
              <p className="text-slate-300 mt-2">
                Revolutionary tools that generate and enhance text content for various purposes
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {textTools.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Presentation Tools Section */}
      <section id="presentation-tools" className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#01BABC]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#01BABC]/5 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center mb-12">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#01BABC]/20 to-[#01BABC]/5 flex items-center justify-center mr-6 border border-[#01BABC]/20">
              <PresentationIcon className="h-8 w-8 text-[#01BABC]" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">AI for Slide & Presentation Design</h2>
              <p className="text-slate-300 mt-2">
                Smart tools that help create stunning presentations with minimal effort
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {presentationTools.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Code Generator Tools Section */}
      <section id="code-tools" className="py-16 md:py-24 bg-[#0A1A24] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-[#01BABC]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1/4 h-1/4 bg-[#01BABC]/5 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center mb-12">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#01BABC]/20 to-[#01BABC]/5 flex items-center justify-center mr-6 border border-[#01BABC]/20">
              <Code className="h-8 w-8 text-[#01BABC]" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">AI for Developers</h2>
              <p className="text-slate-300 mt-2">
                Coding assistants that help write, debug, and optimize code across languages
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {codeTools.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Editor's Picks Section */}
      <section id="editors-picks" className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C1E28] via-[#122C39]/50 to-[#0C1E28]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#01BABC]/5 filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center mb-12">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#01BABC]/20 to-[#01BABC]/5 flex items-center justify-center mr-6 border border-[#01BABC]/20">
              <Gem className="h-8 w-8 text-[#01BABC]" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Hidden Gems Worth Exploring</h2>
              <p className="text-slate-300 mt-2">
                Exceptional AI tools that stand out for their unique capabilities and innovation
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {editorsPicks.map((tool, index) => (
              <ToolCard key={index} tool={tool} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#01BABC]/10 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#01BABC]/5 filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Enhance Your Skills?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Combine these powerful AI tools with our courses to maximize your learning and productivity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white font-medium"
              >
                <Link href="/courses">Explore Our Courses</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#01BABC] text-[#01BABC] hover:bg-[#01BABC]/10"
              >
                <Link href="/certifications">View Certifications</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
