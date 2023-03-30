import { FC } from 'react'
import { ReactSVG } from 'react-svg'
import AllFolders from './AllFolders.module.scss'

interface props {
    content: string
}

export const AllLists: FC<props> = ({ content }) => {
    console.log()
    return (
        <div className={AllFolders.singleFolder + ' ' + AllFolders.active}>
            <div className={AllFolders.singleFolder__icon}>
                <ReactSVG
                    src={require('../../../Assets/img/entypo-list.svg').default}
                    className={AllFolders.singleFolder__icon__list}
                />
            </div>
            <p>{content}</p>
        </div>
    )
}
