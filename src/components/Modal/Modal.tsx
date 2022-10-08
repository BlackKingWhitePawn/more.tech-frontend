import React, { FC, ReactNode } from 'react'

interface ModalProps {
    children: ReactNode
}

const Modal: FC<ModalProps> = () => {
    return (
        <div className='modal'>Modal</div>
    )
}

export default Modal