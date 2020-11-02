const ADD_MESSEGE = "ADD-MESSEGE"
const UPDATE_TEXT_MESSEGE = "UPDATE-TEXT-MESSEGE"

export const AddMessegeActionCreater = () => ({ type: ADD_MESSEGE })
export const UpdateTextMessegeActionCreater = (text) => ({ type: UPDATE_TEXT_MESSEGE, messege: text })

const defaultState = {
    messegesData: [
        {id: 1, messege: 'Hello', status: 'input'},
        {id: 2, messege: 'Are you OK?', status: 'output'},
        {id: 3, messege: 'Yes. I am fine', status: 'input'},
        {id: 4, messege: 'Thanks', status: 'output'}
    ],
    currentTextMessege: '',
    dialogsData: [
        {id: 1, name: 'Oleh'},
        {id: 2, name: 'Vika'},
        {id: 3, name: 'Uliana'},
        {id: 4, name: 'Roman'},
        {id: 5, name: 'Dima'}
    ]
}

const dialogsReducer = (state = defaultState, actions) => {
    if ( actions.type === ADD_MESSEGE ) {
        let newMessege = {id: 5, messege: state.currentTextMessege, status: 'input'}
        state.messegesData.push(newMessege)
        state.currentTextMessege = ''
    } else if ( actions.type === UPDATE_TEXT_MESSEGE ) {
        state.currentTextMessege = actions.messege
    }
    return state    
}

export default dialogsReducer;