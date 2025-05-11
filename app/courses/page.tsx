import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Code,
  Clock,
  Users,
  GraduationCap,
  CheckCircle,
  Star,
  Calendar,
  Award,
  BookOpen,
  MessageSquare,
  User,
  Globe,
  Briefcase,
  PenTool,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoursesPage() {
  const courses = [
    {
      title: "PCL Webdesign Certified",
      category: "Technology",
      description: "Master WordPress and Elementor to create stunning, professional websites without coding.",
      duration: "8 weeks",
      level: "Beginner",
      icon: <Code className="h-6 w-6 text-[#01BABC]" />,
      image: "/images/webdesign-masterclass.jpg",
      featured: true,
      rating: 4.8,
      students: 1240,
      instructor: "Abdirisak Mohamed",
      startDate: "June 15, 2023",
      regularPrice: "$40",
      salePrice: "$10",
      skills: ["WordPress", "Elementor", "Theme Customization", "WooCommerce", "Website Optimization"],
      link: "https://penn.so/courses/webdesign-masterclass/",
    },
    {
      title: "UI/UX Design with Figma",
      category: "Design",
      description: "Learn user-centered design principles and create effective user interfaces with Figma.",
      duration: "10 weeks",
      level: "Beginner to Intermediate",
      icon: <PenTool className="h-6 w-6 text-[#01BABC]" />,
      image: "/images/figma-course.png",
      featured: true,
      rating: 4.9,
      students: 980,
      instructor: "Amina Omar",
      startDate: "July 10, 2023",
      regularPrice: "$40",
      salePrice: "$10",
      skills: ["User Research", "Wireframing", "Prototyping", "Figma", "Design Systems"],
      link: "https://penn.so/courses/complete-figma-course/",
    },
  ]

  const testimonials = [
    {
      name: "Farah Ahmed",
      role: "Web Developer",
      company: "TechSolutions",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The PCL Webdesign Certified course gave me the practical skills I needed to land my first job as a developer. The hands-on approach and supportive instructors made all the difference.",
      course: "PCL Webdesign Certified",
      rating: 5,
    },
    {
      name: "Amina Omar",
      role: "UI/UX Designer",
      company: "DesignStudio",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The UI/UX Design with Figma course transformed my design skills. I now have a solid understanding of user-centered design principles and can create professional interfaces.",
      course: "UI/UX Design with Figma",
      rating: 5,
    },
    {
      name: "Mohamed Ali",
      role: "Freelance Designer",
      company: "Self-employed",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Taking both the Webdesign and UI/UX courses gave me a complete skillset to offer clients. I can now design and implement websites from concept to completion.",
      course: "Multiple Courses",
      rating: 4,
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

        {/* Floating Elements */}
        <div className="absolute top-20 left-[10%] w-16 h-16 rounded-full bg-[#01BABC]/10 animate-float"></div>
        <div
          className="absolute bottom-20 right-[10%] w-20 h-20 rounded-full bg-[#01BABC]/5 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-[20%] w-12 h-12 rounded-full bg-[#01BABC]/10 animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6 backdrop-blur-sm border border-[#01BABC]/20">
              <BookOpen className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Transform Your Skills</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Elevate Your Career with{" "}
              <span className="text-[#01BABC] relative">
                Expert-Led
                <span className="absolute bottom-1 left-0 w-full h-1 bg-[#01BABC]/30"></span>
              </span>{" "}
              Courses
            </h1>

            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              Practical, industry-relevant courses designed to equip you with the skills needed to succeed in today's
              digital economy.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white">
                Explore All Courses
              </Button>
              <Button size="lg" variant="outline" className="border-[#01BABC] text-[#01BABC] hover:bg-[#01BABC]/10">
                View Course Calendar
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="bg-[#122C39]/70 backdrop-blur-sm p-6 rounded-xl border border-[#01BABC]/20 transform hover:scale-105 transition-all">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-[#01BABC] mr-2" />
                  <div className="text-3xl font-bold text-white">2,200+</div>
                </div>
                <div className="text-sm text-slate-300">Students Enrolled</div>
              </div>

              <div className="bg-[#122C39]/70 backdrop-blur-sm p-6 rounded-xl border border-[#01BABC]/20 transform hover:scale-105 transition-all">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="h-6 w-6 text-[#01BABC] mr-2" />
                  <div className="text-3xl font-bold text-white">2+</div>
                </div>
                <div className="text-sm text-slate-300">Professional Courses</div>
              </div>

              <div className="bg-[#122C39]/70 backdrop-blur-sm p-6 rounded-xl border border-[#01BABC]/20 transform hover:scale-105 transition-all">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-[#01BABC] mr-2" />
                  <div className="text-3xl font-bold text-white">95%</div>
                </div>
                <div className="text-sm text-slate-300">Employment Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#01BABC]/30 to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Courses</h2>
              <p className="text-slate-300 max-w-2xl">
                Our most popular courses designed to help you master in-demand skills and advance your career.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-[#122C39] rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-full">
                    <div className="relative h-full min-h-[250px]">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      {course.icon}
                      <Badge variant="secondary" className="bg-[#01BABC]/10 text-[#01BABC]">
                        {course.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                    <p className="text-slate-300 mb-4">{course.description}</p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center text-slate-300">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <GraduationCap className="h-4 w-4 mr-1" />
                        <span>{course.level}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-[#01BABC] font-bold mr-2">{course.salePrice}</span>
                        <span className="text-slate-400 line-through text-sm">{course.regularPrice}</span>
                      </div>
                      <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80">
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Student Success Stories</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Hear from our graduates about their journey and how our courses helped them achieve their career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#122C39] rounded-xl p-6 border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-slate-300 text-sm">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-4">{testimonial.quote}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-400">{testimonial.course}</div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "text-[#01BABC]" : "text-slate-600"}`}
                        fill={i < testimonial.rating ? "#01BABC" : "none"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
