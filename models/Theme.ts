export interface Theme {
    _id?: string
    id?: string
    title: string
    category: string
    type: string[]
    description: string
    image: string
    features: string[]
    rating: number
    downloads: number
    previewLink: string
    downloadLink: string
    badges: string[]
    createdAt?: Date
    updatedAt?: Date
} 