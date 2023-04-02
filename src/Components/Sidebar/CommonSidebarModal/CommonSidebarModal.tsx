import { FC, useContext, useEffect, useState } from 'react'
import { NewFolderSidebar } from '../../../UI/button/NewFolderSidebar/NewFolderSidebar'
import { SidebarModal } from '../../../UI/modal/SidebarModal/SidebarModal'
import { ActiveSidebarTabType, DbContextType, colorsModal } from '../../../Types/Types'
import { ActiveSidebarTab, DbContext } from '../../../Context/Context'

export const CommonSidebarModal: FC = () => {
    const [valueInput, setValueInput] = useState('')
    const [colorsInModal, setColorsInModal] = useState<colorsModal[]>([])

    const { activeTab, setActiveTab } = useContext(ActiveSidebarTab) as ActiveSidebarTabType
    const { folders, setFolders, colors } = useContext(DbContext) as DbContextType
    
    useEffect(() => {
        const actualityColors = colors.map(color => ({
            id: color.id,
            hex: color.hex,
            name: color.name,
            selected: false,
        }))
        setColorsInModal(actualityColors)
    }, [colors])

    const ClickNewFolder = () => {
        setActiveTab(prevState => ({
            ...prevState,
            NEWFOLDER: !prevState.NEWFOLDER,
        }))
    }

    const ClickSubmitNewFolder = () => {
        let selectedOne = colorsInModal.find(color => color.selected)?.id

        if (!(selectedOne && valueInput.length)) {
            return
        }

        const newFolder = {
            id: folders.length + 1,
            name: valueInput,
            colorId: selectedOne,
            selected: false,
        }
        setFolders(prevState => [...prevState, newFolder])
        setValueInput('')
        const unselectedAll = colorsInModal.map(color => {
            color.selected = false
            return color
        })
        setColorsInModal(unselectedAll)
    }

    const ClickColorNewFolder = (id: number) => {
        const newColora = [...colorsInModal].map(color => {
            if (color.id === id) {
                color.selected = !color.selected
            } else {
                color.selected = false
            }
            return color
        })
        setColorsInModal(newColora)
    }
    return (
        <>
            <NewFolderSidebar
                onClick={() => ClickNewFolder()}
            />
            <SidebarModal
                colorState={colorsInModal}
                active={activeTab.NEWFOLDER}
                value={valueInput}
                onChange={setValueInput}
                onClickClose={ClickNewFolder}
                onClickSubmit={ClickSubmitNewFolder}
                onClickColor={ClickColorNewFolder}
            />
        </>
    )
}
