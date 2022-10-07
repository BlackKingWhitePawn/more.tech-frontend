import IAlert from "interfaces/IAlert"

interface IAlertStore {
    alerts: IAlert[]
    closeAlert: (id: String) => void
    closeAllAlerts: () => void
    setAlert: (alert: IAlert) => void
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

    public setAlert(alert: IAlert) {
        this.alerts.push(alert)
    }
}

export default new AlertStore()