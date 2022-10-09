import Logo from 'components/Logo/Logo'
import { AccountCircleIconSVG, LoginIconSVG } from 'media'
import { observer } from 'mobx-react'
import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppStore from 'store/AppStore'
import UserStore from 'store/UserStore'
import ButtonIcon from '../ButtonIcon/ButtonIcon'
import './Header.scss'

interface HeaderProps {
    items: {
        title: string,
        path: string
    }[]
}

const Header: FC<HeaderProps> = observer(({ items }) => {
    const navigate = useNavigate()
    return (
        <header className="header">
            <nav className="header__left">
                <Logo />
                {AppStore.access_token && <div className="header__items-container">
                    {items.map(item => <Link className='header__item' key={item.title} to={item.path}>
                        {item.title}
                    </Link>)}
                </div>}
            </nav>
            {AppStore.access_token && <div className="header__controls-container">
                <ButtonIcon path={`/user/${AppStore.id}`}>
                    <AccountCircleIconSVG />
                </ButtonIcon>
                <ButtonIcon onClick={() => {
                    AppStore.logout()
                    navigate('/login')
                }}>
                    <LoginIconSVG />
                </ButtonIcon>
            </div>}
        </header>
    )
})

export default Header