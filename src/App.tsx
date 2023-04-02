import { useState } from 'react'
import { Feed } from './Components/Feed/Feed'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { folders, tasks, colors, activeTab } from './Types/Types'
import { db } from './Assets/data/db'
import { ActiveSidebarTab, DbContext } from './Context/Context'

export default function App() {
    const [activeTab, setActiveTab] = useState<activeTab>({
        MAINFOLDER: true,
        LISTFOLDER: false,
        NEWFOLDER: false,
    })
    console.log(activeTab)
    const [folders, setFolders] = useState<folders[]>(db.folders)
    const [tasks, setTasks] = useState<tasks[]>(db.tasks)
    const [colors, setColors] = useState<colors[]>(db.colors)

    return (
        <ActiveSidebarTab.Provider value={{ activeTab, setActiveTab }}>
            <DbContext.Provider
                value={{ folders, setFolders, tasks, setTasks, colors, setColors }}
            >
                <div className='App'>
                    <Sidebar />
                    <Feed />
                </div>
            </DbContext.Provider>
        </ActiveSidebarTab.Provider>
    )
}
