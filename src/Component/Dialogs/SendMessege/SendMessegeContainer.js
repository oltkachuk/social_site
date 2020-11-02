import React from 'react'
import { UpdateTextMessegeActionCreater, AddMessegeActionCreater } from './../../../Redux/dialogsReducer'
import SendMessege from './SendMessege'

const SendMessegeContainer = (props) => {
    const updateText = (text) => {
        props.store.dispatch(UpdateTextMessegeActionCreater(text))
    }
    const sendMessege = () => {
        props.store.dispatch(AddMessegeActionCreater())
    }
    return (
        <SendMessege updateText = { updateText } sendMessege = { sendMessege }  currentText = { props.currentTextMessege } />
    )
}


export default SendMessegeContainer;