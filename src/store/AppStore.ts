import { Nullable } from "interfaces/Types"

interface IAppStore {
    access_token: Nullable<string>
    setToken: (token: string) => void
    getAuthorizationHeader: () => {
        headers: { [key: string]: string }
    }
    logout: () => void
}

class AppStore implements IAppStore {
    access_token: Nullable<string>
    id: Nullable<string>

    constructor() {
        this.access_token = window.localStorage.getItem('token')
        this.id = window.localStorage.getItem('id')
    }

    public setToken(token: string) {
        window.localStorage.setItem('token', JSON.stringify(token))
        this.access_token = token
    }

    public setId(id: string) {
        window.localStorage.setItem('id', JSON.stringify(id))
        this.id = id
    }

    public getAuthorizationHeader() {
        return ({
            headers: {
                'Authorization': `Bearer ${this.access_token?.substring(1, this.access_token.length - 1)}`
            }
        })
    }

    public logout() {
        window.localStorage.removeItem('token')
        this.access_token = null
    }
}

export default new AppStore()