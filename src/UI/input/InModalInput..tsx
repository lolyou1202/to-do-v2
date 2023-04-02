import { FC } from 'react'
import './InModalInput.scss'

interface props {
    placeholder: string
    inputValue: string
    setInputValue: React.Dispatch<React.SetStateAction<string>>
}

export const InModalInput: FC<props> = ({
    placeholder,
    inputValue,
    setInputValue,
}) => {
    return (
        <input
            type='text'
            placeholder={placeholder}
            className='modal-input'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
        />
    )
}
