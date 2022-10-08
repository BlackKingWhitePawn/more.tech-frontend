import Header from 'components/Header/Header'
import React, { FC } from 'react'
import './Layout.scss'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className='layout'>
            <Header items={[
                { path: '/leaderboard', title: 'рейтинг пользователей' },
                { path: '/inventory', title: 'инвентарь' },
            ]} />
            <div className="layout__content">
                {children}
            </div>
        </div>
    )
}

export default Layout
