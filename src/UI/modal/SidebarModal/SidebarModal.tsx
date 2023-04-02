import { FC } from 'react'
import { ReactSVG } from 'react-svg'
import './SidebarModal.scss'
import { colorsModal } from '../../../Types/Types'

interface props {
    colorState: colorsModal[]
    active: boolean
    value: string
    onChange: React.Dispatch<React.SetStateAction<string>>
    onClickClose: () => void
    onClickSubmit: () => void
    onClickColor: (id: number) => void
}

export const SidebarModal: FC<props> = ({
    colorState,
    active,
    onChange,
    value,
    onClickClose,
    onClickSubmit,
    onClickColor,
}) => {
    return (
        <div className={'newFolder__modal' + (active ? ' active' : '')}>
            <input
                type='text'
                placeholder='Название папки'
                className='newFolder__modal-input'
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChange(e.target.value)
                }
            />
            <ul className='colors__list'>
                {colorState.map(color => (
                    <li
                        className={
                            'colors__list-item' +
                            (color.selected ? ' active' : '')
                        }
                        key={color.id}
                        style={{ background: `${color.hex}` }}
                        onClick={() => onClickColor(color.id)}
                    ></li>
                ))}
            </ul>
            <button className='newFolder__modal-button' onClick={onClickSubmit}>
                Добавить
            </button>
            <ReactSVG
                src={require('../../../Assets/img/close.svg').default}
                className='newFolder__modal-close'
                onClick={onClickClose}
            />
        </div>
    )
}
