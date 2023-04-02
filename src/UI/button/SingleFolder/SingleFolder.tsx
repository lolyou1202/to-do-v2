import { FC } from 'react'
import { ReactSVG } from 'react-svg'
import './SingleFolder.scss'

interface props {
    id: number
    content: string
    color: string
    active: boolean
    onClickTarget: (id: number) => void
    onClickClose: (e: React.MouseEvent<HTMLDivElement>, id: number) => void
}

export const SingleFolder: FC<props> = ({
    id,
    content,
    color,
    active,
    onClickTarget,
    onClickClose
}) => {
    return (
        <div
            className={'singleFolder listFolder' + (active ? ' active' : '')}
            onClick={() => onClickTarget(id)}
        >
            <div className='singleFolder__icon'>
                <div
                    className='singleFolder__icon-marker'
                    style={{ background: `${color}` }}
                ></div>
            </div>

            <p>{content}</p>

            <div
                className='singleFolder__icon close'
                onClick={(e) => onClickClose(e, id)}
            >
                <ReactSVG
                    src={require('../../../Assets/img/close.svg').default}
                    className='singleFolder__icon-close'
                />
            </div>
        </div>
    )
}
