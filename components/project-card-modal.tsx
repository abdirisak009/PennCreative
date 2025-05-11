"use client"

import type React from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardModalProps {
  title: string
  description: string
  image: string
  icon?: React.ReactNode
  tags?: string[]
  onClick: () => void
  className?: string
}

export function ProjectCardModal({ title, description, image, icon, tags, onClick, className }: ProjectCardModalProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-[#122C39] transition-all hover:shadow-xl cursor-pointer",
        className,
      )}
      onClick={onClick}
    >
      <div className="p-6">
        {icon && <div className="mb-4">{icon}</div>}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-300 mb-4 line-clamp-2">{description}</p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center text-[#01BABC] font-medium">
          View Project <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>

      <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-gradient-radial from-[#01BABC]/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="absolute top-0 right-0 h-24 w-24">
        <div className="absolute top-0 right-0 h-full w-full overflow-hidden rounded-bl-[100%]">
          <div className="absolute top-0 right-0 h-16 w-16 translate-x-1/2 -translate-y-1/2 transform bg-[#01BABC] rounded-full opacity-20" />
        </div>
      </div>
    </div>
  )
}
