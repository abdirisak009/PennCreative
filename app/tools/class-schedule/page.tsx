"use client"

import { Badge } from "@/components/ui/badge"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Trash2,
  Plus,
  Calendar,
  BookOpen,
  FileSpreadsheet,
  FileIcon as FilePdf,
  User,
  Clock,
  Info,
  Edit,
  X,
  BarChart,
  SwitchCameraIcon as Switch,
  AlertCircle,
  Upload,
} from "lucide-react"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"
import { toast } from "@/components/ui/use-toast"
import { useTheme } from "next-themes"
import * as XLSX from "xlsx"
import { Textarea } from "@/components/ui/textarea"
import {
  Separator,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui"

// Define the days of the week
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

// Define the time slots
const timeSlots = ["Morning", "Afternoon"]

// Define default rooms
const defaultRooms = [
  "Room 101",
  "Room 102",
  "Room 103",
  "Room 104",
  "Room 105",
  "Room 201",
  "Room 202",
  "Room 203",
  "Room 204",
  "Room 205",
]

interface Teacher {
  id: string
  name: string
  subjects: string[]
}

interface ClassSession {
  id: string
  day: string
  timeSlot: string
  startTime: string
  endTime: string
  teacherId: string
  subject: string
  room: string
  notes?: string
}

interface Class {
  id: string
  name: string
  sessions: ClassSession[]
}

interface ScheduleData {
  id: string
  name: string
  semester: string
  classes: Class[]
}

interface UserProfile {
  name: string
  organization: string
  logo: string | null
  registered: boolean
}

export default function ClassSchedulePage() {
  const [schedules, setSchedules] = useState<ScheduleData[]>([])
  const [currentSchedule, setCurrentSchedule] = useState<string>("")
  const [newScheduleName, setNewScheduleName] = useState("")
  const [newSemester, setNewSemester] = useState("")
  const [showNewScheduleInput, setShowNewScheduleInput] = useState(false)
  const { theme } = useTheme()
  const scheduleTableRef = useRef<HTMLDivElement>(null)

  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [rooms, setRooms] = useState<string[]>(defaultRooms)

  const [newTeacherName, setNewTeacherName] = useState("")
  const [newTeacherSubjects, setNewTeacherSubjects] = useState<string[]>([])
  const [newSubjectInput, setNewSubjectInput] = useState("")
  const [newRoom, setNewRoom] = useState("")
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null)

  const [selectedClass, setSelectedClass] = useState<string>("")
  const [newClassName, setNewClassName] = useState("")
  const [showNewClassInput, setShowNewClassInput] = useState(false)

  // Form state for adding a new class session
  const [newSession, setNewSession] = useState<Omit<ClassSession, "id">>({
    day: days[0],
    timeSlot: timeSlots[0],
    startTime: "09:00",
    endTime: "10:30",
    teacherId: "",
    subject: "",
    room: "",
    notes: "",
  })

  // State for teacher management dialog
  const [isTeacherDialogOpen, setIsTeacherDialogOpen] = useState(false)

  // State for level report dialog
  const [isLevelReportDialogOpen, setIsLevelReportDialogOpen] = useState(false)

  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "",
    organization: "",
    logo: null,
    registered: false,
  })
  const [tempName, setTempName] = useState("")
  const [tempOrganization, setTempOrganization] = useState("")
  const [showProfileDialog, setShowProfileDialog] = useState(false)
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isTeacherReportDialogOpen, setIsTeacherReportDialogOpen] = useState(false)

  useEffect(() => {
    // Load data from localStorage on component mount
    const savedSchedules = localStorage.getItem("universitySchedules")
    const savedTeachers = localStorage.getItem("universityTeachers")
    const savedRooms = localStorage.getItem("universityRooms")

    if (savedTeachers) {
      setTeachers(JSON.parse(savedTeachers))
    } else {
      // Initialize with default teachers if none exist
      const defaultTeachers = [
        {
          id: generateId(),
          name: "Dr. Smith",
          subjects: ["Introduction to Computer Science", "Data Structures"],
        },
        {
          id: generateId(),
          name: "Prof. Johnson",
          subjects: ["Calculus I", "Linear Algebra"],
        },
        {
          id: generateId(),
          name: "Dr. Williams",
          subjects: ["English Composition", "World Literature"],
        },
      ]
      setTeachers(defaultTeachers)
      localStorage.setItem("universityTeachers", JSON.stringify(defaultTeachers))
    }

    if (savedRooms) setRooms(JSON.parse(savedRooms))

    if (savedSchedules) {
      const parsed = JSON.parse(savedSchedules)
      setSchedules(parsed)

      // Set current schedule to the first one if available
      if (parsed.length > 0) {
        setCurrentSchedule(parsed[0].id)

        // Set selected class to the first one if available
        if (parsed[0].classes.length > 0) {
          setSelectedClass(parsed[0].classes[0].id)
        }
      }
    } else {
      // Initialize with a default schedule if none exists
      const defaultSchedule = {
        id: generateId(),
        name: "Fall 2023",
        semester: "1st Semester",
        classes: [
          {
            id: generateId(),
            name: "Computer Science 101",
            sessions: [],
          },
        ],
      }
      setSchedules([defaultSchedule])
      setCurrentSchedule(defaultSchedule.id)
      setSelectedClass(defaultSchedule.classes[0].id)
    }
  }, [])

  useEffect(() => {
    const savedProfile = localStorage.getItem("scheduleUserProfile")
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile))
    }
  }, [])

  useEffect(() => {
    // Save to localStorage whenever schedules change
    if (schedules.length > 0) {
      localStorage.setItem("universitySchedules", JSON.stringify(schedules))
    }
  }, [schedules])

  useEffect(() => {
    // Save to localStorage whenever teachers or rooms change
    localStorage.setItem("universityTeachers", JSON.stringify(teachers))
    localStorage.setItem("universityRooms", JSON.stringify(rooms))
  }, [teachers, rooms])

  const generateId = () => {
    return Math.random().toString(36).substring(2, 9)
  }

  const getCurrentScheduleData = (): ScheduleData => {
    return (
      schedules.find((sch) => sch.id === currentSchedule) || {
        id: "",
        name: "",
        semester: "",
        classes: [],
      }
    )
  }

  const getCurrentClassData = (): Class => {
    const schedule = getCurrentScheduleData()
    return (
      schedule.classes.find((cls) => cls.id === selectedClass) || {
        id: "",
        name: "",
        sessions: [],
      }
    )
  }

  const getTeacherById = (id: string): Teacher | undefined => {
    return teachers.find((teacher) => teacher.id === id)
  }

  // Extract the numerical level from a class name
  const extractClassLevel = (className: string): number | null => {
    // Look for a number in the class name
    const match = className.match(/\d+/)
    if (match) {
      return Number.parseInt(match[0], 10)
    }
    return null
  }

  const handleAddSchedule = () => {
    if (!newScheduleName.trim() || !newSemester.trim()) {
      toast({
        title: "Error",
        description: "Please enter both a schedule name and semester",
        variant: "destructive",
      })
      return
    }

    const newSchedule = {
      id: generateId(),
      name: newScheduleName,
      semester: newSemester,
      classes: [
        {
          id: generateId(),
          name: "New Class",
          sessions: [],
        },
      ],
    }

    setSchedules([...schedules, newSchedule])
    setCurrentSchedule(newSchedule.id)
    setSelectedClass(newSchedule.classes[0].id)
    setNewScheduleName("")
    setNewSemester("")
    setShowNewScheduleInput(false)
  }

  const handleDeleteSchedule = (id: string) => {
    if (schedules.length === 1) {
      toast({
        title: "Cannot Delete",
        description: "You must have at least one schedule",
        variant: "destructive",
      })
      return
    }

    const confirmed = window.confirm("Are you sure you want to delete this schedule and all its classes?")
    if (confirmed) {
      const updatedSchedules = schedules.filter((sch) => sch.id !== id)
      setSchedules(updatedSchedules)

      // If we deleted the current schedule, switch to another one
      if (id === currentSchedule && updatedSchedules.length > 0) {
        setCurrentSchedule(updatedSchedules[0].id)
        setSelectedClass(updatedSchedules[0].classes[0]?.id || "")
      }
    }
  }

  const handleAddClass = () => {
    if (!newClassName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a class name",
        variant: "destructive",
      })
      return
    }

    const newClass = {
      id: generateId(),
      name: newClassName,
      sessions: [],
    }

    const updatedSchedules = schedules.map((schedule) => {
      if (schedule.id === currentSchedule) {
        return {
          ...schedule,
          classes: [...schedule.classes, newClass],
        }
      }
      return schedule
    })

    setSchedules(updatedSchedules)
    setSelectedClass(newClass.id)
    setNewClassName("")
    setShowNewClassInput(false)
  }

  const handleDeleteClass = (id: string) => {
    const currentScheduleData = getCurrentScheduleData()

    if (currentScheduleData.classes.length === 1) {
      toast({
        title: "Cannot Delete",
        description: "You must have at least one class",
        variant: "destructive",
      })
      return
    }

    const confirmed = window.confirm("Are you sure you want to delete this class and all its sessions?")
    if (confirmed) {
      const updatedSchedules = schedules.map((schedule) => {
        if (schedule.id === currentSchedule) {
          return {
            ...schedule,
            classes: schedule.classes.filter((cls) => cls.id !== id),
          }
        }
        return schedule
      })

      setSchedules(updatedSchedules)

      // If we deleted the selected class, switch to another one
      if (id === selectedClass) {
        const updatedSchedule = updatedSchedules.find((sch) => sch.id === currentSchedule)
        if (updatedSchedule && updatedSchedule.classes.length > 0) {
          setSelectedClass(updatedSchedule.classes[0].id)
        }
      }
    }
  }

  const handleAddSession = () => {
    // Validate form
    if (
      !newSession.teacherId ||
      !newSession.subject ||
      !newSession.room ||
      !newSession.startTime ||
      !newSession.endTime
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields",
        variant: "destructive",
      })
      return
    }

    // Validate time range
    if (newSession.startTime >= newSession.endTime) {
      toast({
        title: "Invalid Time Range",
        description: "End time must be after start time",
        variant: "destructive",
      })
      return
    }

    // Check if a session already exists for this day and time slot
    const currentClassData = getCurrentClassData()
    const existingSession = currentClassData.sessions.find(
      (session) => session.day === newSession.day && session.timeSlot === newSession.timeSlot,
    )

    if (existingSession) {
      // Ask if user wants to replace the existing session
      if (
        !window.confirm(
          `A session already exists for ${newSession.day} (${newSession.timeSlot}). Do you want to replace it?`,
        )
      ) {
        return
      }

      // Remove the existing session
      handleDeleteSession(existingSession.id)
    }

    const sessionEntry: ClassSession = {
      ...newSession,
      id: generateId(),
    }

    const updatedSchedules = schedules.map((schedule) => {
      if (schedule.id === currentSchedule) {
        return {
          ...schedule,
          classes: schedule.classes.map((cls) => {
            if (cls.id === selectedClass) {
              return {
                ...cls,
                sessions: [...cls.sessions, sessionEntry],
              }
            }
            return cls
          }),
        }
      }
      return schedule
    })

    setSchedules(updatedSchedules)

    // Reset form
    setNewSession({
      day: newSession.day,
      timeSlot: newSession.timeSlot,
      startTime: "09:00",
      endTime: "10:30",
      teacherId: "",
      subject: "",
      room: "",
      notes: "",
    })

    const teacher = getTeacherById(newSession.teacherId)

    toast({
      title: "Session Added",
      description: `Added ${teacher?.name} teaching ${newSession.subject} on ${newSession.day} (${newSession.timeSlot})`,
    })
  }

  const handleDeleteSession = (sessionId: string) => {
    const updatedSchedules = schedules.map((schedule) => {
      if (schedule.id === currentSchedule) {
        return {
          ...schedule,
          classes: schedule.classes.map((cls) => {
            if (cls.id === selectedClass) {
              return {
                ...cls,
                sessions: cls.sessions.filter((session) => session.id !== sessionId),
              }
            }
            return cls
          }),
        }
      }
      return schedule
    })

    setSchedules(updatedSchedules)
  }

  const handleAddTeacher = () => {
    if (!newTeacherName.trim() || newTeacherSubjects.length === 0) {
      toast({
        title: "Error",
        description: "Please enter a teacher name and at least one subject",
        variant: "destructive",
      })
      return
    }

    if (teachers.some((t) => t.name === newTeacherName)) {
      toast({
        title: "Error",
        description: "A teacher with this name already exists",
        variant: "destructive",
      })
      return
    }

    const newTeacher: Teacher = {
      id: generateId(),
      name: newTeacherName,
      subjects: newTeacherSubjects,
    }

    setTeachers([...teachers, newTeacher])
    setNewTeacherName("")
    setNewTeacherSubjects([])
    setNewSubjectInput("")

    toast({
      title: "Teacher Added",
      description: `Added ${newTeacherName} with ${newTeacherSubjects.length} subject(s)`,
    })
  }

  const handleUpdateTeacher = () => {
    if (!editingTeacher || !editingTeacher.name.trim() || editingTeacher.subjects.length === 0) {
      toast({
        title: "Error",
        description: "Please enter a teacher name and at least one subject",
        variant: "destructive",
      })
      return
    }

    // Check if name is changed and already exists
    if (
      editingTeacher.name !== teachers.find((t) => t.id === editingTeacher.id)?.name &&
      teachers.some((t) => t.name === editingTeacher.name)
    ) {
      toast({
        title: "Error",
        description: "A teacher with this name already exists",
        variant: "destructive",
      })
      return
    }

    const updatedTeachers = teachers.map((teacher) => (teacher.id === editingTeacher.id ? editingTeacher : teacher))

    setTeachers(updatedTeachers)
    setEditingTeacher(null)

    toast({
      title: "Teacher Updated",
      description: `Updated ${editingTeacher.name} with ${editingTeacher.subjects.length} subject(s)`,
    })
  }

  const handleDeleteTeacher = (id: string) => {
    // Check if teacher is assigned to any sessions
    let isAssigned = false

    for (const schedule of schedules) {
      for (const cls of schedule.classes) {
        if (cls.sessions.some((session) => session.teacherId === id)) {
          isAssigned = true
          break
        }
      }
      if (isAssigned) break
    }

    if (isAssigned) {
      toast({
        title: "Cannot Delete",
        description: "This teacher is assigned to one or more sessions. Please remove those assignments first.",
        variant: "destructive",
      })
      return
    }

    const confirmed = window.confirm("Are you sure you want to delete this teacher?")
    if (confirmed) {
      setTeachers(teachers.filter((teacher) => teacher.id !== id))

      toast({
        title: "Teacher Deleted",
        description: "Teacher has been removed from the system",
      })
    }
  }

  const handleAddRoom = () => {
    if (!newRoom.trim()) {
      toast({
        title: "Error",
        description: "Please enter a room name",
        variant: "destructive",
      })
      return
    }

    if (rooms.includes(newRoom)) {
      toast({
        title: "Error",
        description: "This room already exists",
      })
      return
    }

    setRooms([...rooms, newRoom])
    setNewRoom("")
  }

  const handleAddSubject = () => {
    if (!newSubjectInput.trim()) {
      toast({
        title: "Error",
        description: "Please enter a subject name",
      })
      return
    }

    if (newTeacherSubjects.includes(newSubjectInput)) {
      toast({
        title: "Error",
        description: "This subject is already added",
      })
      return
    }

    setNewTeacherSubjects([...newTeacherSubjects, newSubjectInput])
    setNewSubjectInput("")
  }

  const handleAddSubjectToEditingTeacher = () => {
    if (!editingTeacher) return

    if (!newSubjectInput.trim()) {
      toast({
        title: "Error",
        description: "Please enter a subject name",
      })
      return
    }

    if (editingTeacher.subjects.includes(newSubjectInput)) {
      toast({
        title: "Error",
        description: "This subject is already added",
      })
      return
    }

    setEditingTeacher({
      ...editingTeacher,
      subjects: [...editingTeacher.subjects, newSubjectInput],
    })
    setNewSubjectInput("")
  }

  const handleRemoveSubject = (subject: string) => {
    setNewTeacherSubjects(newTeacherSubjects.filter((s) => s !== subject))
  }

  const handleRemoveSubjectFromEditingTeacher = (subject: string) => {
    if (!editingTeacher) return

    setEditingTeacher({
      ...editingTeacher,
      subjects: editingTeacher.subjects.filter((s) => s !== subject),
    })
  }

  const getSessionForSlot = (day: string, timeSlot: string) => {
    const currentClassData = getCurrentClassData()
    return currentClassData.sessions.find((session) => session.day === day && session.timeSlot === timeSlot)
  }

  // Update the generateClassReport function to include user profile
  const generateClassReport = async (classId: string) => {
    const currentScheduleData = getCurrentScheduleData()
    const classData = currentScheduleData.classes.find((cls) => cls.id === classId)

    if (!classData || classData.sessions.length === 0) {
      toast({
        title: "No Sessions",
        description: "Add some sessions before generating a report",
        variant: "destructive",
      })
      return
    }

    // Create a temporary div for the PDF content
    const pdfContent = document.createElement("div")
    pdfContent.className = "pdf-content"
    pdfContent.style.width = "800px"
    pdfContent.style.padding = "20px"
    pdfContent.style.backgroundColor = "#ffffff"
    pdfContent.style.color = "#000000"
    pdfContent.style.fontFamily = "Arial, sans-serif"

    // Add header with user profile
    const header = document.createElement("div")
    header.style.display = "flex"
    header.style.justifyContent = "space-between"
    header.style.alignItems = "center"
    header.style.marginBottom = "20px"
    header.style.padding = "15px"
    header.style.borderBottom = "2px solid #01BABC"
    header.style.backgroundColor = "#f8f9fa"
    header.style.borderRadius = "8px 8px 0 0"

    // Left side with logo
    const logoContainer = document.createElement("div")
    logoContainer.style.width = "120px"
    logoContainer.style.height = "120px"
    logoContainer.style.display = "flex"
    logoContainer.style.alignItems = "center"
    logoContainer.style.justifyContent = "center"

    if (userProfile.logo) {
      const logo = document.createElement("img")
      logo.src = userProfile.logo
      logo.style.maxWidth = "100%"
      logo.style.maxHeight = "100%"
      logo.style.objectFit = "contain"
      logoContainer.appendChild(logo)
    } else {
      const placeholderLogo = document.createElement("div")
      placeholderLogo.style.width = "100px"
      placeholderLogo.style.height = "100px"
      placeholderLogo.style.backgroundColor = "#01BABC"
      placeholderLogo.style.borderRadius = "50%"
      placeholderLogo.style.display = "flex"
      placeholderLogo.style.alignItems = "center"
      placeholderLogo.style.justifyContent = "center"
      placeholderLogo.style.color = "white"
      placeholderLogo.style.fontSize = "36px"
      placeholderLogo.style.fontWeight = "bold"
      placeholderLogo.textContent = userProfile.organization ? userProfile.organization.charAt(0) : "S"
      logoContainer.appendChild(placeholderLogo)
    }

    // Right side with text
    const headerText = document.createElement("div")
    headerText.style.flex = "1"
    headerText.style.textAlign = "right"
    headerText.style.paddingLeft = "20px"

    const orgName = document.createElement("h1")
    orgName.style.color = "#122C39"
    orgName.style.fontSize = "24px"
    orgName.style.marginBottom = "5px"
    orgName.textContent = userProfile.organization || "Class Schedule Creator"

    const userName = document.createElement("h2")
    userName.style.color = "#01BABC"
    userName.style.fontSize = "18px"
    userName.style.marginBottom = "10px"
    userName.textContent = userProfile.name ? `Created by: ${userProfile.name}` : ""

    const reportTitle = document.createElement("h3")
    reportTitle.style.color = "#122C39"
    reportTitle.style.fontSize = "16px"
    reportTitle.style.marginBottom = "5px"
    reportTitle.textContent = `${currentScheduleData.name} - ${currentScheduleData.semester}`

    const classTitle = document.createElement("h3")
    classTitle.style.color = "#122C39"
    classTitle.style.fontSize = "16px"
    classTitle.style.marginBottom = "5px"
    classTitle.textContent = `${classData.name} Schedule`

    const dateGenerated = document.createElement("p")
    dateGenerated.style.color = "#666"
    dateGenerated.style.fontSize = "14px"
    dateGenerated.textContent = `Generated on ${new Date().toLocaleDateString()}`

    headerText.appendChild(orgName)
    headerText.appendChild(userName)
    headerText.appendChild(reportTitle)
    headerText.appendChild(classTitle)
    headerText.appendChild(dateGenerated)

    header.appendChild(logoContainer)
    header.appendChild(headerText)
    pdfContent.appendChild(header)

    // Create tables for morning and afternoon sessions
    timeSlots.forEach((timeSlot) => {
      // Check if there are any sessions for this time slot
      const hasSessions = classData.sessions.some((session) => session.timeSlot === timeSlot)

      if (!hasSessions) return // Skip if no sessions for this time slot

      // Add time slot header
      const timeSlotHeader = document.createElement("h3")
      timeSlotHeader.textContent = `${timeSlot} Sessions`
      timeSlotHeader.style.backgroundColor = "#122C39"
      timeSlotHeader.style.color = "#ffffff"
      timeSlotHeader.style.padding = "8px"
      timeSlotHeader.style.textAlign = "center"
      timeSlotHeader.style.marginTop = "30px"
      timeSlotHeader.style.marginBottom = "0"
      pdfContent.appendChild(timeSlotHeader)

      // Create schedule table
      const table = document.createElement("table")
      table.style.width = "100%"
      table.style.borderCollapse = "collapse"
      table.style.marginBottom = "20px"
      table.style.border = "1px solid #e5e7eb"

      // Add table header
      const thead = document.createElement("thead")
      const headerRow = document.createElement("tr")

      // Add header cells
      const headers = ["Day", "Subject", "Teacher", "Time", "Room", "Notes"]
      headers.forEach((headerText) => {
        const th = document.createElement("th")
        th.textContent = headerText
        th.style.padding = "8px"
        th.style.backgroundColor = "#f3f4f6"
        th.style.border = "1px solid #e5e7eb"
        th.style.textAlign = "left"
        headerRow.appendChild(th)
      })

      thead.appendChild(headerRow)
      table.appendChild(thead)

      // Add table body
      const tbody = document.createElement("tbody")

      // Filter sessions for this time slot and sort by day
      const dayOrder = { Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5 }
      const filteredSessions = classData.sessions
        .filter((session) => session.timeSlot === timeSlot)
        .sort((a, b) => dayOrder[a.day as keyof typeof dayOrder] - dayOrder[b.day as keyof typeof dayOrder])

      filteredSessions.forEach((session) => {
        const row = document.createElement("tr")
        const teacher = getTeacherById(session.teacherId)

        // Day cell
        const dayCell = document.createElement("td")
        dayCell.textContent = session.day
        dayCell.style.padding = "8px"
        dayCell.style.border = "1px solid #e5e7eb"
        row.appendChild(dayCell)

        // Subject cell
        const subjectCell = document.createElement("td")
        subjectCell.textContent = session.subject
        subjectCell.style.padding = "8px"
        subjectCell.style.border = "1px solid #e5e7eb"
        row.appendChild(subjectCell)

        // Teacher cell
        const teacherCell = document.createElement("td")
        teacherCell.textContent = teacher?.name || "Unknown"
        teacherCell.style.padding = "8px"
        teacherCell.style.border = "1px solid #e5e7eb"
        row.appendChild(teacherCell)

        // Time cell
        const timeCell = document.createElement("td")
        timeCell.textContent = `${session.startTime} - ${session.endTime}`
        timeCell.style.padding = "8px"
        timeCell.style.border = "1px solid #e5e7eb"
        row.appendChild(timeCell)

        // Room cell
        const roomCell = document.createElement("td")
        roomCell.textContent = session.room
        roomCell.style.padding = "8px"
        roomCell.style.border = "1px solid #e5e7eb"
        row.appendChild(roomCell)

        // Notes cell
        const notesCell = document.createElement("td")
        notesCell.textContent = session.notes || ""
        notesCell.style.padding = "8px"
        notesCell.style.border = "1px solid #e5e7eb"
        row.appendChild(notesCell)

        tbody.appendChild(row)
      })

      table.appendChild(tbody)
      pdfContent.appendChild(table)
    })

    // Update the footer with user organization
    const footer = document.createElement("div")
    footer.style.marginTop = "30px"
    footer.style.padding = "15px"
    footer.style.textAlign = "center"
    footer.style.fontSize = "12px"
    footer.style.color = "#6b7280"
    footer.style.borderTop = "1px solid #e5e7eb"
    footer.innerHTML = `
      <p>${userProfile.organization || "Class Schedule Creator"} - ${userProfile.name || ""}</p>
      <p>Created with Penn Creative Lab Class Schedule Creator</p>
      <p>Visit us at <a href="https://penncreative.com" style="color: #01BABC;">penncreative.com</a></p>
    `
    pdfContent.appendChild(footer)

    // Append to document temporarily
    document.body.appendChild(pdfContent)

    try {
      // Generate PDF
      const canvas = await html2canvas(pdfContent, {
        scale: 2,
        logging: false,
        useCORS: true,
        backgroundColor: "#ffffff",
      })

      if (!canvas) {
        throw new Error("Failed to generate canvas")
      }

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      const imgWidth = 210 // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)
      pdf.save(`${classData.name.replace(/\s+/g, "_")}_Schedule.pdf`)

      toast({
        title: "Success!",
        description: "Class report has been generated",
      })
    } catch (error) {
      console.error("Error generating PDF:", error)
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      })
    } finally {
      // Clean up
      document.body.removeChild(pdfContent)
    }
  }

  const generateTeacherReport = async (teacherId: string) => {
    const teacher = getTeacherById(teacherId)

    if (!teacher) {
      toast({
        title: "Error",
        description: "Teacher not found",
        variant: "destructive",
      })
      return
    }

    // Find all sessions for this teacher across all schedules and classes
    const teacherSessions: {
      scheduleName: string
      semester: string
      className: string
      session: ClassSession
    }[] = []

    schedules.forEach((schedule) => {
      schedule.classes.forEach((cls) => {
        cls.sessions.forEach((session) => {
          if (session.teacherId === teacherId) {
            teacherSessions.push({
              scheduleName: schedule.name,
              semester: schedule.semester,
              className: cls.name,
              session,
            })
          }
        })
      })
    })

    if (teacherSessions.length === 0) {
      toast({
        title: "No Sessions",
        description: `No sessions found for ${teacher.name}`,
        variant: "destructive",
      })
      return
    }

    // Create a temporary div for the PDF content
    const pdfContent = document.createElement("div")
    pdfContent.className = "pdf-content"
    pdfContent.style.width = "800px"
    pdfContent.style.padding = "20px"
    pdfContent.style.backgroundColor = "#ffffff"
    pdfContent.style.color = "#000000"
    pdfContent.style.fontFamily = "Arial, sans-serif"

    // Add header with user profile
    const header = document.createElement("div")
    header.style.display = "flex"
    header.style.justifyContent = "space-between"
    header.style.alignItems = "center"
    header.style.marginBottom = "20px"
    header.style.padding = "15px"
    header.style.borderBottom = "2px solid #01BABC"
    header.style.backgroundColor = "#f8f9fa"
    header.style.borderRadius = "8px 8px 0 0"

    // Left side with logo
    const logoContainer = document.createElement("div")
    logoContainer.style.width = "120px"
    logoContainer.style.height = "120px"
    logoContainer.style.display = "flex"
    logoContainer.style.alignItems = "center"
    logoContainer.style.justifyContent = "center"

    if (userProfile.logo) {
      const logo = document.createElement("img")
      logo.src = userProfile.logo
      logo.style.maxWidth = "100%"
      logo.style.maxHeight = "100%"
      logo.style.objectFit = "contain"
      logoContainer.appendChild(logo)
    } else {
      const placeholderLogo = document.createElement("div")
      placeholderLogo.style.width = "100px"
      placeholderLogo.style.height = "100px"
      placeholderLogo.style.backgroundColor = "#01BABC"
      placeholderLogo.style.borderRadius = "50%"
      placeholderLogo.style.display = "flex"
      placeholderLogo.style.alignItems = "center"
      placeholderLogo.style.justifyContent = "center"
      placeholderLogo.style.color = "white"
      placeholderLogo.style.fontSize = "36px"
      placeholderLogo.style.fontWeight = "bold"
      placeholderLogo.textContent = userProfile.organization ? userProfile.organization.charAt(0) : "S"
      logoContainer.appendChild(placeholderLogo)
    }

    // Right side with text
    const headerText = document.createElement("div")
    headerText.style.flex = "1"
    headerText.style.textAlign = "right"
    headerText.style.paddingLeft = "20px"

    const orgName = document.createElement("h1")
    orgName.style.color = "#122C39"
    orgName.style.fontSize = "24px"
    orgName.style.marginBottom = "5px"
    orgName.textContent = userProfile.organization || "Class Schedule Creator"

    const userName = document.createElement("h2")
    userName.style.color = "#01BABC"
    userName.style.fontSize = "18px"
    userName.style.marginBottom = "10px"
    userName.textContent = userProfile.name ? `Created by: ${userProfile.name}` : ""

    const reportTitle = document.createElement("h3")
    reportTitle.style.color = "#122C39"
    reportTitle.style.fontSize = "16px"
    reportTitle.style.marginBottom = "5px"
    reportTitle.textContent = `Teaching Schedule for ${teacher.name}`

    const dateGenerated = document.createElement("p")
    dateGenerated.style.color = "#666"
    dateGenerated.style.fontSize = "14px"
    dateGenerated.textContent = `Generated on ${new Date().toLocaleDateString()}`

    headerText.appendChild(orgName)
    headerText.appendChild(userName)
    headerText.appendChild(reportTitle)
    headerText.appendChild(dateGenerated)

    header.appendChild(logoContainer)
    header.appendChild(headerText)
    pdfContent.appendChild(header)

    // Add subjects taught
    const subjectsSection = document.createElement("div")
    subjectsSection.style.marginBottom = "20px"
    subjectsSection.innerHTML = `
      <h3 style="color: #122C39; font-size: 16px; margin-bottom: 5px;">Subjects Taught:</h3>
      <ul style="margin-top: 5px; padding-left: 20px;">
        ${teacher.subjects.map((subject) => `<li>${subject}</li>`).join("")}
      </ul>
    `
    pdfContent.appendChild(subjectsSection)

    // Group sessions by day
    const sessionsByDay: Record<string, typeof teacherSessions> = {}

    days.forEach((day) => {
      sessionsByDay[day] = teacherSessions.filter((item) => item.session.day === day)
    })

    // Create a table for each day that has sessions
    days.forEach((day) => {
      const daySessions = sessionsByDay[day]

      if (daySessions.length === 0) return // Skip days with no sessions

      // Add day header
      const dayHeader = document.createElement("h3")
      dayHeader.textContent = day
      dayHeader.style.backgroundColor = "#122C39"
      dayHeader.style.color = "#ffffff"
      dayHeader.style.padding = "8px"
      dayHeader.style.textAlign = "center"
      dayHeader.style.marginTop = "30px"
      dayHeader.style.marginBottom = "0"
      pdfContent.appendChild(dayHeader)

      // Create schedule table
      const table = document.createElement("table")
      table.style.width = "100%"
      table.style.borderCollapse = "collapse"
      table.style.marginBottom = "20px"
      table.style.border = "1px solid #e5e7eb"

      // Add table header
      const thead = document.createElement("thead")
      const headerRow = document.createElement("tr")

      // Add header cells
      const headers = ["Day", "Time", "Class", "Subject", "Room", "Schedule", "Semester"]
      headers.forEach((headerText) => {
        const th = document.createElement("th")
        th.textContent = headerText
        th.style.padding = "8px"
        th.style.backgroundColor = "#f3f4f6"
        th.style.border = "1px solid #e5e7eb"
        th.style.textAlign = "left"
        headerRow.appendChild(th)
      })

      thead.appendChild(headerRow)
      table.appendChild(thead)

      // Add table body
      const tbody = document.createElement("tbody")

      // Sort sessions by time slot
      const timeSlotOrder = { Morning: 1, Afternoon: 2 }
      const sortedSessions = [...daySessions].sort(
        (a, b) =>
          timeSlotOrder[a.session.timeSlot as keyof typeof timeSlotOrder] -
          timeSlotOrder[b.session.timeSlot as keyof typeof timeSlotOrder],
      )

      sortedSessions.forEach((item) => {
        const row = document.createElement("tr")

        // Day cell
        const dayCell = document.createElement("td")
        dayCell.textContent = item.session.day
        dayCell.style.padding = "8px"
        dayCell.style.border = "1px solid #e5e7eb"
        row.appendChild(dayCell)

        // Time cell
        const timeCell = document.createElement("td")
        timeCell.textContent = `${item.session.startTime} - ${item.session.endTime}`
        timeCell.style.padding = "8px"
        timeCell.style.border = "1px solid #e5e7eb"
        row.appendChild(timeCell)

        // Class cell
        const classCell = document.createElement("td")
        classCell.textContent = item.className
        classCell.style.padding = "8px"
        classCell.style.border = "1px solid #e5e7eb"
        row.appendChild(classCell)

        // Subject cell
        const subjectCell = document.createElement("td")
        subjectCell.textContent = item.session.subject
        subjectCell.style.padding = "8px"
        subjectCell.style.border = "1px solid #e5e7eb"
        row.appendChild(subjectCell)

        // Room cell
        const roomCell = document.createElement("td")
        roomCell.textContent = item.session.room
        roomCell.style.padding = "8px"
        roomCell.style.border = "1px solid #e5e7eb"
        row.appendChild(roomCell)

        // Schedule cell
        const scheduleCell = document.createElement("td")
        scheduleCell.textContent = item.scheduleName
        scheduleCell.style.padding = "8px"
        scheduleCell.style.border = "1px solid #e5e7eb"
        row.appendChild(scheduleCell)

        // Semester cell
        const semesterCell = document.createElement("td")
        semesterCell.textContent = item.semester
        semesterCell.style.padding = "8px"
        semesterCell.style.border = "1px solid #e5e7eb"
        row.appendChild(semesterCell)

        tbody.appendChild(row)
      })

      table.appendChild(tbody)
      pdfContent.appendChild(table)
    })

    // Add summary section
    const summaryHeader = document.createElement("h3")
    summaryHeader.textContent = "Teaching Summary"
    summaryHeader.style.marginTop = "30px"
    summaryHeader.style.color = "#122C39"
    pdfContent.appendChild(summaryHeader)

    const summaryText = document.createElement("p")
    summaryText.innerHTML = `
      <strong>Total Classes:</strong> ${new Set(teacherSessions.map((item) => item.className)).size}<br>
      <strong>Total Sessions:</strong> ${teacherSessions.length}<br>
      <strong>Days Teaching:</strong> ${Object.keys(sessionsByDay)
        .filter((day) => sessionsByDay[day].length > 0)
        .join(", ")}
    `
    pdfContent.appendChild(summaryText)

    // Update the footer with user organization
    const footer = document.createElement("div")
    footer.style.marginTop = "30px"
    footer.style.padding = "15px"
    footer.style.textAlign = "center"
    footer.style.fontSize = "12px"
    footer.style.color = "#6b7280"
    footer.style.borderTop = "1px solid #e5e7eb"
    footer.innerHTML = `
      <p>${userProfile.organization || "Class Schedule Creator"} - ${userProfile.name || ""}</p>
      <p>Created with Penn Creative Lab Class Schedule Creator</p>
      <p>Visit us at <a href="https://penncreative.com" style="color: #01BABC;">penncreative.com</a></p>
    `
    pdfContent.appendChild(footer)

    // Append to document temporarily
    document.body.appendChild(pdfContent)

    try {
      // Generate PDF
      const canvas = await html2canvas(pdfContent, {
        scale: 2,
        logging: false,
        useCORS: true,
        backgroundColor: "#ffffff",
      })

      if (!canvas) {
        throw new Error("Failed to generate canvas")
      }

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      const imgWidth = 210 // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)
      pdf.save(`${teacher.name.replace(/\s+/g, "_")}_Teaching_Schedule.pdf`)

      toast({
        title: "Success!",
        description: "Teacher report has been generated",
      })
    } catch (error) {
      console.error("Error generating PDF:", error)
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      })
    } finally {
      // Clean up
      document.body.removeChild(pdfContent)
    }
  }

  const generateLevelReport = async () => {
    // Collect all classes from all schedules
    const allClasses: {
      scheduleName: string
      semester: string
      class: Class
    }[] = []

    schedules.forEach((schedule) => {
      schedule.classes.forEach((cls) => {
        allClasses.push({
          scheduleName: schedule.name,
          semester: schedule.semester,
          class: cls,
        })
      })
    })

    if (allClasses.length === 0) {
      toast({
        title: "No Classes",
        description: "Add some classes before generating a level report",
        variant: "destructive",
      })
      return
    }

    // Group classes by level
    const classesByLevel: Record<string, typeof allClasses> = {}

    allClasses.forEach((classItem) => {
      const level = extractClassLevel(classItem.class.name)
      if (level !== null) {
        const levelKey = level.toString()
        if (!classesByLevel[levelKey]) {
          classesByLevel[levelKey] = []
        }
        classesByLevel[levelKey].push(classItem)
      }
    })

    if (Object.keys(classesByLevel).length === 0) {
      toast({
        title: "No Classes with Levels",
        description: "No classes with numerical levels found. Class names should include numbers (e.g., 'CMS6A')",
        variant: "destructive",
      })
      return
    }

    // Create a temporary div for the PDF content
    const pdfContent = document.createElement("div")
    pdfContent.className = "pdf-content"
    pdfContent.style.width = "800px"
    pdfContent.style.padding = "20px"
    pdfContent.style.backgroundColor = "#ffffff"
    pdfContent.style.color = "#000000"
    pdfContent.style.fontFamily = "Arial, sans-serif"

    // Add header with user profile
    const header = document.createElement("div")
    header.style.display = "flex"
    header.style.justifyContent = "space-between"
    header.style.alignItems = "center"
    header.style.marginBottom = "20px"
    header.style.padding = "15px"
    header.style.borderBottom = "2px solid #01BABC"
    header.style.backgroundColor = "#f8f9fa"
    header.style.borderRadius = "8px 8px 0 0"

    // Left side with logo
    const logoContainer = document.createElement("div")
    logoContainer.style.width = "120px"
    logoContainer.style.height = "120px"
    logoContainer.style.display = "flex"
    logoContainer.style.alignItems = "center"
    logoContainer.style.justifyContent = "center"

    if (userProfile.logo) {
      const logo = document.createElement("img")
      logo.src = userProfile.logo
      logo.style.maxWidth = "100%"
      logo.style.maxHeight = "100%"
      logo.style.objectFit = "contain"
      logoContainer.appendChild(logo)
    } else {
      const placeholderLogo = document.createElement("div")
      placeholderLogo.style.width = "100px"
      placeholderLogo.style.height = "100px"
      placeholderLogo.style.backgroundColor = "#01BABC"
      placeholderLogo.style.borderRadius = "50%"
      placeholderLogo.style.display = "flex"
      placeholderLogo.style.alignItems = "center"
      placeholderLogo.style.justifyContent = "center"
      placeholderLogo.style.color = "white"
      placeholderLogo.style.fontSize = "36px"
      placeholderLogo.style.fontWeight = "bold"
      placeholderLogo.textContent = userProfile.organization ? userProfile.organization.charAt(0) : "S"
      logoContainer.appendChild(placeholderLogo)
    }

    // Right side with text
    const headerText = document.createElement("div")
    headerText.style.flex = "1"
    headerText.style.textAlign = "right"
    headerText.style.paddingLeft = "20px"

    const orgName = document.createElement("h1")
    orgName.style.color = "#122C39"
    orgName.style.fontSize = "24px"
    orgName.style.marginBottom = "5px"
    orgName.textContent = userProfile.organization || "Class Schedule Creator"

    const userName = document.createElement("h2")
    userName.style.color = "#01BABC"
    userName.style.fontSize = "18px"
    userName.style.marginBottom = "10px"
    userName.textContent = userProfile.name ? `Created by: ${userProfile.name}` : ""

    const reportTitle = document.createElement("h3")
    reportTitle.style.color = "#122C39"
    reportTitle.style.fontSize = "16px"
    reportTitle.style.marginBottom = "5px"
    reportTitle.textContent = `Class Level Report`

    const dateGenerated = document.createElement("p")
    dateGenerated.style.color = "#666"
    dateGenerated.style.fontSize = "14px"
    dateGenerated.textContent = `Generated on ${new Date().toLocaleDateString()}`

    headerText.appendChild(orgName)
    headerText.appendChild(userName)
    headerText.appendChild(reportTitle)
    headerText.appendChild(dateGenerated)

    header.appendChild(logoContainer)
    header.appendChild(headerText)
    pdfContent.appendChild(header)

    // Sort levels numerically
    const sortedLevels = Object.keys(classesByLevel).sort((a, b) => Number.parseInt(a) - Number.parseInt(b))

    // Define a set of distinct colors for classes within the same level
    const classColors = [
      "#3b82f6", // blue
      "#10b981", // green
      "#f59e0b", // amber
      "#8b5cf6", // purple
      "#ec4899", // pink
      "#06b6d4", // cyan
      "#f97316", // orange
      "#14b8a6", // teal
    ]

    // Create a section for each level
    sortedLevels.forEach((level) => {
      const levelClasses = classesByLevel[level]

      // Add level header
      const levelHeader = document.createElement("h3")
      levelHeader.textContent = `Level ${level} Classes`
      levelHeader.style.backgroundColor = "#122C39"
      levelHeader.style.color = "#ffffff"
      levelHeader.style.padding = "8px"
      levelHeader.style.textAlign = "center"
      levelHeader.style.marginTop = "30px"
      levelHeader.style.marginBottom = "15px"
      pdfContent.appendChild(levelHeader)

      // Group sessions by class name
      const sessionsByClass: Record<
        string,
        {
          className: string
          scheduleName: string
          semester: string
          sessions: ClassSession[]
        }
      > = {}

      levelClasses.forEach((classItem) => {
        if (!sessionsByClass[classItem.class.name]) {
          sessionsByClass[classItem.class.name] = {
            className: classItem.class.name,
            scheduleName: classItem.scheduleName,
            semester: classItem.semester,
            sessions: [],
          }
        }
        sessionsByClass[classItem.class.name].sessions.push(...classItem.class.sessions)
      })

      // Sort class names alphabetically
      const sortedClassNames = Object.keys(sessionsByClass).sort()

      // Process each class in this level
      sortedClassNames.forEach((className, classIndex) => {
        const classData = sessionsByClass[className]
        const colorIndex = classIndex % classColors.length
        const classColor = classColors[colorIndex]

        // Add class header with distinct color
        const classHeader = document.createElement("div")
        classHeader.style.backgroundColor = classColor
        classHeader.style.color = "#ffffff"
        classHeader.style.padding = "6px 10px"
        classHeader.style.marginTop = "20px"
        classHeader.style.marginBottom = "10px"
        classHeader.style.fontWeight = "bold"
        classHeader.style.textAlign = "center"
        classHeader.textContent = className
        pdfContent.appendChild(classHeader)

        // Add class info
        const classInfo = document.createElement("div")
        classInfo.style.marginBottom = "10px"
        classInfo.innerHTML = `
        <p><strong>Schedule:</strong> ${classData.scheduleName} - ${classData.semester}</p>
      `
        pdfContent.appendChild(classInfo)

        if (classData.sessions.length === 0) {
          const noSessions = document.createElement("p")
          noSessions.style.textAlign = "center"
          noSessions.style.padding = "10px"
          noSessions.style.backgroundColor = "#f3f4f6"
          noSessions.style.borderRadius = "4px"
          noSessions.textContent = "No sessions scheduled for this class"
          pdfContent.appendChild(noSessions)
          return
        }

        // Create schedule table
        const table = document.createElement("table")
        table.style.width = "100%"
        table.style.borderCollapse = "collapse"
        table.style.marginBottom = "20px"
        table.style.border = "1px solid #e5e7eb"

        // Add table header
        const thead = document.createElement("thead")
        const headerRow = document.createElement("tr")

        // Add header cells
        const headers = ["Day", "Time", "Subject", "Teacher", "Room"]
        headers.forEach((headerText) => {
          const th = document.createElement("th")
          th.textContent = headerText
          th.style.padding = "8px"
          th.style.backgroundColor = "#f3f4f6"
          th.style.border = "1px solid #e5e7eb"
          th.style.textAlign = "left"
          headerRow.appendChild(th)
        })

        thead.appendChild(headerRow)
        table.appendChild(thead)

        // Add table body
        const tbody = document.createElement("tbody")

        // Sort sessions by day, then by time
        const dayOrder = { Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5 }
        const sortedSessions = [...classData.sessions].sort((a, b) => {
          const dayDiff = dayOrder[a.day as keyof typeof dayOrder] - dayOrder[b.day as keyof typeof dayOrder]
          if (dayDiff !== 0) return dayDiff
          return a.startTime.localeCompare(b.startTime)
        })

        sortedSessions.forEach((session) => {
          const row = document.createElement("tr")
          const teacher = getTeacherById(session.teacherId)

          // Day cell
          const dayCell = document.createElement("td")
          dayCell.textContent = session.day
          dayCell.style.padding = "8px"
          dayCell.style.border = "1px solid #e5e7eb"
          row.appendChild(dayCell)

          // Time cell
          const timeCell = document.createElement("td")
          timeCell.textContent = `${session.startTime} - ${session.endTime}`
          timeCell.style.padding = "8px"
          timeCell.style.border = "1px solid #e5e7eb"
          row.appendChild(timeCell)

          // Subject cell
          const subjectCell = document.createElement("td")
          subjectCell.textContent = session.subject
          subjectCell.style.padding = "8px"
          subjectCell.style.border = "1px solid #e5e7eb"
          row.appendChild(subjectCell)

          // Teacher cell
          const teacherCell = document.createElement("td")
          teacherCell.textContent = teacher?.name || "Unknown"
          teacherCell.style.padding = "8px"
          teacherCell.style.border = "1px solid #e5e7eb"
          row.appendChild(teacherCell)

          // Room cell
          const roomCell = document.createElement("td")
          roomCell.textContent = session.room
          roomCell.style.padding = "8px"
          roomCell.style.border = "1px solid #e5e7eb"
          row.appendChild(roomCell)

          tbody.appendChild(row)
        })

        table.appendChild(tbody)
        pdfContent.appendChild(table)
      })

      // Add level summary
      const levelSummary = document.createElement("div")
      levelSummary.style.marginBottom = "20px"
      levelSummary.style.padding = "10px"
      levelSummary.style.backgroundColor = "#f9fafb"
      levelSummary.style.border = "1px solid #e5e7eb"
      levelSummary.style.borderRadius = "4px"

      // Count unique classes, subjects, and teachers
      const uniqueClasses = new Set(Object.keys(sessionsByClass))

      const allSessions: ClassSession[] = []
      Object.values(sessionsByClass).forEach((classData) => {
        allSessions.push(...classData.sessions)
      })

      const uniqueSubjects = new Set(allSessions.map((session) => session.subject))
      const uniqueTeachers = new Set(
        allSessions.map((session) => {
          const teacher = getTeacherById(session.teacherId)
          return teacher ? teacher.name : "Unknown"
        }),
      )

      levelSummary.innerHTML = `
      <h4 style="margin-top: 0; margin-bottom: 8px; color: #122C39;">Level ${level} Summary</h4>
      <p style="margin: 4px 0;"><strong>Total Classes:</strong> ${uniqueClasses.size}</p>
      <p style="margin: 4px 0;"><strong>Total Subjects:</strong> ${uniqueSubjects.size}</p>
      <p style="margin: 4px 0;"><strong>Total Teachers:</strong> ${uniqueTeachers.size}</p>
      <p style="margin: 4px 0;"><strong>Total Sessions:</strong> ${allSessions.length}</p>
    `
      pdfContent.appendChild(levelSummary)
    })

    // Update the footer with user organization
    const footer = document.createElement("div")
    footer.style.marginTop = "30px"
    footer.style.padding = "15px"
    footer.style.textAlign = "center"
    footer.style.fontSize = "12px"
    footer.style.color = "#6b7280"
    footer.style.borderTop = "1px solid #e5e7eb"
    footer.innerHTML = `
      <p>${userProfile.organization || "Class Schedule Creator"} - ${userProfile.name || ""}</p>
      <p>Created with Penn Creative Lab Class Schedule Creator</p>
      <p>Visit us at <a href="https://penncreative.com" style="color: #01BABC;">penncreative.com</a></p>
    `
    pdfContent.appendChild(footer)

    // Append to document temporarily
    document.body.appendChild(pdfContent)

    try {
      // Generate PDF
      const canvas = await html2canvas(pdfContent, {
        scale: 2,
        logging: false,
        useCORS: true,
        backgroundColor: "#ffffff",
      })

      if (!canvas) {
        throw new Error("Failed to generate canvas")
      }

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      const imgWidth = 210 // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)
      pdf.save(`Class_Level_Report.pdf`)

      toast({
        title: "Success!",
        description: "Level report has been generated",
      })
    } catch (error) {
      console.error("Error generating PDF:", error)
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      })
    } finally {
      // Clean up
      document.body.removeChild(pdfContent)
    }
  }

  const exportToExcel = () => {
    const currentScheduleData = getCurrentScheduleData()

    if (
      currentScheduleData.classes.length === 0 ||
      currentScheduleData.classes.every((cls) => cls.sessions.length === 0)
    ) {
      toast({
        title: "No Sessions",
        description: "Add some class sessions before exporting to Excel",
        variant: "destructive",
      })
      return
    }

    try {
      // Create workbook
      const wb = XLSX.utils.book_new()

      // Create a worksheet for each class
      currentScheduleData.classes.forEach((classData) => {
        if (classData.sessions.length === 0) return // Skip classes with no sessions

        // Create data for morning and afternoon sessions
        const morningData = [["Morning Sessions"], ["Day", "Time", "Subject", "Teacher", "Room", "Notes"]]
        const afternoonData = [["Afternoon Sessions"], ["Day", "Time", "Subject", "Teacher", "Room", "Notes"]]

        // Group sessions by time slot and sort by day
        const dayOrder = { Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5 }

        const morningSessions = classData.sessions
          .filter((session) => session.timeSlot === "Morning")
          .sort((a, b) => dayOrder[a.day as keyof typeof dayOrder] - dayOrder[b.day as keyof typeof dayOrder])

        const afternoonSessions = classData.sessions
          .filter((session) => session.timeSlot === "Afternoon")
          .sort((a, b) => dayOrder[a.day as keyof typeof dayOrder] - dayOrder[b.day as keyof typeof dayOrder])

        // Add morning sessions
        morningSessions.forEach((session) => {
          const teacher = getTeacherById(session.teacherId)
          morningData.push([
            session.day,
            `${session.startTime} - ${session.endTime}`,
            session.subject,
            teacher?.name || "Unknown",
            session.room,
            session.notes || "",
          ])
        })

        // Add afternoon sessions
        afternoonSessions.forEach((session) => {
          const teacher = getTeacherById(session.teacherId)
          afternoonData.push([
            session.day,
            `${session.startTime} - ${session.endTime}`,
            session.subject,
            teacher?.name || "Unknown",
            session.room,
            session.notes || "",
          ])
        })

        // Create worksheet
        const ws = XLSX.utils.aoa_to_sheet([
          [`${classData.name} - ${currentScheduleData.name} (${currentScheduleData.semester})`],
          [""],
          ...morningData,
          [""],
          ...afternoonData,
        ])

        // Set column widths
        const wscols = [
          { wch: 12 }, // Day
          { wch: 15 }, // Time
          { wch: 30 }, // Subject
          { wch: 20 }, // Teacher
          { wch: 15 }, // Room
          { wch: 30 }, // Notes
        ]
        ws["!cols"] = wscols

        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(wb, ws, classData.name.substring(0, 31))
      })

      // Create a teacher summary worksheet
      const teacherData: Record<
        string,
        {
          name: string
          classes: Set<string>
          days: Set<string>
          subjects: Set<string>
          sessions: number
        }
      > = {}

      // Collect teacher data
      currentScheduleData.classes.forEach((cls) => {
        cls.sessions.forEach((session) => {
          const teacher = getTeacherById(session.teacherId)
          if (!teacher) return

          if (!teacherData[teacher.id]) {
            teacherData[teacher.id] = {
              name: teacher.name,
              classes: new Set(),
              days: new Set(),
              subjects: new Set(),
              sessions: 0,
            }
          }

          teacherData[teacher.id].classes.add(cls.name)
          teacherData[teacher.id].days.add(session.day)
          teacherData[teacher.id].subjects.add(session.subject)
          teacherData[teacher.id].sessions++
        })
      })

      // Create teacher summary worksheet
      const teacherSummaryData = [
        ["Teacher Summary"],
        ["Teacher", "Classes", "Days Teaching", "Subjects", "Total Sessions"],
      ]

      Object.values(teacherData).forEach((data) => {
        teacherSummaryData.push([
          data.name,
          Array.from(data.classes).join(", "),
          Array.from(data.days).join(", "),
          Array.from(data.subjects).join(", "),
          data.sessions.toString(),
        ])
      })

      const teacherSummaryWs = XLSX.utils.aoa_to_sheet(teacherSummaryData)

      // Set column widths
      const teacherCols = [
        { wch: 20 }, // Teacher
        { wch: 30 }, // Classes
        { wch: 30 }, // Days
        { wch: 40 }, // Subjects
        { wch: 15 }, // Sessions
      ]
      teacherSummaryWs["!cols"] = teacherCols

      // Add teacher summary worksheet to workbook
      XLSX.utils.book_append_sheet(wb, teacherSummaryWs, "Teacher Summary")

      // Export workbook
      XLSX.writeFile(wb, `${currentScheduleData.name.replace(/\s+/g, "_")}_Schedule.xlsx`)

      toast({
        title: "Success!",
        description: "Your schedule has been exported to Excel",
      })
    } catch (error) {
      console.error("Error exporting to Excel:", error)
      toast({
        title: "Error",
        description: "Failed to export to Excel. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleRegister = () => {
    if (!tempName.trim() || !tempOrganization.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter your name and organization",
        variant: "destructive",
      })
      return
    }

    const updatedProfile = {
      ...userProfile,
      name: tempName,
      organization: tempOrganization,
      registered: true,
    }

    setUserProfile(updatedProfile)
    localStorage.setItem("scheduleUserProfile", JSON.stringify(updatedProfile))
    setShowProfileDialog(false)

    toast({
      title: "Profile Updated",
      description: "Your profile has been saved successfully",
    })
  }

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast({
        title: "File Too Large",
        description: "Logo image must be less than 2MB",
        variant: "destructive",
      })
      return
    }

    // Check file type
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid File Type",
        description: "Please upload an image file",
        variant: "destructive",
      })
      return
    }

    setLogoFile(file)

    // Convert to base64 for storage
    const reader = new FileReader()
    reader.onload = (event) => {
      if (event.target?.result) {
        const updatedProfile = {
          ...userProfile,
          logo: event.target.result as string,
        }
        setUserProfile(updatedProfile)
        localStorage.setItem("scheduleUserProfile", JSON.stringify(updatedProfile))

        toast({
          title: "Logo Uploaded",
          description: "Your logo has been uploaded successfully",
        })
      }
    }
    reader.readAsDataURL(file)
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  // Add this function to export class report to Excel
  const exportClassReportToExcel = (classId: string) => {
    const currentScheduleData = getCurrentScheduleData()
    const classData = currentScheduleData.classes.find((cls) => cls.id === classId)

    if (!classData || classData.sessions.length === 0) {
      toast({
        title: "No Sessions",
        description: "Add some sessions before exporting to Excel",
        variant: "destructive",
      })
      return
    }

    try {
      // Create workbook
      const wb = XLSX.utils.book_new()

      // Create header data with user profile
      const headerData = [
        [`${userProfile.organization || "Class Schedule Creator"}`],
        [`Created by: ${userProfile.name || ""}`],
        [`${currentScheduleData.name} - ${currentScheduleData.semester}`],
        [`${classData.name} Schedule`],
        [`Generated on ${new Date().toLocaleDateString()}`],
        [""],
      ]

      // Create data for morning and afternoon sessions
      const morningData = [["Morning Sessions"], ["Day", "Subject", "Teacher", "Time", "Room", "Notes"]]
      const afternoonData = [["Afternoon Sessions"], ["Day", "Subject", "Teacher", "Time", "Room", "Notes"]]

      // Group sessions by time slot and sort by day
      const dayOrder = { Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5 }

      const morningSessions = classData.sessions
        .filter((session) => session.timeSlot === "Morning")
        .sort((a, b) => dayOrder[a.day as keyof typeof dayOrder] - dayOrder[b.day as keyof typeof dayOrder])

      const afternoonSessions = classData.sessions
        .filter((session) => session.timeSlot === "Afternoon")
        .sort((a, b) => dayOrder[a.day as keyof typeof dayOrder] - dayOrder[b.day as keyof typeof dayOrder])

      // Add morning sessions
      morningSessions.forEach((session) => {
        const teacher = getTeacherById(session.teacherId)
        morningData.push([
          session.day,
          session.subject,
          teacher?.name || "Unknown",
          `${session.startTime} - ${session.endTime}`,
          session.room,
          session.notes || "",
        ])
      })

      // Add afternoon sessions
      afternoonSessions.forEach((session) => {
        const teacher = getTeacherById(session.teacherId)
        afternoonData.push([
          session.day,
          session.subject,
          teacher?.name || "Unknown",
          `${session.startTime} - ${session.endTime}`,
          session.room,
          session.notes || "",
        ])
      })

      // Create worksheet
      const ws = XLSX.utils.aoa_to_sheet([...headerData, ...morningData, [""], ...afternoonData])

      // Set column widths
      const wscols = [
        { wch: 12 }, // Day
        { wch: 30 }, // Subject
        { wch: 20 }, // Teacher
        { wch: 15 }, // Time
        { wch: 15 }, // Room
        { wch: 30 }, // Notes
      ]
      ws["!cols"] = wscols

      // Add worksheet to workbook
      XLSX.utils.book_append_sheet(wb, ws, classData.name.substring(0, 31))

      // Export workbook
      XLSX.writeFile(wb, `${classData.name.replace(/\s+/g, "_")}_Schedule.xlsx`)

      toast({
        title: "Success!",
        description: "Class report has been exported to Excel",
      })
    } catch (error) {
      console.error("Error exporting to Excel:", error)
      toast({
        title: "Error",
        description: "Failed to export to Excel. Please try again.",
        variant: "destructive",
      })
    }
  }

  // Add similar functions for teacher and level reports
  const exportTeacherReportToExcel = (teacherId: string) => {
    // Similar implementation for teacher report
    // ...
  }

  const exportLevelReportToExcel = () => {
    // Similar implementation for level report
    // ...
  }

  return (
    <div className="container mx-auto px-4 py-24">
      {!userProfile.registered && (
        <Alert className="mb-8">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Register your profile</AlertTitle>
          <AlertDescription>
            Register your name and organization to personalize your reports.
            <Button
              variant="link"
              className="p-0 h-auto text-[#01BABC]"
              onClick={() => {
                setTempName("")
                setTempOrganization("")
                setShowProfileDialog(true)
              }}
            >
              Register now
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {userProfile.registered && (
        <div className="mb-8 bg-white dark:bg-[#122C39]/50 rounded-lg shadow-sm border p-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-[#01BABC]">
                {userProfile.logo ? (
                  <AvatarImage src={userProfile.logo || "/placeholder.svg"} alt={userProfile.organization} />
                ) : (
                  <AvatarFallback className="bg-[#01BABC] text-white text-xl">
                    {userProfile.organization.charAt(0)}
                  </AvatarFallback>
                )}
              </Avatar>
              <div>
                <h2 className="text-xl font-bold">{userProfile.organization}</h2>
                <p className="text-muted-foreground">Welcome, {userProfile.name}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={triggerFileInput}>
                <Upload className="h-4 w-4" />
                {userProfile.logo ? "Change Logo" : "Upload Logo"}
              </Button>
              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleLogoUpload} />
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setTempName(userProfile.name)
                  setTempOrganization(userProfile.organization)
                  setShowProfileDialog(true)
                }}
              >
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Profile Dialog */}
      <Dialog open={showProfileDialog} onOpenChange={setShowProfileDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{userProfile.registered ? "Edit Profile" : "Register Profile"}</DialogTitle>
            <DialogDescription>Enter your name and organization to personalize your reports.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Your name"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="organization" className="text-right">
                Organization
              </Label>
              <Input
                id="organization"
                placeholder="Your organization"
                value={tempOrganization}
                onChange={(e) => setTempOrganization(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowProfileDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleRegister}>{userProfile.registered ? "Update Profile" : "Register"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">University Class Schedule Creator</h1>
          <p className="text-lg text-muted-foreground">
            Create and manage your class schedules with this easy-to-use tool
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-[#01BABC]" />
                  Schedules
                </CardTitle>
                <CardDescription>Manage your academic schedules</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {schedules.map((schedule) => (
                  <div
                    key={schedule.id}
                    className={`flex items-center justify-between p-3 rounded-md cursor-pointer transition-colors ${
                      currentSchedule === schedule.id ? "bg-[#01BABC]/10 border border-[#01BABC]/30" : "hover:bg-muted"
                    }`}
                    onClick={() => {
                      setCurrentSchedule(schedule.id)
                      if (schedule.classes.length > 0) {
                        setSelectedClass(schedule.classes[0].id)
                      }
                    }}
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{schedule.name}</span>
                      <span className="text-xs text-muted-foreground">{schedule.semester}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDeleteSchedule(schedule.id)
                      }}
                      title="Delete schedule"
                    >
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                ))}

                {showNewScheduleInput ? (
                  <div className="space-y-2">
                    <Input
                      placeholder="Schedule name (e.g. Fall 2023)"
                      value={newScheduleName}
                      onChange={(e) => setNewScheduleName(e.target.value)}
                    />
                    <Input
                      placeholder="Semester (e.g. 1st Semester)"
                      value={newSemester}
                      onChange={(e) => setNewSemester(e.target.value)}
                    />
                    <div className="flex space-x-2">
                      <Button size="sm" onClick={handleAddSchedule} className="flex-1">
                        Add
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setShowNewScheduleInput(false)}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button variant="outline" className="w-full" onClick={() => setShowNewScheduleInput(true)}>
                    <Plus className="mr-2 h-4 w-4" /> Add Schedule
                  </Button>
                )}
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <Button className="w-full bg-[#01BABC] hover:bg-[#01BABC]/80 text-white" onClick={exportToExcel}>
                  <FileSpreadsheet className="mr-2 h-4 w-4" /> Export to Excel
                </Button>
              </CardFooter>
            </Card>

            {/* Classes Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-[#01BABC]" />
                  Classes
                </CardTitle>
                <CardDescription>Manage your classes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {getCurrentScheduleData().classes.map((classData) => (
                  <div
                    key={classData.id}
                    className={`flex items-center justify-between p-3 rounded-md cursor-pointer transition-colors ${
                      selectedClass === classData.id ? "bg-[#01BABC]/10 border border-[#01BABC]/30" : "hover:bg-muted"
                    }`}
                    onClick={() => setSelectedClass(classData.id)}
                  >
                    <div className="flex items-center">
                      <BookOpen className="mr-2 h-4 w-4 text-[#01BABC]" />
                      <span>{classData.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation()
                          generateClassReport(classData.id)
                        }}
                        title="Generate PDF report"
                      >
                        <FilePdf className="h-4 w-4 text-[#01BABC]" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation()
                          exportClassReportToExcel(classData.id)
                        }}
                        title="Export to Excel"
                      >
                        <FileSpreadsheet className="h-4 w-4 text-[#01BABC]" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDeleteClass(classData.id)
                        }}
                        title="Delete class"
                      >
                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </div>
                  </div>
                ))}

                {showNewClassInput ? (
                  <div className="space-y-2">
                    <Input
                      placeholder="Class name (e.g. Computer Science 101)"
                      value={newClassName}
                      onChange={(e) => setNewClassName(e.target.value)}
                    />
                    <div className="flex space-x-2">
                      <Button size="sm" onClick={handleAddClass} className="flex-1">
                        Add
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setShowNewClassInput(false)}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button variant="outline" className="w-full" onClick={() => setShowNewClassInput(true)}>
                    <Plus className="mr-2 h-4 w-4" /> Add Class
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Teacher Management */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5 text-[#01BABC]" />
                  Teacher Management
                </CardTitle>
                <CardDescription>Manage teachers and their subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full mb-4" onClick={() => setIsTeacherDialogOpen(true)}>
                  <User className="mr-2 h-4 w-4" /> Manage Teachers
                </Button>

                <Dialog
                  open={isTeacherReportDialogOpen}
                  onOpenChange={(open) => open && setIsTeacherReportDialogOpen(true)}
                >
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <FilePdf className="mr-2 h-4 w-4" /> Generate Teacher Report
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Generate Teacher Report</DialogTitle>
                      <DialogDescription>
                        Select a teacher to generate their teaching schedule report.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="max-h-60 overflow-y-auto space-y-2 my-4">
                      {teachers.map((teacher) => (
                        <div key={teacher.id} className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2" />
                            {teacher.name}
                          </div>
                          <div className="flex space-x-1">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                generateTeacherReport(teacher.id)
                              }}
                              title="Generate PDF report"
                            >
                              <FilePdf className="h-4 w-4 mr-1" /> PDF
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                exportTeacherReportToExcel(teacher.id)
                              }}
                              title="Export to Excel"
                            >
                              <FileSpreadsheet className="h-4 w-4 mr-1" /> Excel
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <DialogFooter>
                      <Button variant="outline" className="w-full">
                        Cancel
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Reports Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart className="mr-2 h-5 w-5 text-[#01BABC]" />
                  Reports
                </CardTitle>
                <CardDescription>Generate specialized reports</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" onClick={() => setIsLevelReportDialogOpen(true)}>
                  <BarChart className="mr-2 h-4 w-4" /> Generate Level Report
                </Button>
              </CardContent>
            </Card>

            {/* User Profile Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5 text-[#01BABC]" />
                  User Profile
                </CardTitle>
                <CardDescription>Manage your profile and organization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      {userProfile.logo ? (
                        <AvatarImage src={userProfile.logo || "/placeholder.svg"} alt={userProfile.name} />
                      ) : (
                        <AvatarFallback>{userProfile.name ? userProfile.name[0] : "PCL"}</AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <p className="font-medium">{userProfile.name || "Guest User"}</p>
                      <p className="text-sm text-muted-foreground">{userProfile.organization || "No Organization"}</p>
                    </div>
                  </div>
                  <Switch id="airplane-mode" disabled={!userProfile.registered} />
                </div>

                {!userProfile.registered ? (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Unregistered</AlertTitle>
                    <AlertDescription>
                      Register to unlock all features and save your profile information.
                    </AlertDescription>
                  </Alert>
                ) : null}

                <Button variant="outline" className="w-full" onClick={() => setShowProfileDialog(true)}>
                  <User className="mr-2 h-4 w-4" /> Manage Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <Tabs defaultValue="schedule" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="schedule" data-value="schedule">
                  Schedule View
                </TabsTrigger>
                <TabsTrigger value="add" data-value="add">
                  Add Sessions
                </TabsTrigger>
              </TabsList>

              {/* Schedule View Tab */}
              <TabsContent value="schedule" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>{getCurrentClassData().name}</CardTitle>
                        <CardDescription>
                          {getCurrentScheduleData().name} - {getCurrentScheduleData().semester}
                        </CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          onClick={() => generateClassReport(selectedClass)}
                          className="bg-[#01BABC]/10 hover:bg-[#01BABC]/20 text-[#01BABC] border-[#01BABC]/30"
                        >
                          <FilePdf className="mr-2 h-4 w-4" /> PDF Report
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => exportClassReportToExcel(selectedClass)}
                          className="bg-[#01BABC]/10 hover:bg-[#01BABC]/20 text-[#01BABC] border-[#01BABC]/30"
                        >
                          <FileSpreadsheet className="mr-2 h-4 w-4" /> Excel Report
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {getCurrentClassData().sessions.length === 0 ? (
                      <div className="text-center py-12">
                        <BookOpen className="mx-auto h-12 w-12 text-muted-foreground opacity-30" />
                        <p className="mt-4 text-muted-foreground">
                          No sessions added yet. Add some sessions to see them here.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-8">
                        {/* Morning Sessions */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <Clock className="mr-2 h-5 w-5 text-[#01BABC]" /> Morning Sessions
                          </h3>
                          <div className="overflow-x-auto" ref={scheduleTableRef}>
                            <table className="w-full border-collapse">
                              <thead>
                                <tr>
                                  {days.map((day) => (
                                    <th key={day} className="p-2 border bg-muted text-center">
                                      {day}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  {days.map((day) => {
                                    const session = getSessionForSlot(day, "Morning")
                                    const teacher = session ? getTeacherById(session.teacherId) : undefined

                                    return (
                                      <td
                                        key={day}
                                        className="p-2 border h-24 align-top cursor-pointer hover:bg-muted/50"
                                        onClick={() => {
                                          setNewSession({
                                            day,
                                            timeSlot: "Morning",
                                            startTime: session?.startTime || "09:00",
                                            endTime: session?.endTime || "10:30",
                                            teacherId: session?.teacherId || "",
                                            subject: session?.subject || "",
                                            room: session?.room || "",
                                            notes: session?.notes || "",
                                          })
                                          document.querySelector('[data-value="add"]')?.click()
                                        }}
                                      >
                                        {session ? (
                                          <div className="h-full flex flex-col">
                                            <div className="font-bold text-[#01BABC]">{session.subject}</div>
                                            <div className="text-sm">{teacher?.name || "Unknown"}</div>
                                            <div className="text-xs text-muted-foreground">{session.room}</div>
                                            <div className="text-xs font-medium mt-1">
                                              {session.startTime} - {session.endTime}
                                            </div>
                                            {session.notes && (
                                              <div className="text-xs italic mt-auto">{session.notes}</div>
                                            )}
                                          </div>
                                        ) : (
                                          <div className="h-full flex items-center justify-center text-xs text-muted-foreground">
                                            Click to add
                                          </div>
                                        )}
                                      </td>
                                    )
                                  })}
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Afternoon Sessions */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <Clock className="mr-2 h-5 w-5 text-[#01BABC]" /> Afternoon Sessions
                          </h3>
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                              <thead>
                                <tr>
                                  {days.map((day) => (
                                    <th key={day} className="p-2 border bg-muted text-center">
                                      {day}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  {days.map((day) => {
                                    const session = getSessionForSlot(day, "Afternoon")
                                    const teacher = session ? getTeacherById(session.teacherId) : undefined

                                    return (
                                      <td
                                        key={day}
                                        className="p-2 border h-24 align-top cursor-pointer hover:bg-muted/50"
                                        onClick={() => {
                                          setNewSession({
                                            day,
                                            timeSlot: "Afternoon",
                                            startTime: session?.startTime || "13:00",
                                            endTime: session?.endTime || "14:30",
                                            teacherId: session?.teacherId || "",
                                            subject: session?.subject || "",
                                            room: session?.room || "",
                                            notes: session?.notes || "",
                                          })
                                          document.querySelector('[data-value="add"]')?.click()
                                        }}
                                      >
                                        {session ? (
                                          <div className="h-full flex flex-col">
                                            <div className="font-bold text-[#01BABC]">{session.subject}</div>
                                            <div className="text-sm">{teacher?.name || "Unknown"}</div>
                                            <div className="text-xs text-muted-foreground">{session.room}</div>
                                            <div className="text-xs font-medium mt-1">
                                              {session.startTime} - {session.endTime}
                                            </div>
                                            {session.notes && (
                                              <div className="text-xs italic mt-auto">{session.notes}</div>
                                            )}
                                          </div>
                                        ) : (
                                          <div className="h-full flex items-center justify-center text-xs text-muted-foreground">
                                            Click to add
                                          </div>
                                        )}
                                      </td>
                                    )
                                  })}
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Session List */}
                {getCurrentClassData().sessions.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>All Sessions</CardTitle>
                      <CardDescription>List of all sessions for this class</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr>
                              <th className="text-left p-2 border-b">Day</th>
                              <th className="text-left p-2 border-b">Time Slot</th>
                              <th className="text-left p-2 border-b">Hours</th>
                              <th className="text-left p-2 border-b">Subject</th>
                              <th className="text-left p-2 border-b">Teacher</th>
                              <th className="text-left p-2 border-b">Room</th>
                              <th className="text-left p-2 border-b">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {getCurrentClassData()
                              .sessions.sort((a, b) => {
                                // Sort by day first
                                const dayOrder = { Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5 }
                                const dayDiff =
                                  dayOrder[a.day as keyof typeof dayOrder] - dayOrder[b.day as keyof typeof dayOrder]
                                if (dayDiff !== 0) return dayDiff

                                // Then by time slot
                                const timeOrder = { Morning: 1, Afternoon: 2 }
                                return (
                                  timeOrder[a.timeSlot as keyof typeof timeOrder] -
                                  timeOrder[b.timeSlot as keyof typeof timeOrder]
                                )
                              })
                              .map((session) => {
                                const teacher = getTeacherById(session.teacherId)

                                return (
                                  <tr key={session.id}>
                                    <td className="p-2 border-b">{session.day}</td>
                                    <td className="p-2 border-b">{session.timeSlot}</td>
                                    <td className="p-2 border-b">
                                      {session.startTime} - {session.endTime}
                                    </td>
                                    <td className="p-2 border-b">{session.subject}</td>
                                    <td className="p-2 border-b">{teacher?.name || "Unknown"}</td>
                                    <td className="p-2 border-b">{session.room}</td>
                                    <td className="p-2 border-b">
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => {
                                          setNewSession({
                                            day: session.day,
                                            timeSlot: session.timeSlot,
                                            startTime: session.startTime,
                                            endTime: session.endTime,
                                            teacherId: session.teacherId,
                                            subject: session.subject,
                                            room: session.room,
                                            notes: session.notes,
                                          })
                                          document.querySelector('[data-value="add"]')?.click()
                                        }}
                                        title="Edit session"
                                      >
                                        <Info className="h-4 w-4 text-[#01BABC]" />
                                      </Button>
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleDeleteSession(session.id)}
                                        title="Delete session"
                                      >
                                        <Trash2 className="h-4 w-4 text-red-500" />
                                      </Button>
                                    </td>
                                  </tr>
                                )
                              })}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Add Sessions Tab */}
              <TabsContent value="add">
                <Card>
                  <CardHeader>
                    <CardTitle>Add New Session</CardTitle>
                    <CardDescription>
                      Add a new session to {getCurrentClassData().name} in {getCurrentScheduleData().name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="day">Day</Label>
                          <Select
                            value={newSession.day}
                            onValueChange={(value) => setNewSession({ ...newSession, day: value })}
                          >
                            <SelectTrigger id="day">
                              <SelectValue placeholder="Select day" />
                            </SelectTrigger>
                            <SelectContent>
                              {days.map((day) => (
                                <SelectItem key={day} value={day}>
                                  {day}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="timeSlot">Time Slot</Label>
                          <Select
                            value={newSession.timeSlot}
                            onValueChange={(value) => setNewSession({ ...newSession, timeSlot: value })}
                          >
                            <SelectTrigger id="timeSlot">
                              <SelectValue placeholder="Select time slot" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((slot) => (
                                <SelectItem key={slot} value={slot}>
                                  {slot}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="startTime">Start Time</Label>
                            <Input
                              id="startTime"
                              type="time"
                              value={newSession.startTime}
                              onChange={(e) => setNewSession({ ...newSession, startTime: e.target.value })}
                            />
                          </div>
                          <div>
                            <Label htmlFor="endTime">End Time</Label>
                            <Input
                              id="endTime"
                              type="time"
                              value={newSession.endTime}
                              onChange={(e) => setNewSession({ ...newSession, endTime: e.target.value })}
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="teacher">Teacher</Label>
                          <Select
                            value={newSession.teacherId}
                            onValueChange={(value) => {
                              const teacher = getTeacherById(value)
                              setNewSession({
                                ...newSession,
                                teacherId: value,
                                // Clear subject if changing teacher
                                subject:
                                  teacher && newSession.subject && !teacher.subjects.includes(newSession.subject)
                                    ? ""
                                    : newSession.subject,
                              })
                            }}
                          >
                            <SelectTrigger id="teacher">
                              <SelectValue placeholder="Select teacher" />
                            </SelectTrigger>
                            <SelectContent>
                              {teachers.map((teacher) => (
                                <SelectItem key={teacher.id} value={teacher.id}>
                                  {teacher.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="subject">Subject</Label>
                          <Select
                            value={newSession.subject}
                            onValueChange={(value) => setNewSession({ ...newSession, subject: value })}
                            disabled={!newSession.teacherId}
                          >
                            <SelectTrigger id="subject">
                              <SelectValue
                                placeholder={!newSession.teacherId ? "Select a teacher first" : "Select subject"}
                              />
                            </SelectTrigger>
                            <SelectContent>
                              {newSession.teacherId &&
                                getTeacherById(newSession.teacherId)?.subjects.map((subject) => (
                                  <SelectItem key={subject} value={subject}>
                                    {subject}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="room">Room</Label>
                          <Select
                            value={newSession.room}
                            onValueChange={(value) => setNewSession({ ...newSession, room: value })}
                          >
                            <SelectTrigger id="room">
                              <SelectValue placeholder="Select room" />
                            </SelectTrigger>
                            <SelectContent>
                              {rooms.map((room) => (
                                <SelectItem key={room} value={room}>
                                  {room}
                                </SelectItem>
                              ))}
                              <SelectItem value="custom">Add Custom Room...</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {newSession.room === "custom" && (
                          <div>
                            <Label htmlFor="newRoom">New Room</Label>
                            <div className="flex space-x-2">
                              <Input
                                id="newRoom"
                                placeholder="Enter new room name"
                                value={newRoom}
                                onChange={(e) => setNewRoom(e.target.value)}
                              />
                              <Button onClick={handleAddRoom}>Add</Button>
                            </div>
                          </div>
                        )}

                        <div>
                          <Label htmlFor="notes">Notes (Optional)</Label>
                          <Textarea
                            id="notes"
                            placeholder="Add any additional notes"
                            value={newSession.notes || ""}
                            onChange={(e) => setNewSession({ ...newSession, notes: e.target.value })}
                            className="resize-none"
                            rows={3}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-[#01BABC] hover:bg-[#01BABC]/80 text-white"
                      onClick={handleAddSession}
                      disabled={!newSession.teacherId || !newSession.subject || !newSession.room}
                    >
                      <Plus className="mr-2 h-4 w-4" /> Add Session to Schedule
                    </Button>
                  </CardFooter>
                </Card>

                {/* Quick Help Card */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Info className="mr-2 h-5 w-5 text-[#01BABC]" />
                      Quick Help
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">How to use this tool:</h3>
                        <ol className="list-decimal list-inside space-y-2 text-sm">
                          <li>Create a schedule for each semester or term</li>
                          <li>Add classes to your schedule (e.g., Computer Science 101)</li>
                          <li>Manage teachers and their subjects</li>
                          <li>Add sessions by selecting a teacher, subject, day and time slot</li>
                          <li>Generate reports for classes or teachers</li>
                          <li>Export your complete schedule to Excel</li>
                        </ol>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-medium mb-2">Available Reports:</h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Badge className="mr-2 bg-[#01BABC]">Class Reports</Badge>
                            <span className="text-sm">Shows morning and afternoon sessions for each class</span>
                          </div>
                          <div className="flex items-center">
                            <Badge className="mr-2 bg-[#01BABC]">Teacher Reports</Badge>
                            <span className="text-sm">Shows all classes and sessions for each teacher</span>
                          </div>
                          <div className="flex items-center">
                            <Badge className="mr-2 bg-[#01BABC]">Level Reports</Badge>
                            <span className="text-sm">
                              Groups classes by numerical level (e.g., all level 6 classes)
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Badge className="mr-2 bg-[#01BABC]">Excel Export</Badge>
                            <span className="text-sm">Complete schedule with all classes and sessions</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Teacher Management Dialog */}
      <Dialog open={isTeacherDialogOpen} onOpenChange={setIsTeacherDialogOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Teacher Management</DialogTitle>
            <DialogDescription>Add, edit, or remove teachers and their subjects</DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="list" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="list" data-value="list">
                Teacher List
              </TabsTrigger>
              <TabsTrigger value="add" data-value="add">
                Add Teacher
              </TabsTrigger>
            </TabsList>

            <TabsContent value="list" className="max-h-[400px] overflow-y-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Subjects</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teachers.map((teacher) => (
                    <TableRow key={teacher.id}>
                      <TableCell className="font-medium">{teacher.name}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {teacher.subjects.map((subject, index) => (
                            <Badge key={index} variant="outline" className="bg-[#01BABC]/10 text-[#01BABC]">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setEditingTeacher({ ...teacher })}
                            title="Edit teacher"
                          >
                            <Edit className="h-4 w-4 text-[#01BABC]" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteTeacher(teacher.id)}
                            title="Delete teacher"
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {teachers.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center py-4 text-muted-foreground">
                        No teachers added yet
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="add">
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="teacherName">Teacher Name</Label>
                  <Input
                    id="teacherName"
                    placeholder="Enter teacher name"
                    value={newTeacherName}
                    onChange={(e) => setNewTeacherName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Subjects</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {newTeacherSubjects.map((subject, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        {subject}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4 p-0"
                          onClick={() => handleRemoveSubject(subject)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    ))}
                    {newTeacherSubjects.length === 0 && (
                      <span className="text-sm text-muted-foreground">No subjects added yet</span>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add a subject"
                      value={newSubjectInput}
                      onChange={(e) => setNewSubjectInput(e.target.value)}
                    />
                    <Button onClick={handleAddSubject}>Add</Button>
                  </div>
                </div>

                <Button
                  className="w-full mt-4"
                  onClick={handleAddTeacher}
                  disabled={!newTeacherName.trim() || newTeacherSubjects.length === 0}
                >
                  <Plus className="mr-2 h-4 w-4" /> Add Teacher
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsTeacherDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Teacher Dialog */}
      {editingTeacher && (
        <Dialog open={!!editingTeacher} onOpenChange={(open) => !open && setEditingTeacher(null)}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Edit Teacher</DialogTitle>
              <DialogDescription>Update teacher information and subjects</DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="editTeacherName">Teacher Name</Label>
                <Input
                  id="editTeacherName"
                  placeholder="Enter teacher name"
                  value={editingTeacher.name}
                  onChange={(e) => setEditingTeacher({ ...editingTeacher, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label>Subjects</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {editingTeacher.subjects.map((subject, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      {subject}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-4 w-4 p-0"
                        onClick={() => handleRemoveSubjectFromEditingTeacher(subject)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                  {editingTeacher.subjects.length === 0 && (
                    <span className="text-sm text-muted-foreground">No subjects added yet</span>
                  )}
                </div>

                <div className="flex space-x-2">
                  <Input
                    placeholder="Add a subject"
                    value={newSubjectInput}
                    onChange={(e) => setNewSubjectInput(e.target.value)}
                  />
                  <Button onClick={handleAddSubjectToEditingTeacher}>Add</Button>
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setEditingTeacher(null)}>
                Cancel
              </Button>
              <Button onClick={handleUpdateTeacher}>Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Level Report Dialog */}
      <Dialog open={isLevelReportDialogOpen} onOpenChange={setIsLevelReportDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Generate Level Report</DialogTitle>
            <DialogDescription>
              Generate a report that groups classes by their numerical level (e.g., all level 6 classes together)
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <p className="text-sm text-muted-foreground mb-4">
              This report will analyze all class names across all schedules and group them by their numerical level. For
              example, classes like "CMS6A", "Math6", and "English6" will be grouped together as level 6 classes.
            </p>

            <p className="text-sm text-muted-foreground mb-4">
              The report will include all subjects, teachers, and time allocations for each level.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-md p-3 mb-4">
              <p className="text-sm text-amber-800 flex items-center">
                <Info className="h-4 w-4 mr-2" />
                Class names should include numbers (e.g., "CMS6A") for proper level detection.
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsLevelReportDialogOpen(false)}>
              Cancel
            </Button>
            <div className="flex space-x-2">
              <Button
                onClick={() => {
                  generateLevelReport()
                  setIsLevelReportDialogOpen(false)
                }}
              >
                <FilePdf className="mr-2 h-4 w-4" /> PDF Report
              </Button>
              <Button
                onClick={() => {
                  exportLevelReportToExcel()
                  setIsLevelReportDialogOpen(false)
                }}
              >
                <FileSpreadsheet className="mr-2 h-4 w-4" /> Excel Report
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* User Profile Dialog */}
      <Dialog open={showProfileDialog} onOpenChange={setShowProfileDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>User Profile</DialogTitle>
            <DialogDescription>Manage your profile information</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="profileName">Name</Label>
              <Input
                id="profileName"
                placeholder="Enter your name"
                value={tempName || userProfile.name}
                onChange={(e) => setTempName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="profileOrganization">Organization</Label>
              <Input
                id="profileOrganization"
                placeholder="Enter your organization"
                value={tempOrganization || userProfile.organization}
                onChange={(e) => setTempOrganization(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Logo</Label>
              <div className="flex items-center space-x-4">
                <Avatar>
                  {userProfile.logo ? (
                    <AvatarImage src={userProfile.logo || "/placeholder.svg"} alt={userProfile.name} />
                  ) : (
                    <AvatarFallback>{userProfile.name ? userProfile.name[0] : "PCL"}</AvatarFallback>
                  )}
                </Avatar>
                <Button variant="secondary" size="sm" onClick={triggerFileInput}>
                  <Upload className="mr-2 h-4 w-4" /> Upload Logo
                </Button>
                <Input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" ref={fileInputRef} />
              </div>
              <p className="text-sm text-muted-foreground">Upload your organization logo (Max 2MB, Image files only)</p>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowProfileDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleRegister}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
