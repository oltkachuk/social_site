const ADD_POST = "ADD-POST"
const UPDATE_TEXT_POST = "UPDATE-TEXT-POST"
export const AddPostActionCreater = () => ({type: ADD_POST })
export const UpdateTextPostActionCreater = (text) => ({ type: UPDATE_TEXT_POST, messege: text  })


const defaultState = {
    postData: [
        {id: 1, messege: 'Hello! How are you?', countLike: 5},
        {id: 2, messege: 'Hello! I am fine. Are you?', countLike: 4},
        {id: 3, messege: 'I am fine too', countLike: 2}
    ],
    currentTextPost: ''
}

const profileReducer = (state = defaultState, actions) => {
    if (actions.type === ADD_POST) {
        let newPost = {id: 5, messege: state.currentTextPost, countLike: 0 }
        state.postData.unshift(newPost)
        state.currentTextPost = ''
    } else if ( actions.type === UPDATE_TEXT_POST ) {
        state.currentTextPost = actions.messege
    }

    return state;
}

export default profileReducer;