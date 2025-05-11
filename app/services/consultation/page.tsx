import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Lightbulb,
  TrendingUp,
  Briefcase,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  BarChart,
  PieChart,
  FileText,
  MessageSquare,
  Award,
} from "lucide-react"

export default function ConsultationServicesPage() {
  // Main consultation services
  const consultationServices = [
    {
      title: "Business Strategy",
      icon: <Lightbulb className="h-6 w-6 text-[#01BABC]" />,
      description:
        "Comprehensive business strategy consulting to help you define your vision, mission, and roadmap for sustainable growth and competitive advantage.",
      features: [
        "Market Analysis",
        "Competitive Positioning",
        "Growth Planning",
        "Business Model Innovation",
        "Risk Assessment",
      ],
      color: "from-amber-500/20 to-yellow-500/10",
    },
    {
      title: "Digital Transformation",
      icon: <TrendingUp className="h-6 w-6 text-[#01BABC]" />,
      description:
        "Guide your organization through digital transformation with strategic planning, technology selection, and change management support.",
      features: [
        "Technology Assessment",
        "Digital Roadmap Creation",
        "Process Optimization",
        "Change Management",
        "Digital Culture Development",
      ],
      color: "from-cyan-500/20 to-blue-500/10",
    },
    {
      title: "Market Research",
      icon: <Target className="h-6 w-6 text-[#01BABC]" />,
      description:
        "Data-driven market research to help you understand your target audience, industry trends, and competitive landscape.",
      features: [
        "Consumer Insights",
        "Competitor Analysis",
        "Market Opportunity Assessment",
        "Customer Persona Development",
        "Trend Forecasting",
      ],
      color: "from-green-500/20 to-emerald-500/10",
    },
    {
      title: "Financial Analysis",
      icon: <BarChart className="h-6 w-6 text-[#01BABC]" />,
      description:
        "Comprehensive financial analysis and planning services to optimize your business performance and support strategic decision-making.",
      features: [
        "Financial Modeling",
        "Investment Analysis",
        "Cost Optimization",
        "Pricing Strategy",
        "Budget Planning",
      ],
      color: "from-purple-500/20 to-indigo-500/10",
    },
    {
      title: "Training & Workshops",
      icon: <BookOpen className="h-6 w-6 text-[#01BABC]" />,
      description:
        "Customized training programs and interactive workshops to develop your team's skills and knowledge in key business areas.",
      features: [
        "Digital Skills Training",
        "Leadership Development",
        "Innovation Workshops",
        "Team Building",
        "Custom Learning Programs",
      ],
      color: "from-pink-500/20 to-rose-500/10",
    },
    {
      title: "Project Management",
      icon: <Briefcase className="h-6 w-6 text-[#01BABC]" />,
      description:
        "Expert project management consulting to ensure your initiatives are delivered on time, within budget, and to specification.",
      features: [
        "Project Planning",
        "Resource Allocation",
        "Risk Management",
        "Progress Tracking",
        "Quality Assurance",
      ],
      color: "from-orange-500/20 to-red-500/10",
    },
  ]

  // Benefits
  const benefits = [
    {
      title: "Expert Guidance",
      description: "Access to seasoned consultants with industry-specific expertise and proven track records.",
      icon: <Award className="h-6 w-6 text-[#01BABC]" />,
    },
    {
      title: "Objective Perspective",
      description: "Gain fresh, unbiased insights into your business challenges and opportunities.",
      icon: <PieChart className="h-6 w-6 text-[#01BABC]" />,
    },
    {
      title: "Customized Solutions",
      description: "Tailored recommendations and strategies designed specifically for your business needs and goals.",
      icon: <FileText className="h-6 w-6 text-[#01BABC]" />,
    },
    {
      title: "Accelerated Growth",
      description: "Fast-track your business development with proven methodologies and best practices.",
      icon: <TrendingUp className="h-6 w-6 text-[#01BABC]" />,
    },
    {
      title: "Knowledge Transfer",
      description: "Build internal capabilities through collaborative work and skill development.",
      icon: <MessageSquare className="h-6 w-6 text-[#01BABC]" />,
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Consultation services"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#122C39] via-[#122C39]/80 to-[#0c1e28]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6 animate-fade-in">
              <Briefcase className="h-5 w-5 mr-2" />
              <span>Consultation Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
              Strategic Guidance for <span className="text-[#01BABC]">Business Success</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Our expert consultants provide insights and strategies to help your business overcome challenges and
              achieve sustainable growth.
            </p>
            <div
              className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white font-medium">
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button variant="outline" className="border-[#01BABC] text-[#01BABC] hover:bg-[#01BABC]/10">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0c1e28] to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#01BABC]/5 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#01BABC]/5 filter blur-3xl"></div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 md:py-24 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Consultation Services</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We offer a comprehensive range of consultation services to help businesses make informed decisions and
              achieve their strategic objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultationServices.map((service, index) => (
              <Card
                key={index}
                className="bg-[#122C39] border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-500 overflow-hidden group hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className={`h-48 bg-gradient-to-r ${service.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[#122C39]/80 rounded-full p-4">
                        <div className="h-16 w-16 flex items-center justify-center">{service.icon}</div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#122C39] to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#01BABC] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 mb-4 text-sm">{service.description}</p>

                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-[#01BABC] mr-2 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/services/consultation/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center text-[#01BABC] hover:text-[#01BABC]/80 font-medium text-sm"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#122C39]/50 z-0"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-20 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6">
              <Zap className="h-5 w-5 mr-2" />
              <span>Benefits</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose Our <span className="text-[#01BABC]">Consultation Services</span>
            </h2>
            <p className="text-slate-300">
              Partner with us to gain strategic advantages and accelerate your business growth through expert guidance
              and tailored solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 group"
              >
                <div className="h-16 w-16 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-6 group-hover:bg-[#01BABC]/20 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#01BABC] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-300">{benefit.description}</p>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Take Your Business to the Next Level?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how our consultation services can help you overcome challenges and achieve your business
              goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white font-medium">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" className="border-[#01BABC] text-[#01BABC] hover:bg-[#01BABC]/10">
                <Link href="/contact">Schedule a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
