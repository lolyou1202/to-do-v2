import { FC } from 'react'
import { ReactSVG } from 'react-svg'
import './NewTaskFeed.scss'

interface props {
    onClick: () => void
}

export const NewTaskFeed: FC<props> = ({ onClick }) => {
    return (
        <button className='feed__newTask' onClick={onClick}>
            <ReactSVG src={require('../../../Assets/img/plus.svg').default} />
            <p>Новая заметка</p>
        </button>
    )
}
