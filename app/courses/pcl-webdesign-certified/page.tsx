import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Clock,
  Users,
  GraduationCap,
  Star,
  Calendar,
  Award,
  BookOpen,
  Laptop,
  Video,
  MessageSquare,
  Code,
  Download,
  Layout,
  ShoppingCart,
  Search,
  Shield,
  PenTool,
  User,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function WebDesignCertifiedPage() {
  const modules = [
    {
      title: "WordPress Fundamentals",
      description: "Learn the basics of WordPress and how to set up a professional website.",
      duration: "1 week",
      lessons: 5,
    },
    {
      title: "Mastering Elementor",
      description: "Create stunning page layouts using the Elementor page builder.",
      duration: "2 weeks",
      lessons: 10,
    },
    {
      title: "Theme Customization",
      description: "Learn to customize WordPress themes to match your design vision.",
      duration: "1 week",
      lessons: 6,
    },
    {
      title: "Responsive Design with Elementor",
      description: "Create websites that work seamlessly across all devices and screen sizes.",
      duration: "1 week",
      lessons: 8,
    },
    {
      title: "Advanced Elementor Techniques",
      description: "Master advanced features like dynamic content, custom CSS, and animations.",
      duration: "1 week",
      lessons: 7,
    },
    {
      title: "E-commerce with WooCommerce",
      description: "Build online stores and integrate payment gateways with WooCommerce.",
      duration: "1 week",
      lessons: 8,
    },
    {
      title: "Website Optimization",
      description: "Optimize your WordPress sites for speed, SEO, and security.",
      duration: "1 week",
      lessons: 6,
    },
    {
      title: "Client Projects & Portfolio",
      description: "Apply your skills to real-world projects with guidance from instructors.",
      duration: "2 weeks",
      lessons: 4,
    },
  ]

  const instructors = [
    {
      name: "Abdirisak Mohamed",
      role: "WordPress Expert",
      bio: "Abdirisak has over 10 years of experience in WordPress development, having built hundreds of websites for clients across various industries.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Fatima Omar",
      role: "Elementor Specialist",
      bio: "Fatima is a certified Elementor expert who specializes in creating stunning, conversion-focused websites using the Elementor page builder.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c1e28] via-[#122C39] to-[#0c1e28]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#01BABC]/5 mix-blend-overlay"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMUJBQkMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aC0ydi00aDJ2NHptMC02di00aC0ydjRoMnpNMzAgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Badge className="bg-[#01BABC] text-[#122C39] mb-4">PCL Certified Course</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">PCL Webdesign Certified</h1>
              <p className="text-xl text-slate-300 mb-8">
                Master WordPress and Elementor to create stunning, professional websites without coding. Become a
                certified WordPress designer and start building beautiful websites for clients.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-[#01BABC] mr-2" />
                  <span className="text-white">8 Weeks</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-[#01BABC] mr-2" />
                  <span className="text-white">1,240+ Graduates</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-[#01BABC] fill-[#01BABC] mr-2" />
                  <span className="text-white">4.8/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-[#01BABC] mr-2" />
                  <span className="text-white">Ministry Approved</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white font-medium"
                  asChild
                >
                  <a href="https://penn.so/courses/webdesign-masterclass/" target="_blank" rel="noopener noreferrer">
                    Enroll Now - $499
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-[#01BABC] text-[#01BABC] hover:bg-[#01BABC]/10">
                  Download Syllabus <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-[#01BABC]/10 rounded-xl blur-xl"></div>
              <div className="relative bg-[#122C39] rounded-xl overflow-hidden border border-[#01BABC]/30">
                <div className="aspect-video relative">
                  <Image
                    src="/images/webdesign-masterclass.jpg"
                    alt="WordPress and Elementor Course"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-[#01BABC]/90 flex items-center justify-center cursor-pointer hover:bg-[#01BABC] transition-colors">
                      <Video className="h-6 w-6 text-[#122C39]" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-[#01BABC]/20 mr-3 flex items-center justify-center">
                    <User className="h-5 w-5 text-[#01BABC]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Abdirisak Mohamed</h4>
                    <p className="text-slate-400 text-sm">WordPress Expert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#01BABC]/30 to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Course Overview</h2>

            <div className="bg-[#122C39] p-8 rounded-xl border border-[#01BABC]/20 mb-12">
              <p className="text-slate-300 mb-6">
                The PCL Webdesign Certified program is a comprehensive course that equips you with the skills needed to
                design and build professional WordPress websites using Elementor. You'll learn how to create stunning,
                responsive websites without writing a single line of code.
              </p>

              <p className="text-slate-300 mb-6">
                Through hands-on projects and expert instruction, you'll master WordPress, Elementor, theme
                customization, and e-commerce integration with WooCommerce. By the end of the course, you'll have a
                professional portfolio of WordPress websites to showcase to potential clients.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Layout className="h-5 w-5 text-[#01BABC]" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">No Coding Required</h3>
                    <p className="text-slate-400 text-sm">Create professional websites without writing code</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <PenTool className="h-5 w-5 text-[#01BABC]" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Visual Design</h3>
                    <p className="text-slate-400 text-sm">Design visually with Elementor's drag-and-drop interface</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <ShoppingCart className="h-5 w-5 text-[#01BABC]" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">E-commerce Ready</h3>
                    <p className="text-slate-400 text-sm">Build online stores with WooCommerce integration</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Laptop className="h-5 w-5 text-[#01BABC]" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Responsive Design</h3>
                    <p className="text-slate-400 text-sm">Create websites that work perfectly on all devices</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 text-center">
                <div className="h-12 w-12 rounded-full bg-[#01BABC]/10 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-[#01BABC]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Next Start Date</h3>
                <p className="text-slate-300">June 15, 2023</p>
              </div>

              <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 text-center">
                <div className="h-12 w-12 rounded-full bg-[#01BABC]/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-[#01BABC]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Course Duration</h3>
                <p className="text-slate-300">8 Weeks (Part-time)</p>
              </div>

              <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 text-center">
                <div className="h-12 w-12 rounded-full bg-[#01BABC]/10 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-6 w-6 text-[#01BABC]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Certification</h3>
                <p className="text-slate-300">PCL WordPress Designer Certificate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Course Modules</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our curriculum is designed to take you from beginner to professional WordPress designer through these
              comprehensive modules.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="bg-[#122C39] rounded-xl border border-[#01BABC]/20 overflow-hidden hover:border-[#01BABC] transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-[#01BABC]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-[#01BABC] font-medium">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-white">{module.title}</h3>
                        <p className="text-slate-300 mb-4">{module.description}</p>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center text-sm text-slate-400">
                            <Clock className="h-4 w-4 mr-1 text-[#01BABC]" />
                            <span>{module.duration}</span>
                          </div>
                          <div className="flex items-center text-sm text-slate-400">
                            <BookOpen className="h-4 w-4 mr-1 text-[#01BABC]" />
                            <span>{module.lessons} Lessons</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills You'll Learn */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Skills You'll Learn</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              By the end of this course, you'll have mastered these essential WordPress and Elementor skills that
              clients are looking for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">WordPress Mastery</h3>
              <p className="text-slate-300">Set up, configure, and manage WordPress websites like a professional.</p>
            </div>

            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <PenTool className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Elementor Page Builder</h3>
              <p className="text-slate-300">Create stunning page layouts using Elementor's drag-and-drop interface.</p>
            </div>

            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <Layout className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Theme Customization</h3>
              <p className="text-slate-300">
                Customize WordPress themes to match your client's brand and requirements.
              </p>
            </div>

            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <ShoppingCart className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">WooCommerce</h3>
              <p className="text-slate-300">
                Build e-commerce stores with product catalogs, shopping carts, and payment gateways.
              </p>
            </div>

            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">SEO Optimization</h3>
              <p className="text-slate-300">Optimize WordPress websites for search engines to increase visibility.</p>
            </div>

            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Website Security</h3>
              <p className="text-slate-300">
                Implement security best practices to protect WordPress websites from threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Instructors */}
      <section className="py-20 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Meet Your Instructors</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Learn from WordPress and Elementor experts with years of experience in building professional websites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="bg-[#122C39] rounded-xl border border-[#01BABC]/20 overflow-hidden hover:border-[#01BABC] transition-all duration-300"
              >
                <div className="p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={instructor.image || "/placeholder.svg"}
                      alt={instructor.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-white text-center md:text-left">
                      {instructor.name}
                    </h3>
                    <p className="text-[#01BABC] mb-3 text-center md:text-left">{instructor.role}</p>
                    <p className="text-slate-300">{instructor.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Build */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">What You'll Build</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Throughout the course, you'll create real-world WordPress projects using Elementor that you can add to
              your portfolio and showcase to potential clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#122C39] rounded-xl border border-[#01BABC]/20 overflow-hidden hover:border-[#01BABC] transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Corporate Business Website"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Corporate Business Website</h3>
                <p className="text-slate-300 mb-4">
                  Build a professional multi-page business website with custom Elementor layouts, contact forms, team
                  profiles, and testimonial sliders.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded">WordPress</span>
                  <span className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded">Elementor</span>
                  <span className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded">Contact Form 7</span>
                </div>
              </div>
            </div>

            <div className="bg-[#122C39] rounded-xl border border-[#01BABC]/20 overflow-hidden hover:border-[#01BABC] transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="E-commerce Store"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">WooCommerce Online Store</h3>
                <p className="text-slate-300 mb-4">
                  Create a complete e-commerce store with WooCommerce featuring custom product pages, shopping cart,
                  checkout process, and payment gateway integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded">WordPress</span>
                  <span className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded">WooCommerce</span>
                  <span className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded">Elementor Pro</span>
                </div>
              </div>
            </div>

            <div className="bg-[#122C39] rounded-xl border border-[#01BABC]/20 overflow-hidden hover:border-[#01BABC] transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Portfolio Website"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Creative Portfolio Website</h3>
                <p className="text-slate-300 mb-4">
                  Design a stunning portfolio website with animated galleries, filterable project showcases, and custom
                  Elementor widgets to highlight your creative work.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded">WordPress</span>
                  <span className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded">Elementor</span>
                  <span className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded">Custom CSS</span>
                </div>
              </div>
            </div>

            <div className="bg-[#122C39] rounded-xl border border-[#01BABC]/20 overflow-hidden hover:border-[#01BABC] transition-all duration-300">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Blog Website" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Content-Rich Blog</h3>
                <p className="text-slate-300 mb-4">
                  Build a professional blog with custom post layouts, category pages, related posts, newsletter signup
                  forms, and social media integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded">WordPress</span>
                  <span className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded">Elementor</span>
                  <span className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded">Yoast SEO</span>
                </div>
              </div>
            </div>

            <div className="bg-[#122C39] rounded-xl border border-[#01BABC]/20 overflow-hidden hover:border-[#01BABC] transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Membership Website"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Membership Website</h3>
                <p className="text-slate-300 mb-4">
                  Create a membership site with restricted content, user registration, login system, and different
                  membership levels with varying access permissions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded">WordPress</span>
                  <span className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded">Elementor Pro</span>
                  <span className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded">MemberPress</span>
                </div>
              </div>
            </div>

            <div className="bg-[#122C39] rounded-xl border border-[#01BABC]/20 overflow-hidden hover:border-[#01BABC] transition-all duration-300">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Landing Page" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Conversion-Focused Landing Page</h3>
                <p className="text-slate-300 mb-4">
                  Design a high-converting landing page with animated sections, countdown timers, testimonials, and
                  optimized call-to-action buttons.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded">WordPress</span>
                  <span className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded">Elementor Pro</span>
                  <span className="text-xs bg-[#01BABC]/10 text-[#01BABC] px-2 py-1 rounded">A/B Testing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Each project includes step-by-step guidance, professional design templates, and instructor feedback to
              ensure you create portfolio-worthy websites.
            </p>
            <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white" asChild>
              <a href="https://penn.so/courses/webdesign-masterclass/" target="_blank" rel="noopener noreferrer">
                Start Building Your Portfolio Today
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-20 bg-[#01BABC]/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMUJBQkMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aC0ydi00aDJ2NHptMC02di00aC0ydjRoMnpNMvZGQiPjxnIGZpbGw9IiMwMUJBQkMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aC0ydi00aDJ2NHptMC02di00aC0ydjRoMnpNMzAgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Become a Certified WordPress Designer?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Enroll in our PCL Webdesign Certified course today and take the first step towards a rewarding career in
              WordPress design.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white font-medium"
                asChild
              >
                <a href="https://penn.so/courses/webdesign-masterclass/" target="_blank" rel="noopener noreferrer">
                  Enroll Now - $499
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-[#01BABC] text-[#01BABC] hover:bg-[#01BABC]/10">
                Schedule a Consultation
              </Button>
            </div>

            <div className="mt-12 p-6 bg-[#122C39] rounded-xl border border-[#01BABC]/20">
              <div className="flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-[#01BABC] mr-2" />
                <h3 className="text-xl font-semibold text-white">Have Questions?</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Our education advisors are here to help you choose the right course for your career goals.
              </p>
              <Button variant="ghost" className="text-[#01BABC] hover:bg-[#01BABC]/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
