import React, { useEffect } from 'react'
import { Navigate, useLocation } from "react-router-dom";
import { observer } from "mobx-react"
import UserStore from 'store/UserStore';
import { NotLoggedRedirect } from 'components';

const Root = observer(() => {
    return (
        <>
            <NotLoggedRedirect />
        </>
    )
})

export default Root