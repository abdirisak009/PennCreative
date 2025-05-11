import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { PersistentCommunityPopup } from "@/components/persistent-community-popup"

export const metadata: Metadata = {
  title: "Shopify Themes | Penn Creative Lab",
  description: "Browse our collection of premium Shopify themes for your e-commerce store",
}

interface ShopifyTheme {
  id: string
  title: string
  version: string
  description: string
  image: string
  lastUpdated: string
  viewLink: string
  price: string
  category: string
}

const shopifyThemes: ShopifyTheme[] = [
  {
    id: "shopify-theme-1",
    title: "Minimal Store",
    version: "v3.2",
    description: "Clean and minimal Shopify theme perfect for modern brands with a focus on product photography.",
    image: "/placeholder.svg?height=300&width=500",
    lastUpdated: "16-04-2025",
    viewLink: "https://www.shineads.in/shopify-themes/minimal-store",
    price: "$79",
    category: "Fashion",
  },
  {
    id: "shopify-theme-2",
    title: "Luxe Commerce",
    version: "v2.8",
    description: "Premium Shopify theme for luxury brands with elegant animations and high-end design elements.",
    image: "/placeholder.svg?height=300&width=500",
    lastUpdated: "15-04-2025",
    viewLink: "https://www.shineads.in/shopify-themes/luxe-commerce",
    price: "$129",
    category: "Luxury",
  },
  {
    id: "shopify-theme-3",
    title: "Quick Cart",
    version: "v4.1",
    description: "High-conversion Shopify theme with optimized checkout flow and mobile-first design approach.",
    image: "/placeholder.svg?height=300&width=500",
    lastUpdated: "14-04-2025",
    viewLink: "https://www.shineads.in/shopify-themes/quick-cart",
    price: "$89",
    category: "General",
  },
  {
    id: "shopify-theme-4",
    title: "Artisan Market",
    version: "v1.9",
    description:
      "Shopify theme designed for handmade products, crafts, and artisanal goods with story-focused layouts.",
    image: "/placeholder.svg?height=300&width=500",
    lastUpdated: "13-04-2025",
    viewLink: "https://www.shineads.in/shopify-themes/artisan-market",
    price: "$69",
    category: "Handmade",
  },
  {
    id: "shopify-theme-5",
    title: "Tech Store Pro",
    version: "v2.5",
    description:
      "Feature-rich Shopify theme for electronics and tech products with comparison tables and spec displays.",
    image: "/placeholder.svg?height=300&width=500",
    lastUpdated: "12-04-2025",
    viewLink: "https://www.shineads.in/shopify-themes/tech-store-pro",
    price: "$99",
    category: "Electronics",
  },
  {
    id: "shopify-theme-6",
    title: "Food Market",
    version: "v3.0",
    description:
      "Shopify theme optimized for food, grocery, and restaurant businesses with menu and ordering features.",
    image: "/placeholder.svg?height=300&width=500",
    lastUpdated: "11-04-2025",
    viewLink: "https://www.shineads.in/shopify-themes/food-market",
    price: "$79",
    category: "Food & Beverage",
  },
]

const categories = [
  { name: "All", link: "https://www.shineads.in/shopify-themes" },
  { name: "Fashion", link: "https://www.shineads.in/shopify-themes/category/fashion" },
  { name: "Luxury", link: "https://www.shineads.in/shopify-themes/category/luxury" },
  { name: "General", link: "https://www.shineads.in/shopify-themes/category/general" },
  { name: "Handmade", link: "https://www.shineads.in/shopify-themes/category/handmade" },
  { name: "Electronics", link: "https://www.shineads.in/shopify-themes/category/electronics" },
  { name: "Food & Beverage", link: "https://www.shineads.in/shopify-themes/category/food-beverage" },
]

export default function ShopifyThemesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PersistentCommunityPopup />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0C1E28] to-[#01BABC]/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Premium Shopify Themes</h1>
            <p className="text-lg text-white/80 mb-8">
              Take your e-commerce store to the next level with our collection of premium Shopify themes. All themes are
              responsive, customizable, and optimized for conversions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-white" asChild>
                <a href="https://www.shineads.in/shopify-themes" target="_blank" rel="noopener noreferrer">
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

      {/* Themes Grid */}
      <section className="py-16 bg-[#f5f7f9] dark:bg-[#0C1E28]/80">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 dark:text-white">Latest Shopify Themes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shopifyThemes.map((theme) => (
              <Card
                key={theme.id}
                className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-[#122C39] dark:border-[#01BABC]/10"
              >
                <div className="relative h-[200px] overflow-hidden bg-gray-100 dark:bg-[#0C1E28]/50">
                  <Image
                    src={theme.image || "/placeholder.svg"}
                    alt={theme.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-[#01BABC] text-white text-xs font-medium px-2 py-1 rounded">
                    {theme.version}
                  </div>
                  <div className="absolute top-3 left-3 bg-[#0C1E28]/80 text-white text-xs font-medium px-2 py-1 rounded">
                    {theme.category}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-[#01BABC] text-white text-xs font-bold px-2 py-1 rounded">
                    {theme.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold dark:text-white">{theme.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{theme.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Last Updated: {theme.lastUpdated}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1.5 border-[#01BABC]/30 text-[#01BABC] hover:bg-[#01BABC]/10 hover:text-[#01BABC]"
                      asChild
                    >
                      <a href={theme.viewLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-1" />
                        View Theme
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-white" asChild>
              <a href="https://www.shineads.in/shopify-themes" target="_blank" rel="noopener noreferrer">
                View All Shopify Themes
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-[#0C1E28]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 dark:text-white">
              Why Choose Our Shopify Themes?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-[#f5f7f9] dark:bg-[#122C39] hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#01BABC]/10 flex items-center justify-center">
                  <ShoppingBag size={28} className="text-[#01BABC]" />
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">Conversion Optimized</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Designed with conversion best practices to help maximize your store's sales.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-[#f5f7f9] dark:bg-[#122C39] hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#01BABC]/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#01BABC]"
                  >
                    <path d="M12 2v4"></path>
                    <path d="M12 18v4"></path>
                    <path d="m4.93 4.93 2.83 2.83"></path>
                    <path d="m16.24 16.24 2.83 2.83"></path>
                    <path d="M2 12h4"></path>
                    <path d="M18 12h4"></path>
                    <path d="m4.93 19.07 2.83-2.83"></path>
                    <path d="m16.24 7.76 2.83-2.83"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">Fully Customizable</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Easy to customize with intuitive theme settings and no coding required.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-[#f5f7f9] dark:bg-[#122C39] hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#01BABC]/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#01BABC]"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">Secure & Fast</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Optimized for speed and security to provide the best shopping experience.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Need a Custom Shopify Theme?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We can create a custom Shopify theme tailored to your brand and specific requirements. Contact us to
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
