import IUser, { UserRole } from "interfaces/IUser"
import { Nullable } from "interfaces/Types"
import { makeAutoObservable } from "mobx"

interface IUserStore {
    user: Nullable<IUser>,
    clearUserData: () => void,
    setUserData: (user: IUser) => void
}

class UserStore implements IUserStore {
    user: Nullable<IUser>

    constructor() {
        makeAutoObservable(this)
        this.user = null
    }

    public clearUserData() {
        this.user = null
    }

    public setUserData(user: IUser) {
        this.user = user
    }

}

export default new UserStore()