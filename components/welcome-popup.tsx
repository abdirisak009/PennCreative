"use client"

import { useState, useEffect } from "react"
import { X, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if the user has already seen the popup
    const hasSeenPopup = localStorage.getItem("hasSeenWelcomePopup")

    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Remember that the user has seen the popup
    localStorage.setItem("hasSeenWelcomePopup", "true")
  }

  const handleJoinCommunity = () => {
    // Open the Telegram link
    window.open("https://t.me/penncreative", "_blank")
    handleClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] p-6 rounded-xl">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <DialogHeader className="text-center">
          <div className="mx-auto bg-[#01BABC]/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <Users size={28} className="text-[#01BABC]" />
          </div>
          <DialogTitle className="text-xl font-bold">Join Our Telegram Community</DialogTitle>
          <DialogDescription className="text-sm mt-2">
            Get exclusive access to premium themes, plugins, and direct support by joining our Telegram community.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex flex-col gap-2 mt-6">
          <Button className="w-full bg-[#01BABC] hover:bg-[#01BABC]/80 text-white" onClick={handleJoinCommunity}>
            Join Telegram Community
          </Button>
          <Button variant="outline" onClick={handleClose} className="w-full">
            Maybe Later
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
