import { Nullable } from "interfaces/Types"

interface IAppStore {
    access_token: Nullable<string>
    setToken: (token: string) => void
    getAuthorizationHeader: () => {
        [key: string]: string
    }
    logout: () => void
}

class AppStore implements IAppStore {
    access_token: Nullable<string>

    constructor() {
        this.access_token = window.localStorage.getItem('token')
    }

    public setToken(token: string) {
        window.localStorage.setItem('token', JSON.stringify(token))
        this.access_token = token
    }

    public getAuthorizationHeader() {
        return {
            'Authorization': `Bearer ${window.localStorage.getItem('token')}`
        }
    }

    public logout() {
        window.localStorage.removeItem('token')
        this.access_token = null
    }
}

export default new AppStore()