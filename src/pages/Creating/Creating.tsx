import axios from 'axios'
import { Block, Button, ButtonIcon, Layout } from 'components'
import Item from 'components/Item/Item'
import Urls from 'constants/Urls'
import { ChevronLeft24IconSVG } from 'media'
import React, { useEffect, useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'
import UserStore from 'store/UserStore'
import './Creating.scss'

enum CharacterParts {
    body = 'body',
    bottom = 'bottom',
    hair = 'hair',
    head = 'head',
    shoes = 'shoes'
}

function Creating() {
    const navigate = useNavigate()
    const location = useNavigation()
    const [clothes, setClothes] = useState<{
        [key: string]: any[];
    }>({
        body: [],
        bottom: [],
        hair: [],
        head: [],
        shoes: []
    })
    const [selected, setSelected] = useState({
        body: '',
        bottom: '',
        hair: '',
        head: '',
        shoes: ''
    })
    const [currentPart, setCurrentPart] = useState<CharacterParts>()
    const [saveCharacter, setSaveCharacter] = useState(false)

    const getSVGOnClick = (part: CharacterParts) => () => {
        if (currentPart !== part) setCurrentPart(part)
        else setCurrentPart(undefined)
    }

    const replaceHTML = async (part: string, svg: string) => {
        let elem = document.querySelector(`.creating__character-${part}`)
        if (elem) {
            elem.innerHTML = ''
            elem.insertAdjacentHTML('afterbegin', svg)
        }
    }

    const replaceItem = (part: CharacterParts, svg: string) => {
        replaceHTML(part, svg)
        setCurrentPart(undefined)
    }

    useEffect(() => {
        if (saveCharacter) {
            axios
                .post(Urls.characterSave, selected)
                .then(res => {
                    if (res.status === 200) navigate(`/user/${res.data.id}`)
                })
        }
    }, [saveCharacter])

    useEffect(() => {
        axios
            .get(Urls.characterBaseClothes)
            .then(res => {
                let s = {
                    body: '',
                    bottom: '',
                    hair: '',
                    head: '',
                    shoes: ''
                }
                setClothes(res.data.equipment)
                Object.keys(res.data.equipment).forEach(k => {
                    let { svg, ipfs_hash, type } = res.data.equipment[k][0]
                    if (svg) {
                        replaceHTML(type, svg)
                        s = {
                            ...s,
                            [type]: ipfs_hash
                        }
                    }
                })
                setSelected(s)
            })
    }, [])

    return (
        <Layout alignment='center'>
            <Block className='creating'>
                <ButtonIcon path={`/user/${UserStore.user?.id}`} >
                    <ChevronLeft24IconSVG />
                </ButtonIcon>
                <div className="creating__character">
                    <svg onClick={getSVGOnClick(CharacterParts.hair)} className='creating__character-hair' width="163" height="68" viewBox="0 0 163 68" fill="#7A4A2A" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                    <svg onClick={getSVGOnClick(CharacterParts.head)} className='creating__character-head' width="163" height="93" viewBox="0 0 163 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                    <svg onClick={getSVGOnClick(CharacterParts.body)} className='creating__character-body' width="163" height="121" viewBox="0 0 163 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                    <svg onClick={getSVGOnClick(CharacterParts.bottom)} className='creating__character-bottom' width="163" height="94" viewBox="0 0 163 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                    <svg onClick={getSVGOnClick(CharacterParts.shoes)} className='creating__character-shoes' width="163" height="29" viewBox="0 0 163 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                </div>
                {
                    currentPart && clothes
                        ? <div className="creating__items-container">
                            {clothes[currentPart].map((item: any) => <Item
                                key={item.ipfs_hash}
                                hash={item.ipfs_hash}
                                svg={item.svg}
                                onClick={(s, h) => {
                                    setSelected({
                                        ...selected,
                                        [currentPart]: h
                                    })
                                    replaceItem(currentPart, s)
                                }}
                            />)}
                        </div>
                        : null
                }
                <div className="creating__controls">
                    <Button large title='Сохранить персонажа' onClick={() => setSaveCharacter(true)} />
                </div>
            </Block>
        </Layout>
    )
}

export default Creating