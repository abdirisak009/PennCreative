import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { Plugin } from "@/models/Plugin"

export async function GET() {
    try {
        const client = await clientPromise
        const db = client.db("PennDb")
        const plugins = await db.collection("plugins").find({}).toArray()
        return NextResponse.json(plugins)
    } catch (error) {
        console.error("Error fetching plugins:", error)
        return NextResponse.json({ error: "Failed to fetch plugins" }, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const plugin: Plugin = await request.json()
        const client = await clientPromise
        const db = client.db("PennDb")

        // Get the next sequence number
        const counter = await db.collection("counters").findOneAndUpdate(
            { _id: "pluginId" },
            { $inc: { seq: 1 } },
            { upsert: true, returnDocument: "after" }
        )

        // Add timestamps and auto-incremented ID
        plugin.createdAt = new Date()
        plugin.updatedAt = new Date()
        plugin.id = `plugin-${counter.value?.seq || 1}`

        const result = await db.collection("plugins").insertOne(plugin)
        const insertedPlugin = await db.collection("plugins").findOne({ _id: result.insertedId })

        return NextResponse.json(insertedPlugin)
    } catch (error) {
        console.error("Error creating plugin:", error)
        return NextResponse.json({ error: "Failed to create plugin" }, { status: 500 })
    }
}

export async function PUT(request: Request) {
    try {
        const plugin: Plugin = await request.json()
        const client = await clientPromise
        const db = client.db("PennDb")

        plugin.updatedAt = new Date()

        const result = await db.collection("plugins").findOneAndUpdate(
            { _id: plugin._id },
            { $set: plugin },
            { returnDocument: "after" }
        )

        return NextResponse.json(result.value)
    } catch (error) {
        console.error("Error updating plugin:", error)
        return NextResponse.json({ error: "Failed to update plugin" }, { status: 500 })
    }
}

export async function DELETE(request: Request) {
    try {
        const { _id } = await request.json()
        const client = await clientPromise
        const db = client.db("PennDb")

        await db.collection("plugins").deleteOne({ _id })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Error deleting plugin:", error)
        return NextResponse.json({ error: "Failed to delete plugin" }, { status: 500 })
    }
} 