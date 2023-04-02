import { FC, useContext, useState } from 'react'
import { NewTaskFeed } from '../../../UI/button/NewTaskFeed/NewTaskFeed'
import { FeedModal } from '../../../UI/modal/FeedModal/FeedModal'
import { DbContext } from '../../../Context/Context'
import { DbContextType } from '../../../Types/Types'

interface props {}

export const CommonFeedModal: FC<props> = () => {
    const [feedModalState, setFeedModalState] = useState(false)
    const [feedModalInput, setFeedModalInput] = useState('')

    const { folders, tasks, setTasks } = useContext(DbContext) as DbContextType

    const ClickNewTask = () => {
        setFeedModalState(prevState => !prevState)
    }

    const ClickSubmitNewTask = () => {
        const selectedFolder = folders.find(folder => folder.selected)

        if (!(feedModalInput.length && selectedFolder)) {
            return
        }

        const newTask = {
            id: tasks.length + 1,
            foldersId: selectedFolder.id,
            text: feedModalInput,
            completed: false,
        }
        setTasks(prevState => [...prevState, newTask])
        setFeedModalInput('')
    }

    return (
        <>
            <NewTaskFeed onClick={ClickNewTask} />
            <FeedModal
                active={feedModalState}
                inputValue={feedModalInput}
                setInputValue={setFeedModalInput}
                onClickSubmit={ClickSubmitNewTask}
                onClickCancel={ClickNewTask}
            />
        </>
    )
}
