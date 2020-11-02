import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"





const store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, messege: 'Hello! How are you?', countLike: 5},
                {id: 2, messege: 'Hello! I am fine. Are you?', countLike: 4},
                {id: 3, messege: 'I am fine too', countLike: 2}
            ],
            currentTextPost: '',
        },
        dialogsPage: {
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
        },
        sidebarPage: {
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
    },
    _subscriberInform() {},

    getState() {
        return this._state
    },
    subscribe(observer){
        this._subscriberInform = observer;    
    },
    
    dispatch(actions) {
        this._state.profilePage = profileReducer(this._state.profilePage, actions)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, actions)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, actions)
    
        this._subscriberInform(this._state)
    },

}

window.store = store

export default store

