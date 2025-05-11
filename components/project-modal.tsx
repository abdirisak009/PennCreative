"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ArrowRight } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageGallery } from "@/components/image-gallery"

interface ProjectModalProps {
  project: any
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState("overview")

  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-[#122C39] border border-[#01BABC]/20 text-white p-0 overflow-hidden">
        <DialogHeader className="p-6 border-b border-[#01BABC]/20">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-white">{project.title}</DialogTitle>
            <button
              onClick={onClose}
              className="h-8 w-8 rounded-full bg-[#01BABC]/10 flex items-center justify-center text-[#01BABC] hover:bg-[#01BABC]/20 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="px-6 border-b border-[#01BABC]/20">
            <TabsList className="bg-transparent h-auto p-0 gap-4">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-transparent data-[state=active]:text-[#01BABC] data-[state=active]:border-[#01BABC] border-b-2 border-transparent rounded-none px-2 py-3"
              >
                Overview
              </TabsTrigger>
              {project.mockups && project.mockups.length > 0 && (
                <TabsTrigger
                  value="gallery"
                  className="data-[state=active]:bg-transparent data-[state=active]:text-[#01BABC] data-[state=active]:border-[#01BABC] border-b-2 border-transparent rounded-none px-2 py-3"
                >
                  Gallery
                </TabsTrigger>
              )}
              {project.colorPalette && project.colorPalette.length > 0 && (
                <TabsTrigger
                  value="colors"
                  className="data-[state=active]:bg-transparent data-[state=active]:text-[#01BABC] data-[state=active]:border-[#01BABC] border-b-2 border-transparent rounded-none px-2 py-3"
                >
                  Color Palette
                </TabsTrigger>
              )}
            </TabsList>
          </div>

          <TabsContent value="overview" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag: string, tagIndex: number) => (
                      <span key={tagIndex} className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">About the Project</h3>
                  <p className="text-slate-300 mb-6">{project.longDescription || project.description}</p>
                  <Link
                    href={project.link}
                    className="inline-flex items-center bg-[#01BABC] text-white px-4 py-2 rounded-lg hover:bg-[#01BABC]/90 transition-colors"
                  >
                    View Full Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Project Gallery</h3>
              <ImageGallery images={project.mockups} />
            </div>
          </TabsContent>

          <TabsContent value="colors" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Color Palette</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.colorPalette.map((color: { name: string; hex: string }, colorIndex: number) => (
                  <div key={colorIndex} className="flex flex-col items-center">
                    <div className="h-20 w-20 rounded-lg mb-2" style={{ backgroundColor: color.hex }}></div>
                    <span className="text-white font-medium">{color.name}</span>
                    <span className="text-slate-300 text-sm">{color.hex}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
