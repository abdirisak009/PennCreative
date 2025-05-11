"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Globe, Paintbrush, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Project data
const projects = [
  {
    id: 1,
    title: "YWDI - Young Women Dialogue Inclusion",
    description: "Non-profit organization website promoting women's inclusion and dialogue in Somalia",
    image: "/images/ywdi-website.jpeg",
    category: "websites",
    link: "https://ywdi.org/",
    icon: <Globe className="h-5 w-5 text-[#01BABC]" />,
  },
  {
    id: 2,
    title: "HugoDress E-commerce",
    description: "Fashion e-commerce platform with vibrant design and intuitive shopping experience",
    image: "/images/hugodress-screenshot.png",
    category: "websites",
    link: "https://ywdi.org/",
    icon: <Globe className="h-5 w-5 text-[#01BABC]" />,
  },
  {
    id: 3,
    title: "Ministry of Finance",
    description: "Official government website for the Ministry of Finance of Hirshabelle State",
    image: "/images/hirshabelle-hero.jpeg",
    category: "websites",
    link: "https://ywdi.org/",
    icon: <Globe className="h-5 w-5 text-[#01BABC]" />,
  },
  {
    id: 4,
    title: "Hayle Barise Technical Center",
    description: "Educational platform with program information and student resources",
    image: "/images/hayle-barise-hero.png",
    category: "websites",
    link: "https://ywdi.org/",
    icon: <Globe className="h-5 w-5 text-[#01BABC]" />,
  },
  {
    id: 5,
    title: "Portal Engineering",
    description: "Expert consulting and supervision services for building and road construction projects",
    image: "/images/portal-engineering.png",
    category: "websites",
    link: "https://ywdi.org/",
    icon: <Globe className="h-5 w-5 text-[#01BABC]" />,
  },
  {
    id: 6,
    title: "Geodacity",
    description: "Comprehensive geospatial solutions and surveying services for accurate mapping and analysis",
    image: "/images/geodacity.png",
    category: "websites",
    link: "https://ywdi.org/",
    icon: <Globe className="h-5 w-5 text-[#01BABC]" />,
  },
  {
    id: 7,
    title: "Ogaal TV",
    description: "News and media platform delivering current events and information in Somali language",
    image: "/images/ogaaltv-new.png",
    category: "websites",
    link: "https://ywdi.org/",
    icon: <Globe className="h-5 w-5 text-[#01BABC]" />,
  },
  {
    id: 8,
    title: "Beta Care Diagnostic Ltd",
    description: "Complete brand identity for a healthcare diagnostic center",
    image: "/images/betacare-logo-new.png",
    category: "branding",
    link: "/projects/betacare",
    icon: <Paintbrush className="h-5 w-5 text-[#01BABC]" />,
  },
  {
    id: 9,
    title: "HugoDress Fashion Brand",
    description: "Vibrant brand identity for a fashion e-commerce platform",
    image: "/images/hugodress-logo-embossed.png",
    category: "branding",
    link: "/projects/hugodress",
    icon: <Paintbrush className="h-5 w-5 text-[#01BABC]" />,
  },
  {
    id: 10,
    title: "SONAK",
    description: "Educational platform offering professional networking and IT training courses",
    image: "/images/sonak.png",
    category: "websites",
    link: "https://ywdi.org/",
    icon: <Globe className="h-5 w-5 text-[#01BABC]" />,
  },
  {
    id: 11,
    title: "Somali Health Awards",
    description: "Platform recognizing significant contributions in the Somali healthcare sector",
    image: "/images/somali-health-awards.png",
    category: "websites",
    link: "https://ywdi.org/",
    icon: <Globe className="h-5 w-5 text-[#01BABC]" />,
  },
  {
    id: 12,
    title: "MAJSI - SIU Students Union",
    description: "Official website for the Somali International University Students Union",
    image: "/images/majsi-siu.png",
    category: "websites",
    link: "https://ywdi.org/",
    icon: <Globe className="h-5 w-5 text-[#01BABC]" />,
  },
  {
    id: 13,
    title: "Baraarug Consulting Firm",
    description: "Professional consulting firm website offering innovative solutions",
    image: "/images/baraarug-consulting.png",
    category: "websites",
    link: "https://ywdi.org/",
    icon: <Globe className="h-5 w-5 text-[#01BABC]" />,
  },
  {
    id: 14,
    title: "ZoyaExpress",
    description: "E-commerce platform for retail products with streamlined shopping experience",
    image: "/images/zoyaexpress.png",
    category: "websites",
    link: "https://ywdi.org/",
    icon: <Globe className="h-5 w-5 text-[#01BABC]" />,
  },
  {
    id: 15,
    title: "Somali Weightlifting Federation",
    description: "Official website for the Somali Weightlifting Federation with event information",
    image: "/images/swf-somali-weightlifting.png",
    category: "websites",
    link: "https://ywdi.org/",
    icon: <Globe className="h-5 w-5 text-[#01BABC]" />,
  },
]

export function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-[#0c1e28] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#01BABC]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#01BABC]/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6">
            <Briefcase className="h-5 w-5 mr-2" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Stunning Projects</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Explore our portfolio of innovative designs and solutions that showcase our expertise and creativity.
          </p>
        </div>

        <Tabs defaultValue="featured" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-[#122C39] border border-[#01BABC]/20 p-1">
              <TabsTrigger
                value="featured"
                className="data-[state=active]:bg-[#01BABC]/10 data-[state=active]:text-[#01BABC] px-6 py-2"
              >
                Featured Projects
              </TabsTrigger>
              <TabsTrigger
                value="software"
                className="data-[state=active]:bg-[#01BABC]/10 data-[state=active]:text-[#01BABC] px-6 py-2"
              >
                Software
              </TabsTrigger>
              <TabsTrigger
                value="websites"
                className="data-[state=active]:bg-[#01BABC]/10 data-[state=active]:text-[#01BABC] px-6 py-2"
              >
                Websites
              </TabsTrigger>
              <TabsTrigger
                value="branding"
                className="data-[state=active]:bg-[#01BABC]/10 data-[state=active]:text-[#01BABC] px-6 py-2"
              >
                Branding
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="featured" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => project.category === "websites")
                .slice(0, 6)
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    activeProject={activeProject}
                    setActiveProject={setActiveProject}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="software" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => project.category === "software")
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    activeProject={activeProject}
                    setActiveProject={setActiveProject}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="websites" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => project.category === "websites")
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    activeProject={activeProject}
                    setActiveProject={setActiveProject}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="branding" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => project.category === "branding")
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    activeProject={activeProject}
                    setActiveProject={setActiveProject}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-[#01BABC] text-[#01BABC] hover:bg-[#01BABC]/10">
            <Link href="/projects" className="flex items-center">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// Project Card Component
function ProjectCard({
  project,
  activeProject,
  setActiveProject,
}: {
  project: any
  activeProject: number | null
  setActiveProject: (id: number | null) => void
}) {
  return (
    <motion.div
      key={project.id}
      className="group relative h-[350px] rounded-xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: project.id * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setActiveProject(project.id)}
      onHoverEnd={() => setActiveProject(null)}
    >
      {/* Project Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          priority={project.id <= 3}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e28] via-[#0c1e28]/70 to-transparent opacity-80"></div>
      </div>

      {/* Category Tag */}
      <div className="absolute top-4 left-4 bg-[#01BABC] text-[#122C39] px-3 py-1 rounded-full text-xs font-medium z-10">
        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
      </div>

      {/* Project Info */}
      <div className="absolute bottom-0 left-0 w-full p-6 z-10">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-lg bg-[#01BABC]/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
            {project.icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white group-hover:text-[#01BABC] transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-300 text-sm mt-1 line-clamp-2">{project.description}</p>
          </div>
        </div>

        {/* View Project Button - Appears on Hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: activeProject === project.id ? 1 : 0,
            y: activeProject === project.id ? 0 : 20,
          }}
          transition={{ duration: 0.3 }}
          className="mt-4"
        >
          <Button
            asChild
            className="w-full bg-[#01BABC]/10 hover:bg-[#01BABC] text-[#01BABC] hover:text-[#122C39] font-medium border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
