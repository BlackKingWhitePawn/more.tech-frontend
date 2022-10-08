import { observer } from 'mobx-react'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import AppStore from 'store/AppStore'
import UserStore from 'store/UserStore'

const NotLoggedRedirect = observer(() => {
    const location = useLocation()

    return (
        <>{!AppStore.access_token && !['/login', '/registration'].includes(location.pathname) && <Navigate replace to='/login' />}</>
    )
})

export default NotLoggedRedirect