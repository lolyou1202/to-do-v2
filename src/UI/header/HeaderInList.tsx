import { FC } from 'react'
import { ReactSVG } from 'react-svg'
import './HeaderInList.scss'

interface props {
    content: string
    visible: boolean
    color: string
}

export const HeaderInList: FC<props> = ({ content, visible, color }) => {
    return (
        <div className='singleItem__header'>
            <h1 className='singleItem__header-title' style={{color: `${color}`}}>{content}</h1>
            <button
                className={
                    'singleItem__header-edit' + (visible ? ' visible' : '')
                }
            >
                <ReactSVG
                    src={require('../../Assets/img/change.svg').default}
                />
            </button>
        </div>
    )
}
