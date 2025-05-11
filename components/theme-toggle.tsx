"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-[#01BABC]/20 bg-[#01BABC]/10 hover:bg-[#01BABC]/20 transition-all duration-200 h-9 w-9"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all text-[#01BABC] dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all text-[#01BABC] dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-[#122C39] border-[#01BABC]/20">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="text-white hover:text-[#01BABC] cursor-pointer text-sm"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="text-white hover:text-[#01BABC] cursor-pointer text-sm"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="text-white hover:text-[#01BABC] cursor-pointer text-sm"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
