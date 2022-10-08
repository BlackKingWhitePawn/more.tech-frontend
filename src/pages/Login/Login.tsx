import { Button, Input, Layout } from 'components'
import Block from 'components/Block/Block'
import React, { useState } from 'react'
import './Login.scss'

const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Layout alignment='center'>
            <Block>
                <div className='login'>
                    <h2 className='login__title'>
                        С возвращением, username!
                    </h2>
                    <form className="login__form">
                        <Input placeholder='Логин или адрес почты' value={login} setValue={(newValue) => setLogin(newValue)} />
                        <Input placeholder='Пароль' value={password} setValue={(newValue) => setPassword(newValue)} password />
                    </form>
                    <div className="login__buttons">
                        <Button title='Войти' large onClick={() => { }} />
                        <Button title='Вход по сертификату' large type='secondary' onClick={() => { }} />
                    </div>
                </div>
            </Block>
        </Layout>
    )
}

export default Login