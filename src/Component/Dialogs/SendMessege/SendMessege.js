import s from './../Dialogs.module.css'
import React from 'react'
import { UpdateTextMessegeActionCreater, AddMessegeActionCreater } from './../../../Redux/dialogsReducer'

const SendMessege = (props) => {
    const updateText = (e) => {
        let text = e.target.value
        props.dispatch(UpdateTextMessegeActionCreater(text))
    }
    const send = () => {
        props.dispatch(AddMessegeActionCreater())
    }
    return (
        <div className={ s.formSendMessege }>
            <textarea  
                onChange = { updateText } 
                value = { props.currentTextMessege } 
            />
            <button onClick = { send }>Send</button>
        </div>
    )
}


export default SendMessege;