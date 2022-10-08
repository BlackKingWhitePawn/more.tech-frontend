import axios from 'axios'
import { Block, ButtonIcon, Layout, NotLoggedRedirect } from 'components'
import Urls from 'constants/Urls'
import IUser from 'interfaces/IUser'
import { PencilIconSVG, SendIconSVG } from 'media'
import { observer } from 'mobx-react'
import React, { FC, useEffect, useState } from 'react'
import AlertStore from 'store/AlertStore'
import './User.scss'

const User: FC = observer(() => {
    const [user, setUser] = useState<IUser>()
    let taskNumber = 'Issue-732: Доработка окна согласования'
    let m = 431241

    useEffect(() => {
        axios
            .get(Urls.user(1))
            .then(res => setUser(res.data))
            .catch(err => AlertStore.setAlert({
                title: 'Ошибка загрузки пользователя',
                description: 'Описание'
            }))
    }, [])

    // useEffect(() => {
    //     axios
    //         .get(Urls.characterBaseClothes)
    //         .then(console.log)
    // }, [])


    return (
        <>
            <NotLoggedRedirect />
            <Layout>
                <aside className='user__profile-sidebar'>
                    <Block className='user__profile-block'>
                        <ButtonIcon className='user__settings-button'>
                            <PencilIconSVG />
                        </ButtonIcon>
                        <p className="user__work-status">
                            Выполняет квест <span className="user__task-number">{taskNumber}</span>
                        </p>
                    </Block>
                    <Block className='user__wallet'>
                        <h3 className='user__wallet-title'>Баланс</h3>
                        <div className="user__wallet-bottom">
                            <p className="user__money-count">
                                {m}
                            </p>
                            <div className="user__wallet-controls">
                                <ButtonIcon className='user__send-button'>
                                    <SendIconSVG />
                                </ButtonIcon>
                            </div>
                        </div>
                    </Block>
                    <Block className='' >
                        friends
                    </Block>
                </aside>
                <main className='user__main'>
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
        </>
    )
})

export default User