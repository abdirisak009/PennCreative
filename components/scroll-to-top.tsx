"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"

export function ScrollToTop() {
  // This component doesn't render anything visible
  // It just uses the hook to handle scroll restoration
  useScrollTop()
  return null
}
