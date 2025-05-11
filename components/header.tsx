"use client"

import React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  X,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Info,
  Cpu,
  Award,
  User,
  Layers,
  ChevronDown,
  Briefcase,
  ShoppingCartIcon as Shopping,
  Users,
  GraduationCap,
  BookOpen,
  Code,
  Palette,
  FileText,
  Monitor,
  Lightbulb,
  Settings,
  LayoutGrid,
  Rocket,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

interface SubmenuItem {
  href: string
  label: string
  icon: React.ReactNode
  description?: string
}

interface NavLink {
  href?: string
  label: string
  icon: React.ReactNode
  isExternal?: boolean
  hasSubmenu?: boolean
  submenu?: SubmenuItem[]
  featured?: {
    title: string
    items: {
      href: string
      label: string
      description: string
      icon: React.ReactNode
    }[]
  }
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState<string | null>(null)
  const navRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({})

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setIsMobileSubmenuOpen(null)
    }
  }

  const toggleMobileSubmenu = (label: string) => {
    setIsMobileSubmenuOpen(isMobileSubmenuOpen === label ? null : label)
  }

  const handleMouseEnter = (label: string) => {
    setActiveMegaMenu(label)
  }

  const handleMouseLeave = () => {
    setActiveMegaMenu(null)
  }

  const navLinks: NavLink[] = [
    { href: "/about", label: "Who We Are", icon: <Info size={16} /> },
    {
      label: "Services",
      icon: <Layers size={16} />,
      hasSubmenu: true,
      submenu: [
        {
          href: "/services/technology",
          label: "Technology",
          icon: <Cpu size={16} />,
          description: "Custom software development and technology solutions",
        },
        {
          href: "/services/consultation",
          label: "Consultation",
          icon: <Users size={16} />,
          description: "Expert guidance for your business and technology needs",
        },
        {
          href: "/services/university-collaboration",
          label: "University Collaboration",
          icon: <GraduationCap size={16} />,
          description: "Tailored curricula and educational materials for universities",
        },
      ],
      featured: {
        title: "Featured Services",
        items: [
          {
            href: "/services/technology",
            label: "Web Development",
            description: "Custom websites and web applications",
            icon: <Code size={20} />,
          },
          {
            href: "/services/consultation",
            label: "Digital Strategy",
            description: "Comprehensive digital transformation",
            icon: <Lightbulb size={20} />,
          },
        ],
      },
    },
    { href: "/projects", label: "Projects", icon: <Briefcase size={16} /> },
    {
      label: "Tools",
      icon: <Cpu size={16} />,
      hasSubmenu: true,
      submenu: [
        {
          href: "/ai-tools",
          label: "AI Tools",
          icon: <Sparkles size={16} />,
          description: "Cutting-edge artificial intelligence tools",
        },
        {
          href: "/tools/class-schedule",
          label: "Class Schedule",
          icon: <LayoutGrid size={16} />,
          description: "Organize and manage your class schedules",
        },
      ],
      featured: {
        title: "Featured Tools",
        items: [
          {
            href: "/ai-tools",
            label: "AI Content Generator",
            description: "Create content with advanced AI",
            icon: <Zap size={20} />,
          },
          {
            href: "/tools/class-schedule",
            label: "Schedule Builder",
            description: "Build and manage complex schedules",
            icon: <Settings size={20} />,
          },
        ],
      },
    },
    {
      label: "Skills",
      icon: <GraduationCap size={16} />,
      hasSubmenu: true,
      submenu: [
        {
          href: "/certifications",
          label: "Certifications",
          icon: <Award size={16} />,
          description: "Professional certifications to advance your career",
        },
        {
          href: "/courses",
          label: "Courses",
          icon: <BookOpen size={16} />,
          description: "Comprehensive courses for all skill levels",
        },
      ],
      featured: {
        title: "Featured Courses",
        items: [
          {
            href: "/courses/pcl-webdesign-certified",
            label: "Web Design Masterclass",
            description: "Become a certified web designer",
            icon: <Monitor size={20} />,
          },
          {
            href: "/courses",
            label: "UX/UI Design",
            description: "Create beautiful user experiences",
            icon: <Palette size={20} />,
          },
        ],
      },
    },
    {
      label: "Resources",
      icon: <Layers size={16} />,
      hasSubmenu: true,
      submenu: [
        {
          href: "/themes",
          label: "Themes",
          icon: <Palette size={16} />,
          description: "Beautiful themes for your websites",
        },
        {
          href: "/plugins",
          label: "Plugins",
          icon: <Settings size={16} />,
          description: "Extend functionality with our plugins",
        },
        {
          href: "/kits",
          label: "Kits",
          icon: <Briefcase size={16} />,
          description: "Complete solution kits for specific industries",
        },
        {
          href: "/shopify-themes",
          label: "Shopify Themes",
          icon: <Shopping size={16} />,
          description: "Custom themes for your Shopify store",
        },
      ],
      featured: {
        title: "Featured Resources",
        items: [
          {
            href: "/themes",
            label: "Healthcare Themes",
            description: "Specialized themes for medical websites",
            icon: <FileText size={20} />,
          },
          {
            href: "/kits",
            label: "E-commerce Starter Kit",
            description: "Everything you need to launch your store",
            icon: <Rocket size={20} />,
          },
        ],
      },
    },
  ]

  // Initialize refs for each nav item
  useEffect(() => {
    navLinks.forEach((link) => {
      if (link.hasSubmenu && !navRefs.current[link.label]) {
        navRefs.current[link.label] = React.createRef<HTMLDivElement>()
      }
    })
  }, [navLinks])

  // Function to determine if a menu should be right-aligned
  const shouldAlignRight = (label: string) => {
    const ref = navRefs.current[label]
    if (!ref || !ref.current) return false

    const rect = ref.current.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const centerPoint = rect.left + rect.width / 2

    // If the center of the element is in the right half of the viewport
    return centerPoint > viewportWidth / 2
  }

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#01BABC] text-[#122C39] dark:text-white py-1.5 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Phone size={14} className="mr-1.5" />
            <span className="text-xs font-medium">+252 61 2049476</span>
          </div>
          <div className="text-xs font-medium">We offer All services 10% off</div>
          <div className="flex space-x-3">
            <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
              <Facebook size={14} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-80 transition-opacity">
              <Twitter size={14} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
              <Instagram size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled ? "bg-[#0c1e28]/95 backdrop-blur-sm shadow-md py-2" : "bg-[#0c1e28] py-3",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <div className="h-10 relative w-auto flex items-center justify-center">
                <Image
                  src="/images/penn-logo.png"
                  alt="Penn Creative Lab"
                  width={120}
                  height={48}
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center justify-center flex-1 mx-2">
              <div className="flex items-center justify-center">
                {navLinks.map((link, index) =>
                  link.hasSubmenu ? (
                    <div
                      key={index}
                      className="relative group"
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                      ref={navRefs.current[link.label] || null}
                    >
                      <button
                        className={cn(
                          "text-white hover:text-[#01BABC] px-3 py-2 rounded-md transition-all duration-200 flex items-center hover:bg-white/5 text-sm font-medium mx-0.5",
                          activeMegaMenu === link.label && "text-[#01BABC] bg-white/5",
                        )}
                        aria-expanded={activeMegaMenu === link.label}
                      >
                        <span className="bg-[#01BABC]/10 p-1.5 rounded-md mr-2 flex items-center justify-center">
                          {link.icon}
                        </span>
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={cn(
                            "ml-1.5 opacity-70 transition-transform duration-200",
                            activeMegaMenu === link.label ? "rotate-180" : "",
                          )}
                        />
                      </button>

                      {/* Mega Menu */}
                      <div
                        className={cn(
                          "absolute mt-1 w-[600px] rounded-md shadow-lg bg-[#0c1e28] border border-[#01BABC]/10 overflow-hidden transition-all duration-300 origin-top z-50",
                          // Dynamically position the mega menu based on its position
                          shouldAlignRight(link.label) ? "right-0 origin-top-right" : "left-0 origin-top-left",
                          activeMegaMenu === link.label
                            ? "opacity-100 visible scale-100 translate-y-0"
                            : "opacity-0 invisible scale-95 -translate-y-2",
                        )}
                      >
                        <div className="p-6 grid grid-cols-5 gap-6">
                          {/* Main Menu Items */}
                          <div className="col-span-3 border-r border-[#01BABC]/10 pr-6">
                            <h3 className="text-[#01BABC] font-medium mb-4 text-sm">{link.label}</h3>
                            <div className="grid grid-cols-1 gap-3">
                              {link.submenu?.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.href}
                                  className="group flex items-start p-2 rounded-md hover:bg-[#01BABC]/10 transition-colors"
                                >
                                  <span className="bg-[#01BABC]/10 p-2 rounded-md mr-3 flex items-center justify-center text-[#01BABC] group-hover:bg-[#01BABC]/20">
                                    {subItem.icon}
                                  </span>
                                  <div>
                                    <span className="block text-white group-hover:text-[#01BABC] font-medium text-sm">
                                      {subItem.label}
                                    </span>
                                    {subItem.description && (
                                      <span className="block text-xs text-gray-400 mt-0.5 group-hover:text-gray-300">
                                        {subItem.description}
                                      </span>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Featured Section */}
                          {link.featured && (
                            <div className="col-span-2">
                              <h3 className="text-[#01BABC] font-medium mb-4 text-sm">{link.featured.title}</h3>
                              <div className="space-y-4">
                                {link.featured.items.map((item, itemIndex) => (
                                  <Link key={itemIndex} href={item.href} className="block group">
                                    <div className="bg-[#122C39] rounded-md p-4 transition-all duration-200 group-hover:bg-[#01BABC]/10 border border-[#01BABC]/5 group-hover:border-[#01BABC]/20">
                                      <div className="flex items-center mb-2">
                                        <span className="bg-[#01BABC]/10 p-1.5 rounded-md mr-2 flex items-center justify-center text-[#01BABC]">
                                          {item.icon}
                                        </span>
                                        <h4 className="font-medium text-white group-hover:text-[#01BABC]">
                                          {item.label}
                                        </h4>
                                      </div>
                                      <p className="text-xs text-gray-400 group-hover:text-gray-300">
                                        {item.description}
                                      </p>
                                      <div className="mt-2 flex items-center text-[#01BABC] text-xs font-medium">
                                        <span>Learn more</span>
                                        <ArrowRight
                                          size={12}
                                          className="ml-1 group-hover:translate-x-1 transition-transform"
                                        />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Bottom Bar */}
                        <div className="bg-[#122C39] py-2 px-6 flex justify-between items-center">
                          <span className="text-xs text-gray-400">Explore all {link.label.toLowerCase()}</span>
                          <Link
                            href={link.submenu?.[0]?.href || "#"}
                            className="text-xs text-[#01BABC] font-medium flex items-center hover:underline"
                          >
                            View all
                            <ArrowRight size={12} className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-white hover:text-[#01BABC] px-3 py-2 rounded-md transition-all duration-200 flex items-center hover:bg-white/5 text-sm font-medium mx-0.5"
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                    >
                      <span className="bg-[#01BABC]/10 p-1.5 rounded-md mr-2 flex items-center justify-center">
                        {link.icon}
                      </span>
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2">
              <Button className="hidden md:flex bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white font-medium text-sm h-9 px-3">
                <a
                  href="https://penn.so/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="bg-white/20 p-1 rounded-md mr-2 flex items-center justify-center">
                    <User size={14} />
                  </span>
                  Student Area
                </a>
              </Button>

              <ThemeToggle />

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center">
                <button
                  className={`text-white focus:outline-none p-1.5 rounded-md transition-colors ${
                    isOpen ? "bg-[#01BABC]/20" : "hover:bg-white/5"
                  }`}
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                  aria-expanded={isOpen}
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-[#0c1e28]/95 backdrop-blur-sm overflow-y-auto pt-16">
              <div className="container mx-auto px-4 py-6">
                <button
                  className="absolute top-4 right-4 text-white p-2 rounded-md bg-[#01BABC]/20"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>

                <div className="flex flex-col space-y-4">
                  {navLinks.map((link, index) =>
                    link.hasSubmenu ? (
                      <div key={index} className="border-b border-[#01BABC]/10 pb-4">
                        <button
                          className="w-full text-white py-2 px-3 rounded-md flex items-center justify-between text-base font-medium"
                          onClick={() => toggleMobileSubmenu(link.label)}
                          aria-expanded={isMobileSubmenuOpen === link.label}
                        >
                          <div className="flex items-center">
                            <span className="bg-[#01BABC]/10 p-2 rounded-md mr-3 flex items-center justify-center text-[#01BABC]">
                              {link.icon}
                            </span>
                            {link.label}
                          </div>
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              isMobileSubmenuOpen === link.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isMobileSubmenuOpen === link.label && (
                          <div className="mt-3 pl-12 space-y-3 animate-fade-in">
                            {link.submenu?.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className="block py-2 px-3 text-white hover:text-[#01BABC] rounded-md transition-colors hover:bg-[#01BABC]/10"
                                onClick={toggleMenu}
                              >
                                <div className="flex items-center">
                                  <span className="bg-[#01BABC]/10 p-1.5 rounded-md mr-2 flex items-center justify-center text-[#01BABC]">
                                    {subItem.icon}
                                  </span>
                                  <div>
                                    <span className="font-medium">{subItem.label}</span>
                                    {subItem.description && (
                                      <p className="text-xs text-gray-400 mt-0.5">{subItem.description}</p>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            ))}

                            {link.featured && (
                              <div className="mt-4 pt-4 border-t border-[#01BABC]/10">
                                <h3 className="text-[#01BABC] font-medium mb-3 text-sm px-3">{link.featured.title}</h3>
                                {link.featured.items.map((item, itemIndex) => (
                                  <Link
                                    key={itemIndex}
                                    href={item.href}
                                    className="block py-2 px-3 text-white hover:text-[#01BABC] rounded-md transition-colors hover:bg-[#01BABC]/10"
                                    onClick={toggleMenu}
                                  >
                                    <div className="flex items-center">
                                      <span className="bg-[#01BABC]/10 p-1.5 rounded-md mr-2 flex items-center justify-center text-[#01BABC]">
                                        {item.icon}
                                      </span>
                                      <div>
                                        <span className="font-medium">{item.label}</span>
                                        <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={index}
                        href={link.href}
                        className="text-white hover:text-[#01BABC] py-2 px-3 rounded-md transition-colors hover:bg-[#01BABC]/10 flex items-center text-base font-medium"
                        onClick={toggleMenu}
                        target={link.isExternal ? "_blank" : undefined}
                        rel={link.isExternal ? "noopener noreferrer" : undefined}
                      >
                        <span className="bg-[#01BABC]/10 p-2 rounded-md mr-3 flex items-center justify-center text-[#01BABC]">
                          {link.icon}
                        </span>
                        {link.label}
                      </Link>
                    ),
                  )}

                  <div className="pt-4 mt-4 border-t border-[#01BABC]/10">
                    <Button
                      className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white font-medium w-full text-base h-12"
                      onClick={toggleMenu}
                    >
                      <a
                        href="https://penn.so/dashboard/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center"
                      >
                        <span className="bg-white/20 p-1.5 rounded-md mr-2 flex items-center justify-center">
                          <User size={16} />
                        </span>
                        Student Area
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
