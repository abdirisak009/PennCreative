"use client"

import { useEffect, useState } from "react"

interface WhatsAppChatProps {
  phoneNumber: string
}

export function WhatsAppChat({ phoneNumber }: WhatsAppChatProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const whatsappLink = isMobile
    ? `https://api.whatsapp.com/send?phone=${phoneNumber}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors z-50"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-whatsapp"
      >
        <path d="m2.81 15.37 2.6-1.1 1.25 6.21a1.59 1.59 0 0 0 1.5 1.14h.1a1.57 1.57 0 0 0 1.14-.54l4.7-4.5a.64.64 0 0 0 .18-.24c.19-.2.42-.27.64-.17l3.85 1.54c.95.38 1.95.2 2.67-.53a3.3 3.3 0 0 0 1-1.57 3.69 3.69 0 0 0 .14-1.35c-.08-.39-.18-.84-.18-1.34 0-1.44-.8-2.13-1.62-2.36-.09-.03-.2-.03-.3 0l-7.41 2.97c-.28.11-.64.05-.84-.17-.2-.22-.53-.58-.53-.58-.09-.11-.17-.22-.26-.31l-.93-1.13a.45.45 0 0 0-.11-.15H6.42a.45.45 0 0 0-.11.15l-1 1.25c-.1.11-.18.22-.26.31 0 0-.27.33-.54.61-.2.22-.52.28-.81.17l-.22-.09z" />
      </svg>
    </a>
  )
}
