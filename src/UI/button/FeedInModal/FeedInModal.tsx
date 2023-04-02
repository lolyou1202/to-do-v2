import { FC } from 'react'
import './FeedInModal.scss'

interface props {
    content: string
    modifier: string
    onClick: () => void
}

export const InModalButton: FC<props> = ({ content, modifier, onClick }) => {
    return (
        <button className={`modal__buttons-item ${modifier}`} onClick={onClick}>{content}</button>
    )
}
