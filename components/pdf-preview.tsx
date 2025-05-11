"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { FileText, Download, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface PDFPreviewProps {
  pdfUrl: string
  coverImage: string
  title: string
  className?: string
}

export function PDFPreview({ pdfUrl, coverImage, title, className = "" }: PDFPreviewProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`${className}`}>
      <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
        <div className="relative h-[400px] w-full overflow-hidden rounded-lg border border-[#01BABC]/20">
          <Image
            src={coverImage || "/placeholder.svg"}
            alt={`${title} cover`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e28]/90 via-[#0c1e28]/30 to-transparent"></div>

          <div className="absolute bottom-0 left-0 w-full p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
                <p className="text-[#01BABC]">Click to preview</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-[#01BABC]/20 flex items-center justify-center group-hover:bg-[#01BABC]/40 transition-colors">
                <FileText className="h-6 w-6 text-[#01BABC]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl bg-[#0c1e28]/95 border-[#01BABC]/20 p-4">
          <div className="flex flex-col h-[80vh]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1 border-[#01BABC]/30 text-[#01BABC]">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
                <Button variant="outline" size="sm" className="gap-1 border-[#01BABC]/30 text-[#01BABC]" asChild>
                  <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Open in New Tab
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex-1 bg-white rounded-lg overflow-hidden">
              <iframe src={`${pdfUrl}#toolbar=0`} className="w-full h-full" title={title}></iframe>
            </div>

            <div className="flex items-center justify-center mt-4 gap-2">
              <Button variant="outline" size="sm" className="gap-1 border-[#01BABC]/30 text-[#01BABC]">
                <ChevronLeft className="h-4 w-4" />
                Previous Page
              </Button>
              <div className="px-4 py-1 bg-[#122C39] rounded-md">
                <span className="text-white text-sm">Page 1 of 12</span>
              </div>
              <Button variant="outline" size="sm" className="gap-1 border-[#01BABC]/30 text-[#01BABC]">
                Next Page
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
