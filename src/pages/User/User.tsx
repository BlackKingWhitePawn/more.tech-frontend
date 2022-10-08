import axios from 'axios'
import Urls from 'constants/Urls'
import IUser from 'interfaces/IUser'
import { observer } from 'mobx-react'
import React, { FC, useEffect, useState } from 'react'
import AlertStore from 'store/AlertStore'

const User: FC = observer(() => {
    const [user, setUser] = useState<IUser>()

    useEffect(() => {
        axios
            .get(Urls.user(1))
            .then(res => setUser(res.data))
            .catch(err => AlertStore.setAlert({
                id: '21',
                title: 'Ошибка загрузки пользователя',
                description: 'Описание'
            }))
    }, [])


    return (
        <div>{user?.name}</div>
    )
})

export default User