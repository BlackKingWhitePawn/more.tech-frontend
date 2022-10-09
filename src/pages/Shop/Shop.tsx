import axios from 'axios'
import { Block, Button, Layout } from 'components'
import Urls from 'constants/Urls'
import React, { useState } from 'react'
import AppStore from 'store/AppStore'
import './Shop.scss'

const Shop = () => {
    const items = [
        { price: 100, name: 'Футболка MORE.Tech 4.0' },
        { price: 100, name: 'Футболка MORE.Tech 4.0' },
        { price: 100, name: 'Футболка MORE.Tech 4.0' },
        { price: 100, name: 'Футболка MORE.Tech 4.0' },
        { price: 100, name: 'Футболка MORE.Tech 4.0' },
        { price: 100, name: 'Футболка MORE.Tech 4.0' },
    ]

    const buy = () => {
        axios.post(Urls.buy, {}, AppStore.getAuthorizationHeader())
    }

    return (
        <Layout alignment='no-cols'>
            <main className='shop'>
                <h1>Магазин мерча</h1>
                <div className='shop__items'>
                    {items.map(i => <Block>
                        <h3>{i.name}</h3>
                        <img width={100} src="assets/shirt.webp" alt="футболка" />
                        <p style={{ fontWeight: 600, color: '#2C68F0' }}>{i.price}</p>
                        <Button title='Купить' onClick={buy} />
                    </Block>)}
                </div>
            </main>
        </Layout>
    )
}

export default Shop