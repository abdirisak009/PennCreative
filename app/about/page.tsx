import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Users, BarChart, Lightbulb, CheckCircle, Briefcase } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-[#0C1E28]">
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">About Penn Creative Lab</h1>
            <p className="text-xl text-slate-300 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              An innovative educational and technology hub dedicated to empowering individuals and organizations in
              Somalia.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-slate-300 mb-6 text-lg">
                Empower individuals and organizations with the knowledge and skills necessary to thrive in today's
                rapidly evolving digital landscape through innovative educational approaches and technology solutions.
              </p>
              <p className="text-slate-300 mb-6">
                We are committed to bridging the gap between academic learning and real-world application, ensuring our
                students and clients are equipped with practical, industry-ready skills that drive success.
              </p>

              <div className="bg-[#122C39] p-5 rounded-lg border border-[#01BABC]/20 mt-8">
                <h3 className="text-xl font-semibold mb-3 text-white">Our Strategic Approach</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#01BABC]/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#01BABC]"></div>
                    </div>
                    <span className="text-slate-300">Identify skills gaps in the Somali workforce</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#01BABC]/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#01BABC]"></div>
                    </div>
                    <span className="text-slate-300">Develop practical, industry-relevant curriculum</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#01BABC]/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#01BABC]"></div>
                    </div>
                    <span className="text-slate-300">Provide hands-on learning experiences</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#01BABC]/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#01BABC]"></div>
                    </div>
                    <span className="text-slate-300">Connect graduates with employment opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden animate-slide-in-right">
              <Image
                src="/images/business-strategy-success-target.jpeg"
                alt="Targeting our strategic goals with precision"
                width={800}
                height={600}
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#0c1e28] to-transparent">
                <p className="text-white text-sm font-medium">
                  Precisely targeting our mission objectives with focused strategy
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Vision</h2>
              <p className="text-slate-300 mb-6 text-lg">
                To be a leading provider of cutting-edge educational and consulting services that bridge the gap between
                academic learning and real-world application in Somalia and beyond.
              </p>
              <p className="text-slate-300 mb-6">
                We envision a future where Somali professionals are equipped with the skills and knowledge to compete
                globally, driving innovation and economic growth in the region.
              </p>

              <div className="bg-[#122C39] p-5 rounded-lg border border-[#01BABC]/20 mt-8">
                <h3 className="text-xl font-semibold mb-3 text-white">Our Vision Targets</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#01BABC]/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#01BABC]"></div>
                    </div>
                    <span className="text-slate-300">Establish Somalia as a regional tech education hub</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#01BABC]/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#01BABC]"></div>
                    </div>
                    <span className="text-slate-300">Train 10,000+ professionals in digital skills by 2030</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#01BABC]/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#01BABC]"></div>
                    </div>
                    <span className="text-slate-300">Foster innovation through technology incubation programs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#01BABC]/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#01BABC]"></div>
                    </div>
                    <span className="text-slate-300">Create sustainable employment pathways for graduates</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden order-2 lg:order-1 animate-slide-in-left">
              <Image
                src="/images/vision-goals.jpg"
                alt="Targeting our vision goals with precision"
                width={800}
                height={600}
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#0c1e28] to-transparent">
                <p className="text-white text-sm font-medium">
                  Precisely targeting our vision goals for maximum impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Core Values</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              The principles that guide our approach to education and technology services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Excellence */}
            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Excellence</h3>
              <p className="text-slate-300">
                We strive for the highest standards in all our educational offerings and technology solutions,
                constantly pushing the boundaries of what's possible.
              </p>
            </div>

            {/* Accessibility */}
            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Accessibility</h3>
              <p className="text-slate-300">
                We ensure our services are accessible to diverse learners across different backgrounds, removing
                barriers to quality education and technology.
              </p>
            </div>

            {/* Relevance */}
            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Relevance</h3>
              <p className="text-slate-300">
                Our curriculum and services are designed to meet real-world industry demands and needs, ensuring our
                students are prepared for the jobs of today and tomorrow.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Innovation</h3>
              <p className="text-slate-300">
                We embrace new technologies and teaching methodologies to stay at the forefront of education, constantly
                evolving our approach to deliver the best results.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Integrity</h3>
              <p className="text-slate-300">
                We conduct our business with honesty, transparency, and ethical standards at all times, building trust
                with our students, clients, and partners.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Collaboration</h3>
              <p className="text-slate-300">
                We foster partnerships with industry, academia, and communities to create meaningful impact, believing
                that together we can achieve more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Our Story</h2>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-slate-300">
                Penn Creative Lab was founded with a vision to address the critical skills gap in Somalia's workforce.
                Recognizing the disconnect between traditional education and the rapidly evolving demands of the job
                market, our founders set out to create an institution that would bridge this divide.
              </p>

              <p className="text-slate-300 mt-6">
                Starting with a small team of dedicated educators and technology experts, we began by offering
                specialized short courses focused on practical, industry-relevant skills. The response was overwhelming,
                confirming our belief that there was a significant unmet need for this type of education.
              </p>

              <p className="text-slate-300 mt-6">
                As we grew, we expanded our offerings to include a comprehensive online learning platform, technology
                services, and consulting solutions. Today, Penn Creative Lab stands as a testament to the power of
                innovative education and the impact it can have on individuals and organizations.
              </p>

              <p className="text-slate-300 mt-6">
                Our journey continues as we strive to empower more Somalis with the skills and knowledge they need to
                succeed in the digital economy, contributing to the growth and development of the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#01BABC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Journey</h2>
            <p className="text-xl text-slate-300 mb-8">
              Whether you're looking to enhance your skills, transform your organization, or partner with us, we invite
              you to be part of our mission to revolutionize education and technology in Somalia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] font-medium">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#01BABC] text-[#01BABC] hover:bg-[#01BABC]/10"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
