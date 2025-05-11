import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Mail } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Ahmed Hassan",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in education and technology, Ahmed founded Penn Creative Lab to bridge the gap between academic learning and practical skills in Somalia.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "ahmed@penncreativelab.com",
      },
    },
    {
      name: "Amina Omar",
      role: "Chief Academic Officer",
      bio: "Amina brings her extensive background in curriculum development and educational technology to ensure our programs meet the highest standards of quality and relevance.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "amina@penncreativelab.com",
      },
    },
    {
      name: "Mohamed Ali",
      role: "Chief Technology Officer",
      bio: "Mohamed leads our technology initiatives, bringing his expertise in software development and digital transformation to create innovative solutions for our clients.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mohamed@penncreativelab.com",
      },
    },
    {
      name: "Fatima Yusuf",
      role: "Head of Consulting",
      bio: "Fatima oversees our consulting services, working closely with organizations to identify skills gaps and develop effective talent strategies.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "fatima@penncreativelab.com",
      },
    },
    {
      name: "Ibrahim Abdi",
      role: "Director of Partnerships",
      bio: "Ibrahim builds and maintains relationships with our partners in industry, academia, and government to create opportunities for collaboration and growth.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "ibrahim@penncreativelab.com",
      },
    },
    {
      name: "Sahra Mohamed",
      role: "Lead Instructor",
      bio: "Sahra brings her passion for teaching and expertise in technology to create engaging learning experiences for our students.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sahra@penncreativelab.com",
      },
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Penn Creative Lab team"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">Our Team</h1>
            <p className="text-xl text-slate-300 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Meet the dedicated professionals behind Penn Creative Lab who are passionate about transforming education
              and technology in Somalia.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 md:py-24 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#122C39] rounded-xl overflow-hidden border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300"
              >
                <div className="relative h-80 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-[#01BABC] mb-3">{member.role}</p>
                  <p className="text-slate-300 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="h-10 w-10 rounded-full bg-[#01BABC]/10 flex items-center justify-center hover:bg-[#01BABC]/20 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5 text-[#01BABC]" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="h-10 w-10 rounded-full bg-[#01BABC]/10 flex items-center justify-center hover:bg-[#01BABC]/20 transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="h-5 w-5 text-[#01BABC]" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="h-10 w-10 rounded-full bg-[#01BABC]/10 flex items-center justify-center hover:bg-[#01BABC]/20 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-5 w-5 text-[#01BABC]" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#122C39] rounded-xl p-8 md:p-12 border border-[#01BABC]/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Join Our Team</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                We're always looking for talented individuals who are passionate about education and technology to join
                our growing team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#0c1e28] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Current Openings</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Curriculum Developer</li>
                  <li>• Full Stack Developer</li>
                  <li>• UI/UX Designer</li>
                  <li>• Education Consultant</li>
                  <li>• Marketing Specialist</li>
                </ul>
              </div>

              <div className="bg-[#0c1e28] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Why Work With Us</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Meaningful work with social impact</li>
                  <li>• Collaborative and innovative environment</li>
                  <li>• Professional development opportunities</li>
                  <li>• Competitive compensation</li>
                  <li>• Flexible work arrangements</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Button asChild className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] font-medium">
                <Link href="/contact">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
