// enum UserRole {
//     default,
//     admin,
//     moderator,
//     leader
// }

interface IUser {
    id: string
    // role: UserRole,
    name: string
    login: string
    is_admin: boolean
    is_editor: boolean
    is_lead: boolean
    description: string
    level: number
    experience: 0
    equipment: any
    case_count: 0
}

export default IUser
// export { UserRole }