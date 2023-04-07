import { FC } from 'react'
import { ReactSVG } from 'react-svg'
import './HeaderInList.scss'

interface props {
    value: string
    blur: (content: string) => void
    color: string
}

export const HeaderInList: FC<props> = ({ value, blur, color }) => {
    return (
        <div className='singleItem__header'>
            <h1
                className='singleItem__header-title'
                style={{ color: `${color}` }}
                contentEditable
                suppressContentEditableWarning={true}
                onBlur={e => e.target.textContent && blur(e.target.textContent)}
            >
                {value}
            </h1>
            <button className={'singleItem__header-edit'}>
                <ReactSVG
                    src={require('../../Assets/img/change.svg').default}
                />
            </button>
        </div>
    )
}
