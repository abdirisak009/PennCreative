"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Stethoscope, Users, ClipboardList, Pill, Calculator, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export default function DabiibSoftProject() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="pt-24 bg-gradient-to-b from-[#0C1E28] to-[#01BABC]/5">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link
            href="/projects"
            className="inline-flex items-center text-[#01BABC] hover:text-[#01BABC]/80 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-6">
                <Stethoscope className="h-5 w-5 mr-2" />
                <span>Healthcare Software</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Dabiib <span className="text-[#01BABC]">Soft</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                A comprehensive healthcare management system designed specifically for polyclinics, streamlining patient
                care and administrative tasks.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="text-sm bg-[#01BABC]/10 text-[#01BABC] px-3 py-1 rounded-full">Healthcare</span>
                <span className="text-sm bg-[#01BABC]/10 text-[#01BABC] px-3 py-1 rounded-full">Management System</span>
                <span className="text-sm bg-[#01BABC]/10 text-[#01BABC] px-3 py-1 rounded-full">Pharmacy</span>
                <span className="text-sm bg-[#01BABC]/10 text-[#01BABC] px-3 py-1 rounded-full">Accounting</span>
              </div>
              <Link
                href="/projects/dabiib-soft/dashboard"
                className="inline-flex items-center px-6 py-3 bg-[#01BABC] text-white rounded-lg hover:bg-[#01BABC]/90 transition-colors"
              >
                <span>View Dashboard Demo</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="order-1 lg:order-2 relative">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/dabiib-soft.jpeg"
                  alt="Dabiib Soft Healthcare Management System"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0C1E28]/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-[#01BABC]/20 backdrop-blur-xl flex items-center justify-center">
                <Stethoscope className="h-10 w-10 text-[#01BABC]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-16 md:py-24 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Powerful <span className="text-[#01BABC]">Dashboard</span>
            </h2>
            <p className="text-lg text-slate-300">
              Dabiib Soft features an intuitive dashboard that provides real-time insights into your polyclinic's
              operations.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative rounded-xl overflow-hidden shadow-2xl border border-[#01BABC]/20"
          >
            <Image
              src="/images/dabiib-dashboard.jpeg"
              alt="Dabiib Soft Dashboard"
              width={1200}
              height={675}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E28] to-transparent opacity-30"></div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Comprehensive <span className="text-[#01BABC]">Features</span>
            </h2>
            <p className="text-lg text-slate-300">
              Dabiib Soft offers a wide range of features designed to streamline healthcare operations and improve
              patient care in polyclinics.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Feature 1 */}
            <motion.div
              variants={fadeIn}
              className="bg-[#122C39] p-8 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Patient Registration</h3>
              <p className="text-slate-300 mb-6">
                Efficiently register and manage patient information with a user-friendly interface. Store demographic
                data, contact information, and insurance details.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#01BABC] mr-2 mt-0.5" />
                  <span className="text-slate-300">Patient demographics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#01BABC] mr-2 mt-0.5" />
                  <span className="text-slate-300">Insurance verification</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#01BABC] mr-2 mt-0.5" />
                  <span className="text-slate-300">Appointment scheduling</span>
                </li>
              </ul>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              variants={fadeIn}
              className="bg-[#122C39] p-8 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-6">
                <Stethoscope className="h-7 w-7 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Doctor & Staff Management</h3>
              <p className="text-slate-300 mb-6">
                Manage healthcare providers and staff with comprehensive profiles, scheduling, and performance tracking.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#01BABC] mr-2 mt-0.5" />
                  <span className="text-slate-300">Staff scheduling</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#01BABC] mr-2 mt-0.5" />
                  <span className="text-slate-300">Credential management</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#01BABC] mr-2 mt-0.5" />
                  <span className="text-slate-300">Performance analytics</span>
                </li>
              </ul>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              variants={fadeIn}
              className="bg-[#122C39] p-8 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-6">
                <ClipboardList className="h-7 w-7 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Medical History Tracking</h3>
              <p className="text-slate-300 mb-6">
                Maintain comprehensive medical records with easy access to patient history, diagnoses, treatments, and
                test results.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#01BABC] mr-2 mt-0.5" />
                  <span className="text-slate-300">Electronic health records</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#01BABC] mr-2 mt-0.5" />
                  <span className="text-slate-300">Lab result integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#01BABC] mr-2 mt-0.5" />
                  <span className="text-slate-300">Treatment history</span>
                </li>
              </ul>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              variants={fadeIn}
              className="bg-[#122C39] p-8 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-6">
                <Pill className="h-7 w-7 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Pharmacy Sales & Inventory</h3>
              <p className="text-slate-300 mb-6">
                Manage pharmacy operations with inventory tracking, prescription management, and sales reporting.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#01BABC] mr-2 mt-0.5" />
                  <span className="text-slate-300">Medication inventory</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#01BABC] mr-2 mt-0.5" />
                  <span className="text-slate-300">Prescription management</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#01BABC] mr-2 mt-0.5" />
                  <span className="text-slate-300">Expiration tracking</span>
                </li>
              </ul>
            </motion.div>

            {/* Feature 5 */}
            <motion.div
              variants={fadeIn}
              className="bg-[#122C39] p-8 rounded-xl border border-[#01BABC]/20 hover:border-[#01BABC] transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-lg bg-[#01BABC]/10 flex items-center justify-center mb-6">
                <Calculator className="h-7 w-7 text-[#01BABC]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Accounting & Billing</h3>
              <p className="text-slate-300 mb-6">
                Streamline financial operations with integrated billing, insurance claims, and financial reporting.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#01BABC] mr-2 mt-0.5" />
                  <span className="text-slate-300">Automated billing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#01BABC] mr-2 mt-0.5" />
                  <span className="text-slate-300">Insurance claims processing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#01BABC] mr-2 mt-0.5" />
                  <span className="text-slate-300">Financial reporting</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#0c1e28]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-gradient-to-r from-[#01BABC]/20 to-[#01BABC]/5 rounded-xl p-8 md:p-12"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to transform your <span className="text-[#01BABC]">healthcare facility</span>?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Contact us today to schedule a demo and see how Dabiib Soft can streamline your polyclinic operations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#01BABC] text-white rounded-lg hover:bg-[#01BABC]/90 transition-colors"
              >
                Request a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
