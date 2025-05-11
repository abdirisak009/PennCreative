"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"

export function PersistentCommunityPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasJoined, setHasJoined] = useState(false)

  useEffect(() => {
    // Check if the user has already joined
    const joined = localStorage.getItem("hasPennCommunityJoined")
    if (joined === "true") {
      setHasJoined(true)
      return
    }

    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleJoinCommunity = () => {
    // Open the Telegram link
    window.open("https://t.me/penncreative", "_blank")
    // Mark as joined
    localStorage.setItem("hasPennCommunityJoined", "true")
    setHasJoined(true)
    setIsVisible(false)
  }

  const handleDismiss = () => {
    setIsVisible(false)
  }

  if (!isVisible || hasJoined) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="p-4 shadow-lg border-2 border-[#01BABC]/30 bg-white dark:bg-[#122C39]">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold">Join Penn Community</h3>
          <button
            onClick={handleDismiss}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X size={18} />
          </button>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Get exclusive access to premium themes, plugins, and direct support by joining our Telegram community.
        </p>
        <Button className="w-full bg-[#01BABC] hover:bg-[#01BABC]/80 text-white" onClick={handleJoinCommunity}>
          Join Our Telegram Community
        </Button>
      </Card>
    </div>
  )
}
