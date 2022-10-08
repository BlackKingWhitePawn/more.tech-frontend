import React, { FC, ReactNode } from 'react'
import './Block.scss'

interface BlockProps {
    children: ReactNode
}

const Block: FC<BlockProps> = ({ children }) => {
    return (
        <div className='block'>
            {children}
        </div>
    )
}

export default Block