import React, { useEffect } from 'react'
import { Navigate, useLocation } from "react-router-dom";
import { observer } from "mobx-react"
import UserStore from 'store/UserStore';

const Root = observer(() => {
    const location = useLocation()

    return (
        <>
            {location.pathname === '/' && !UserStore.user && <Navigate to={'/login'} />}
            <div>Root</div>
        </>
    )
})

export default Root