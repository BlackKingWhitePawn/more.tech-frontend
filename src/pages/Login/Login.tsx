import { Button, Input, Layout } from 'components'
import Block from 'components/Block/Block'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.scss'

const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    return (
        <Layout alignment='center'>
            <Block>
                <div className='login'>
                    <h2 className='login__title'>
                        С возвращением, username!
                    </h2>
                    <form className="login__form">
                        <Input placeholder='Логин или адрес почты' value={login} setValue={(newValue: string) => setLogin(newValue)} />
                        <Input placeholder='Пароль' value={password} setValue={(newValue: string) => setPassword(newValue)} password />
                    </form>
                    <div className="login__buttons">
                        <Button title='Войти' large onClick={() => { }} disabled={!login || !password} />
                        <div className="login__buttons-registration">
                            <Button title='Вход по сертификату' type='secondary' />
                            <Button title='Зарегистрироваться' type='secondary' onClick={() => navigate('/registration')} />
                        </div>
                    </div>
                </div>
            </Block>
        </Layout>
    )
}

export default Login