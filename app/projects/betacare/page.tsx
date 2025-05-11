import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ImageGallery } from "@/components/image-gallery"
import { PDFPreview } from "@/components/pdf-preview"
import { ChevronLeft, Paintbrush, Palette, Layout, FileText, CheckCircle } from "lucide-react"

export default function BetaCareProjectPage() {
  const projectImages = [
    { src: "/images/betacare-logo-main.png", alt: "Beta Care Diagnostic Ltd main logo" },
    { src: "/images/betacare-logo-variant.png", alt: "Beta Care Diagnostic Ltd logo variant" },
    { src: "/images/betacare-mockup-1.jpeg", alt: "Beta Care logo in hospital waiting area" },
    { src: "/images/betacare-mockup-2.jpeg", alt: "Beta Care signage in clinic" },
    { src: "/images/betacare-mockup-3.jpeg", alt: "Beta Care logo in conference room" },
    { src: "/images/betacare-mockup-4.jpeg", alt: "Beta Care logo on medical coat" },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#0C1E28] to-[#01BABC]/20">
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2 animate-fade-in">
              <Link href="/projects" className="inline-flex items-center text-[#01BABC] hover:text-[#01BABC]/80 mb-6">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Projects
              </Link>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Beta Care <span className="text-[#01BABC]">Diagnostic Ltd</span>
              </h1>

              <p className="text-xl text-slate-300 mb-8">
                Complete brand identity design for a leading healthcare diagnostic center, including logo design, color
                palette, typography, and brand applications.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="text-sm bg-[#01BABC]/10 text-[#01BABC] px-3 py-1 rounded-full">Logo Design</span>
                <span className="text-sm bg-[#01BABC]/10 text-[#01BABC] px-3 py-1 rounded-full">Brand Identity</span>
                <span className="text-sm bg-[#01BABC]/10 text-[#01BABC] px-3 py-1 rounded-full">Healthcare</span>
                <span className="text-sm bg-[#01BABC]/10 text-[#01BABC] px-3 py-1 rounded-full">Visual Design</span>
                <span className="text-sm bg-[#01BABC]/10 text-[#01BABC] px-3 py-1 rounded-full">Brand Guidelines</span>
              </div>

              <Button asChild className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white font-medium">
                <a href="https://betacare.so" target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </Button>
            </div>

            <div className="w-full md:w-1/2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-[#01BABC]/20">
                <Image
                  src="/images/betacare-logo-main.png"
                  alt="Beta Care Diagnostic Ltd"
                  fill
                  className="object-contain p-8 bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 md:py-24 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-white">Project Overview</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300">
                  Beta Care Diagnostic Ltd needed a professional brand identity that would establish them as a trusted
                  healthcare provider in the diagnostic services sector. The brand needed to convey professionalism,
                  care, and cutting-edge medical expertise.
                </p>

                <p className="text-slate-300 mt-4">
                  Our team developed a comprehensive brand identity system starting with a distinctive logo that
                  combines the letter "B" with a medical cross symbol. The color palette features a professional blue
                  (#21409A) paired with a calming teal (#02918A) to create a balanced healthcare aesthetic.
                </p>

                <p className="text-slate-300 mt-4">
                  The brand identity was then applied across various touchpoints including signage, staff uniforms,
                  stationery, and digital platforms. A detailed brand guidelines document was created to ensure
                  consistent application of the brand elements across all mediums.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20">
                  <h3 className="text-xl font-semibold mb-4 text-white">Brand Elements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#01BABC] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Logo design with primary and secondary variations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#01BABC] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Color palette with primary and secondary colors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#01BABC] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Typography system with primary and secondary fonts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#01BABC] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Brand patterns and graphic elements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#01BABC] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Photography style guidelines</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20">
                  <h3 className="text-xl font-semibold mb-4 text-white">Brand Applications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#01BABC] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Signage and environmental graphics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#01BABC] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Staff uniforms and lab coats</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#01BABC] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Stationery and business cards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#01BABC] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Digital assets for website and social media</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#01BABC] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Marketing materials and brochures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Project Details</h3>

              <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 mb-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mr-3">
                    <Paintbrush className="h-5 w-5 text-[#01BABC]" />
                  </div>
                  <h4 className="text-lg font-medium text-white">Design Services</h4>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li>• Brand Strategy</li>
                  <li>• Logo Design</li>
                  <li>• Visual Identity</li>
                  <li>• Brand Guidelines</li>
                  <li>• Marketing Materials</li>
                </ul>
              </div>

              <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20 mb-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mr-3">
                    <Palette className="h-5 w-5 text-[#01BABC]" />
                  </div>
                  <h4 className="text-lg font-medium text-white">Color Palette</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="h-12 rounded-md bg-[#21409A] mb-2"></div>
                    <p className="text-sm text-slate-300">Primary Blue</p>
                    <p className="text-xs text-slate-400">#21409A</p>
                  </div>
                  <div>
                    <div className="h-12 rounded-md bg-[#02918A] mb-2"></div>
                    <p className="text-sm text-slate-300">Primary Teal</p>
                    <p className="text-xs text-slate-400">#02918A</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#122C39] p-6 rounded-xl border border-[#01BABC]/20">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mr-3">
                    <Layout className="h-5 w-5 text-[#01BABC]" />
                  </div>
                  <h4 className="text-lg font-medium text-white">Project Timeline</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-slate-300">Research & Strategy</span>
                    <span className="text-[#01BABC]">2 weeks</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-300">Logo Design</span>
                    <span className="text-[#01BABC]">3 weeks</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-300">Visual Identity</span>
                    <span className="text-[#01BABC]">4 weeks</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-300">Applications</span>
                    <span className="text-[#01BABC]">3 weeks</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-300">Guidelines</span>
                    <span className="text-[#01BABC]">2 weeks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-3 text-white">Brand Gallery</h2>
              <p className="text-slate-300">Explore the Beta Care brand identity across various applications</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-[#01BABC]/10 flex items-center justify-center">
              <Paintbrush className="h-6 w-6 text-[#01BABC]" />
            </div>
          </div>

          <ImageGallery images={projectImages} />
        </div>
      </section>

      {/* Brand Guidelines */}
      <section className="py-16 md:py-24 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-3 text-white">Brand Guidelines</h2>
              <p className="text-slate-300">Comprehensive documentation of the Beta Care brand system</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-[#01BABC]/10 flex items-center justify-center">
              <FileText className="h-6 w-6 text-[#01BABC]" />
            </div>
          </div>

          <PDFPreview
            pdfUrl="/documents/betacare-brand-guidelines.pdf"
            coverImage="/images/betacare-profile.png"
            title="Beta Care Brand Guidelines"
          />
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#122C39] to-[#0c1e28]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Explore More Projects</h2>
            <p className="text-xl text-slate-300 mb-8">
              Discover our other branding and design work for clients across various industries
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-[#01BABC] hover:bg-[#01BABC]/80 text-[#122C39] dark:text-white font-medium">
                <Link href="/projects">View All Projects</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#01BABC] text-[#01BABC] hover:bg-[#01BABC]/10">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
