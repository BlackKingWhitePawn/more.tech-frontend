import axios from 'axios'
import { Block, ButtonIcon, Layout } from 'components'
import Item from 'components/Item/Item'
import Urls from 'constants/Urls'
import { ChevronLeft24IconSVG } from 'media'
import React, { useEffect, useState } from 'react'
import AppStore from 'store/AppStore'

function Open() {
    const [svg, setSvg] = useState('')

    useEffect(() => {
        axios
            .post(Urls.claim, { user_id: AppStore.id })
            .then(res => {
                setSvg(res.data.claimed_item.item_svg)
            })
    }, [])

    return (
        <Layout alignment='center'>
            <Block>
                <ButtonIcon path={`/user/${AppStore.id}`} >
                    <ChevronLeft24IconSVG />
                </ButtonIcon>
                {!svg && <img width={100} src='assets/gif1.gif' alt='гифка' />}
                <Item svg={svg} />
            </Block>
        </Layout>
    )
}

export default Open