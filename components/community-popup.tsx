"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function CommunityPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Check if the current path is one of the target pages
    const targetPages = ["/themes", "/plugins", "/kits", "/shopify-themes"]
    const shouldShowPopup = targetPages.some((page) => pathname === page)

    if (shouldShowPopup) {
      // Check if the user has already seen the popup in this session
      const hasSeenPopup = sessionStorage.getItem("hasSeenCommunityPopup")

      if (!hasSeenPopup) {
        // Show popup after a short delay
        const timer = setTimeout(() => {
          setIsOpen(true)
          // Mark as seen for this session
          sessionStorage.setItem("hasSeenCommunityPopup", "true")
        }, 1500)

        return () => clearTimeout(timer)
      }
    }
  }, [pathname])

  const handleJoinCommunity = () => {
    // Open the Telegram link
    window.open("https://t.me/penncreative", "_blank")
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Join the Penn Community!</DialogTitle>
          <DialogDescription className="text-base mt-2">
            Connect with other users, get exclusive updates, and access premium resources by joining our Telegram
            community.
          </DialogDescription>
        </DialogHeader>

        <div className="my-6">
          <div className="bg-[#01BABC]/10 p-4 rounded-lg">
            <p className="text-sm font-medium">Benefits of joining:</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• Early access to new themes and plugins</li>
              <li>• Direct support from our team</li>
              <li>• Connect with other developers</li>
              <li>• Exclusive discounts and offers</li>
            </ul>
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <Button variant="outline" onClick={() => setIsOpen(false)} className="sm:order-1 order-2">
            Maybe Later
          </Button>
          <Button
            className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-white sm:order-2 order-1"
            onClick={handleJoinCommunity}
          >
            Join Our Telegram Community
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
