import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { Theme } from "@/models/Theme"
import { ObjectId } from "mongodb"

export async function GET() {
    try {
        console.log("Connecting to MongoDB...")
        const client = await clientPromise
        console.log("Connected to MongoDB")

        const db = client.db("PennDb")
        console.log("Using database: PennDb")

        const themes = await db.collection("themes").find({}).toArray()
        console.log(`Found ${themes.length} themes in database`)

        if (themes.length === 0) {
            console.log("No themes found, initializing sample themes...")
            await initializeThemes(db)
            const updatedThemes = await db.collection("themes").find({}).toArray()
            console.log(`Initialized ${updatedThemes.length} sample themes`)
            return NextResponse.json(updatedThemes)
        }

        return NextResponse.json(themes)
    } catch (error) {
        console.error("Error in GET /api/themes:", error)
        return NextResponse.json(
            { error: "Failed to fetch themes", details: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        )
    }
}

async function initializeThemes(db: any) {
    try {
        const sampleThemes = [
            {
                title: "RestoPro",
                description: "Modern restaurant and food delivery WordPress theme with online ordering system.",
                category: "Restaurant",
                type: ["restaurant"],
                image: "/images/restopro-theme.png",
                badges: ["New", "Popular"],
                features: [
                    "Online Ordering",
                    "Table Reservations",
                    "Menu Management",
                    "Delivery Integration"
                ],
                downloads: 3200,
                rating: 4.8,
                previewLink: "#",
                downloadLink: "#",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "PortfolioPro",
                description: "Creative portfolio WordPress theme for designers and artists.",
                category: "Portfolio",
                type: ["portfolio"],
                image: "/images/portfoliopro-theme.png",
                badges: ["Featured"],
                features: [
                    "Gallery Layouts",
                    "Project Showcase",
                    "Client Testimonials",
                    "Portfolio Filtering"
                ],
                downloads: 2100,
                rating: 4.7,
                previewLink: "#",
                downloadLink: "#",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "ShopMaster",
                description: "Powerful e-commerce WordPress theme for online stores and marketplaces.",
                category: "Ecommerce",
                type: ["ecommerce"],
                image: "/images/shopmaster-theme.png",
                badges: ["Featured", "Popular"],
                features: [
                    "WooCommerce Integration",
                    "Multiple Shop Layouts",
                    "Product Quick View",
                    "Advanced Filtering"
                ],
                downloads: 4500,
                rating: 4.9,
                previewLink: "#",
                downloadLink: "#",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "NGOConnect",
                description: "Non-profit and charity WordPress theme for organizations and causes.",
                category: "NGO",
                type: ["ngo"],
                image: "/images/ngoconnect-theme.png",
                badges: ["New"],
                features: [
                    "Donation System",
                    "Event Management",
                    "Volunteer Portal",
                    "Cause Showcase"
                ],
                downloads: 1200,
                rating: 4.6,
                previewLink: "#",
                downloadLink: "#",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "BusinessPro",
                description: "Professional business WordPress theme for corporate websites.",
                category: "Business",
                type: ["business"],
                image: "/images/businesspro-theme.png",
                badges: ["Popular"],
                features: [
                    "Team Management",
                    "Service Showcase",
                    "Case Studies",
                    "Client Testimonials"
                ],
                downloads: 3800,
                rating: 4.8,
                previewLink: "#",
                downloadLink: "#",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]

        await db.collection("themes").insertMany(sampleThemes)
        console.log("Sample themes added to database")
    } catch (error) {
        console.error("Error initializing themes:", error)
        throw error
    }
}

export async function POST(request: Request) {
    try {
        const client = await clientPromise
        const db = client.db("PennDb")
        const theme = await request.json()

        // Add timestamps
        theme.createdAt = new Date()
        theme.updatedAt = new Date()

        // Insert the theme directly without using a counter
        const result = await db.collection("themes").insertOne(theme)

        if (!result.acknowledged) {
            throw new Error("Failed to insert theme")
        }

        const insertedTheme = await db.collection("themes").findOne({ _id: result.insertedId })

        if (!insertedTheme) {
            throw new Error("Failed to retrieve inserted theme")
        }

        return NextResponse.json(insertedTheme)
    } catch (error) {
        console.error("Error creating theme:", error)
        return NextResponse.json(
            { error: "Failed to create theme", details: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        )
    }
}

export async function PUT(request: Request) {
    try {
        const theme: Theme = await request.json()
        const client = await clientPromise
        const db = client.db("PennDb")

        theme.updatedAt = new Date()

        const result = await db.collection("themes").findOneAndUpdate(
            { _id: new ObjectId(theme._id) },
            { $set: theme },
            { returnDocument: "after" }
        )

        if (!result || !result.value) {
            throw new Error("Failed to update theme")
        }

        return NextResponse.json(result.value)
    } catch (error) {
        console.error("Error updating theme:", error)
        return NextResponse.json(
            { error: "Failed to update theme", details: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        )
    }
}

export async function DELETE(request: Request) {
    try {
        const { _id } = await request.json()
        const client = await clientPromise
        const db = client.db("PennDb")

        await db.collection("themes").deleteOne({ _id: new ObjectId(_id) })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Error deleting theme:", error)
        return NextResponse.json(
            { error: "Failed to delete theme", details: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        )
    }
} 