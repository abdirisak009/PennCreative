import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, Layers, Package } from "lucide-react"
import Image from "next/image"
import { PersistentCommunityPopup } from "@/components/persistent-community-popup"

export const metadata: Metadata = {
  title: "Kits | Penn Creative Lab",
  description: "Browse our collection of premium kits for your projects",
}

interface Kit {
  id: string
  title: string
  version: string
  description: string
  image: string
  lastUpdated: string
  viewLink: string
  items: number
  category: string
}

const kits: Kit[] = [
  {
    id: "kit-1",
    title: "WooCommerce Starter Kit",
    version: "v2.3",
    description: "Complete WooCommerce setup with premium theme, essential plugins, and demo content.",
    image: "/placeholder.svg?height=300&width=500",
    lastUpdated: "16-04-2025",
    viewLink: "https://www.shineads.in/kits/woocommerce-starter-kit",
    items: 12,
    category: "E-Commerce",
  },
  {
    id: "kit-2",
    title: "Blog Pro Kit",
    version: "v1.8",
    description: "Professional blogging setup with SEO optimization, content tools, and monetization plugins.",
    image: "/placeholder.svg?height=300&width=500",
    lastUpdated: "15-04-2025",
    viewLink: "https://www.shineads.in/kits/blog-pro-kit",
    items: 8,
    category: "Blogging",
  },
  {
    id: "kit-3",
    title: "Agency Website Kit",
    version: "v3.1",
    description: "Complete agency website setup with portfolio, team, services, and contact form sections.",
    image: "/placeholder.svg?height=300&width=500",
    lastUpdated: "14-04-2025",
    viewLink: "https://www.shineads.in/kits/agency-website-kit",
    items: 10,
    category: "Business",
  },
  {
    id: "kit-4",
    title: "LMS Education Kit",
    version: "v2.5",
    description: "Learning Management System setup with course creation, student management, and payment integration.",
    image: "/placeholder.svg?height=300&width=500",
    lastUpdated: "13-04-2025",
    viewLink: "https://www.shineads.in/kits/lms-education-kit",
    items: 15,
    category: "Education",
  },
  {
    id: "kit-5",
    title: "Real Estate Pro Kit",
    version: "v1.9",
    description: "Complete real estate website with property listings, agent profiles, and search functionality.",
    image: "/placeholder.svg?height=300&width=500",
    lastUpdated: "12-04-2025",
    viewLink: "https://www.shineads.in/kits/real-estate-pro-kit",
    items: 11,
    category: "Real Estate",
  },
  {
    id: "kit-6",
    title: "Restaurant & Cafe Kit",
    version: "v2.2",
    description: "Restaurant website setup with menu, reservation system, and online ordering functionality.",
    image: "/placeholder.svg?height=300&width=500",
    lastUpdated: "11-04-2025",
    viewLink: "https://www.shineads.in/kits/restaurant-cafe-kit",
    items: 9,
    category: "Food & Beverage",
  },
]

const categories = [
  { name: "All", link: "https://www.shineads.in/kits" },
  { name: "E-Commerce", link: "https://www.shineads.in/kits/category/e-commerce" },
  { name: "Business", link: "https://www.shineads.in/kits/category/business" },
  { name: "Education", link: "https://www.shineads.in/kits/category/education" },
  { name: "Blogging", link: "https://www.shineads.in/kits/category/blogging" },
  { name: "Real Estate", link: "https://www.shineads.in/kits/category/real-estate" },
  { name: "Food & Beverage", link: "https://www.shineads.in/kits/category/food-beverage" },
]

export default function KitsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PersistentCommunityPopup />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0C1E28] to-[#01BABC]/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Premium WordPress Kits</h1>
            <p className="text-lg text-white/80 mb-8">
              Get started quickly with our comprehensive WordPress kits. Each kit includes everything you need for a
              specific type of website.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-white" asChild>
                <a href="https://www.shineads.in/kits" target="_blank" rel="noopener noreferrer">
                  Browse All Kits
                </a>
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <a href="https://www.shineads.in/contact" target="_blank" rel="noopener noreferrer">
                  Request Custom Kit
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-[#0C1E28] border-b border-gray-200 dark:border-[#01BABC]/10 sticky top-[72px] z-10 backdrop-blur-sm bg-white/90 dark:bg-[#0C1E28]/90">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={
                  index === 0
                    ? "bg-[#01BABC] hover:bg-[#01BABC]/80 text-white"
                    : "border-[#01BABC]/30 text-[#01BABC] hover:bg-[#01BABC]/10"
                }
                asChild
              >
                <a href={category.link} target="_blank" rel="noopener noreferrer">
                  {category.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Kits Grid */}
      <section className="py-16 bg-[#f5f7f9] dark:bg-[#0C1E28]/80">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 dark:text-white">Latest WordPress Kits</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kits.map((kit) => (
              <Card
                key={kit.id}
                className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-[#122C39] dark:border-[#01BABC]/10"
              >
                <div className="relative h-[200px] overflow-hidden bg-gray-100 dark:bg-[#0C1E28]/50">
                  <Image
                    src={kit.image || "/placeholder.svg"}
                    alt={kit.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-[#01BABC] text-white text-xs font-medium px-2 py-1 rounded">
                    {kit.version}
                  </div>
                  <div className="absolute top-3 left-3 bg-[#0C1E28]/80 text-white text-xs font-medium px-2 py-1 rounded">
                    {kit.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold dark:text-white">{kit.title}</h3>
                    <div className="flex items-center">
                      <Package size={14} className="text-[#01BABC]" />
                      <span className="text-sm ml-1 text-gray-700 dark:text-gray-300">{kit.items} items</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{kit.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Last Updated: {kit.lastUpdated}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1.5 border-[#01BABC]/30 text-[#01BABC] hover:bg-[#01BABC]/10 hover:text-[#01BABC]"
                      asChild
                    >
                      <a href={kit.viewLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-1" />
                        View Kit
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-white" asChild>
              <a href="https://www.shineads.in/kits" target="_blank" rel="noopener noreferrer">
                View All Kits
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Kit Contents Section */}
      <section className="py-16 bg-white dark:bg-[#0C1E28]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 dark:text-white">
              What's Included in Our Kits?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-[#f5f7f9] dark:bg-[#122C39] hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#01BABC]/10 flex items-center justify-center">
                  <Layers size={28} className="text-[#01BABC]" />
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">Premium Theme</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Professionally designed theme optimized for your specific industry or niche.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-[#f5f7f9] dark:bg-[#122C39] hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#01BABC]/10 flex items-center justify-center">
                  <Package size={28} className="text-[#01BABC]" />
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">Essential Plugins</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Curated selection of premium plugins that enhance functionality for your website type.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-[#f5f7f9] dark:bg-[#122C39] hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#01BABC]/10 flex items-center justify-center">
                  <FileText size={28} className="text-[#01BABC]" />
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">Documentation</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Comprehensive setup guide and documentation to get your website up and running quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#01BABC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Need a Custom WordPress Kit?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We can create a custom WordPress kit tailored to your specific industry and requirements. Contact us to
              discuss your project.
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
