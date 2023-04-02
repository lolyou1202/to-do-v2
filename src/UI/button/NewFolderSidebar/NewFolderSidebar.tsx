import { FC } from 'react'
import { ReactSVG } from 'react-svg'
import './NewFolderSidebar.scss'

interface props {
    onClick: () => void
}

export const NewFolderSidebar: FC<props> = ({ onClick }) => {
    return (
        <div className={'singleFolder newFolder'} onClick={onClick}>
            <div className='singleFolder__icon'>
                <ReactSVG
                    src={require('../../../Assets/img/plus.svg').default}
                    className='singleFolder__icon-plus'
                />
            </div>
            <p>Новая задача</p>
        </div>
    )
}
