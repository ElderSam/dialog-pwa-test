interface Friends {
    _id: string
    index: number
    picture: string
    age: number
    eyeColor: string
    name: string
    company: string
    email: string
    phone: string
}

export interface User {
    _id: string
    index: number
    picture: string
    age: number
    eyeColor: string
    name: string
    company: string
    email: string
    phone: string
    friends: [Friends]
    greeting: string
}