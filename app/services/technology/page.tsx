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
  CheckCircle,
  Zap,
  Monitor,
  PenTool,
  FileCode,
  Server,
  ShieldCheck,
  Users,
} from "lucide-react"

export default function TechnologyServicesPage() {
  // Main services data
  const mainServices = [
    {
      title: "Website Development",
      icon: <Globe className="h-6 w-6 text-[#01BABC]" />,
      description:
        "Custom-designed, responsive websites that engage visitors and drive conversions. From simple landing pages to complex e-commerce platforms.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Content Management",
        "Performance Tuning",
        "Analytics Integration",
      ],
      image: "/placeholder.svg?height=600&width=800",
      color: "from-blue-500/20 to-cyan-500/10",
    },
    {
      title: "Web Applications",
      icon: <Code className="h-6 w-6 text-[#01BABC]" />,
      description:
        "Powerful, scalable web applications built with modern frameworks. We create solutions that automate processes and solve complex business challenges.",
      features: [
        "Custom Development",
        "User Authentication",
        "API Integration",
        "Real-time Features",
        "Cloud Deployment",
      ],
      image: "/placeholder.svg?height=600&width=800",
      color: "from-purple-500/20 to-indigo-500/10",
    },
    {
      title: "Logo & Brand Design",
      icon: <Paintbrush className="h-6 w-6 text-[#01BABC]" />,
      description:
        "Eye-catching logos and comprehensive brand identities that communicate your values and resonate with your audience.",
      features: ["Logo Creation", "Brand Guidelines", "Color Palette", "Typography Selection", "Brand Assets"],
      image: "/placeholder.svg?height=600&width=800",
      color: "from-pink-500/20 to-rose-500/10",
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone className="h-6 w-6 text-[#01BABC]" />,
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.",
      features: [
        "Cross-platform Development",
        "Native iOS & Android",
        "UI/UX Design",
        "App Store Submission",
        "Maintenance & Updates",
      ],
      image: "/placeholder.svg?height=600&width=800",
      color: "from-orange-500/20 to-amber-500/10",
    },
    {
      title: "Database Solutions",
      icon: <Database className="h-6 w-6 text-[#01BABC]" />,
      description:
        "Robust database design, implementation, and optimization services to ensure your data is secure, accessible, and efficiently managed.",
      features: [
        "Database Architecture",
        "Data Migration",
        "Performance Optimization",
        "Backup & Recovery",
        "Security Implementation",
      ],
      image: "/placeholder.svg?height=600&width=800",
      color: "from-green-500/20 to-emerald-500/10",
    },
    {
      title: "Digital Marketing",
      icon: <BarChart className="h-6 w-6 text-[#01BABC]" />,
      description:
        "Strategic digital marketing services that increase your online visibility, drive traffic, and convert visitors into customers.",
      features: [
        "SEO & Content Strategy",
        "Social Media Marketing",
        "Email Campaigns",
        "PPC Advertising",
        "Analytics & Reporting",
      ],
      image: "/placeholder.svg?height=600&width=800",
      color: "from-teal-500/20 to-cyan-500/10",
    },
  ]

  // Process steps
  const processSteps = [
    {
      title: "Discovery",
      description: "We learn about your business, goals, and requirements to create a tailored solution.",
      icon: <Users className="h-6 w-6 text-[#01BABC]" />,
    },
    {
      title: "Planning",
      description: "We develop a detailed project plan with timelines, milestones, and deliverables.",
      icon: <Layers className="h-6 w-6 text-[#01BABC]" />,
    },
    {
      title: "Design",
      description: "Our designers create mockups and prototypes for your review and approval.",
      icon: <PenTool className="h-6 w-6 text-[#01BABC]" />,
    },
    {
      title: "Development",
      description: "Our developers bring the designs to life with clean, efficient code.",
      icon: <FileCode className="h-6 w-6 text-[#01BABC]" />,
    },
    {
      title: "Testing",
      description: "We thoroughly test all aspects of your project to ensure quality and performance.",
      icon: <ShieldCheck className="h-6 w-6 text-[#01BABC]" />,
    },
    {
      title: "Launch",
      description: "We deploy your project and provide training and documentation.",
      icon: <Zap className="h-6 w-6 text-[#01BABC]" />,
    },
  ]

  // Technology stack
  const technologies = [
    { name: "React", icon: <Code className="h-5 w-5 text-[#01BABC]" /> },
    { name: "Node.js", icon: <Server className="h-5 w-5 text-[#01BABC]" /> },
    { name: "Python", icon: <FileCode className="h-5 w-5 text-[#01BABC]" /> },
    { name: "AWS", icon: <Database className="h-5 w-5 text-[#01BABC]" /> },
    { name: "MongoDB", icon: <Database className="h-5 w-5 text-[#01BABC]" /> },
    { name: "Flutter", icon: <Smartphone className="h-5 w-5 text-[#01BABC]" /> },
    { name: "WordPress", icon: <Globe className="h-5 w-5 text-[#01BABC]" /> },
    { name: "Figma", icon: <Paintbrush className="h-5 w-5 text-[#01BABC]" /> },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Technology services"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#122C39] via-[#122C39]/80 to-[#0c1e28]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6 animate-fade-in">
              <Layers className="h-5 w-5 mr-2" />
              <span>Technology Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
              Transforming Ideas into <span className="text-[#01BABC]">Digital Reality</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              We deliver cutting-edge technology services tailored to your business needs, from web development to brand
              design and beyond.
            </p>
            <div
              className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white font-medium">
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button variant="outline" className="border-[#01BABC] text-[#01BABC] hover:bg-[#01BABC]/10">
                <Link href="/contact">Get a Quote</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Technology Services</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We offer a comprehensive range of technology services to help businesses thrive in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
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
                      href={`/services/technology/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
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

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#122C39]/50 z-0"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-20 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6">
                <Zap className="h-5 w-5 mr-2" />
                <span>Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Technology Excellence with a <span className="text-[#01BABC]">Human Touch</span>
              </h2>
              <p className="text-slate-300 mb-8">
                We combine technical expertise with a deep understanding of your business goals to deliver solutions
                that drive real results. Our client-centered approach ensures that every project is tailored to your
                specific needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#122C39] p-5 rounded-lg border border-[#01BABC]/20">
                  <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                    <Monitor className="h-6 w-6 text-[#01BABC]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Cutting-Edge Technology</h3>
                  <p className="text-slate-300 text-sm">
                    We stay at the forefront of technological advancements to deliver modern, future-proof solutions.
                  </p>
                </div>

                <div className="bg-[#122C39] p-5 rounded-lg border border-[#01BABC]/20">
                  <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-[#01BABC]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Expert Team</h3>
                  <p className="text-slate-300 text-sm">
                    Our team of skilled developers, designers, and strategists brings years of experience to every
                    project.
                  </p>
                </div>

                <div className="bg-[#122C39] p-5 rounded-lg border border-[#01BABC]/20">
                  <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                    <Cpu className="h-6 w-6 text-[#01BABC]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Scalable Solutions</h3>
                  <p className="text-slate-300 text-sm">
                    We build with growth in mind, ensuring your technology can scale as your business expands.
                  </p>
                </div>

                <div className="bg-[#122C39] p-5 rounded-lg border border-[#01BABC]/20">
                  <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                    <ShieldCheck className="h-6 w-6 text-[#01BABC]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Security Focus</h3>
                  <p className="text-slate-300 text-sm">
                    We implement robust security measures to protect your data and systems from threats.
                  </p>
                </div>
              </div>

              <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white font-medium">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden animate-slide-in-right">
              <Image
                src="/images/penn-team-collaboration.png"
                alt="Our collaborative team working on technology solutions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#122C39] via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="bg-[#122C39]/80 p-6 rounded-lg border border-[#01BABC]/20 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3 text-white">Client Success</h3>
                  <p className="text-slate-300 mb-4">
                    "The team delivered an exceptional website that perfectly captures our brand and has significantly
                    increased our online conversions."
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-[#01BABC]/20 mr-3"></div>
                    <div>
                      <h4 className="text-white font-medium">Ahomed Geedi</h4>
                      <p className="text-slate-400 text-sm">CEO, Geedi General Trading</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6">
              <Layers className="h-5 w-5 mr-2" />
              <span>Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How We Work</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our streamlined process ensures efficient delivery of high-quality solutions that meet your business
              objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 relative group"
              >
                <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-[#01BABC] text-[#122C39] flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <div className="h-16 w-16 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-6 group-hover:bg-[#01BABC]/20 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#01BABC] transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#122C39] to-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6">
              <Cpu className="h-5 w-5 mr-2" />
              <span>Technology Stack</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Powered by Modern Technologies</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We leverage the latest technologies and frameworks to build robust, scalable, and high-performance
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-[#122C39] p-5 rounded-lg border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 flex flex-col items-center justify-center text-center"
              >
                <div className="h-12 w-12 rounded-full bg-[#01BABC]/10 flex items-center justify-center mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how our technology services can help you achieve your business goals and stand out in the
              digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white font-medium">
                <Link href="/contact">Get Started</Link>
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
