import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  BookOpen,
  FileText,
  Presentation,
  CheckCircle,
  ArrowRight,
  Users,
  Building,
  Globe,
  Award,
  Layers,
} from "lucide-react"

export default function UniversityCollaborationPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#0c1e28] to-[#122C39]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">University Collaboration</h1>
            <p className="text-xl md:text-2xl mb-8 text-[#01BABC]">
              Designing and delivering tailored curricula for technology education
            </p>
            <p className="text-gray-300 mb-8">
              We collaborate with university technology faculties to design and deliver comprehensive, tailored
              curricula. Our programs include complete subject content development, from textbooks to lecture slides and
              all supporting learning materials.
            </p>
            <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white">
              <Link href="#contact" className="flex items-center">
                Start Collaborating <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#122C39] to-transparent"></div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-[#122C39]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Comprehensive Curriculum Development</h2>
              <p className="text-gray-300 mb-6">
                At Penn Creative Lab, we understand the challenges universities face in keeping technology curricula
                current and relevant. Our specialized team works directly with university faculty to develop
                comprehensive educational materials that meet academic standards while incorporating industry-relevant
                skills and knowledge.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#01BABC] mr-2 mt-1" />
                  <span className="text-gray-300">Textbook Development</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#01BABC] mr-2 mt-1" />
                  <span className="text-gray-300">Lecture Slides</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#01BABC] mr-2 mt-1" />
                  <span className="text-gray-300">Lab Exercises</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#01BABC] mr-2 mt-1" />
                  <span className="text-gray-300">Assessment Materials</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#01BABC] mr-2 mt-1" />
                  <span className="text-gray-300">Online Resources</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#01BABC] mr-2 mt-1" />
                  <span className="text-gray-300">Instructor Guides</span>
                </div>
              </div>

              <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white">
                <Link href="#subjects" className="flex items-center">
                  Explore Subject Areas <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/university-students.png"
                alt="University Collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subject Areas Section */}
      <section id="subjects" className="py-16 md:py-24 bg-gradient-to-b from-[#122C39] to-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Technology Subject Areas</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We develop comprehensive curriculum materials for a wide range of technology subjects, ensuring your
              university stays at the forefront of technical education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjectAreas.map((subject, index) => (
              <div
                key={index}
                className="bg-[#0c1e28]/80 p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC]/50 transition-all duration-300"
              >
                <div className="bg-[#01BABC]/10 p-3 rounded-lg inline-block mb-4">{subject.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{subject.title}</h3>
                <p className="text-gray-300 mb-4">{subject.description}</p>
                <ul className="space-y-2">
                  {subject.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#01BABC] mr-2 mt-1" />
                      <span className="text-gray-400">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Materials Section */}
      <section className="py-16 md:py-24 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Comprehensive Learning Materials</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our curriculum packages include everything needed for effective teaching and learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningMaterials.map((material, index) => (
              <div
                key={index}
                className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC]/50 transition-all duration-300"
              >
                <div className="bg-[#01BABC]/10 p-3 rounded-lg inline-block mb-4">{material.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{material.title}</h3>
                <p className="text-gray-300">{material.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Process */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#0c1e28] to-[#122C39]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Collaboration Process</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We follow a structured approach to ensure your curriculum meets both academic standards and industry needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collaborationProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 h-full">
                  <div className="absolute -top-4 -left-4 bg-[#01BABC] text-[#122C39] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white mt-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                {index < collaborationProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-[#01BABC]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-24 bg-[#122C39]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Our University Partners</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're proud to collaborate with leading educational institutions around the world
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {universityPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-[#0c1e28]/80 p-6 rounded-xl border border-[#01BABC]/20 flex items-center justify-center h-32"
              >
                <h3 className="text-xl font-bold text-white text-center">{partner}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#122C39] to-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Benefits of Collaboration</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Partner with Penn Creative Lab to transform your technology education offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#0c1e28]/80 p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC]/50 transition-all duration-300"
              >
                <div className="bg-[#01BABC]/10 p-3 rounded-lg inline-block mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Curriculum?</h2>
            <p className="text-gray-300 mb-8">
              Contact us today to discuss how we can collaborate to develop cutting-edge technology curricula for your
              university.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white">
                <Link href="/contact" className="flex items-center">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-[#01BABC] text-[#01BABC] hover:bg-[#01BABC]/10">
                <Link href="/services" className="flex items-center">
                  Explore Other Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Data for the page
const subjectAreas = [
  {
    title: "Web Development",
    icon: <Layers className="h-6 w-6 text-[#01BABC]" />,
    description: "Comprehensive curriculum for modern web technologies and frameworks.",
    topics: ["HTML/CSS/JavaScript", "React & Next.js", "Backend Development", "Full-Stack Projects"],
  },
  {
    title: "Mobile Development",
    icon: <Layers className="h-6 w-6 text-[#01BABC]" />,
    description: "Complete courses for building native and cross-platform mobile applications.",
    topics: ["iOS Development", "Android Development", "React Native", "Flutter"],
  },
  {
    title: "Data Science",
    icon: <Layers className="h-6 w-6 text-[#01BABC]" />,
    description: "Curriculum covering data analysis, visualization, and machine learning.",
    topics: ["Python for Data Science", "Statistical Analysis", "Machine Learning", "Big Data"],
  },
  {
    title: "Artificial Intelligence",
    icon: <Layers className="h-6 w-6 text-[#01BABC]" />,
    description: "Cutting-edge AI curriculum from fundamentals to advanced applications.",
    topics: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision"],
  },
  {
    title: "Cybersecurity",
    icon: <Layers className="h-6 w-6 text-[#01BABC]" />,
    description: "Comprehensive security curriculum with practical labs and exercises.",
    topics: ["Network Security", "Ethical Hacking", "Security Auditing", "Cryptography"],
  },
  {
    title: "UI/UX Design",
    icon: <Layers className="h-6 w-6 text-[#01BABC]" />,
    description: "Design curriculum focusing on user experience and interface design.",
    topics: ["Design Principles", "Wireframing", "Prototyping", "User Research"],
  },
]

const learningMaterials = [
  {
    title: "Textbooks & Manuals",
    icon: <BookOpen className="h-6 w-6 text-[#01BABC]" />,
    description:
      "Comprehensive textbooks with clear explanations, examples, and exercises tailored to your university's specific needs.",
  },
  {
    title: "Lecture Materials",
    icon: <Presentation className="h-6 w-6 text-[#01BABC]" />,
    description:
      "Professional slide decks, lecture notes, and presentation materials for effective classroom instruction.",
  },
  {
    title: "Assignments & Labs",
    icon: <FileText className="h-6 w-6 text-[#01BABC]" />,
    description:
      "Practical assignments, lab exercises, and projects that reinforce learning and develop real-world skills.",
  },
]

const collaborationProcess = [
  {
    title: "Needs Assessment",
    description: "We work with your faculty to understand specific curriculum needs and objectives.",
  },
  {
    title: "Curriculum Design",
    description: "Our experts develop a comprehensive curriculum structure and learning outcomes.",
  },
  {
    title: "Content Development",
    description: "We create all necessary learning materials, from textbooks to assignments.",
  },
  {
    title: "Implementation & Support",
    description: "We provide training for faculty and ongoing support for curriculum delivery.",
  },
]

const universityPartners = [
  "Mogadishu University",
  "SIMAD University",
  "Jamhuriya University",
  "East Africa University",
  "Benadir University",
  "University of Somalia",
  "Plasma University",
  "Somali National University",
]

const benefits = [
  {
    title: "Industry-Relevant Content",
    icon: <Building className="h-6 w-6 text-[#01BABC]" />,
    description: "Curriculum developed with input from industry experts to ensure relevance and employability.",
  },
  {
    title: "Customized Solutions",
    icon: <Users className="h-6 w-6 text-[#01BABC]" />,
    description:
      "Materials tailored to your specific institutional needs, student demographics, and learning objectives.",
  },
  {
    title: "Continuous Updates",
    icon: <Award className="h-6 w-6 text-[#01BABC]" />,
    description: "Regular curriculum updates to keep pace with rapidly evolving technology trends and practices.",
  },
  {
    title: "Faculty Development",
    icon: <GraduationCap className="h-6 w-6 text-[#01BABC]" />,
    description: "Training and support for faculty to effectively deliver the new curriculum materials.",
  },
  {
    title: "Global Standards",
    icon: <Globe className="h-6 w-6 text-[#01BABC]" />,
    description: "Curriculum aligned with international educational standards and industry certifications.",
  },
  {
    title: "Comprehensive Package",
    icon: <Layers className="h-6 w-6 text-[#01BABC]" />,
    description: "Complete solution including textbooks, slides, assignments, exams, and instructor guides.",
  },
]
