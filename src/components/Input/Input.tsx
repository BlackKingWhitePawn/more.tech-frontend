import React, { FC } from 'react'
import './Input.scss'

interface InputProps {
    placeholder: string,
    errorMessage?: string,
    password?: boolean
    value: string
    setValue: (newValue: string) => void
}

const Input: FC<InputProps> = ({ errorMessage, placeholder, password, value, setValue }) => {
    return (
        <input
            className='input'
            placeholder={placeholder}
            type={password ? 'password' : 'text'}
            onChange={e => setValue(e.target.value)}
            value={value}
        />
    )
}

export default Input