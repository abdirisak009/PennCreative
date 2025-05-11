import Link from "next/link"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Info,
  BookOpen,
  Cpu,
  Award,
  User,
  Laptop,
  Code,
  Users,
  GraduationCap,
  Briefcase,
} from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#0a1a24] dark:bg-[#0a1a24] text-[#122C39] dark:text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4 flex justify-center md:justify-start">
              <div className="h-14 relative w-auto flex items-center justify-center">
                <Image
                  src="/images/penn-logo.png"
                  alt="Penn Creative Lab"
                  width={140}
                  height={56}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-[#122C39]/70 dark:text-gray-300 mb-4">
              Bridging the gap between academic learning and real-world skills.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#122C39]/70 dark:text-gray-300 hover:text-[#01BABC] transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-[#122C39]/70 dark:text-gray-300 hover:text-[#01BABC] transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-[#122C39]/70 dark:text-gray-300 hover:text-[#01BABC] transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-[#122C39]/70 dark:text-gray-300 hover:text-[#01BABC] transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#122C39] dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/projects"
                  className="text-[#122C39]/70 dark:text-gray-300 hover:text-[#01BABC] dark:hover:text-[#01BABC] transition-colors flex items-center"
                >
                  <Briefcase size={16} className="mr-2" />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#122C39]/70 dark:text-gray-300 hover:text-[#01BABC] dark:hover:text-[#01BABC] transition-colors flex items-center"
                >
                  <Info size={16} className="mr-2" />
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-[#122C39]/70 dark:text-gray-300 hover:text-[#01BABC] dark:hover:text-[#01BABC] transition-colors flex items-center"
                >
                  <BookOpen size={16} className="mr-2" />
                  All Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-tools"
                  className="text-[#122C39]/70 dark:text-gray-300 hover:text-[#01BABC] dark:hover:text-[#01BABC] transition-colors flex items-center"
                >
                  <Cpu size={16} className="mr-2" />
                  AI Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/certifications"
                  className="text-[#122C39]/70 dark:text-gray-300 hover:text-[#01BABC] dark:hover:text-[#01BABC] transition-colors flex items-center"
                >
                  <Award size={16} className="mr-2" />
                  Certifications
                </Link>
              </li>
              <li>
                <a
                  href="https://penn.so/dashboard/"
                  className="text-[#122C39]/70 dark:text-gray-300 hover:text-[#01BABC] dark:hover:text-[#01BABC] transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <User size={16} className="mr-2" />
                  Student Area
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#122C39] dark:text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-[#122C39]/70 dark:text-gray-300 hover:text-[#01BABC] dark:hover:text-[#01BABC] transition-colors flex items-center"
                >
                  <Laptop size={16} className="mr-2" />
                  Online Learning
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#122C39]/70 dark:text-gray-300 hover:text-[#01BABC] dark:hover:text-[#01BABC] transition-colors flex items-center"
                >
                  <Code size={16} className="mr-2" />
                  Technology Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#122C39]/70 dark:text-gray-300 hover:text-[#01BABC] dark:hover:text-[#01BABC] transition-colors flex items-center"
                >
                  <Users size={16} className="mr-2" />
                  Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-[#122C39]/70 dark:text-gray-300 hover:text-[#01BABC] dark:hover:text-[#01BABC] transition-colors flex items-center"
                >
                  <GraduationCap size={16} className="mr-2" />
                  Short Courses
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#122C39] dark:text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#01BABC] mt-1 flex-shrink-0" />
                <span className="text-[#122C39]/70 dark:text-gray-300">Mogadishu, Somalia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-[#01BABC] flex-shrink-0" />
                <span className="text-[#122C39]/70 dark:text-gray-300">+252 61 2049476</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-[#01BABC] flex-shrink-0" />
                <span className="text-[#122C39]/70 dark:text-gray-300">info@penn.so</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#122C39]/10 dark:border-gray-800 mt-12 pt-6 text-center text-[#122C39]/60 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Penn Creative Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
