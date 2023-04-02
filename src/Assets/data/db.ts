import { dbType } from '../../Types/Types'

export const db: dbType = {
    folders: [
        {
            id: 1,
            name: 'Продажи',
            colorId: 5,
            selected: false,
        },
        {
            id: 2,
            name: 'Фронтенд',
            colorId: 4,
            selected: false,
        },
        {
            id: 3,
            name: 'Фильмы и сериалы',
            colorId: 3,
            selected: false,
        },
        {
            id: 4,
            name: 'Книги',
            colorId: 2,
            selected: false,
        },
        {
            id: 5,
            name: 'Личное',
            colorId: 1,
            selected: false,
        },
        {
            id: 6,
            name: 'Спорт',
            colorId: 6,
            selected: false,
        },
        {
            id: 7,
            name: 'Курс по ReactJS ToDo',
            colorId: 7,
            selected: false,
        },
    ],
    tasks: [
        {
            id: 1,
            foldersId: 2,
            text: 'Изучить JavaScript',
            completed: true,
        },
        {
            id: 2,
            foldersId: 2,
            text: 'Изучить паттерны проектирования',
            completed: false,
        },
        {
            id: 3,
            foldersId: 2,
            text: 'ReactJS Hooks (useState, useReducer, useEffect и т.д.)',
            completed: true,
        },
        {
            id: 4,
            foldersId: 2,
            text: 'Redux (redux-observable, redux-saga)',
            completed: false,
        },
        {
            id: 5,
            foldersId: 1,
            text: 'Test 1',
            completed: false,
        },
        {
            id: 6,
            foldersId: 1,
            text: 'Test 2',
            completed: false,
        },
        {
            id: 7,
            foldersId: 3,
            text: 'Test 3',
            completed: false,
        },
    ],
    colors: [
        {
            id: 1,
            hex: '#C9D1D3',
            name: 'grey',
        },
        {
            id: 2,
            hex: '#42B883',
            name: 'green',
        },
        {
            id: 3,
            hex: '#64C4ED',
            name: 'blue',
        },
        {
            id: 4,
            hex: '#FFBBCC',
            name: 'pink',
        },
        {
            id: 5,
            hex: '#B6E6BD',
            name: 'lime',
        },
        {
            id: 6,
            hex: '#C355F5',
            name: 'purple',
        },
        {
            id: 7,
            hex: '#110133',
            name: 'black',
        },
        {
            id: 8,
            hex: '#FF6464',
            name: 'red',
        },
    ],
}
