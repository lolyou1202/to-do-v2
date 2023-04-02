import { FC } from 'react'
import { ReactSVG } from 'react-svg'
import './SingleTask.scss'

interface props {
    id: number
    content: string
    completed: boolean
    onClickTarget: (id: number) => void
    onClickDelete: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const SingleTask: FC<props> = ({
    id,
    content,
    completed,
    onClickTarget,
    onClickDelete
}) => {
    return (
        <li
            className={'singleItem__main-task' + (completed ? ' active' : '')}
            onClick={() => onClickTarget(id)}
        >
            <div>
                <button className='task-status'>
                    <ReactSVG
                        src={require('../../Assets/img/check.svg').default}
                    />
                </button>
                <p className='task-content'>{content}</p>
            </div>
            <button
                className='task-delete'
                onClick={e => onClickDelete(e, id)}
            >
                <ReactSVG src={require('../../Assets/img/close.svg').default} />
            </button>
        </li>
    )
}
