import IAlert from "interfaces/IAlert"

interface IAlertStore {
    alerts: IAlert[]
    closeAlert: (id: String) => void
    closeAllAlerts: () => void
}

class AlertStore implements IAlertStore {
    alerts: IAlert[]

    constructor() {
        this.alerts = []
    }

    public closeAlert(id: String) {
        this.alerts = this.alerts.filter(a => a?.id !== id)
    }

    public closeAllAlerts() {
        this.alerts = []
    }
}

export default new AlertStore()