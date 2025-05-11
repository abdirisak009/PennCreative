import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  Globe,
  Paintbrush,
  Smartphone,
  Database,
  BarChart,
  Layers,
  Cpu,
  ArrowRight,
  Lightbulb,
  TrendingUp,
  LineChart,
  Briefcase,
  BookOpen,
} from "lucide-react"

export default function ServicesPage() {
  // Service categories
  const serviceCategories = [
    {
      title: "Technology Services",
      description: "Cutting-edge technology solutions to transform your digital presence and streamline operations.",
      icon: <Cpu className="h-10 w-10 text-[#01BABC]" />,
      link: "/services/technology",
      services: [
        { name: "Website Development", icon: <Globe className="h-5 w-5 text-[#01BABC]" /> },
        { name: "Web Applications", icon: <Code className="h-5 w-5 text-[#01BABC]" /> },
        { name: "Logo & Brand Design", icon: <Paintbrush className="h-5 w-5 text-[#01BABC]" /> },
        { name: "Mobile App Development", icon: <Smartphone className="h-5 w-5 text-[#01BABC]" /> },
        { name: "Database Solutions", icon: <Database className="h-5 w-5 text-[#01BABC]" /> },
        { name: "Digital Marketing", icon: <BarChart className="h-5 w-5 text-[#01BABC]" /> },
      ],
      color: "from-blue-500/20 to-cyan-500/10",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Consultation Services",
      description: "Strategic guidance and expert advice to help your business overcome challenges and achieve growth.",
      icon: <Briefcase className="h-10 w-10 text-[#01BABC]" />,
      link: "/services/consultation",
      services: [
        { name: "Business Strategy", icon: <Lightbulb className="h-5 w-5 text-[#01BABC]" /> },
        { name: "Digital Transformation", icon: <TrendingUp className="h-5 w-5 text-[#01BABC]" /> },
        { name: "Market Research", icon: <LineChart className="h-5 w-5 text-[#01BABC]" /> },
        { name: "Financial Analysis", icon: <BarChart className="h-5 w-5 text-[#01BABC]" /> },
        { name: "Training & Workshops", icon: <BookOpen className="h-5 w-5 text-[#01BABC]" /> },
        { name: "Project Management", icon: <Layers className="h-5 w-5 text-[#01BABC]" /> },
      ],
      color: "from-amber-500/20 to-yellow-500/10",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Our services"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#122C39] via-[#122C39]/80 to-[#0c1e28]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6 animate-fade-in">
              <Layers className="h-5 w-5 mr-2" />
              <span>Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
              Comprehensive <span className="text-[#01BABC]">Solutions</span> for Your Business
            </h1>
            <p className="text-xl text-slate-300 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              We offer a wide range of services designed to help your business thrive in today's competitive landscape.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0c1e28] to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#01BABC]/5 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#01BABC]/5 filter blur-3xl"></div>
      </section>

      {/* Service Categories */}
      <section className="py-16 md:py-24 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {serviceCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-[#122C39] border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-500 overflow-hidden group hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className={`h-64 bg-gradient-to-r ${category.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[#122C39]/80 rounded-full p-6">
                        <div className="h-24 w-24 flex items-center justify-center">{category.icon}</div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#122C39] to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#01BABC] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-slate-300 mb-6">{category.description}</p>

                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-white mb-4">Our Services Include:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {category.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center">
                            <div className="mr-2 flex-shrink-0">{service.icon}</div>
                            <span className="text-slate-300 text-sm">{service.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white">
                      <Link href={category.link} className="flex items-center justify-center w-full">
                        Explore {category.title} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#01BABC]/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#01BABC]/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#01BABC]/10 filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Not Sure Which Service You Need?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Our team of experts can help you identify the right solutions for your business challenges. Schedule a
              free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white font-medium">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" className="border-[#01BABC] text-[#01BABC] hover:bg-[#01BABC]/10">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
