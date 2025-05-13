"use client"

import { useState, useEffect } from "react"
import { Theme } from "@/models/Theme"
import { Plugin } from "@/models/Plugin"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trash2, Edit2, Plus } from "lucide-react"

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("themes")
    const [themes, setThemes] = useState<Theme[]>([])
    const [plugins, setPlugins] = useState<Plugin[]>([])
    const [editingTheme, setEditingTheme] = useState<Theme | null>(null)
    const [editingPlugin, setEditingPlugin] = useState<Plugin | null>(null)
    const [newTheme, setNewTheme] = useState<Partial<Theme>>({
        title: "",
        description: "",
        category: "",
        type: [],
        image: "",
        previewLink: "",
        downloadLink: "",
        features: [],
        badges: []
    })
    const [newPlugin, setNewPlugin] = useState<Partial<Plugin>>({
        name: "",
        description: "",
        category: "",
        image: "",
        version: "",
        rating: 0,
        viewUrl: "",
        downloadUrl: "",
        tags: []
    })

    useEffect(() => {
        fetchThemes()
        fetchPlugins()
    }, [])

    const fetchThemes = async () => {
        try {
            const response = await fetch("/api/themes")
            const data = await response.json()
            setThemes(data)
        } catch (error) {
            console.error("Error fetching themes:", error)
        }
    }

    const fetchPlugins = async () => {
        try {
            const response = await fetch("/api/plugins")
            const data = await response.json()
            setPlugins(data)
        } catch (error) {
            console.error("Error fetching plugins:", error)
        }
    }

    const handleAddTheme = async () => {
        try {
            const response = await fetch("/api/themes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newTheme)
            })
            const data = await response.json()
            setThemes([...themes, data])
            setNewTheme({
                title: "",
                description: "",
                category: "",
                type: [],
                image: "",
                previewLink: "",
                downloadLink: "",
                features: [],
                badges: []
            })
        } catch (error) {
            console.error("Error adding theme:", error)
        }
    }

    const handleAddPlugin = async () => {
        try {
            const response = await fetch("/api/plugins", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newPlugin)
            })
            const data = await response.json()
            setPlugins([...plugins, data])
            setNewPlugin({
                name: "",
                description: "",
                category: "",
                image: "",
                version: "",
                rating: 0,
                viewUrl: "",
                downloadUrl: "",
                tags: []
            })
        } catch (error) {
            console.error("Error adding plugin:", error)
        }
    }

    const handleUpdateTheme = async () => {
        if (!editingTheme) return
        try {
            const response = await fetch("/api/themes", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editingTheme)
            })
            const data = await response.json()
            setThemes(themes.map(theme => theme._id === data._id ? data : theme))
            setEditingTheme(null)
        } catch (error) {
            console.error("Error updating theme:", error)
        }
    }

    const handleUpdatePlugin = async () => {
        if (!editingPlugin) return
        try {
            const response = await fetch("/api/plugins", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editingPlugin)
            })
            const data = await response.json()
            setPlugins(plugins.map(plugin => plugin._id === data._id ? data : plugin))
            setEditingPlugin(null)
        } catch (error) {
            console.error("Error updating plugin:", error)
        }
    }

    const handleDeleteTheme = async (id: string) => {
        try {
            await fetch("/api/themes", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ _id: id })
            })
            setThemes(themes.filter(theme => theme._id !== id))
        } catch (error) {
            console.error("Error deleting theme:", error)
        }
    }

    const handleDeletePlugin = async (id: string) => {
        try {
            await fetch("/api/plugins", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ _id: id })
            })
            setPlugins(plugins.filter(plugin => plugin._id !== id))
        } catch (error) {
            console.error("Error deleting plugin:", error)
        }
    }

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                    <TabsTrigger value="themes">Themes</TabsTrigger>
                    <TabsTrigger value="plugins">Plugins</TabsTrigger>
                </TabsList>

                <TabsContent value="themes">
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>Add New Theme</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        id="title"
                                        value={newTheme.title}
                                        onChange={(e) => setNewTheme({ ...newTheme, title: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        id="description"
                                        value={newTheme.description}
                                        onChange={(e) => setNewTheme({ ...newTheme, description: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Input
                                        id="category"
                                        value={newTheme.category}
                                        onChange={(e) => setNewTheme({ ...newTheme, category: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="type">Type</Label>
                                    <Input
                                        id="type"
                                        value={(newTheme.type || []).join(", ")}
                                        onChange={(e) => setNewTheme({ ...newTheme, type: e.target.value.split(",").map(t => t.trim()) })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="image">Image URL</Label>
                                    <Input
                                        id="image"
                                        value={newTheme.image}
                                        onChange={(e) => setNewTheme({ ...newTheme, image: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="previewLink">Preview Link</Label>
                                    <Input
                                        id="previewLink"
                                        value={newTheme.previewLink}
                                        onChange={(e) => setNewTheme({ ...newTheme, previewLink: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="downloadLink">Download Link</Label>
                                    <Input
                                        id="downloadLink"
                                        value={newTheme.downloadLink}
                                        onChange={(e) => setNewTheme({ ...newTheme, downloadLink: e.target.value })}
                                    />
                                </div>
                                <Button onClick={handleAddTheme}>Add Theme</Button>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="grid gap-4">
                        {themes.map((theme) => (
                            <Card key={theme._id || `theme-${Math.random()}`}>
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-semibold">{theme.title}</h3>
                                            <p className="text-gray-600 dark:text-gray-400">{theme.description}</p>
                                            <div className="mt-2 flex gap-2">
                                                <Badge>{theme.category}</Badge>
                                                <Badge>{Array.isArray(theme.type) ? theme.type.join(", ") : theme.type || ""}</Badge>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => setEditingTheme(theme)}
                                            >
                                                <Edit2 className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => handleDeleteTheme(theme._id!)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="plugins">
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>Add New Plugin</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        value={newPlugin.name}
                                        onChange={(e) => setNewPlugin({ ...newPlugin, name: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        id="description"
                                        value={newPlugin.description}
                                        onChange={(e) => setNewPlugin({ ...newPlugin, description: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Input
                                        id="category"
                                        value={newPlugin.category}
                                        onChange={(e) => setNewPlugin({ ...newPlugin, category: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="version">Version</Label>
                                    <Input
                                        id="version"
                                        value={newPlugin.version}
                                        onChange={(e) => setNewPlugin({ ...newPlugin, version: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="rating">Rating</Label>
                                    <Input
                                        id="rating"
                                        type="number"
                                        min="0"
                                        max="5"
                                        step="0.1"
                                        value={newPlugin.rating}
                                        onChange={(e) => setNewPlugin({ ...newPlugin, rating: parseFloat(e.target.value) })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="image">Image URL</Label>
                                    <Input
                                        id="image"
                                        value={newPlugin.image}
                                        onChange={(e) => setNewPlugin({ ...newPlugin, image: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="viewUrl">View URL</Label>
                                    <Input
                                        id="viewUrl"
                                        value={newPlugin.viewUrl}
                                        onChange={(e) => setNewPlugin({ ...newPlugin, viewUrl: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="downloadUrl">Download URL</Label>
                                    <Input
                                        id="downloadUrl"
                                        value={newPlugin.downloadUrl}
                                        onChange={(e) => setNewPlugin({ ...newPlugin, downloadUrl: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="tags">Tags (comma-separated)</Label>
                                    <Input
                                        id="tags"
                                        value={newPlugin.tags?.join(", ")}
                                        onChange={(e) => setNewPlugin({ ...newPlugin, tags: e.target.value.split(",").map(tag => tag.trim()) })}
                                    />
                                </div>
                                <Button onClick={handleAddPlugin}>Add Plugin</Button>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="grid gap-4">
                        {plugins.map((plugin) => (
                            <Card key={plugin._id || `plugin-${Math.random()}`}>
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-semibold">{plugin.name}</h3>
                                            <p className="text-gray-600 dark:text-gray-400">{plugin.description}</p>
                                            <div className="mt-2 flex gap-2">
                                                <Badge>{plugin.category}</Badge>
                                                <Badge>v{plugin.version}</Badge>
                                                <Badge>★ {plugin.rating}</Badge>
                                                {plugin.tags?.map((tag, index) => (
                                                    <Badge key={`${plugin._id}-tag-${index}`} variant="secondary">{tag}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => setEditingPlugin(plugin)}
                                            >
                                                <Edit2 className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => handleDeletePlugin(plugin._id!)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
} 