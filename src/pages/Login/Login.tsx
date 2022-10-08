import axios from 'axios'
import { Button, Input, Layout, Loader } from 'components'
import Block from 'components/Block/Block'
import Urls from 'constants/Urls'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AlertStore from 'store/AlertStore'
import AppStore from 'store/AppStore'
import './Login.scss'

const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [enter, setEnter] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (enter) {
            axios
                .post(Urls.login, {
                    username: login,
                    password: password,
                    grant_type: 'password' // wtf... =)
                }, {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
                .then(res => {
                    AppStore.setToken(res.data.access_token)
                    navigate(`/user/${res.data.user_id}`)
                })
                .catch(err => {
                    setEnter(false)
                    AlertStore.setAlert({
                        title: 'Ошибка входа'
                    })
                })
        }
    })

    return (
        <Layout alignment='center'>
            <Block>
                <div className='login'>
                    <h2 className='login__title'>
                        С возвращением, username!
                    </h2>
                    <div className="login__loader">
                        {enter && <Loader />}
                    </div>
                    <form className="login__form">
                        <Input placeholder='Логин или адрес почты' value={login} setValue={(newValue: string) => setLogin(newValue)} />
                        <Input placeholder='Пароль' value={password} setValue={(newValue: string) => setPassword(newValue)} password />
                    </form>
                    <div className="login__buttons">
                        <Button title='Войти' large onClick={() => setEnter(true)} disabled={!login || !password} />
                        <div className="login__buttons-registration">
                            <Button title='Вход по сертификату' type='secondary' onClick={() => { }} />
                            <Button title='Зарегистрироваться' type='secondary' onClick={() => navigate('/registration')} />
                        </div>
                    </div>
                </div>
            </Block>
        </Layout>
    )
}

export default Login