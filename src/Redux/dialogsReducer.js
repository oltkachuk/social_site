const ADD_MESSEGE = "ADD-MESSEGE"
const UPDATE_TEXT_MESSEGE = "UPDATE-TEXT-MESSEGE"

export const AddMessegeActionCreater = () => ({ type: ADD_MESSEGE })
export const UpdateTextMessegeActionCreater = (text) => ({ type: UPDATE_TEXT_MESSEGE, messege: text })

const dialogsReducer = (state, actions) => {
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