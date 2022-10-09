import IUser from "interfaces/IUser"
import { Nullable } from "interfaces/Types"
import { makeAutoObservable } from "mobx"

interface IUserStore {
    id: Nullable<string>,
    user: Nullable<IUser>,
    clearUserData: () => void,
    setUserData: (user: IUser) => void
    setId: (id: string) => void
}

class UserStore implements IUserStore {
    user: Nullable<IUser>
    id: Nullable<string>

    constructor() {
        makeAutoObservable(this)
        this.user = null
        this.id = null
    }

    public clearUserData() {
        this.user = null
    }

    public setUserData(user: IUser) {
        this.user = user
    }

    public setId(id: string) {
        this.id = id
    }

}

export default new UserStore()