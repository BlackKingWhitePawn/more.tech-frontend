import React, { FC } from 'react'
import './Button.scss'

interface ButtonProps {
    title: string,
    onClick: () => void,
    type?: 'primary' | 'secondary'
    large?: boolean
    disabled?: boolean
}

const Button: FC<ButtonProps> = ({ onClick, title, type = 'primary', large, disabled }) => {
    return (
        <button className={`button button_${type} ${large ? 'button_large' : ''} ${disabled ? 'button_disabled' : ''}`}>
            <span className="button__label">
                {title}
            </span>
        </button>
    )
}

export default Button