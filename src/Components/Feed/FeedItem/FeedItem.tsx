import { FC, useCallback, useContext } from 'react'
import { HeaderInList } from '../../../UI/header/HeaderInList'
import { SingleTask } from '../../../UI/task/SingleTask'
import { DbContextType, folders } from '../../../Types/Types'
import { DbContext } from '../../../Context/Context'

interface props {
    folder: folders
}

export const FeedItem: FC<props> = ({ folder }) => {
    const { colors, folders, setFolders, tasks, setTasks } = useContext(
        DbContext
    ) as DbContextType

    const HandlerBlur = (content: string) => {
        if (content === '') {
            return
        }
        const renameFolder = folders.map(item => {
            item.id === folder.id && (item.name = content)
            return item
        })
        setFolders(renameFolder)
    }

    const currentColor = useCallback(() => {
        const findColor = colors.find(color => color.id === folder.colorId)
        if (!findColor) {
            return '#000000'
        }
        return findColor.hex
    }, [colors, folder.colorId])

    const currentTasks = useCallback(
        () => tasks.filter(task => task.foldersId === folder.id),
        [tasks, folder.id]
    )

    const ClickSingleTaskTarget = (id: number) => {
        const newList = tasks.map(task => {
            task.id === id && (task.completed = !task.completed)
            return task
        })
        setTasks(newList)
    }

    const ClickSingleTaskDelete = (e: React.MouseEvent, id: number) => {
        e.stopPropagation()

        const newList = [...tasks].filter(task => task.id !== id)
        setTasks(newList)
    }

    return (
        <li className='feed__list-item'>
            <HeaderInList
                value={folder.name}
                blur={HandlerBlur}
                color={currentColor()}
            />
            <div className='singleItem__main'>
                <ul className='singleItem__main-list'>
                    {currentTasks().length ? (
                        currentTasks().map(task => (
                            <SingleTask
                                key={task.id}
                                id={task.id}
                                content={task.text}
                                completed={task.completed}
                                onClickTarget={ClickSingleTaskTarget}
                                onClickDelete={ClickSingleTaskDelete}
                            />
                        ))
                    ) : (
                        <div className='singleItem__main-notFound'>
                            Заметок не найдено
                        </div>
                    )}
                </ul>
            </div>
        </li>
    )
}
