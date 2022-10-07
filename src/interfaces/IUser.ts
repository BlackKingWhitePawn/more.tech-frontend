// enum UserRole {
//     default,
//     admin,
//     moderator,
//     leader
// }

interface IUser {
    // role: UserRole,
    name: String,
    login: String,
    isAdmin: boolean,
    isEditor: boolean,
    isLeader: boolean
}

export default IUser
// export { UserRole }