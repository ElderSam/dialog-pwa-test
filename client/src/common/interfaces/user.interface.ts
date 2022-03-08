interface Friends {
    _id: String
    index: number
    picture: String
    age: number
    eyeColor: String
    name: String
    company: String
    email: String
    phone: String
}

export interface User {
    _id: String
    index: number
    picture: String
    age: number
    eyeColor: String
    name: String
    company: String
    email: String
    phone: String
    friends: [Friends]
    greeting: String
}