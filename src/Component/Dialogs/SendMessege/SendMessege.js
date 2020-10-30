import s from './../Dialogs.module.css'
import React from 'react'

const SendMessege = (props) => {
    const elementTextMessege = React.createRef()
    const addMessege = () => {
        let textMessege = elementTextMessege.current.value;
        props.addMessege(textMessege)
        elementTextMessege.current.value = ''
    }
    return (
        <div className={ s.formSendMessege }>
            <textarea ref = { elementTextMessege } ></textarea>
            <button onClick = { addMessege }>Send</button>
        </div>
    )
}


export default SendMessege;