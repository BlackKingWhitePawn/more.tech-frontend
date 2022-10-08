import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom';
import './ButtonIcon.scss';

interface ButtonIconProps {
    onClick?: () => void
    path?: string
    children: ReactNode
}

const ButtonIcon: FC<ButtonIconProps> = ({ children, onClick, path }) => {
    return (
        <div className='buttonIcon' onClick={onClick ?? (() => { })}>
            {path
                ?
                <Link to={path} >
                    {children}
                </Link>
                :
                <a>
                    {children}
                </a>
            }
        </div>
    )
}

export default ButtonIcon