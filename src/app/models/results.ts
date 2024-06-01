export interface Results {
    id: number
    name: string
    status: string
    species: string
    type: string
    created: string
    gender: string
    image: string
    url: string
    location: {
        name: string
        url: string
    }
    origin: {
        name: string
        url: string
    }
    episode: []
}