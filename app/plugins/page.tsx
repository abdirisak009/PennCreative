import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star } from "lucide-react"
import Image from "next/image"
import { PersistentCommunityPopup } from "@/components/persistent-community-popup"

export const metadata: Metadata = {
  title: "Plugins | Penn Creative Lab",
  description: "Browse our collection of premium plugins for your projects",
}

interface Plugin {
  id: string
  title: string
  version: string
  description: string
  image: string
  lastUpdated: string
  viewLink: string
  rating: number
  category: string
}

const plugins: Plugin[] = [
  {
    id: "plugin-1",
    title: "WP Timeline Plugin",
    version: "v3.7.1",
    description: "Responsive vertical and horizontal timeline plugin for WordPress with multiple layout options.",
    image: "/placeholder.svg?height=300&width=500",
    lastUpdated: "16-04-2025",
    viewLink: "https://www.shineads.in/plugins/wp-timeline-plugin",
    rating: 4.8,
    category: "Content",
  },
  {
    id: "plugin-2",
    title: "Real Category Management",
    version: "v4.2.36",
    description: "Advanced category management tool with drag & drop interface and custom taxonomies.",
    image: "/placeholder.svg?height=300&width=500",
    lastUpdated: "15-04-2025",
    viewLink: "https://www.shineads.in/plugins/real-category-management",
    rating: 4.7,
    category: "Admin",
  },
  {
    id: "plugin-3",
    title: "WP Bakery Page Builder",
    version: "v6.9.0",
    description: "Drag and drop page builder for WordPress with 50+ content elements and 100+ predefined layouts.",
    image: "/placeholder.svg?height=300&width=500",
    lastUpdated: "14-04-2025",
    viewLink: "https://www.shineads.in/plugins/wp-bakery-page-builder",
    rating: 4.9,
    category: "Page Builder",
  },
  {
    id: "plugin-4",
    title: "Slider Revolution",
    version: "v6.5.25",
    description: "Create responsive sliders, carousels, hero scenes and stunning visual effects.",
    image: "/placeholder.svg?height=300&width=500",
    lastUpdated: "13-04-2025",
    viewLink: "https://www.shineads.in/plugins/slider-revolution",
    rating: 4.8,
    category: "Media",
  },
  {
    id: "plugin-5",
    title: "WooCommerce Product Filter",
    version: "v8.3.4",
    description: "Advanced AJAX product filtering system for WooCommerce with multiple filter types.",
    image: "/placeholder.svg?height=300&width=500",
    lastUpdated: "12-04-2025",
    viewLink: "https://www.shineads.in/plugins/woocommerce-product-filter",
    rating: 4.6,
    category: "WooCommerce",
  },
  {
    id: "plugin-6",
    title: "Yoast SEO Premium",
    version: "v19.8",
    description: "Complete SEO solution for WordPress with content analysis, XML sitemaps and more.",
    image: "/placeholder.svg?height=300&width=500",
    lastUpdated: "11-04-2025",
    viewLink: "https://www.shineads.in/plugins/yoast-seo-premium",
    rating: 4.9,
    category: "SEO",
  },
]

const categories = [
  { name: "All", link: "https://www.shineads.in/plugins" },
  { name: "Page Builder", link: "https://www.shineads.in/plugins/category/page-builder" },
  { name: "WooCommerce", link: "https://www.shineads.in/plugins/category/woocommerce" },
  { name: "SEO", link: "https://www.shineads.in/plugins/category/seo" },
  { name: "Media", link: "https://www.shineads.in/plugins/category/media" },
  { name: "Content", link: "https://www.shineads.in/plugins/category/content" },
  { name: "Admin", link: "https://www.shineads.in/plugins/category/admin" },
  { name: "Security", link: "https://www.shineads.in/plugins/category/security" },
]

export default function PluginsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PersistentCommunityPopup />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0C1E28] to-[#01BABC]/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Premium WordPress Plugins</h1>
            <p className="text-lg text-white/80 mb-8">
              Enhance your WordPress website with our collection of premium plugins. All plugins are regularly updated
              and include premium support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-white" asChild>
                <a href="https://www.shineads.in/plugins" target="_blank" rel="noopener noreferrer">
                  Browse All Plugins
                </a>
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <a href="https://www.shineads.in/contact" target="_blank" rel="noopener noreferrer">
                  Request Custom Plugin
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

      {/* Plugins Grid */}
      <section className="py-16 bg-[#f5f7f9] dark:bg-[#0C1E28]/80">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 dark:text-white">Latest WordPress Plugins</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plugins.map((plugin) => (
              <Card
                key={plugin.id}
                className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-[#122C39] dark:border-[#01BABC]/10"
              >
                <div className="relative h-[200px] overflow-hidden bg-gray-100 dark:bg-[#0C1E28]/50">
                  <Image
                    src={plugin.image || "/placeholder.svg"}
                    alt={plugin.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-[#01BABC] text-white text-xs font-medium px-2 py-1 rounded">
                    {plugin.version}
                  </div>
                  <div className="absolute top-3 left-3 bg-[#0C1E28]/80 text-white text-xs font-medium px-2 py-1 rounded">
                    {plugin.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold dark:text-white">{plugin.title}</h3>
                    <div className="flex items-center">
                      <Star size={14} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-sm ml-1 text-gray-700 dark:text-gray-300">{plugin.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{plugin.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Last Updated: {plugin.lastUpdated}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1.5 border-[#01BABC]/30 text-[#01BABC] hover:bg-[#01BABC]/10 hover:text-[#01BABC]"
                      asChild
                    >
                      <a href={plugin.viewLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-1" />
                        View Plugin
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-white" asChild>
              <a href="https://www.shineads.in/plugins" target="_blank" rel="noopener noreferrer">
                View All Plugins
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#01BABC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Need a Custom WordPress Plugin?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We can develop custom WordPress plugins tailored to your specific requirements. Contact us to discuss your
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
