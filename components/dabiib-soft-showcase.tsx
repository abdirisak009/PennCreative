"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Users,
  Stethoscope,
  ClipboardList,
  FlaskRoundIcon as Flask,
  Pill,
  Receipt,
  BarChart3,
  ChevronRight,
  ExternalLink,
} from "lucide-react"

export function DabiibSoftShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      id: 0,
      icon: <Users className="h-6 w-6" />,
      title: "Patient Registration",
      description:
        "Efficiently manage patient information, appointments, and visit history with an intuitive interface.",
    },
    {
      id: 1,
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Doctor Management",
      description: "Schedule and track medical staff activities, specialties, and patient assignments.",
    },
    {
      id: 2,
      icon: <ClipboardList className="h-6 w-6" />,
      title: "Medical Records",
      description: "Comprehensive electronic health records with diagnosis, treatment plans, and medical history.",
    },
    {
      id: 3,
      icon: <Flask className="h-6 w-6" />,
      title: "Lab Investigations",
      description: "Order, track, and store laboratory and imaging results with integrated reporting.",
    },
    {
      id: 4,
      icon: <Pill className="h-6 w-6" />,
      title: "Pharmacy Control",
      description: "Manage medication inventory, prescriptions, and track sales with expiration alerts.",
    },
    {
      id: 5,
      icon: <Receipt className="h-6 w-6" />,
      title: "Financial Modules",
      description: "Handle billing, receipts, insurance claims, and generate detailed financial reports.",
    },
    {
      id: 6,
      icon: <BarChart3 className="h-6 w-6" />,
      title: "HR & Performance",
      description: "Track staff performance, manage payroll, and handle administrative HR functions.",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-[#0C1E28] to-[#01BABC]/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01BABC]/10 text-[#01BABC] mb-4">
              <Stethoscope className="h-5 w-5 mr-2" />
              <span>Healthcare Software</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Dabiib <span className="text-[#01BABC]">Soft</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A comprehensive clinical management system tailored for Somali polyclinics.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Dashboard Preview */}
            <motion.div variants={itemVariants} className="lg:col-span-7 relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#01BABC]/20 bg-[#122C39]">
                <div className="absolute top-0 left-0 right-0 h-12 bg-[#0C1E28] flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-white/70 text-sm font-medium">Dabiib Soft Dashboard</div>
                </div>
                <div className="pt-12">
                  <Image
                    src="/images/dabiib-dashboard.jpeg"
                    alt="Dabiib Soft Dashboard"
                    width={800}
                    height={450}
                    className="w-full object-cover"
                  />
                </div>

                {/* Floating Stats */}
                <div className="absolute top-24 right-4 bg-[#01BABC]/10 backdrop-blur-lg rounded-lg p-3 border border-[#01BABC]/30">
                  <div className="text-[#01BABC] font-medium text-sm">Active Users</div>
                  <div className="text-white text-xl font-bold">8</div>
                </div>

                <div className="absolute bottom-24 left-4 bg-[#01BABC]/10 backdrop-blur-lg rounded-lg p-3 border border-[#01BABC]/30">
                  <div className="text-[#01BABC] font-medium text-sm">Total Patients</div>
                  <div className="text-white text-xl font-bold">1,444</div>
                </div>
              </div>

              {/* Logo Overlay */}
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-[#01BABC]/20 backdrop-blur-xl flex items-center justify-center">
                <div className="text-[#01BABC] font-bold text-xl">DS</div>
              </div>
            </motion.div>

            {/* Features List */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <div className="bg-[#122C39]/50 backdrop-blur-sm rounded-xl p-6 border border-[#01BABC]/20">
                <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>

                <div className="space-y-4">
                  {features.map((feature) => (
                    <div
                      key={feature.id}
                      className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        activeFeature === feature.id
                          ? "bg-[#01BABC]/20 border border-[#01BABC]/40"
                          : "hover:bg-[#01BABC]/10 border border-transparent"
                      }`}
                      onClick={() => setActiveFeature(feature.id)}
                    >
                      <div className="flex items-start">
                        <div
                          className={`h-10 w-10 rounded-lg ${
                            activeFeature === feature.id ? "bg-[#01BABC]/30" : "bg-[#01BABC]/10"
                          } flex items-center justify-center mr-4`}
                        >
                          <div className={`${activeFeature === feature.id ? "text-[#01BABC]" : "text-[#01BABC]/70"}`}>
                            {feature.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium">{feature.title}</h4>
                          {activeFeature === feature.id && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-slate-300 text-sm mt-2"
                            >
                              {feature.description}
                            </motion.p>
                          )}
                        </div>
                        <ChevronRight
                          className={`h-5 w-5 transition-transform duration-300 ${
                            activeFeature === feature.id ? "text-[#01BABC] rotate-90" : "text-slate-500"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/projects/dabiib-soft"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#01BABC] text-white rounded-lg hover:bg-[#01BABC]/90 transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <motion.div
              variants={itemVariants}
              className="bg-[#122C39]/50 backdrop-blur-sm rounded-xl p-6 border border-[#01BABC]/20"
            >
              <div className="text-[#01BABC] text-sm font-medium mb-2">Total Patients</div>
              <div className="text-white text-3xl font-bold">1,444</div>
              <div className="text-slate-400 text-xs mt-2">Since last month</div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-[#122C39]/50 backdrop-blur-sm rounded-xl p-6 border border-[#01BABC]/20"
            >
              <div className="text-[#01BABC] text-sm font-medium mb-2">Lab Tests</div>
              <div className="text-white text-3xl font-bold">1,308</div>
              <div className="text-slate-400 text-xs mt-2">Since last month</div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-[#122C39]/50 backdrop-blur-sm rounded-xl p-6 border border-[#01BABC]/20"
            >
              <div className="text-[#01BABC] text-sm font-medium mb-2">Inventory Items</div>
              <div className="text-white text-3xl font-bold">9,516</div>
              <div className="text-slate-400 text-xs mt-2">In stock</div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-[#122C39]/50 backdrop-blur-sm rounded-xl p-6 border border-[#01BABC]/20"
            >
              <div className="text-[#01BABC] text-sm font-medium mb-2">Monthly Revenue</div>
              <div className="text-white text-3xl font-bold">$12,480</div>
              <div className="text-slate-400 text-xs mt-2">Current month</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
