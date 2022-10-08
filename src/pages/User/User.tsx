import axios from 'axios'
import { Block, Layout } from 'components'
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
        <Layout>
            <aside>
                <Block >
                    profile
                </Block>
                <Block >
                    cards
                </Block>
                <Block >
                    friends
                </Block>
            </aside>
            <main>
                <Block >
                    info
                </Block>
                <div className="row">
                    <Block >
                        achivements
                    </Block>
                    <Block >
                        inventory
                    </Block>
                </div>
                <div className="row">
                    <Block >
                        events
                    </Block>
                </div>
                <div className="row">
                    <Block >
                        events
                    </Block>
                </div>
            </main>
        </Layout>
    )
})

export default User