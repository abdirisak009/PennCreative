import { Heart, Shirt, Stethoscope } from "lucide-react"

// BetaCare Project Details
export const betaCareProject = {
  id: "betacare",
  title: "Beta Care Diagnostic Ltd",
  description:
    "Complete brand identity for a healthcare diagnostic center, including logo, color palette, and brand applications.",
  longDescription:
    "Beta Care Diagnostic Ltd needed a professional brand identity that would establish them as a trusted healthcare provider in the diagnostic services sector. The brand needed to convey professionalism, care, and cutting-edge medical expertise.",
  image: "/images/betacare-logo-new.png",
  icon: <Heart className="h-5 w-5 text-[#01BABC]" />,
  tags: ["Healthcare", "Logo Design", "Brand Identity", "Visual Design"],
  link: "/projects/betacare",
  featured: true,
  images: [{ src: "/images/betacare-logo-new.png", alt: "Beta Care Diagnostic Ltd logo" }],
  mockups: [
    { src: "/images/betacare-logo-new.png", alt: "Beta Care Diagnostic Ltd logo" },
    { src: "/images/betacare-logo-main.png", alt: "Beta Care Diagnostic Ltd main logo" },
    { src: "/images/betacare-logo-variant.png", alt: "Beta Care Diagnostic Ltd logo variant" },
  ],
  colorPalette: [
    { name: "Primary Blue", hex: "#21409A" },
    { name: "Primary Teal", hex: "#02918A" },
    { name: "Light Gray", hex: "#E5E5E5" },
    { name: "White", hex: "#FFFFFF" },
  ],
}

// HugoDress Project Details
export const hugoDressProject = {
  id: "hugodress",
  title: "HugoDress Fashion Brand",
  description:
    "Vibrant brand identity for a fashion e-commerce platform, featuring a bold logo design and energetic color palette.",
  longDescription:
    "HugoDress approached us to create a vibrant, fashion-forward brand identity for their new e-commerce platform specializing in women's dresses. The brand needed to appeal to a young, style-conscious audience while conveying quality and sophistication.",
  image: "/images/hugodress-logo-embossed.png",
  icon: <Shirt className="h-5 w-5 text-[#01BABC]" />,
  tags: ["Fashion", "Logo Design", "Brand Identity", "E-commerce"],
  link: "/projects/hugodress",
  featured: true,
  images: [{ src: "/images/hugodress-logo-embossed.png", alt: "HugoDress embossed logo" }],
  mockups: [
    { src: "/images/hugodress-logo-embossed.png", alt: "HugoDress embossed logo" },
    { src: "/images/hugodress-logo-main.png", alt: "HugoDress main logo" },
    { src: "/images/hugodress-screenshot.png", alt: "HugoDress website screenshot" },
  ],
  colorPalette: [
    { name: "Primary Pink", hex: "#E91E63" },
    { name: "Primary Black", hex: "#000000" },
    { name: "Light Gray", hex: "#E5E5E5" },
    { name: "White", hex: "#FFFFFF" },
  ],
}

// Dabiib Soft Project Details
export const dabiibSoftProject = {
  id: "dabiib-soft",
  title: "Dabiib Soft",
  description:
    "Comprehensive healthcare management system designed specifically for polyclinics with patient registration, medical records, and pharmacy management.",
  longDescription:
    "Dabiib Soft is a system designed specifically for polyclinics, offering a wide range of features including patient registration, doctor and staff management, medical history tracking, pharmacy sales and inventory control, and accounting and billing modules.",
  image: "/images/dabiib-soft.jpeg",
  icon: <Stethoscope className="h-5 w-5 text-[#01BABC]" />,
  tags: ["Healthcare", "Management System", "Pharmacy", "Accounting"],
  link: "/projects/dabiib-soft",
  featured: true,
  images: [{ src: "/images/dabiib-soft.jpeg", alt: "Dabiib Soft Healthcare Management System" }],
  mockups: [{ src: "/images/dabiib-soft.jpeg", alt: "Dabiib Soft Healthcare Management System" }],
  colorPalette: [
    { name: "Primary Teal", hex: "#01BABC" },
    { name: "Dark Blue", hex: "#0C1E28" },
    { name: "Light Teal", hex: "#4FD1D9" },
    { name: "White", hex: "#FFFFFF" },
  ],
}
