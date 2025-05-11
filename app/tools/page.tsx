import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cpu, Calendar, ExternalLink, Layers, Code, Paintbrush, Bot } from "lucide-react"

export default function ToolsPage() {
  const tools = [
    {
      title: "AI Tools",
      description: "Explore our curated collection of powerful AI tools for design, writing, coding, and more.",
      icon: <Cpu className="h-8 w-8 text-[#01BABC]" />,
      link: "/ai-tools",
      color: "from-blue-500/20 to-indigo-500/10",
    },
    {
      title: "Class Schedule Creator",
      description: "Create and manage your semester class schedules with our easy-to-use tool.",
      icon: <Calendar className="h-8 w-8 text-[#01BABC]" />,
      link: "/tools/class-schedule",
      color: "from-green-500/20 to-emerald-500/10",
    },
    {
      title: "Coming Soon: Design Tools",
      description: "Advanced design tools for creating mockups, wireframes, and prototypes.",
      icon: <Paintbrush className="h-8 w-8 text-[#01BABC]" />,
      link: "#",
      color: "from-purple-500/20 to-pink-500/10",
      comingSoon: true,
    },
    {
      title: "Coming Soon: Code Generator",
      description: "Generate boilerplate code for various programming languages and frameworks.",
      icon: <Code className="h-8 w-8 text-[#01BABC]" />,
      link: "#",
      color: "from-amber-500/20 to-yellow-500/10",
      comingSoon: true,
    },
  ]

  return (
    <div className="pt-24 bg-[#0C1E28]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C1E28] via-[#122C39] to-[#0C1E28]"></div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#01BABC]/10 filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#01BABC]/5 filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-[#01BABC]/10 filter blur-2xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6 animate-fade-in">
              <Layers className="h-5 w-5 mr-2" />
              <span>Productivity & Creativity</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
              Powerful <span className="text-[#01BABC]">Tools</span> to Enhance Your Workflow
            </h1>
            <p className="text-xl text-slate-300 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              A collection of useful tools designed to boost your productivity and creativity
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#01BABC]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#01BABC]/5 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="bg-[#122C39] border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-500 overflow-hidden group hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className={`h-32 bg-gradient-to-r ${tool.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[#122C39]/80 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        {tool.icon}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#122C39] to-transparent"></div>

                    {tool.comingSoon && (
                      <div className="absolute top-3 right-3 bg-[#01BABC] text-[#0C1E28] text-xs font-bold px-2 py-1 rounded-full">
                        Coming Soon
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#01BABC] transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-slate-300 mb-6 text-sm">{tool.description}</p>

                    <div className="mt-auto">
                      <Button
                        asChild={!tool.comingSoon}
                        disabled={tool.comingSoon}
                        className="w-full bg-[#01BABC]/10 hover:bg-[#01BABC] text-[#01BABC] hover:text-[#122C39] font-medium border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {!tool.comingSoon ? (
                          <Link href={tool.link} className="flex items-center justify-center w-full">
                            Explore Tool <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        ) : (
                          <span className="flex items-center justify-center">
                            Coming Soon <Bot className="ml-2 h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#01BABC]/10 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#01BABC]/5 filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Need a Custom Tool?</h2>
            <p className="text-xl text-slate-300 mb-8">
              We can develop custom tools tailored to your specific needs and workflows.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white font-medium"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#01BABC] text-[#01BABC] hover:bg-[#01BABC]/10"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
