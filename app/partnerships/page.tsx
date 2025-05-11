import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Building, GraduationCap, Briefcase, Globe, Users } from "lucide-react"

export default function PartnershipsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Penn Creative Lab partnerships"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
              Accreditation & Partnerships
            </h1>
            <p className="text-xl text-slate-300 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Our network of partnerships and accreditations that ensure the quality and recognition of our programs.
            </p>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 md:py-24 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6">
                <Award className="h-5 w-5 mr-2" />
                <span>Accreditation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ministry of Education Approval</h2>
              <p className="text-slate-300 mb-6">
                Penn Creative Lab is proud to be officially approved by the Somali Ministry of Education. This
                accreditation ensures that our educational programs meet the highest standards of quality and are
                recognized throughout Somalia.
              </p>
              <p className="text-slate-300 mb-6">
                Our accreditation covers our certificate programs, short courses, and professional development
                offerings, providing our students with credentials that are valued by employers and educational
                institutions.
              </p>
              <div className="flex items-center space-x-2 text-[#01BABC]">
                <Award className="h-5 w-5" />
                <span className="font-medium">Officially recognized qualifications</span>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden animate-slide-in-right">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Ministry of Education certificate"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* University Partnerships */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">University Partnerships</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We collaborate with leading universities to enhance our educational offerings and provide pathways for
              further academic advancement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* University Partner 1 */}
            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-24 w-24 rounded-lg bg-white mx-auto mb-6 flex items-center justify-center">
                <GraduationCap className="h-12 w-12 text-[#122C39]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">Mogadishu University</h3>
              <p className="text-slate-300 text-center">
                Our partnership with Mogadishu University allows students to earn credits toward degree programs and
                access specialized resources.
              </p>
            </div>

            {/* University Partner 2 */}
            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-24 w-24 rounded-lg bg-white mx-auto mb-6 flex items-center justify-center">
                <GraduationCap className="h-12 w-12 text-[#122C39]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">Somali National University</h3>
              <p className="text-slate-300 text-center">
                We work closely with SNU to develop curriculum and provide practical training opportunities for their
                students.
              </p>
            </div>

            {/* University Partner 3 */}
            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-24 w-24 rounded-lg bg-white mx-auto mb-6 flex items-center justify-center">
                <GraduationCap className="h-12 w-12 text-[#122C39]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">SIMAD University</h3>
              <p className="text-slate-300 text-center">
                Our collaboration with SIMAD University focuses on technology education and digital skills development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Partnerships */}
      <section className="py-16 md:py-24 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Industry Partnerships</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We partner with leading companies and organizations to ensure our programs are aligned with industry needs
              and provide real-world opportunities for our students.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Industry Partner Logos - Using placeholders */}
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-[#122C39] p-4 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300"
              >
                <div className="h-20 w-full bg-white/10 rounded-lg flex items-center justify-center">
                  <Building className="h-10 w-10 text-[#01BABC]/70" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Industry Partnership Benefits */}
            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Internship Opportunities</h3>
              <p className="text-slate-300">
                Our industry partners provide internship and job placement opportunities for our students, giving them
                valuable real-world experience.
              </p>
            </div>

            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Guest Lectures</h3>
              <p className="text-slate-300">
                Industry professionals regularly contribute to our programs through guest lectures, workshops, and
                mentorship sessions.
              </p>
            </div>

            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Curriculum Input</h3>
              <p className="text-slate-300">
                Our partners help shape our curriculum to ensure it addresses current industry needs and emerging
                trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* International Affiliations */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden order-2 lg:order-1 animate-slide-in-left">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="International partnerships"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6">
                <Globe className="h-5 w-5 mr-2" />
                <span>Global Network</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">International Affiliations</h2>
              <p className="text-slate-300 mb-6">
                Penn Creative Lab has established relationships with international organizations and educational
                institutions to bring global best practices to Somalia.
              </p>
              <p className="text-slate-300 mb-6">
                These affiliations allow us to offer internationally recognized certifications and provide our students
                with a global perspective on education and technology.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#01BABC]/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-[#01BABC]"></div>
                  </div>
                  <span className="text-slate-300">International technology certification bodies</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#01BABC]/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-[#01BABC]"></div>
                  </div>
                  <span className="text-slate-300">Global educational networks and associations</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#01BABC]/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-[#01BABC]"></div>
                  </div>
                  <span className="text-slate-300">International development organizations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-16 md:py-24 bg-[#01BABC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Become a Partner</h2>
            <p className="text-xl text-slate-300 mb-8">
              We're always looking to expand our network of partners to create more opportunities for our students and
              contribute to the development of Somalia's education and technology sectors.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] font-medium">
                <Link href="/contact">Contact Our Partnership Team</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#01BABC] text-[#01BABC] hover:bg-[#01BABC]/10"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
