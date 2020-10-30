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
            dialogsData: [
                {id: 1, name: 'Oleh'},
                {id: 2, name: 'Vika'},
                {id: 3, name: 'Uliana'},
                {id: 4, name: 'Roman'},
                {id: 5, name: 'Dima'}
            ]
        }        
    },
    getState() {
        return this._state
    },
    subscriberInform() {},
    updateTextPost(text) {
        this._state.profilePage.currentTextPost = text
        this.subscriberInform(this._state)
    },
    addPost() {
        let newPost = {id: 5, messege: this._state.profilePage.currentTextPost, countLike: 0 }
        this._state.profilePage.postData.unshift(newPost)
        this._state.profilePage.currentTextPost = ''
        this.subscriberInform(this._state)
    },
    addMessege(textMessege) {
        let newMessege = {id: 5, messege: textMessege, status: 'input'}
        this._state.dialogsPage.messegesData.push(newMessege)
        this.subscriberInform(this._state)
    },
    subscribe(observer){
        this.subscriberInform = observer;    
    }
}

export default store

