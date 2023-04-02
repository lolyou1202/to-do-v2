import { FC } from 'react'
import { ReactSVG } from 'react-svg'
import './HeaderInList.scss'

interface props {
    value: string
    valueInput: string
    setValueInput: React.Dispatch<React.SetStateAction<string>>
    disabled: boolean
    setDisabled: React.Dispatch<React.SetStateAction<boolean>>
    visible: boolean
    color: string
}

export const HeaderInList: FC<props> = ({
    value,
    valueInput,
    setValueInput,
    disabled,
    setDisabled,
    visible,
    color,
}) => {
    return (
        <div className='singleItem__header'>
            <input
                type='text'
                className='singleItem__header-title'
                style={{
                    color: `${color}`,
                    width: valueInput.length + 0.5 + 'ch',
                }}
                value={disabled ? value : valueInput}
                onChange={e => setValueInput(e.target.value)}
                disabled={disabled}
            />
            <button
                className={'singleItem__header-edit' + (visible ? ' visible' : '')}
                onClick={() => setDisabled(prevState => !prevState)}
            >
                <ReactSVG
                    src={require('../../Assets/img/change.svg').default}
                />
            </button>
        </div>
    )
}
