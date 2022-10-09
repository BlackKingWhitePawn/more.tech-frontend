import Header from 'components/Header/Header'
import React, { FC, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import AlertStore from 'store/AlertStore'
import UserStore from 'store/UserStore'
import './Layout.scss'

interface LayoutProps {
    children: React.ReactNode
    alignment?: 'center' | 'default' | 'no-cols'
    animatedBackground?: boolean
}

const Layout: FC<LayoutProps> = ({ children, alignment = 'default', animatedBackground }) => {
    return (
        <div className={`layout ${animatedBackground ? 'layout_animatedBackground' : ''}`}>
            <Header items={[
                { path: '/shop', title: 'магазин' },
                { path: '/inventory', title: 'инвентарь' },
                { path: '/events', title: 'события' },
            ]} />
            <div className={`layout__content layout__content_${alignment}`}>
                {children}
            </div>
        </div>
    )
}

export default Layout
