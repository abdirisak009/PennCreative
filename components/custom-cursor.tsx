"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isOverText, setIsOverText] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Add the custom-cursor-enabled class to the body
    document.body.classList.add("custom-cursor-enabled")

    // Function to update cursor position
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Make cursor visible after first movement
      if (!isVisible) {
        setIsVisible(true)
      }
    }

    // Function to handle mouse down
    const handleMouseDown = () => {
      setIsClicking(true)
    }

    // Function to handle mouse up
    const handleMouseUp = () => {
      setIsClicking(false)
    }

    // Function to handle element hover
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Check if hovering over clickable elements
      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.onclick !== null ||
        window.getComputedStyle(target).cursor === "pointer"

      setIsHovering(isClickable)

      // Check if hovering over text elements
      const isText =
        target.tagName.toLowerCase() === "input" ||
        target.tagName.toLowerCase() === "textarea" ||
        window.getComputedStyle(target).cursor === "text"

      setIsOverText(isText)
    }

    // Function to handle cursor leaving the window
    const handleMouseLeave = () => {
      setPosition({ x: -100, y: -100 })
    }

    // Add event listeners
    document.addEventListener("mousemove", updateCursorPosition)
    document.addEventListener("mousemove", handleElementHover)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Clean up event listeners
    return () => {
      document.body.classList.remove("custom-cursor-enabled")
      document.removeEventListener("mousemove", updateCursorPosition)
      document.removeEventListener("mousemove", handleElementHover)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  // Don't render the cursor if it's not visible yet
  if (!isVisible) {
    return null
  }

  return (
    <>
      <div
        className={`cursor-dot ${isHovering ? "cursor-hover" : ""} ${isClicking ? "cursor-clicking" : ""} ${isOverText ? "cursor-text" : ""}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          opacity: isVisible ? 1 : 0,
        }}
      />
      <div
        className={`cursor-ring ${isHovering ? "cursor-hover" : ""} ${isClicking ? "cursor-clicking" : ""} ${isOverText ? "cursor-text" : ""}`}
        style={{
          left: position.x,
          top: position.y,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  )
}
