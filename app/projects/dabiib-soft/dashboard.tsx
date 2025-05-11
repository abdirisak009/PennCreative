"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Users,
  Ticket,
  Pill,
  Stethoscope,
  FlaskConical,
  FileImage,
  Mail,
  ReceiptText,
  UserCog,
  User,
  BarChart3,
  Home,
  ChevronDown,
  Bell,
  Search,
  Globe,
  Menu,
  X,
  ArrowRight,
  TrendingDown,
  DollarSign,
  Package,
  ShoppingCart,
  ArrowUp,
} from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// Sample data for the area chart
const areaData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
  { name: "Aug", value: 2000 },
  { name: "Sep", value: 2780 },
  { name: "Oct", value: 1890 },
  { name: "Nov", value: 3578 },
  { name: "Dec", value: 2500 },
]

// Sample data for the pie chart
const pieData = [
  { name: "Income", value: 65 },
  { name: "Expenses", value: 35 },
]

const COLORS = ["#00C49F", "#FF8042"]

export default function DabiibDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeMenuItem, setActiveMenuItem] = useState("Dashboard")

  const menuItems = [
    { name: "Dashboard", icon: <Home className="w-5 h-5" /> },
    { name: "Patients", icon: <Users className="w-5 h-5" /> },
    { name: "Ticket", icon: <Ticket className="w-5 h-5" /> },
    { name: "Pharmacy", icon: <Pill className="w-5 h-5" />, hasSubmenu: true },
    { name: "Doctors", icon: <Stethoscope className="w-5 h-5" />, hasSubmenu: true },
    { name: "Lab Investigation", icon: <FlaskConical className="w-5 h-5" />, hasSubmenu: true },
    { name: "Image Investigation", icon: <FileImage className="w-5 h-5" />, hasSubmenu: true },
    { name: "Letters", icon: <Mail className="w-5 h-5" />, hasSubmenu: true },
    { name: "Transactions", icon: <ReceiptText className="w-5 h-5" />, hasSubmenu: true },
    { name: "HRM", icon: <UserCog className="w-5 h-5" />, hasSubmenu: true },
    { name: "Users", icon: <User className="w-5 h-5" />, hasSubmenu: true },
    { name: "Reports", icon: <BarChart3 className="w-5 h-5" />, hasSubmenu: true },
  ]

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-gradient-to-b from-[#0C1E28] to-[#01BABC] transition-all duration-300 ease-in-out fixed h-full z-10`}
      >
        <div className="flex items-center justify-between p-4">
          <div className={`flex items-center ${!sidebarOpen && "justify-center w-full"}`}>
            {sidebarOpen ? (
              <div className="flex items-center">
                <Image
                  src="/images/dabiib-soft.jpeg"
                  alt="Dabiib Soft Logo"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <span className="ml-2 text-white font-bold text-lg">DABIIB SOFT</span>
              </div>
            ) : (
              <Image
                src="/images/dabiib-soft.jpeg"
                alt="Dabiib Soft Logo"
                width={32}
                height={32}
                className="rounded-md"
              />
            )}
          </div>
          {sidebarOpen && (
            <button onClick={toggleSidebar} className="text-white">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {!sidebarOpen && (
          <button onClick={toggleSidebar} className="w-full flex justify-center mt-2 text-white">
            <Menu className="w-5 h-5" />
          </button>
        )}

        <nav className="mt-6">
          <ul>
            {menuItems.map((item) => (
              <li key={item.name} className="mb-1">
                <button
                  onClick={() => setActiveMenuItem(item.name)}
                  className={`${
                    activeMenuItem === item.name
                      ? "bg-white/10 border-l-4 border-white"
                      : "border-l-4 border-transparent"
                  } flex items-center w-full py-3 px-4 text-white hover:bg-white/5 transition-colors`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {sidebarOpen && (
                    <div className="flex items-center justify-between w-full">
                      <span>{item.name}</span>
                      {item.hasSubmenu && <ChevronDown className="w-4 h-4" />}
                    </div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 ${sidebarOpen ? "ml-64" : "ml-20"} transition-all duration-300 ease-in-out`}>
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#01BABC] w-64"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-gray-600 mr-1" />
                <span className="text-sm font-medium">English</span>
                <ChevronDown className="w-4 h-4 text-gray-600 ml-1" />
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="flex items-center">
                <Image
                  src="/images/dabiib-soft.jpeg"
                  alt="User Avatar"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <div className="ml-2">
                  <p className="text-sm font-medium">Zakarie Ahmed</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600 ml-2" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Patients Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden border-l-4 border-[#01BABC]"
            >
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase">Patients</p>
                    <h3 className="text-2xl font-bold mt-1">1,444</h3>
                  </div>
                  <div className="h-12 w-12 bg-[#01BABC]/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-[#01BABC]" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <p className="text-gray-500">Since last month</p>
                  <div className="flex items-center ml-auto text-green-500">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>12%</span>
                  </div>
                  <ArrowRight className="h-4 w-4 ml-2 text-gray-400" />
                </div>
              </div>
            </motion.div>

            {/* Tickets Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden border-l-4 border-red-500"
            >
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase">Tickets</p>
                    <h3 className="text-2xl font-bold mt-1">348</h3>
                  </div>
                  <div className="h-12 w-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                    <Ticket className="h-6 w-6 text-red-500" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <p className="text-gray-500">Since last month</p>
                  <div className="flex items-center ml-auto text-red-500">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    <span>8%</span>
                  </div>
                  <ArrowRight className="h-4 w-4 ml-2 text-gray-400" />
                </div>
              </div>
            </motion.div>

            {/* Labs Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden border-l-4 border-blue-500"
            >
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase">Labs</p>
                    <h3 className="text-2xl font-bold mt-1">1,308</h3>
                  </div>
                  <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <FlaskConical className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <p className="text-gray-500">Since last month</p>
                  <div className="flex items-center ml-auto text-green-500">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>5%</span>
                  </div>
                  <ArrowRight className="h-4 w-4 ml-2 text-gray-400" />
                </div>
              </div>
            </motion.div>

            {/* Receipts Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden border-l-4 border-green-500"
            >
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase">Receipts</p>
                    <h3 className="text-2xl font-bold mt-1">$12,480.19</h3>
                  </div>
                  <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-green-500" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <p className="text-gray-500">Since last month</p>
                  <div className="flex items-center ml-auto text-green-500">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>18%</span>
                  </div>
                  <ArrowRight className="h-4 w-4 ml-2 text-gray-400" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second Row Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Quantity in Stock */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="bg-white rounded-xl shadow-sm p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-700 font-medium">Quantity In Stock</h3>
                <div className="h-8 w-8 bg-[#01BABC]/10 rounded-lg flex items-center justify-center">
                  <Package className="h-4 w-4 text-[#01BABC]" />
                </div>
              </div>
              <div className="flex items-center">
                <h2 className="text-2xl font-bold">9,516</h2>
                <span className="ml-2 text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">+5.2%</span>
              </div>
            </motion.div>

            {/* Total Purchasing Price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="bg-white rounded-xl shadow-sm p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-700 font-medium">Total Purchasing Price</h3>
                <div className="h-8 w-8 bg-[#01BABC]/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-4 w-4 text-[#01BABC]" />
                </div>
              </div>
              <div className="flex items-center">
                <h2 className="text-2xl font-bold">$4,293.52</h2>
                <span className="ml-2 text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">+3.1%</span>
              </div>
            </motion.div>

            {/* Total Quantity Sold */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="bg-white rounded-xl shadow-sm p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-700 font-medium">Total Quantity Sold</h3>
                <div className="h-8 w-8 bg-[#01BABC]/10 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="h-4 w-4 text-[#01BABC]" />
                </div>
              </div>
              <div className="flex items-center">
                <h2 className="text-2xl font-bold">15,003.75</h2>
                <span className="ml-2 text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">+12.8%</span>
              </div>
            </motion.div>

            {/* Total Selling Price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="bg-white rounded-xl shadow-sm p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-700 font-medium">Total Selling Price</h3>
                <div className="h-8 w-8 bg-[#01BABC]/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-4 w-4 text-[#01BABC]" />
                </div>
              </div>
              <div className="flex items-center">
                <h2 className="text-2xl font-bold">$12,906.30</h2>
                <span className="ml-2 text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">+8.5%</span>
              </div>
            </motion.div>
          </div>

          {/* Charts and Reports */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Monthly Earning Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="bg-white rounded-xl shadow-sm p-5 lg:col-span-2"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Earning</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={areaData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#01BABC" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#01BABC" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#01BABC" fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Summary Report */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="bg-white rounded-xl shadow-sm p-5"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Summary Report</h3>

              <div className="mb-6">
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center space-x-6 mt-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#00C49F] mr-2"></div>
                    <span className="text-sm text-gray-600">Income</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#FF8042] mr-2"></div>
                    <span className="text-sm text-gray-600">Expenses</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">Employees</span>
                    <span className="text-sm font-semibold">5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-[#01BABC] h-1.5 rounded-full" style={{ width: "50%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">Users</span>
                    <span className="text-sm font-semibold">8</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-[#01BABC] h-1.5 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">Reversal</span>
                    <span className="text-sm font-semibold">3</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-[#01BABC] h-1.5 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
