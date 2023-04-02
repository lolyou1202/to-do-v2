//db
export type folders = {
    id: number
    name: string
    colorId: number
    selected: boolean
}
export type tasks = {
    id: number
    foldersId: number
    text: string
    completed: boolean
}
export type colors = {
    id: number
    hex: string
    name: string
}
export type dbType = {
    folders: folders[]
    tasks: tasks[]
    colors: colors[]
}



export type activeTab = {
    MAINFOLDER: boolean
    LISTFOLDER: boolean
    NEWFOLDER: boolean
}
export type colorsModal = {
    id: number
    hex: string
    name: string
    selected: boolean
}


//types from context
export type DbContextType = {
    folders: folders[]
    setFolders: React.Dispatch<React.SetStateAction<folders[]>>
    tasks: tasks[]
    setTasks: React.Dispatch<React.SetStateAction<tasks[]>>
    colors: colors[]
    setColors: React.Dispatch<React.SetStateAction<colors[]>>
}
export type ActiveSidebarTabType = {
    activeTab: activeTab
    setActiveTab: React.Dispatch<React.SetStateAction<activeTab>>
}
