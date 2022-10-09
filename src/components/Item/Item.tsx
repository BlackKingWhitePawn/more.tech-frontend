import React, { FC, useEffect, useRef } from 'react'

interface ItemProps {
    svg?: string
    hash?: string
    onClick?: (svg: string, hash: string) => void
}

const Item: FC<ItemProps> = ({ svg, onClick, hash }) => {
    useEffect(() => {
        svg && document.querySelector(`.item-${hash}__svg`)?.insertAdjacentHTML('afterbegin', svg)
    }, [svg])

    return (
        <svg onClick={() => svg && hash && onClick && onClick(svg, hash)} className={`item item-${hash}__svg`} width="80" viewBox="0 0 163 121" fill="none" xmlns="http://www.w3.org/2000/svg">
        </svg>
    )
}

export default Item