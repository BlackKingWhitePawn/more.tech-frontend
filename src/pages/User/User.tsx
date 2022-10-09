import axios from 'axios'
import { Block, Button, ButtonIcon, Layout, NotLoggedRedirect } from 'components'
import Item from 'components/Item/Item'
import Urls from 'constants/Urls'
import IUser from 'interfaces/IUser'
import { Nullable } from 'interfaces/Types'
import { FindUsersIconSVG, PencilIconSVG, SendIconSVG } from 'media'
import { observer } from 'mobx-react'
import React, { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AlertStore from 'store/AlertStore'
import AppStore from 'store/AppStore'
import UserStore from 'store/UserStore'
import './User.scss'

const User: FC = observer(() => {
    const [user, setUser] = useState<Nullable<IUser>>(UserStore.user)
    const [inventory, setInventory] = useState<any[]>()
    const [balance, setBalance] = useState<number>()
    const [ownPage, setOwnPage] = useState(false)
    let taskNumber = 'Issue-732: Доработка окна согласования'
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (!AppStore.id) navigate('/login')
        let currentId = location.pathname.split('/')[2]
        if (currentId !== AppStore.id) axios
            .get(Urls.user(currentId))
            .then(res => {
                setUser(res.data)
                setOwnPage(false)
            })
        else axios
            .get(Urls.user(AppStore.id))
            .then(res => {
                setUser(res.data)
                setOwnPage(true)
            })
    }, [location.pathname])

    useEffect(() => {
        if (user) axios
            .get(Urls.inventory(user.id))
            .then(res => setInventory(res.data.inventory))
    }, [user])

    useEffect(() => {
        if (user) axios
            .get(Urls.balance(user.id), AppStore.getAuthorizationHeader())
            .then(res => setBalance(res.data.balance))
    }, [user])

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
                        <div className='user__create-button'>
                            <Button large title='Создать персонажа' type='secondary' onClick={() => navigate('/creating')} />
                        </div>
                        <p className="user__work-status">
                            Выполняет квест <a className="user__task-number">{taskNumber}</a>
                        </p>
                    </Block>
                    <Block className='user__wallet'>
                        <h3 className='user__block-title'>
                            <span>Баланс</span>
                            <ButtonIcon className='user__send-button'>
                                <SendIconSVG />
                            </ButtonIcon>
                        </h3>
                        <div className="user__wallet-bottom">
                            <p className="user__money-count">
                                {balance}
                            </p>
                            <div className="user__wallet-controls">
                            </div>
                        </div>
                    </Block>
                    <Block className='user__wallet'>
                        <h3 className='user__block-title'>
                            <span>Кейсы</span>
                        </h3>
                        <div className="user__wallet-bottom">
                            <p className="user__money-count">
                                {user?.case_count}
                            </p>
                            <div className="user__wallet-controls">
                                <Button large title='Открыть' type='secondary' onClick={() => navigate('/open')} />
                            </div>
                        </div>
                    </Block>
                    <Block className='' >
                        <h3 className='user__block-title'>
                            <span>Друзья</span>
                            <ButtonIcon className='user__send-button'>
                                <FindUsersIconSVG />
                            </ButtonIcon>
                        </h3>
                        <div className='user__friends'>
                            <svg onClick={() => {
                                if (user?.id) {
                                    if (user.id === '1') navigate('/user/2')
                                    else navigate('/user/1')
                                }
                            }} style={{ cursor: 'pointer' }} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" fill="#EFEFEF" />
                                <path d="M40.6184 25.6978C40.6184 33.7109 33.2599 37.7404 24.1858 37.7404C15.1096 37.7404 7.74902 33.7119 7.74902 25.6978C7.7489 17.6807 15.1095 9.89313 24.1856 9.89313C33.2599 9.89313 40.6184 17.6807 40.6184 25.6978Z" fill="#7A4A2A" />
                                <path d="M40.6184 25.6978C40.6184 33.7109 33.2599 37.7405 24.1858 37.7405C15.1096 37.7405 7.74902 33.7119 7.74902 25.6978C7.74902 17.6807 15.1096 16.237 24.1858 16.237C33.2599 16.2371 40.6184 17.6807 40.6184 25.6978Z" fill="#F9C1AC" />
                                <path d="M40.6184 25.6978C40.6184 33.7109 33.2599 37.7405 24.1858 37.7405C15.1096 37.7405 7.74902 33.7119 7.74902 25.6978" fill="#F2B09C" />
                                <path d="M19.2677 30.3045C19.1895 30.3045 19.1091 30.2774 19.0479 30.2143C18.3301 29.498 17.3774 29.1052 16.3655 29.1052H16.3635C15.3515 29.1052 14.4009 29.499 13.6871 30.2123C13.5656 30.3335 13.3698 30.3376 13.2494 30.2143C13.128 30.0971 13.1239 29.9017 13.2453 29.7795C14.0786 28.9459 15.1848 28.4861 16.3624 28.4861H16.3645C17.545 28.4861 18.6524 28.9439 19.4876 29.7774C19.607 29.8966 19.607 30.0961 19.4876 30.2142C19.4283 30.2774 19.3501 30.3045 19.2677 30.3045Z" fill="#FFD3C5" />
                                <path d="M29.101 30.3045C29.1774 30.3045 29.2577 30.2774 29.3188 30.2143C30.0366 29.498 30.9893 29.1052 32.0012 29.1052H32.0033C33.0152 29.1052 33.9679 29.499 34.6817 30.2123C34.8011 30.3335 34.9969 30.3376 35.1193 30.2143C35.2408 30.0971 35.2428 29.9017 35.1214 29.7795C34.2922 28.9459 33.1819 28.4861 32.0043 28.4861H32.0022C30.8237 28.4861 29.7163 28.9439 28.8791 29.7774C28.7616 29.8966 28.7616 30.0961 28.8791 30.2142C28.9403 30.2774 29.0187 30.3045 29.101 30.3045Z" fill="#FFD3C5" />
                                <path d="M20.5596 32.0027C20.5596 31.2202 22.1829 30.584 24.1826 30.584C26.1824 30.584 27.8057 31.2202 27.8057 32.0027C27.8057 32.7852 26.1824 32.3172 24.1826 32.3172C22.1829 32.3172 20.5596 32.7862 20.5596 32.0027Z" fill="#AA1111" />
                                <path d="M23.0566 27.1055C23.0566 28.7666 21.7054 30.1172 20.0409 30.1172H15.8878C14.2213 30.1172 12.8701 28.7666 12.8701 27.1055V25.4754C12.8701 23.8103 14.2213 22.4617 15.8878 22.4617H20.0409C21.7054 22.4617 23.0566 23.8102 23.0566 25.4754V27.1055Z" fill="black" />
                                <path d="M16.517 23.7161C16.517 24.4104 15.9559 24.9725 15.2601 24.9725H8.22084C7.5251 24.9725 6.96191 24.4104 6.96191 23.7161C6.96191 23.0238 7.5251 22.4617 8.22084 22.4617H15.2601C15.9559 22.4617 16.517 23.0228 16.517 23.7161Z" fill="black" />
                                <path d="M25.313 27.1055C25.313 28.7666 26.6602 30.1172 28.3286 30.1172H32.4777C34.1461 30.1172 35.4954 28.7666 35.4954 27.1055V25.4754C35.4954 23.8103 34.1461 22.4617 32.4777 22.4617H28.3286C26.6602 22.4617 25.313 23.8102 25.313 25.4754V27.1055Z" fill="black" />
                                <path d="M31.8496 23.7161C31.8496 24.4104 32.4128 24.9725 33.1085 24.9725H40.1478C40.8395 24.9725 41.4047 24.4104 41.4047 23.7161C41.4047 23.0238 40.8405 22.4617 40.1478 22.4617H33.1085C32.4128 22.4617 31.8496 23.0228 31.8496 23.7161Z" fill="black" />
                                <path d="M19.5308 23.7161C19.5308 24.4104 20.095 24.9725 20.7897 24.9725H27.831C28.5247 24.9725 29.0899 24.4104 29.0899 23.7161C29.0899 23.0238 28.5257 22.4617 27.831 22.4617H20.7897C20.095 22.4617 19.5308 23.0228 19.5308 23.7161Z" fill="black" />
                            </svg>
                        </div>
                    </Block>
                </aside>
                <main className='user__main'>
                    <Block >
                        <h3><span className='user__nick'>{'@' + user?.login}</span> <a className='user__name user__link'>{user?.name}</a></h3>
                    </Block>
                    <div className="row">
                        <Block >
                            <h3 className='user__inv-label'>Достижения</h3>
                        </Block>
                        <Block >
                            <h3 className='user__inv-label'>Инвентарь</h3>
                            <div className='user__inv'>
                                {Array.isArray(inventory) && inventory?.map(i => <Item key={i.name} svg={i.svg} />)}
                            </div>
                        </Block>
                    </div>
                    {/* <div className="row">
                        <Block >
                            events
                        </Block>
                    </div>
                    <div className="row">
                        <Block >
                            events
                        </Block>
                    </div> */}
                </main>
            </Layout>
        </>
    )
})

export default User