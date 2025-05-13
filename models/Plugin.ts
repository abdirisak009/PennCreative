export interface Plugin {
    _id?: string
    id?: string
    name: string
    description: string
    category: string
    image: string
    version: string
    rating: number
    updatedAt?: Date
    viewUrl: string
    downloadUrl: string
    tags: string[]
    createdAt?: Date
} 