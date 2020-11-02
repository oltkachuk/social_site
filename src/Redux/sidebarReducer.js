const defaultState = {
    friends: [
        { id: 1, name: 'Oleh' },
        { id: 2, name: 'Tanya' },
        { id: 3, name: 'Dima' },
        { id: 4, name: 'Roman' },
        { id: 5, name: 'Uliana Prytula' },
        { id: 6, name: 'Ivan' },
        { id: 7, name: 'Yuriy' },
        { id: 8, name: 'Anonim' },
    ]
}

const sidebarReducer = (state = defaultState, actions) => {
    return state;
}

export default sidebarReducer

