import axios from 'axios'
import { Block, Button, Input, Layout } from 'components'
import Urls from 'constants/Urls'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AlertStore from 'store/AlertStore'
import './Registration.scss'

function Registration() {
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [sendingData, setSendingData] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (sendingData) {
            axios
                .post(Urls.registration)
                .then(res => {
                    if (res.status === 200) navigate('/user')
                    else {
                        // TODO: заполнить поля и сообщения об ошибках
                    }
                })
                .catch(res => AlertStore.setAlert({
                    id: '1',
                    title: 'Ошибка регистрации',
                    description: 'Пожалуйста, перезагрузите страницу'
                }))
            // setSendingData(false)
        }

    }, [sendingData])


    return (
        <Layout alignment='center'>
            <Block>
                <div className='registration'>
                    <h2 className='registration__title'>
                        Добро пожаловать в цифровой офис ВТБ
                    </h2>
                    <form className="registration__form">
                        <Input placeholder='Адрес корпоративной почты' value={email} setValue={(newValue: string) => setEmail(newValue)} />
                        <Input placeholder='Логин' value={login} setValue={(newValue: string) => setLogin(newValue)} />
                        <Input placeholder='Пароль' value={password} setValue={(newValue: string) => setPassword(newValue)} password />
                        <Input placeholder='Повторите пароль' value={password2} setValue={(newValue: string) => setPassword2(newValue)} password />
                    </form>
                    <div className="registration__buttons">
                        <Button title='Создать аккаунт' large onClick={() => setSendingData(true)} disabled={!login || !email || !password || (password !== password2)} />
                    </div>
                </div>
            </Block>
        </Layout>
    )
}

export default Registration