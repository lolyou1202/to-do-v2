import { FC } from 'react'
import { InModalInput } from '../../input/InModalInput.'
import { InModalButton } from '../../button/FeedInModal/FeedInModal'
import './FeedModal.scss'

interface props {
    active: boolean
    inputValue: string
    setInputValue: React.Dispatch<React.SetStateAction<string>>
    onClickSubmit: () => void
    onClickCancel: () => void
}

export const FeedModal: FC<props> = ({
    active,
    inputValue,
    setInputValue,
    onClickSubmit,
    onClickCancel,
}) => {
    return (
        <div className={'feed__newTask-modal' + (active ? ' active' : '')}>
            <InModalInput
                placeholder='Текст задачи'
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
            <div className='modal__buttons'>
                <InModalButton
                    content='Добавить задачу'
                    modifier='submit'
                    onClick={onClickSubmit}
                />
                <InModalButton
                    content='Отмена'
                    modifier='cancel'
                    onClick={onClickCancel}
                />
            </div>
        </div>
    )
}
