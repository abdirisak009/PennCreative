"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import { betaCareProject, hugoDressProject } from "@/data/project-details"

export default function ProjectsWithGallery() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProjectModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* BetaCare Project Card */}
        <div onClick={() => openProjectModal(betaCareProject)}>
          <ProjectCard
            project={betaCareProject}
          />
        </div>

        {/* HugoDress Project Card */}
        <div onClick={() => openProjectModal(hugoDressProject)}>
          <ProjectCard
            project={hugoDressProject}
          />
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
