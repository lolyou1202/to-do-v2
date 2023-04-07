import { AllFolders } from '../../UI/button/AllFolders/AllFolders'
import { SingleFolder } from '../../UI/button/SingleFolder/SingleFolder'
import { FC, useContext } from 'react'
import './Sidebar.scss'
import { ActiveSidebarTab, DbContext } from '../../Context/Context'
import { ActiveSidebarTabType, DbContextType } from '../../Types/Types'
import { CommonSidebarModal } from './CommonSidebarModal/CommonSidebarModal'
import { ReactSVG } from 'react-svg'

export const Sidebar: FC = () => {
    const { activeTab, setActiveTab } = useContext(
        ActiveSidebarTab
    ) as ActiveSidebarTabType
    const { folders, setFolders, colors } = useContext(
        DbContext
    ) as DbContextType

    const ClickAllFolders = () => {
        setActiveTab(prevState => ({
            ...prevState,
            MAINFOLDER: !prevState.MAINFOLDER,
            LISTFOLDER: false,
        }))
        const unselectedAll = folders.map(folder => {
            folder.selected = false
            return folder
        })
        setFolders(unselectedAll)
    }

    const ClickSingleFolderTarget = (id: number) => {
        const newList = folders.map(folder => {
            if (folder.id === id) {
                folder.selected = !folder.selected
            } else {
                folder.selected = false
            }
            return folder
        })
        setFolders(newList)

        const selectedOne = newList.find(folder => folder.selected)
        selectedOne
            ? setActiveTab(prevState => ({
                  ...prevState,
                  MAINFOLDER: false,
                  LISTFOLDER: true,
              }))
            : setActiveTab(prevState => ({
                  ...prevState,
                  MAINFOLDER: false,
                  LISTFOLDER: false,
              }))
    }

    const ClickSingleFolderClose = (e: React.MouseEvent, id: number) => {
        e.stopPropagation()

        const newList = [...folders].filter(folder => {
            return folder.id !== id
        })
        setFolders(newList)

        setActiveTab(prevState => ({
            ...prevState,
            MAINFOLDER: false,
            LISTFOLDER: false,
        }))
    }

    return (
        <div className='sidebar'>
            <div className='sidebar__mobileIco'>
                <ReactSVG
                    src={require('../../Assets/img/entypo-list.svg').default}
                    className='sidebar__mobileIco-list'
                />
            </div>

            <div className='allFolders'>
                <AllFolders
                    content='Все задачи'
                    onClick={ClickAllFolders}
                    active={activeTab.MAINFOLDER}
                />
            </div>

            <ul className='listFolders'>
                {folders.map(folder => (
                    <SingleFolder
                        key={folder.id}
                        id={folder.id}
                        content={folder.name}
                        color={colors[folder.colorId - 1].hex}
                        active={folder.selected && activeTab.LISTFOLDER}
                        onClickTarget={ClickSingleFolderTarget}
                        onClickClose={ClickSingleFolderClose}
                    />
                ))}
            </ul>

            <div className='newFolder'>
                <CommonSidebarModal />
            </div>
        </div>
    )
}
