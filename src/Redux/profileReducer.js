const ADD_POST = "ADD-POST"
const UPDATE_TEXT_POST = "UPDATE-TEXT-POST"
export const AddPostActionCreater = () => ({type: ADD_POST })
export const UpdateTextPostActionCreater = (text) => ({ type: UPDATE_TEXT_POST, messege: text  })


const profileReducer = (state, actions) => {
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