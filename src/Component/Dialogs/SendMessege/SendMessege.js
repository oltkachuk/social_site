import s from './../Dialogs.module.css'
import React from 'react'

const SendMessege = (props) => {
    const onUpdateText = (e) => {
        let text = e.target.value
        props.updateText(text)
    }
    const onSend = () => {
        props.sendMessege()
    }
    return (
        <div className={ s.formSendMessege }>
            <textarea  
                onChange = { onUpdateText } 
                value = { props.currentText } 
            />
            <button onClick = { onSend }>Send</button>
        </div>
    )
}


export default SendMessege;