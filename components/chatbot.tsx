"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  MessageSquare,
  Send,
  X,
  Minimize2,
  Maximize2,
  Globe,
  Loader2,
  Volume2,
  VolumeX,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { isSomaliText } from "@/utils/language-detection"

interface MessageContent {
  text: string
  images: string[]
  links: Array<{ text: string; url: string }>
}

interface Message {
  id: string
  content: MessageContent
  role: "user" | "assistant"
  timestamp: Date
}

interface KnowledgeBaseResponse {
  text: string
  images: string[]
  links: Array<{ text: string; url: string }>
}

interface KnowledgeBase {
  [key: string]: {
    [key: string]: KnowledgeBaseResponse
  }
}

interface WelcomeMessages {
  en: string
  so: string
}

interface ErrorEvent {
  message: string
  error?: unknown
}

// Knowledge base for Penn Creative Lab
const knowledgeBase: KnowledgeBase = {
  en: {
    branding: {
      text: "Yes, Penn Creative Lab has extensive experience in branding for clients. We've worked with various businesses across different sectors including healthcare, fashion, and technology. Some of our notable branding projects include Beta Care Diagnostic Ltd, HugoDress Fashion Brand, and Dabiib Soft.",
      images: ["/images/betacare-logo-new.png", "/images/hugodress-logo-embossed.png", "/images/dabiib-soft.jpeg"],
      links: [],
    },
    courses: {
      text: "Penn Creative Lab offers a variety of courses including Web Design, UI/UX Design with Figma, and IT certifications. Our courses are designed to be practical and industry-relevant, with a focus on employable skills.",
      images: ["/images/webdesign-masterclass.jpg", "/images/figma-course.png"],
      links: [{ text: "View All Courses", url: "/courses" }],
    },
    services: {
      text: "Our services include technology solutions, consultation, university collaboration, and professional certifications. We help businesses and organizations with their digital needs, from website development to comprehensive software solutions.",
      images: [],
      links: [
        { text: "Technology Services", url: "/services/technology" },
        { text: "Consultation Services", url: "/services/consultation" },
        { text: "University Collaboration", url: "/services/university-collaboration" },
      ],
    },
    technology: {
      text: "Our technology services include website development, web applications, mobile app development, logo & brand design, database solutions, and digital marketing. We create custom digital solutions tailored to your business needs.",
      images: [],
      links: [{ text: "Learn More About Technology Services", url: "/services/technology" }],
    },
    consultation: {
      text: "Our consultation services include business strategy, digital transformation, market research, financial analysis, training & workshops, and project management. We provide expert guidance to help your business overcome challenges and achieve growth.",
      images: ["/images/consultation-approach.jpeg"],
      links: [{ text: "Learn More About Consultation Services", url: "/services/consultation" }],
    },
    university: {
      text: "Our university collaboration program connects academic institutions with industry expertise. We offer curriculum development, guest lectures, internship programs, research partnerships, and technology workshops for students and faculty.",
      images: [],
      links: [{ text: "Learn More About University Collaboration", url: "/services/university-collaboration" }],
    },
    projects: {
      text: "We've completed numerous projects across various industries. Some of our notable projects include Beta Care Diagnostic Ltd (healthcare branding), HugoDress (fashion e-commerce), and Dabiib Soft (healthcare management system).",
      images: ["/images/betacare-mockup-1.jpeg", "/images/hugodress-mockup-1.png", "/images/dabiib-dashboard.jpeg"],
      links: [{ text: "View Our Projects", url: "/projects" }],
    },
    team: {
      text: "Our team consists of experienced professionals in design, development, education, and business consulting. We're dedicated to providing quality services and education to our clients and students.",
      images: ["/images/penn-team-collaboration.png"],
      links: [{ text: "Meet Our Team", url: "/team" }],
    },
    contact: {
      text: "You can contact us at +252 61 2049476 or email us at info@penn.so. Our office is located in Mogadishu, Somalia.",
      images: [],
      links: [{ text: "Contact Us", url: "/contact" }],
    },
    about: {
      text: "Penn Creative Lab is an innovative educational and technology hub dedicated to empowering individuals and organizations in Somalia. Our mission is to bridge the gap between academic learning and real-world application.",
      images: [],
      links: [{ text: "Learn More About Us", url: "/about" }],
    },
    certifications: {
      text: "We offer professional certifications including PCL Web Design Certified, PCL Junior Developer Certified, and PCL IT Ready Certified. These certifications are designed to validate your skills and enhance your career prospects.",
      images: [],
      links: [{ text: "View Our Certifications", url: "/certifications" }],
    },
    tools: {
      text: "We provide various tools and resources including AI tools for design, writing, presentations, and code generation. We also offer a Class Schedule Creator tool to help educational institutions manage their schedules efficiently.",
      images: ["/images/ai-tools-hero.png"],
      links: [
        { text: "Explore AI Tools", url: "/ai-tools" },
        { text: "Try Class Schedule Creator", url: "/tools/class-schedule" },
      ],
    },
    fallback: {
      text: "Thank you for your question about Penn Creative Lab. We're an innovative educational and technology hub offering courses, services, and solutions to empower individuals and organizations in Somalia. Is there something specific about our offerings you'd like to know more about?",
      images: [],
      links: [],
    },
  },
  so: {
    branding: {
      text: "Haa, Penn Creative Lab waxay leedahay khibrad ballaaran oo ku saabsan branding-ga macaamiisha. Waxaan la shaqeynay ganacsiyo kala duwan oo ka kala yimid qeybaha kala duwan ee caafimaadka, dharka, iyo tiknoolajiyadda. Qaar ka mid ah mashruucyadayada branding-ga caanka ah waxaa ka mid ah Beta Care Diagnostic Ltd, HugoDress Fashion Brand, iyo Dabiib Soft.",
      images: ["/images/betacare-logo-new.png", "/images/hugodress-logo-embossed.png", "/images/dabiib-soft.jpeg"],
      links: [],
    },
    courses: {
      text: "Penn Creative Lab waxay bixisaa koorsoyin kala duwan oo ay ku jiraan Naqshadeynta Websaydhka, Naqshadeynta UI/UX ee Figma, iyo shahaadooyinka IT. Koorsooyinkeenna waxaa loo qorsheeyay inay noqdaan kuwo wax ku ool ah oo warshadaha la xiriira, iyagoo diiradda saaraya xirfadaha shaqada.",
      images: ["/images/webdesign-masterclass.jpg", "/images/figma-course.png"],
      links: [{ text: "Arag Dhammaan Koorsooyinka", url: "/courses" }],
    },
    services: {
      text: "Adeegyadayada waxaa ka mid ah xalka tiknoolajiyada, la-tashiga, iskaashiga jaamacadda, iyo shahaadooyinka xirfadeed. Waxaan ka caawinnaa ganacsiyada iyo hay'adaha baahidooda dhijitaalka ah, laga bilaabo horumarinta websaydhka ilaa xalka software-ka oo dhammeystiran.",
      images: [],
      links: [
        { text: "Adeegyada Tiknoolajiyada", url: "/services/technology" },
        { text: "Adeegyada La-talinta", url: "/services/consultation" },
        { text: "Iskaashiga Jaamacadda", url: "/services/university-collaboration" },
      ],
    },
    technology: {
      text: "Adeegyadayada tiknoolajiyada waxaa ka mid ah horumarinta websaydhka, ablikeeshanada web-ka, horumarinta app-yada mobile-ka, naqshadeynta sumadda & brand-ka, xalka database-ka, iyo suuq-geynta dhijitaalka ah. Waxaan abuurno xalal dhijitaal ah oo loo habeeyay baahiyaha ganacsigaaga.",
      images: [],
      links: [{ text: "Wax Badan Ka Ogow Adeegyada Tiknoolajiyada", url: "/services/technology" }],
    },
    consultation: {
      text: "Adeegyadayada la-talinta waxaa ka mid ah istiraatiijiyada ganacsiga, isbeddelka dhijitaalka ah, cilmi-baarista suuqa, falanqaynta maaliyadda, tababarka & warshada, iyo maamulka mashruuca. Waxaan bixinaa hagitaan khibrad leh si aan u caawino ganacsigaaga inuu ka gudbo caqabadaha oo uu gaaro koritaan.",
      images: ["/images/consultation-approach.jpeg"],
      links: [{ text: "Wax Badan Ka Ogow Adeegyada La-talinta", url: "/services/consultation" }],
    },
    university: {
      text: "Barnaamijkayaga iskaashiga jaamacadda wuxuu isku xiraa hay'adaha waxbarashada iyo khibradda warshadaha. Waxaan bixinaa horumarinta manhajka, muxaadarooyinka martida, barnaamijyada tababarka, iskaashiga cilmi-baarista, iyo warshada tiknoolajiyada ee ardayda iyo macallimiinta.",
      images: [],
      links: [{ text: "Wax Badan Ka Ogow Iskaashiga Jaamacadda", url: "/services/university-collaboration" }],
    },
    projects: {
      text: "Waxaan dhammaynay mashaariic badan oo ka kala yimid warshadaha kala duwan. Qaar ka mid ah mashruucyadayada caanka ah waxaa ka mid ah Beta Care Diagnostic Ltd (branding caafimaad), HugoDress (e-commerce fashion), iyo Dabiib Soft (nidaamka maamulka caafimaadka).",
      images: ["/images/betacare-mockup-1.jpeg", "/images/hugodress-mockup-1.png", "/images/dabiib-dashboard.jpeg"],
      links: [{ text: "Arag Mashruucyadayada", url: "/projects" }],
    },
    team: {
      text: "Kooxdayada waxaa ka mid ah xirfadlayaal khibrad leh oo ku takhasusay naqshadeynta, horumarinta, waxbarashada, iyo la-talinta ganacsiga. Waxaan ka go'an nahay inaan bixinno adeegyo iyo waxbarasho tayo leh oo aan u fidino macaamiisheenna iyo ardaydeenna.",
      images: ["/images/penn-team-collaboration.png"],
      links: [{ text: "La Kulan Kooxdayada", url: "/team" }],
    },
    contact: {
      text: "Waxaad nala soo xiriiri kartaa +252 61 2049476 ama iimayl noogu soo dir info@penn.so. Xafiiskayagu wuxuu ku yaallaa Muqdisho, Soomaaliya.",
      images: [],
      links: [{ text: "Nala Soo Xiriir", url: "/contact" }],
    },
    about: {
      text: "Penn Creative Lab waa xarun waxbarasho iyo tiknoolajiyad oo hal-abuur leh oo loogu talagalay awood-siinta shakhsiyaadka iyo hay'adaha Soomaaliya. Hadafkayagu waa in aan buuxinno farqiga u dhexeeya waxbarashada tacliinta iyo adeegsiga dhabta ah.",
      images: [],
      links: [{ text: "Wax Badan Ka Ogow Annaga", url: "/about" }],
    },
    certifications: {
      text: "Waxaan bixinaa shahaadooyinka xirfadeed oo ay ku jiraan PCL Web Design Certified, PCL Junior Developer Certified, iyo PCL IT Ready Certified. Shahaadooyinkan waxaa loogu talagalay inay xaqiijiyaan xirfadahaaga oo ay kor u qaadaan fursadahaaga shaqo.",
      images: [],
      links: [{ text: "Arag Shahaadooyinkayaga", url: "/certifications" }],
    },
    tools: {
      text: "Waxaan bixinaa qalab iyo ilaha kala duwan oo ay ku jiraan qalabka AI ee naqshadeynta, qoraalka, soo bandhigidda, iyo abuurista koodhka. Waxaan sidoo kale bixinaa qalab Class Schedule Creator ah si ay hay'adaha waxbarashada uga caawiso maamulka jadwalkooda si hufan.",
      images: ["/images/ai-tools-hero.png"],
      links: [
        { text: "Sahamin Qalabka AI", url: "/ai-tools" },
        { text: "Isku Day Class Schedule Creator", url: "/tools/class-schedule" },
      ],
    },
    fallback: {
      text: "Waad ku mahadsan tahay su'aashaada ku saabsan Penn Creative Lab. Waxaan nahay xarun waxbarasho iyo tiknoolajiyad oo hal-abuur leh oo bixisa koorsoyin, adeegyo, iyo xalal si loo awood siiyo shakhsiyaadka iyo hay'adaha Soomaaliya. Ma jiraa wax gaar ah oo ku saabsan bixintayada oo aad jeclaan lahayd inaad wax badan ka ogaato?",
      images: [],
      links: [],
    },
  },
}

const welcomeMessage: WelcomeMessages = {
  en: "Hello! I'm your AI assistant. How can I help you today?",
  so: "Salaam! Waxaan ahay caawimaahaaga AI. Sideen kuu caawin karaa maanta?",
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [language, setLanguage] = useState<"en" | "so">("en")
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [soundsLoaded, setSoundsLoaded] = useState(false)
  const [userLanguage, setUserLanguage] = useState<"en" | "so">("en") // Track the user's detected language
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const receivedSoundRef = useRef<HTMLAudioElement>(null)
  const sentSoundRef = useRef<HTMLAudioElement>(null)

  // Check if sounds are loaded properly
  const checkSoundsLoaded = (): void => {
    if (receivedSoundRef.current && sentSoundRef.current) {
      setSoundsLoaded(true)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const receivedSoundElement = new Audio('/sounds/received.mp3')
      const sentSoundElement = new Audio('/sounds/sent.mp3')

      const onLoadedData = (): void => {
        if (receivedSoundElement.readyState >= 2 && sentSoundElement.readyState >= 2) {
          setSoundsLoaded(true)
        }
      }

      const onError = (e: ErrorEvent): void => {
        console.warn('Sound file not found, disabling sound effects:', e)
        setSoundEnabled(false)
        setSoundsLoaded(false)
      }

      receivedSoundElement.addEventListener('loadeddata', onLoadedData)
      sentSoundElement.addEventListener('loadeddata', onLoadedData)
      receivedSoundElement.addEventListener('error', onError)
      sentSoundElement.addEventListener('error', onError)

      receivedSoundRef.current = receivedSoundElement
      sentSoundRef.current = sentSoundElement

      return () => {
        receivedSoundElement.removeEventListener('loadeddata', onLoadedData)
        sentSoundElement.removeEventListener('loadeddata', onLoadedData)
        receivedSoundElement.removeEventListener('error', onError)
        sentSoundElement.removeEventListener('error', onError)
      }
    }
  }, [])

  // Auto-open chat with greeting when page loads
  useEffect(() => {
    // Wait a moment before showing the chat to let the page load
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Initial welcome message based on language
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMessage = {
        en: "👋 Hello! I'm Penn AI, your virtual assistant. I can answer questions about Penn Creative Lab, our courses, services, projects, and more. How can I help you today?",
        so: "👋 Salaan! Waxaan ahay Penn AI, caawiyahaaga virtual-ka ah. Waxaan ka jawaabi karaa su'aalaha ku saabsan Penn Creative Lab, koorsooyinkeenna, adeegyada, mashaariicda, iyo wax badan. Sideen kugu caawin karaa maanta?",
      }

      setMessages([
        {
          id: "welcome",
          content: { text: welcomeMessage[language], images: [], links: [] },
          role: "assistant",
          timestamp: new Date(),
        },
      ])

      // Play sound for welcome message if sounds are loaded
      playReceivedSound()
    }
  }, [language, messages.length])

  // Scroll to bottom of messages when new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus()
    }
  }, [isOpen, isMinimized])

  // Safe sound playing functions
  const playReceivedSound = () => {
    if (soundEnabled && soundsLoaded && receivedSoundRef.current) {
      receivedSoundRef.current.play().catch((err) => {
        console.warn("Could not play received sound:", err)
      })
    }
  }

  const playSentSound = () => {
    if (soundEnabled && soundsLoaded && sentSoundRef.current) {
      sentSoundRef.current.play().catch((err) => {
        console.warn("Could not play sent sound:", err)
      })
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "so" : "en"
    setLanguage(newLanguage)
    setUserLanguage(newLanguage) // Update user language preference when manually toggled
  }

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled)
  }

  const getResponse = (query: string, detectedLanguage: "en" | "so"): KnowledgeBaseResponse => {
    const normalizedQuery = query.toLowerCase().trim()
    const lang = detectedLanguage

    // Check for specific keywords in the query
    for (const [key, value] of Object.entries(knowledgeBase[lang])) {
      if (normalizedQuery.includes(key)) {
        return value
      }
    }

    // If no specific match is found, return the fallback response
    return knowledgeBase[lang].fallback
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: {
        text: input,
        images: [],
        links: []
      },
      role: "user",
      timestamp: new Date()
    }

    setMessages((prev: Message[]) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const detectedLanguage = isSomaliText(input) ? "so" : "en"
      const response = getResponse(input, detectedLanguage)

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: "assistant",
        timestamp: new Date()
      }

      setMessages((prev: Message[]) => [...prev, assistantMessage])
      if (soundEnabled && soundsLoaded) {
        playReceivedSound()
      }
    } catch (err: unknown) {
      console.error("Error getting response:", err)
      // Handle error appropriately
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Audio elements for sound effects */}
      <audio
        ref={receivedSoundRef}
        src="/sounds/received.mp3"
        preload="auto"
        onError={() => {
          console.warn("Failed to load received sound")
          setSoundEnabled(false)
          setSoundsLoaded(false)
        }}
      />
      <audio
        ref={sentSoundRef}
        src="/sounds/sent.mp3"
        preload="auto"
        onError={() => {
          console.warn("Failed to load sent sound")
          setSoundEnabled(false)
          setSoundsLoaded(false)
        }}
      />

      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={cn(
          "fixed z-50 flex items-center justify-center rounded-full shadow-lg transition-all duration-300",
          isOpen
            ? "bottom-[380px] right-6 h-10 w-10 bg-red-500 hover:bg-red-600"
            : "bottom-6 right-6 h-14 w-14 bg-[#01BABC] hover:bg-[#01BABC]/80",
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="h-5 w-5 text-white" /> : <MessageSquare className="h-6 w-6 text-white" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={cn(
            "fixed bottom-6 right-6 z-40 w-[350px] rounded-lg shadow-xl transition-all duration-300 overflow-hidden",
            isMinimized ? "h-14" : "h-[370px]",
          )}
        >
          {/* Chat Header */}
          <div className="flex h-14 items-center justify-between bg-[#01BABC] px-4">
            <div className="flex items-center">
              <MessageSquare className="mr-2 h-5 w-5 text-white" />
              <h3 className="font-medium text-white">
                {language === "en" ? "Penn AI Assistant" : "Caawiyaha Penn AI"}
              </h3>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleSound}
                className="rounded-full p-1.5 text-white hover:bg-white/10"
                aria-label={soundEnabled ? "Mute sound" : "Enable sound"}
              >
                {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </button>
              <button
                onClick={toggleLanguage}
                className="rounded-full p-1.5 text-white hover:bg-white/10"
                aria-label="Toggle language"
              >
                <Globe className="h-4 w-4" />
              </button>
              <button
                onClick={toggleMinimize}
                className="rounded-full p-1.5 text-white hover:bg-white/10"
                aria-label={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Container */}
              <div className="flex h-[260px] flex-col overflow-y-auto bg-white p-4 dark:bg-[#0c1e28]">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "mb-3 max-w-[85%] rounded-lg px-3 py-2",
                      message.role === "user"
                        ? "ml-auto bg-[#01BABC]/10 text-[#122C39] dark:text-white"
                        : "mr-auto bg-gray-100 text-[#122C39] dark:bg-[#122C39] dark:text-white",
                    )}
                  >
                    <p className="text-sm">{message.content.text}</p>

                    {/* Display images if available */}
                    {message.content.images && message.content.images.length > 0 && (
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {message.content.images.map((image, index) => (
                          <div key={index} className="relative h-24 w-full overflow-hidden rounded-md">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`Example image ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Display links if available */}
                    {message.content.links && message.content.links.length > 0 && (
                      <div className="mt-2 flex flex-col gap-1">
                        {message.content.links.map((link, index) => (
                          <Link
                            key={index}
                            href={link.url}
                            className="inline-flex items-center text-sm text-[#01BABC] hover:underline"
                          >
                            {link.text} <ExternalLink className="ml-1 h-3 w-3" />
                          </Link>
                        ))}
                      </div>
                    )}

                    <p className="mt-1 text-right text-xs text-gray-500 dark:text-gray-400">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                ))}
                {isLoading && (
                  <div className="mr-auto mb-3 flex max-w-[85%] items-center rounded-lg bg-gray-100 px-3 py-2 text-[#122C39] dark:bg-[#122C39] dark:text-white">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <p className="text-sm">{language === "en" ? "Thinking..." : "Waan ka fikiraa..."}</p>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form
                onSubmit={handleSubmit}
                className="flex h-[60px] items-center border-t border-gray-200 bg-white p-2 dark:border-gray-800 dark:bg-[#0c1e28]"
              >
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={language === "en" ? "Type a message..." : "Qor fariin..."}
                  className="flex-1 resize-none rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#01BABC] dark:border-gray-700 dark:text-white"
                  rows={1}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSubmit(e)
                    }
                  }}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="ml-2 h-9 w-9 rounded-full bg-[#01BABC] hover:bg-[#01BABC]/80"
                  disabled={isLoading || !input.trim()}
                >
                  <Send className="h-4 w-4 text-white" />
                </Button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  )
}
