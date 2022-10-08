import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import UserStore from 'store/UserStore'

function NotLoggedRedirect() {
    const location = useLocation()

    return (
        <>{!UserStore.user && location.pathname !== '/login' && <Navigate replace to='/login' />}</>
    )
}

export default NotLoggedRedirect