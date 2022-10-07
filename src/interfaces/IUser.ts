import { type } from "os";

enum UserRole {
    default,
    admin,
    moderator,
    leader
}

interface IUser {
    role: UserRole,
    name: String,
    login: String
}

export default IUser
export { UserRole }