"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import { betaCareProject, hugoDressProject } from "@/data/project-details"

export default function ProjectsWithModal() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* BetaCare Project Card */}
        <div onClick={() => handleProjectClick(betaCareProject)}>
          <ProjectCard
            title={betaCareProject.title}
            description={betaCareProject.description}
            image={betaCareProject.image}
            icon={betaCareProject.icon}
            tags={betaCareProject.tags}
            link="#"
          />
        </div>

        {/* HugoDress Project Card */}
        <div onClick={() => handleProjectClick(hugoDressProject)}>
          <ProjectCard
            title={hugoDressProject.title}
            description={hugoDressProject.description}
            image={hugoDressProject.image}
            icon={hugoDressProject.icon}
            tags={hugoDressProject.tags}
            link="#"
          />
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
