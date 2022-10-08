import React, { FC, ReactNode } from 'react'
import './Block.scss'

interface BlockProps {
    children: ReactNode
    className?: string
}

const Block: FC<BlockProps> = ({ children, className }) => {
    return (
        <div className={`block ${className}`}>
            {children}
        </div>
    )
}

export default Block