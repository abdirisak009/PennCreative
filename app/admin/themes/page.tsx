"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Plus, Edit2, Trash2, Save, X } from "lucide-react"
import { Theme } from "@/models/Theme"
import { toast } from "sonner"

export default function AdminThemesPage() {
    const [themes, setThemes] = useState<Theme[]>([])
    const [editingTheme, setEditingTheme] = useState<Theme | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchThemes()
    }, [])

    const fetchThemes = async () => {
        try {
            const response = await fetch("/api/themes")
            const data = await response.json()
            setThemes(data)
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching themes:", error)
            toast.error("Failed to fetch themes")
            setIsLoading(false)
        }
    }

    const handleAddTheme = () => {
        const newTheme: Theme = {
            title: "",
            category: "",
            type: [],
            description: "",
            image: "",
            features: [],
            rating: 0,
            downloads: 0,
            previewLink: "",
            downloadLink: "",
            badges: [],
        }
        setEditingTheme(newTheme)
    }

    const handleEditTheme = (theme: Theme) => {
        setEditingTheme({ ...theme })
    }

    const handleDeleteTheme = async (id: string) => {
        if (!confirm("Are you sure you want to delete this theme?")) return

        try {
            const response = await fetch(`/api/themes/${id}`, {
                method: "DELETE",
            })

            if (response.ok) {
                setThemes(themes.filter((theme) => theme._id !== id))
                toast.success("Theme deleted successfully")
            } else {
                throw new Error("Failed to delete theme")
            }
        } catch (error) {
            console.error("Error deleting theme:", error)
            toast.error("Failed to delete theme")
        }
    }

    const handleSaveTheme = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!editingTheme) return

        try {
            const method = editingTheme._id ? "PUT" : "POST"
            const url = editingTheme._id ? `/api/themes/${editingTheme._id}` : "/api/themes"

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editingTheme),
            })

            if (response.ok) {
                const savedTheme = await response.json()
                if (editingTheme._id) {
                    setThemes(themes.map((theme) => (theme._id === savedTheme._id ? savedTheme : theme)))
                } else {
                    setThemes([...themes, savedTheme])
                }
                setEditingTheme(null)
                toast.success("Theme saved successfully")
            } else {
                throw new Error("Failed to save theme")
            }
        } catch (error) {
            console.error("Error saving theme:", error)
            toast.error("Failed to save theme")
        }
    }

    if (isLoading) {
        return <div className="p-8">Loading...</div>
    }

    return (
        <div className="container mx-auto p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Manage Themes</h1>
                <Button onClick={handleAddTheme}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Theme
                </Button>
            </div>

            {editingTheme && (
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <form onSubmit={handleSaveTheme} className="space-y-4">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">
                                    {editingTheme._id ? "Edit Theme" : "Add New Theme"}
                                </h2>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    onClick={() => setEditingTheme(null)}
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        id="title"
                                        value={editingTheme.title}
                                        onChange={(e) =>
                                            setEditingTheme({ ...editingTheme, title: e.target.value })
                                        }
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Input
                                        id="category"
                                        value={editingTheme.category}
                                        onChange={(e) =>
                                            setEditingTheme({ ...editingTheme, category: e.target.value })
                                        }
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="type">Type (comma-separated)</Label>
                                    <Input
                                        id="type"
                                        value={editingTheme.type.join(", ")}
                                        onChange={(e) =>
                                            setEditingTheme({
                                                ...editingTheme,
                                                type: e.target.value.split(",").map((t) => t.trim()),
                                            })
                                        }
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="image">Image URL</Label>
                                    <Input
                                        id="image"
                                        value={editingTheme.image}
                                        onChange={(e) =>
                                            setEditingTheme({ ...editingTheme, image: e.target.value })
                                        }
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="rating">Rating</Label>
                                    <Input
                                        id="rating"
                                        type="number"
                                        step="0.1"
                                        min="0"
                                        max="5"
                                        value={editingTheme.rating}
                                        onChange={(e) =>
                                            setEditingTheme({
                                                ...editingTheme,
                                                rating: parseFloat(e.target.value),
                                            })
                                        }
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="downloads">Downloads</Label>
                                    <Input
                                        id="downloads"
                                        type="number"
                                        value={editingTheme.downloads}
                                        onChange={(e) =>
                                            setEditingTheme({
                                                ...editingTheme,
                                                downloads: parseInt(e.target.value),
                                            })
                                        }
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="previewLink">Preview Link</Label>
                                    <Input
                                        id="previewLink"
                                        value={editingTheme.previewLink}
                                        onChange={(e) =>
                                            setEditingTheme({ ...editingTheme, previewLink: e.target.value })
                                        }
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="downloadLink">Download Link</Label>
                                    <Input
                                        id="downloadLink"
                                        value={editingTheme.downloadLink}
                                        onChange={(e) =>
                                            setEditingTheme({ ...editingTheme, downloadLink: e.target.value })
                                        }
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="badges">Badges (comma-separated)</Label>
                                    <Input
                                        id="badges"
                                        value={editingTheme.badges.join(", ")}
                                        onChange={(e) =>
                                            setEditingTheme({
                                                ...editingTheme,
                                                badges: e.target.value.split(",").map((b) => b.trim()),
                                            })
                                        }
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="features">Features (comma-separated)</Label>
                                    <Input
                                        id="features"
                                        value={editingTheme.features.join(", ")}
                                        onChange={(e) =>
                                            setEditingTheme({
                                                ...editingTheme,
                                                features: e.target.value.split(",").map((f) => f.trim()),
                                            })
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    value={editingTheme.description}
                                    onChange={(e) =>
                                        setEditingTheme({ ...editingTheme, description: e.target.value })
                                    }
                                    required
                                />
                            </div>

                            <div className="flex justify-end gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setEditingTheme(null)}
                                >
                                    Cancel
                                </Button>
                                <Button type="submit">
                                    <Save className="mr-2 h-4 w-4" />
                                    Save Theme
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {themes.map((theme) => (
                    <Card key={theme._id} className="overflow-hidden">
                        <CardContent className="p-6">
                            <div className="aspect-video relative mb-4">
                                <img
                                    src={theme.image}
                                    alt={theme.title}
                                    className="object-cover w-full h-full rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{theme.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">{theme.category}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {theme.badges.map((badge, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleEditTheme(theme)}
                                >
                                    <Edit2 className="h-4 w-4 mr-2" />
                                    Edit
                                </Button>
                                <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => handleDeleteTheme(theme._id!)}
                                >
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Delete
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
} 