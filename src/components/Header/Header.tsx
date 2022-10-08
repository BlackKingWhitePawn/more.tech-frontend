import Logo from 'components/Logo/Logo'
import { AccountCircleIconSVG, LoginIconSVG } from 'media'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import UserStore from 'store/UserStore'
import ButtonIcon from '../ButtonIcon/ButtonIcon'
import './Header.scss'

interface HeaderProps {
    items: {
        title: string,
        path: string
    }[]
}

const Header: FC<HeaderProps> = ({ items }) => {
    return (
        <header className="header">
            <nav className="header__left">
                <Link to='/'>
                    <Logo />
                </Link>
                <div className="header__items-container">
                    {items.map(item => <Link className='header__item' key={item.title} to={item.path}>
                        {item.title}
                    </Link>)}
                </div>
            </nav>
            <div className="header__controls-container">
                <ButtonIcon path='/profile'>
                    <AccountCircleIconSVG />
                </ButtonIcon>
                <ButtonIcon onClick={() => UserStore.clearUserData()}>
                    <LoginIconSVG />
                </ButtonIcon>
            </div>
        </header>
    )
}

export default Header