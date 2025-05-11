"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ExternalLink, Download, Star, Check, Heart, Search } from "lucide-react"
import Image from "next/image"
import { PersistentCommunityPopup } from "@/components/persistent-community-popup"

interface Theme {
  id: string
  title: string
  category: string
  type: string[]
  description: string
  image: string
  features: string[]
  rating: number
  downloads: number
  previewLink: string
  downloadLink: string
  badges: string[]
}

const themes: Theme[] = [
  // Featured New Theme
  {
    id: "medxtore",
    title: "MedXtore",
    category: "Pharmacy & Medical",
    type: ["medical", "ecommerce"],
    description:
      "Multipurpose WooCommerce theme for pharmacies, medical stores and healthcare businesses with 26+ demos.",
    image: "/images/medxtore-theme.png",
    features: [
      "26+ Demo Websites",
      "Elementor Page Builder",
      "WooCommerce Compatible",
      "Lightweight & Customizable",
      "Responsive Design",
    ],
    rating: 5.0,
    downloads: 2480,
    previewLink:
      "https://preview.themeforest.net/item/medxtore-pharmacy-and-medical-elementor-woocommerce-theme/full_screen_preview/44388499?_ga=2.1924785.1270657015.1744901495-1044140739.1723891296&_gac=1.85266795.1743366642.Cj0KCQjw16O_BhDNARIsAC3i2GCmfjt_mws-ONuG5tO89GZ3kT4S26CXVLTRuUBW6KNUOm1s7bRF840aAtMkEALw_wcB",
    downloadLink: "https://mega.nz/file/zIFWDLCY#RxXjbaAldjokNAgs9NI2s-yXtB2Ix3jZ3dX7aKUjI24",
    badges: ["Hot", "Featured"],
  },

  // Medical Themes
  {
    id: "meditest",
    title: "Meditest",
    category: "Health & Medical",
    type: ["medical"],
    description:
      "Modern WordPress theme for hospitals, clinics, and healthcare services with appointment booking system.",
    image: "/images/meditest-theme.png",
    features: ["3 Pre-Built Demos", "Elementor Page Builder", "WooCommerce Compatible", "Appointment Booking"],
    rating: 5.0,
    downloads: 1240,
    previewLink: "https://shorturl.at/oM3CO",
    downloadLink: "https://mega.nz/file/PEJ0zQCS#vXBTkYiF7Bdez7G8nGAxDURVn99DNVpd7dhBsjE8VAA",
    badges: ["Featured", "Medical"],
  },
  {
    id: "doctio",
    title: "Doctio",
    category: "Medical Health",
    type: ["medical"],
    description: "Comprehensive WordPress theme for doctors, hospitals, clinics and all types of healthcare services.",
    image: "/images/doctio-theme.png",
    features: ["Multiple Medical Demos", "Doctor Profiles", "Appointment Booking", "Online Consultation"],
    rating: 4.9,
    downloads: 980,
    previewLink:
      "https://preview.themeforest.net/item/doctio-medical-health-wordpress-theme/full_screen_preview/38283662?_ga=2.2464176.1270657015.1744901495-1044140739.1723891296&_gac=1.190258777.1743366642.Cj0KCQjw16O_BhDNARIsAC3i2GCmfjt_mws-ONuG5tO89GZ3kT4S26CXVLTRuUBW6KNUOm1s7bRF840aAtMkEALw_wcB",
    downloadLink: "https://mega.nz/file/Vx5FmJiY#QOWXFK0GbfJ2qLPacXG568FkfyxGQEcH-Labwak6f2A",
    badges: ["Medical", "Popular"],
  },
  {
    id: "medizin",
    title: "Medizin",
    category: "Medical WooCommerce",
    type: ["medical", "ecommerce"],
    description: "Clean and modern WordPress theme for medical stores, pharmacies, and healthcare businesses.",
    image: "/images/medizin-theme.png",
    features: ["WooCommerce Ready", "Medical Store Layouts", "Appointment System", "Product Filtering"],
    rating: 4.8,
    downloads: 1150,
    previewLink:
      "https://preview.themeforest.net/item/medizin-medical-woocommerce-theme/full_screen_preview/26538545?_ga=2.60652845.1270657015.1744901495-1044140739.1723891296&_gac=1.82163172.1743366642.Cj0KCQjw16O_BhDNARIsAC3i2GCmfjt_mws-ONuG5tO89GZ3kT4S26CXVLTRuUBW6KNUOm1s7bRF840aAtMkEALw_wcB",
    downloadLink: "https://mega.nz/file/fRlVABSC#MNyPSw4MIGeOmrvVoDH2sHVZ71YiWKMhHfbVQ3l2qyI",
    badges: ["Medical", "eCommerce"],
  },
  {
    id: "dentcare",
    title: "DentCare",
    category: "Dental Clinic",
    type: ["medical"],
    description: "Specialized WordPress theme for dentists, orthodontists and dental clinics with service showcase.",
    image: "/placeholder.svg?height=300&width=600",
    features: ["Dental Appointment System", "Before/After Gallery", "Service Showcase", "Patient Testimonials"],
    rating: 4.8,
    downloads: 890,
    previewLink: "https://shorturl.at/oM3CO",
    downloadLink: "https://mega.nz/file/PEJ0zQCS#vXBTkYiF7Bdez7G8nGAxDURVn99DNVpd7dhBsjE8VAA",
    badges: ["Dental", "New"],
  },
  {
    id: "dentalist",
    title: "Dentalist",
    category: "Dental Clinic",
    type: ["medical"],
    description:
      "Modern WordPress theme for dentists, dental clinics and practices with appointment booking and patient management.",
    image: "/placeholder.svg?height=300&width=600",
    features: [
      "Online Appointment Booking",
      "Dental Services Showcase",
      "Team Members Profiles",
      "Patient Testimonials",
    ],
    rating: 4.9,
    downloads: 1250,
    previewLink: "https://dentalist.cmsmasters.net/?storefront=envato-elements",
    downloadLink: "https://mega.nz/file/nBgGBSCB#UDWMIL4Vv_YxxOGbZvpwPr_1rYUd26ZqYK--ygtFpGs",
    badges: ["Dental", "Featured"],
  },
  {
    id: "pharmaplus",
    title: "PharmaPLUS",
    category: "Pharmacy",
    type: ["medical"],
    description: "Complete WordPress solution for pharmacies and drugstores with product catalog and online ordering.",
    image: "/placeholder.svg?height=300&width=600",
    features: ["Product Catalog", "Prescription Upload", "Store Locator", "Medication Reminder"],
    rating: 4.7,
    downloads: 760,
    previewLink: "https://shorturl.at/oM3CO",
    downloadLink: "https://mega.nz/file/PEJ0zQCS#vXBTkYiF7Bdez7G8nGAxDURVn99DNVpd7dhBsjE8VAA",
    badges: ["Pharmacy", "eCommerce"],
  },

  // Education Themes
  {
    id: "edulearn",
    title: "EduLearn",
    category: "Education",
    type: ["education"],
    description:
      "Complete LMS WordPress theme for schools, colleges and online course platforms with student dashboard.",
    image: "/placeholder.svg?height=300&width=600",
    features: ["Course Management", "Student Dashboard", "Quiz System", "Certificate Generator"],
    rating: 4.9,
    downloads: 1350,
    previewLink: "https://shorturl.at/oM3CO",
    downloadLink: "https://mega.nz/file/PEJ0zQCS#vXBTkYiF7Bdez7G8nGAxDURVn99DNVpd7dhBsjE8VAA",
    badges: ["Education", "Featured"],
  },
  {
    id: "academix",
    title: "Academix",
    category: "University",
    type: ["education"],
    description: "Professional WordPress theme for universities and colleges with department and faculty pages.",
    image: "/placeholder.svg?height=300&width=600",
    features: ["Faculty Profiles", "Event Calendar", "Course Catalog", "Campus Map"],
    rating: 4.7,
    downloads: 920,
    previewLink: "https://shorturl.at/oM3CO",
    downloadLink: "https://mega.nz/file/PEJ0zQCS#vXBTkYiF7Bdez7G8nGAxDURVn99DNVpd7dhBsjE8VAA",
    badges: ["Education", "University"],
  },

  // Portfolio Themes
  {
    id: "creativo",
    title: "Creativo",
    category: "Creative Portfolio",
    type: ["portfolio"],
    description: "Stunning WordPress portfolio theme for creatives, designers, photographers and artists.",
    image: "/placeholder.svg?height=300&width=600",
    features: ["Project Showcase", "Filterable Gallery", "Video Integration", "Parallax Effects"],
    rating: 4.8,
    downloads: 1120,
    previewLink: "https://shorturl.at/oM3CO",
    downloadLink: "https://mega.nz/file/PEJ0zQCS#vXBTkYiF7Bdez7G8nGAxDURVn99DNVpd7dhBsjE8VAA",
    badges: ["Portfolio", "Creative"],
  },
  {
    id: "fotografy",
    title: "Fotografy",
    category: "Photography",
    type: ["portfolio"],
    description: "Elegant WordPress theme for photographers and visual artists with beautiful gallery layouts.",
    image: "/placeholder.svg?height=300&width=600",
    features: ["Photo Gallery", "Client Proofing", "Password Protection", "Lightbox Viewer"],
    rating: 4.9,
    downloads: 980,
    previewLink: "https://shorturl.at/oM3CO",
    downloadLink: "https://mega.nz/file/PEJ0zQCS#vXBTkYiF7Bdez7G8nGAxDURVn99DNVpd7dhBsjE8VAA",
    badges: ["Portfolio", "Photography"],
  },

  // Ecommerce Themes
  {
    id: "shopify",
    title: "Shopify",
    category: "Online Store",
    type: ["ecommerce"],
    description: "Powerful WooCommerce WordPress theme for online stores with advanced product filtering.",
    image: "/placeholder.svg?height=300&width=600",
    features: ["Product Filtering", "Wishlist", "Quick View", "Ajax Cart"],
    rating: 4.8,
    downloads: 1560,
    previewLink: "https://shorturl.at/oM3CO",
    downloadLink: "https://mega.nz/file/PEJ0zQCS#vXBTkYiF7Bdez7G8nGAxDURVn99DNVpd7dhBsjE8VAA",
    badges: ["eCommerce", "Popular"],
  },
  {
    id: "fashionista",
    title: "Fashionista",
    category: "Fashion Store",
    type: ["ecommerce"],
    description: "Stylish WordPress theme for fashion and clothing stores with lookbook feature.",
    image: "/placeholder.svg?height=300&width=600",
    features: ["Lookbook", "Size Guide", "Instagram Shop", "Product Quick View"],
    rating: 4.7,
    downloads: 1240,
    previewLink: "https://shorturl.at/oM3CO",
    downloadLink: "https://mega.nz/file/PEJ0zQCS#vXBTkYiF7Bdez7G8nGAxDURVn99DNVpd7dhBsjE8VAA",
    badges: ["eCommerce", "Fashion"],
  },

  // Restaurant Themes
  {
    id: "gustoso",
    title: "Gustoso",
    category: "Restaurant",
    type: ["restaurant"],
    description:
      "Appetizing WordPress theme for restaurants, cafes and food businesses with menu and reservation system.",
    image: "/placeholder.svg?height=300&width=600",
    features: ["Food Menu", "Table Reservation", "Opening Hours", "Chef Profiles"],
    rating: 4.9,
    downloads: 1080,
    previewLink: "https://shorturl.at/oM3CO",
    downloadLink: "https://mega.nz/file/PEJ0zQCS#vXBTkYiF7Bdez7G8nGAxDURVn99DNVpd7dhBsjE8VAA",
    badges: ["Restaurant", "Featured"],
  },
  {
    id: "pizzaro",
    title: "Pizzaro",
    category: "Pizza Restaurant",
    type: ["restaurant"],
    description: "Delicious WordPress theme for pizza restaurants and delivery services with online ordering.",
    image: "/placeholder.svg?height=300&width=600",
    features: ["Online Ordering", "Delivery Tracking", "Menu Builder", "Location Finder"],
    rating: 4.6,
    downloads: 890,
    previewLink: "https://shorturl.at/oM3CO",
    downloadLink: "https://mega.nz/file/PEJ0zQCS#vXBTkYiF7Bdez7G8nGAxDURVn99DNVpd7dhBsjE8VAA",
    badges: ["Restaurant", "Food Delivery"],
  },

  // Business Themes
  {
    id: "corporato",
    title: "Corporato",
    category: "Corporate Business",
    type: ["business"],
    description:
      "Professional WordPress theme for corporate businesses, agencies and enterprises with service showcase.",
    image: "/placeholder.svg?height=300&width=600",
    features: ["Service Showcase", "Team Members", "Testimonials", "Case Studies"],
    rating: 4.8,
    downloads: 1320,
    previewLink: "https://shorturl.at/oM3CO",
    downloadLink: "https://mega.nz/file/PEJ0zQCS#vXBTkYiF7Bdez7G8nGAxDURVn99DNVpd7dhBsjE8VAA",
    badges: ["Business", "Corporate"],
  },
  {
    id: "consulto",
    title: "Consulto",
    category: "Consulting",
    type: ["business"],
    description: "Premium WordPress theme for consultants, advisors and professional service providers.",
    image: "/placeholder.svg?height=300&width=600",
    features: ["Service Pages", "Case Studies", "Client Portal", "Appointment Booking"],
    rating: 4.7,
    downloads: 980,
    previewLink: "https://shorturl.at/oM3CO",
    downloadLink: "https://mega.nz/file/PEJ0zQCS#vXBTkYiF7Bdez7G8nGAxDURVn99DNVpd7dhBsjE8VAA",
    badges: ["Business", "Consulting"],
  },

  // NGO Themes
  {
    id: "charito",
    title: "Charito",
    category: "Charity",
    type: ["ngo"],
    description:
      "Inspiring WordPress theme for charities, nonprofits and fundraising organizations with donation system.",
    image: "/placeholder.svg?height=300&width=600",
    features: ["Donation System", "Event Management", "Volunteer Registration", "Cause Pages"],
    rating: 4.9,
    downloads: 1150,
    previewLink: "https://shorturl.at/oM3CO",
    downloadLink: "https://mega.nz/file/PEJ0zQCS#vXBTkYiF7Bdez7G8nGAxDURVn99DNVpd7dhBsjE8VAA",
    badges: ["NGO", "Charity"],
  },
  {
    id: "environo",
    title: "Environo",
    category: "Environmental",
    type: ["ngo"],
    description: "Eco-friendly WordPress theme for environmental organizations and green initiatives.",
    image: "/placeholder.svg?height=300&width=600",
    features: ["Campaign Pages", "Donation System", "Event Calendar", "Volunteer Management"],
    rating: 4.7,
    downloads: 860,
    previewLink: "https://shorturl.at/oM3CO",
    downloadLink: "https://mega.nz/file/PEJ0zQCS#vXBTkYiF7Bdez7G8nGAxDURVn99DNVpd7dhBsjE8VAA",
    badges: ["NGO", "Environmental"],
  },
]

export default function ThemesPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredThemes, setFilteredThemes] = useState(themes)

  useEffect(() => {
    let result = themes

    // Filter by tab category
    if (activeTab !== "all") {
      result = result.filter((theme) => theme.type.includes(activeTab))
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (theme) =>
          theme.title.toLowerCase().includes(query) ||
          theme.description.toLowerCase().includes(query) ||
          theme.category.toLowerCase().includes(query) ||
          theme.features.some((feature) => feature.toLowerCase().includes(query)),
      )
    }

    setFilteredThemes(result)
  }, [activeTab, searchQuery])

  return (
    <main className="flex min-h-screen flex-col">
      <PersistentCommunityPopup />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0C1E28] to-[#01BABC]/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Free WordPress Themes</h1>
            <p className="text-lg text-white/80 mb-8">
              Discover our collection of high-quality free WordPress themes for various industries. All themes are
              regularly updated and include premium features at no cost.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-white" asChild>
                <a href="https://shorturl.at/oM3CO" target="_blank" rel="noopener noreferrer">
                  Browse All Themes
                </a>
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <a href="https://www.shineads.in/contact" target="_blank" rel="noopener noreferrer">
                  Request Custom Theme
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Theme */}
      <section className="py-12 bg-white dark:bg-[#0C1E28]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-8 w-2 bg-[#01BABC] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold dark:text-white">Hot Theme</h2>
          </div>

          <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 dark:bg-[#122C39] dark:border-[#01BABC]/10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <div className="aspect-video relative overflow-hidden bg-gray-100 dark:bg-[#0C1E28]/50 h-full">
                  <Image
                    src="/images/medxtore-theme.png"
                    alt="MedXtore - Pharmacy & Medical WordPress Theme"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-1">HOT UPDATE</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-emerald-500 hover:bg-emerald-600 font-bold">FREE</Badge>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold dark:text-white">MedXtore</h3>
                    <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">Pharmacy & Medical WooCommerce Theme</p>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-gray-600 dark:text-gray-300">5.0 (48 reviews)</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Multipurpose WooCommerce theme for pharmacies, medical stores and healthcare businesses. Includes 26+
                  demo websites, Elementor page builder compatibility, and responsive design.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    "26+ Demo Websites",
                    "Elementor Page Builder",
                    "WooCommerce Compatible",
                    "Lightweight & Customizable",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    <Download className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-300">2,480 downloads</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Last updated: 2 days ago</span>
                  </div>
                </div>

                <div className="mt-auto flex gap-4">
                  <Button className="flex-1 bg-[#01BABC] hover:bg-[#01BABC]/80 text-white" size="lg" asChild>
                    <a
                      href="https://preview.themeforest.net/item/medxtore-pharmacy-and-medical-elementor-woocommerce-theme/full_screen_preview/44388499?_ga=2.1924785.1270657015.1744901495-1044140739.1723891296&_gac=1.85266795.1743366642.Cj0KCQjw16O_BhDNARIsAC3i2GCmfjt_mws-ONuG5tO89GZ3kT4S26CXVLTRuUBW6KNUOm1s7bRF840aAtMkEALw_wcB"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Preview Theme
                    </a>
                  </Button>
                  <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white" size="lg" asChild>
                    <a
                      href="https://mega.nz/file/zIFWDLCY#RxXjbaAldjokNAgs9NI2s-yXtB2Ix3jZ3dX7aKUjI24"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download size={18} className="mr-2" />
                      Download
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Themes Grid */}
      <section className="py-16 bg-[#f5f7f9] dark:bg-[#0C1E28]/80">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 dark:text-white">
            Browse Our Free WordPress Themes
          </h2>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-10 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search themes by name, feature or category..."
              className="pl-10 py-6 border-[#01BABC]/30 focus:border-[#01BABC] focus:ring-[#01BABC] dark:bg-[#122C39] dark:border-[#01BABC]/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 text-gray-400 hover:text-gray-600"
                onClick={() => setSearchQuery("")}
              >
                Clear
              </Button>
            )}
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all" className="mb-10" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 h-auto bg-white/50 dark:bg-[#122C39]/50 p-1 rounded-lg">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-[#01BABC] data-[state=active]:text-white rounded-md py-2"
              >
                All Themes
              </TabsTrigger>
              <TabsTrigger
                value="medical"
                className="data-[state=active]:bg-[#01BABC] data-[state=active]:text-white rounded-md py-2"
              >
                Medical
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="data-[state=active]:bg-[#01BABC] data-[state=active]:text-white rounded-md py-2"
              >
                Education
              </TabsTrigger>
              <TabsTrigger
                value="portfolio"
                className="data-[state=active]:bg-[#01BABC] data-[state=active]:text-white rounded-md py-2"
              >
                Portfolio
              </TabsTrigger>
              <TabsTrigger
                value="ecommerce"
                className="data-[state=active]:bg-[#01BABC] data-[state=active]:text-white rounded-md py-2"
              >
                Ecommerce
              </TabsTrigger>
              <TabsTrigger
                value="restaurant"
                className="data-[state=active]:bg-[#01BABC] data-[state=active]:text-white rounded-md py-2"
              >
                Restaurant
              </TabsTrigger>
              <TabsTrigger
                value="business"
                className="data-[state=active]:bg-[#01BABC] data-[state=active]:text-white rounded-md py-2"
              >
                Business
              </TabsTrigger>
              <TabsTrigger
                value="ngo"
                className="data-[state=active]:bg-[#01BABC] data-[state=active]:text-white rounded-md py-2"
              >
                NGO
              </TabsTrigger>
            </TabsList>

            <div className="mt-8">
              {filteredThemes.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-[#122C39] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">No themes found</h3>
                  <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                    We couldn't find any themes matching your search criteria. Try adjusting your search or browse all
                    themes.
                  </p>
                  <Button
                    className="mt-4 bg-[#01BABC] hover:bg-[#01BABC]/80 text-white"
                    onClick={() => {
                      setSearchQuery("")
                      setActiveTab("all")
                    }}
                  >
                    View All Themes
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredThemes.map((theme) => (
                    <Card
                      key={theme.id}
                      className="group overflow-hidden border-0 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 dark:bg-[#122C39] dark:border-[#01BABC]/10 h-full flex flex-col"
                    >
                      <div className="relative overflow-hidden">
                        <div className="aspect-[16/9] relative overflow-hidden bg-gray-100 dark:bg-[#0C1E28]/50">
                          <Image
                            src={theme.image || "/placeholder.svg"}
                            alt={theme.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[80%]">
                          {theme.badges.map((badge, index) => (
                            <Badge
                              key={index}
                              className={`
                                ${
                                  badge === "Featured"
                                    ? "bg-purple-500 hover:bg-purple-600"
                                    : badge === "New"
                                      ? "bg-blue-500 hover:bg-blue-600"
                                      : badge === "Popular"
                                        ? "bg-orange-500 hover:bg-orange-600"
                                        : badge === "Hot"
                                          ? "bg-red-500 hover:bg-red-600"
                                          : "bg-green-500 hover:bg-green-600"
                                }
                              `}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </div>

                        <div className="absolute top-3 right-3">
                          <Badge className="bg-emerald-500 hover:bg-emerald-600 font-bold">FREE</Badge>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                          <div className="flex items-center gap-1 text-white">
                            <Download size={14} />
                            <span className="text-sm">{theme.downloads.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1 text-white">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={
                                  i < Math.floor(theme.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                                }
                              />
                            ))}
                            <span className="text-sm ml-1">{theme.rating}</span>
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-5 flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-bold dark:text-white group-hover:text-[#01BABC] transition-colors">
                              {theme.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{theme.category}</p>
                          </div>
                          <button className="text-gray-400 hover:text-red-500 transition-colors">
                            <Heart size={18} />
                          </button>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                          {theme.description}
                        </p>

                        <div className="space-y-1.5">
                          {theme.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-xs">{feature}</span>
                            </div>
                          ))}
                          {theme.features.length > 3 && (
                            <div className="flex items-start gap-2">
                              <span className="text-gray-500 dark:text-gray-400 text-xs">
                                +{theme.features.length - 3} more features
                              </span>
                            </div>
                          )}
                        </div>
                      </CardContent>

                      <CardFooter className="p-5 pt-0 flex gap-2 mt-auto">
                        <Button className="w-1/2 bg-[#01BABC] hover:bg-[#01BABC]/80 text-white" size="sm" asChild>
                          <a href={theme.previewLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={14} className="mr-1.5" />
                            Preview
                          </a>
                        </Button>
                        <Button className="w-1/2 bg-green-600 hover:bg-green-700 text-white" size="sm" asChild>
                          <a href={theme.downloadLink} target="_blank" rel="noopener noreferrer">
                            <Download size={14} className="mr-1.5" />
                            Download
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-[#0C1E28]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 dark:text-white">
            Why Choose Our WordPress Themes?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-[#122C39] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#01BABC]/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#01BABC]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Premium Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                All our themes are built with attention to detail and follow the latest web standards and best
                practices.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-[#122C39] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#01BABC]/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#01BABC]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Highly Customizable</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Easily customize colors, layouts, and features to match your brand and specific requirements.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-[#122C39] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#01BABC]/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#01BABC]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Fast Performance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Optimized code and assets ensure your website loads quickly and provides a smooth user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#01BABC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Need a Custom WordPress Theme?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We can create a custom WordPress theme tailored to your specific requirements. Contact us to discuss your
              project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-white" asChild>
                <a href="https://www.shineads.in/contact" target="_blank" rel="noopener noreferrer">
                  Contact Us
                </a>
              </Button>
              <Button variant="outline" className="border-[#01BABC]/30 text-[#01BABC] hover:bg-[#01BABC]/10" asChild>
                <a href="https://www.shineads.in/services" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={14} className="mr-1.5" />
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
