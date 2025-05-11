"use client"

import type React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    icon: React.ReactNode
    tags: string[]
    link: string
    featured?: boolean
  }
  onViewProject?: (project: any) => void
}

export function ProjectCard({ project, onViewProject }: ProjectCardProps) {
  const handleViewProject = (e: React.MouseEvent) => {
    if (onViewProject && !project.link.startsWith("http")) {
      e.preventDefault()
      onViewProject(project)
    }
  }

  return (
    <div className="bg-[#122C39] rounded-xl overflow-hidden border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 group hover:-translate-y-2">
      <div className="relative h-48">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#122C39] via-[#122C39]/50 to-transparent"></div>
        {project.featured && (
          <div className="absolute top-4 left-4 bg-[#01BABC] text-[#122C39] px-3 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className="h-10 w-10 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mr-3">
            {project.icon}
          </div>
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        </div>
        <p className="text-slate-300 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          onClick={handleViewProject}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#01BABC] hover:text-[#01BABC]/80 text-sm font-medium"
        >
          View Project <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
