import Header from 'components/Header/Header'
import React, { FC, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import AlertStore from 'store/AlertStore'
import UserStore from 'store/UserStore'
import './Layout.scss'

interface LayoutProps {
    children: React.ReactNode
    alignment?: 'center' | 'default'
}

const Layout: FC<LayoutProps> = ({ children, alignment = 'default' }) => {
    return (
        <div className='page'>
            <div className='layout'>
                <Header items={[
                    { path: '/leaderboard', title: 'рейтинг пользователей' },
                    { path: '/inventory', title: 'инвентарь' },
                ]} />
                <div className={`layout__content layout__content_${alignment}`}>
                    {children}
                </div>
            </div>
            {/* <div className='alerts'>
                {AlertStore.alerts.map(alert => (
                    <div className='alert'>
                        <h3>{alert.title}</h3>
                        <p>{alert.description}</p>
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default Layout
