// enum UserRole {
//     default,
//     admin,
//     moderator,
//     leader
// }

interface IUser {
    // role: UserRole,
    name: string,
    login: string,
    isAdmin: boolean,
    isEditor: boolean,
    isLeader: boolean
}

export default IUser
// export { UserRole }