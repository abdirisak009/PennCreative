"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ExternalLink, Download, Star, Check, Heart, Search } from "lucide-react"
import Image from "next/image"
import { Plugin } from "@/models/Plugin"

export default function PluginsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [plugins, setPlugins] = useState<Plugin[]>([])
  const [filteredPlugins, setFilteredPlugins] = useState<Plugin[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchPlugins()
  }, [])

  const fetchPlugins = async () => {
    try {
      const response = await fetch("/api/plugins")
      const data = await response.json()
      setPlugins(data)
      setFilteredPlugins(data)
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching plugins:", error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    let result = plugins

    // Filter by tab category
    if (activeTab !== "all") {
      result = result.filter((plugin) => plugin.category.toLowerCase() === activeTab.toLowerCase())
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (plugin) =>
          plugin.name.toLowerCase().includes(query) ||
          plugin.description.toLowerCase().includes(query) ||
          plugin.category.toLowerCase().includes(query) ||
          plugin.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    setFilteredPlugins(result)
  }, [activeTab, searchQuery, plugins])

  if (isLoading) {
    return <div className="p-8">Loading...</div>
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0C1E28] to-[#01BABC]/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">WordPress Plugins</h1>
            <p className="text-lg text-white/80 mb-8">
              Discover our collection of high-quality WordPress plugins. Enhance your website with our
              powerful and easy-to-use plugins.
            </p>
          </div>
        </div>
      </section>

      {/* Plugins Grid */}
      <section className="py-16 bg-[#f5f7f9] dark:bg-[#0C1E28]/80">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 dark:text-white">
            Browse Our WordPress Plugins
          </h2>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-10 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search plugins by name, feature or category..."
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
            <TabsList className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 h-auto bg-white/50 dark:bg-[#122C39]/50 p-1 rounded-lg">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-[#01BABC] data-[state=active]:text-white rounded-md py-2"
              >
                All Plugins
              </TabsTrigger>
              <TabsTrigger
                value="seo"
                className="data-[state=active]:bg-[#01BABC] data-[state=active]:text-white rounded-md py-2"
              >
                SEO
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="data-[state=active]:bg-[#01BABC] data-[state=active]:text-white rounded-md py-2"
              >
                Security
              </TabsTrigger>
              <TabsTrigger
                value="performance"
                className="data-[state=active]:bg-[#01BABC] data-[state=active]:text-white rounded-md py-2"
              >
                Performance
              </TabsTrigger>
              <TabsTrigger
                value="ecommerce"
                className="data-[state=active]:bg-[#01BABC] data-[state=active]:text-white rounded-md py-2"
              >
                Ecommerce
              </TabsTrigger>
              <TabsTrigger
                value="social"
                className="data-[state=active]:bg-[#01BABC] data-[state=active]:text-white rounded-md py-2"
              >
                Social
              </TabsTrigger>
            </TabsList>

            <div className="mt-8">
              {filteredPlugins.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-[#122C39] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">No plugins found</h3>
                  <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                    We couldn't find any plugins matching your search criteria. Try adjusting your search or browse all
                    plugins.
                  </p>
                  <Button
                    className="mt-4 bg-[#01BABC] hover:bg-[#01BABC]/80 text-white"
                    onClick={() => {
                      setSearchQuery("")
                      setActiveTab("all")
                    }}
                  >
                    View All Plugins
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPlugins.map((plugin) => (
                    <Card
                      key={plugin._id}
                      className="group overflow-hidden border-0 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 dark:bg-[#122C39] dark:border-[#01BABC]/10 h-full flex flex-col"
                    >
                      <div className="relative overflow-hidden">
                        <div className="aspect-[16/9] relative overflow-hidden bg-gray-100 dark:bg-[#0C1E28]/50">
                          <Image
                            src={plugin.image || "/placeholder.svg"}
                            alt={plugin.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[80%]">
                          <Badge className="bg-blue-500 hover:bg-blue-600">
                            v{plugin.version}
                          </Badge>
                          {plugin.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="absolute top-3 right-3">
                          <Badge className="bg-emerald-500 hover:bg-emerald-600 font-bold">FREE</Badge>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                          <div className="flex items-center gap-1 text-white">
                            <Star size={14} className="fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{plugin.rating}</span>
                          </div>
                          <div className="flex items-center gap-1 text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
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
                            <span className="text-sm">
                              Updated {new Date(plugin.updatedAt!).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-5 flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-bold dark:text-white group-hover:text-[#01BABC] transition-colors">
                              {plugin.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{plugin.category}</p>
                          </div>
                          <button className="text-gray-400 hover:text-red-500 transition-colors">
                            <Heart size={18} />
                          </button>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                          {plugin.description}
                        </p>
                      </CardContent>

                      <CardFooter className="p-5 pt-0 flex gap-2 mt-auto">
                        <Button className="w-1/2 bg-[#01BABC] hover:bg-[#01BABC]/80 text-white" size="sm" asChild>
                          <a href={plugin.viewUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={14} className="mr-1.5" />
                            Preview
                          </a>
                        </Button>
                        <Button className="w-1/2 bg-green-600 hover:bg-green-700 text-white" size="sm" asChild>
                          <a href={plugin.downloadUrl} target="_blank" rel="noopener noreferrer">
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
    </main>
  )
}
