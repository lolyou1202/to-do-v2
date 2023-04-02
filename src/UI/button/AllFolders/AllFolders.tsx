import { FC } from 'react'
import { ReactSVG } from 'react-svg'
import './AllFolders.scss'

interface props {
    content: string
    onClick: () => void
    active: boolean
}

export const AllFolders: FC<props> = ({ content, active, onClick }) => {
    return (
        <div className={'singleFolder mainFolder' + (active ? ' active' : '')} onClick={onClick}>
            <div className='singleFolder__icon'>
                <ReactSVG
                    src={require('../../../Assets/img/entypo-list.svg').default}
                    className='singleFolder__icon-list'
                />
            </div>

            <p>{content}</p>
        </div>
    )
}
