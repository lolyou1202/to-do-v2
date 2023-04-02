import './Feed.scss'
import { FC, useCallback, useContext } from 'react'
import { ActiveSidebarTab, DbContext } from '../../Context/Context'
import { ActiveSidebarTabType, DbContextType } from '../../Types/Types'
import { FeedItem } from './FeedItem/FeedItem'
import { CommonFeedModal } from './CommonFeedModal/CommonFeedModal'

export const Feed: FC = () => {
    const { activeTab } = useContext(ActiveSidebarTab) as ActiveSidebarTabType
    const { folders } = useContext(DbContext) as DbContextType

    const feedContent = useCallback(() => {
        switch (true) {
            case activeTab.MAINFOLDER:
                return
            case activeTab.LISTFOLDER:
                const selectedFolder = folders.find(folder => folder.selected)
                if (!selectedFolder) {
                    return
                }
                return <FeedItem folder={selectedFolder} visible={true} />
            default:
                return
        }
    }, [activeTab, folders])

    const hint = useCallback(() => {
        switch (true) {
            case !folders.length:
                return <div className='feed__notSelected'>Задачи отсутствуют</div>
            case !activeTab.LISTFOLDER && !activeTab.MAINFOLDER:
                return <div className='feed__notSelected'>Выберите задачу</div>
        }
    }, [folders, activeTab])

    return (
        <div className='feed'>
            <ul className='feed__list'>{feedContent()}</ul>
            {activeTab.LISTFOLDER && <CommonFeedModal />}
            {hint()}
        </div>
    )
}
