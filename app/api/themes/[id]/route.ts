import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"
import { Theme } from "@/models/Theme"

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const client = await clientPromise
        const db = client.db("PennDb")
        const theme = await db.collection("themes").findOne({ _id: new ObjectId(params.id) })

        if (!theme) {
            return NextResponse.json({ error: "Theme not found" }, { status: 404 })
        }

        return NextResponse.json(theme)
    } catch (error) {
        console.error("Error fetching theme:", error)
        return NextResponse.json({ error: "Failed to fetch theme" }, { status: 500 })
    }
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const theme: Theme = await request.json()
        const client = await clientPromise
        const db = client.db("PennDb")

        // Update timestamp
        theme.updatedAt = new Date()

        const result = await db.collection("themes").findOneAndUpdate(
            { _id: new ObjectId(params.id) },
            { $set: theme },
            { returnDocument: "after" }
        )

        if (!result.value) {
            return NextResponse.json({ error: "Theme not found" }, { status: 404 })
        }

        return NextResponse.json(result.value)
    } catch (error) {
        console.error("Error updating theme:", error)
        return NextResponse.json({ error: "Failed to update theme" }, { status: 500 })
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const client = await clientPromise
        const db = client.db("PennDb")
        const result = await db.collection("themes").deleteOne({ _id: new ObjectId(params.id) })

        if (result.deletedCount === 0) {
            return NextResponse.json({ error: "Theme not found" }, { status: 404 })
        }

        return NextResponse.json({ message: "Theme deleted successfully" })
    } catch (error) {
        console.error("Error deleting theme:", error)
        return NextResponse.json({ error: "Failed to delete theme" }, { status: 500 })
    }
} 