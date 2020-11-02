import { NavLink } from 'react-router-dom'
import Avatar from '../Items/Avatar/Avatar'
import s from './Dialogs.module.css'


const Dialogs = (props) => {
    const dialogsItems = props.dialogsUser
        .map( dialog => <UsersDialog name = { dialog.name } id = { dialog.id }/> 
    );

    const messegesItems = props.messeges
        .map( m => {
            return m.status === 'output' 
                ? <Messeges messege = { m.messege } class = 'output' />
                : <Messeges messege = { m.messege } class = 'input'  />
    })

    const onUpdateText = (text) => {
        props.updateText(text)
    }
    const onSendMessege = () => {
        props.sendMessege()
    }


    return (
        <div className={ s.dialogs }>
            <div className={ s.dialogsWrapper }>
                { dialogsItems }
            </div>
            <div className={ s.messeges }>
                { messegesItems }
                <div className={ s.formSendMessege }>
                    <textarea  
                        onChange = { onUpdateText } 
                        value = { props.currentText } 
                    />
                    <button onClick = { onSendMessege }>Send</button>
                </div>
            </div>
        </div>
    )    
}

const UsersDialog = (props) => {
    return (
        <div className={ s.dialogsItem }>
            <NavLink to={`/dialogs/${ props.id }`} activeClassName={ s.activeLink }>{ props.name }</NavLink> 
        </div>
    )
}


const Messeges = (props) => {
    return (
        <div className={ s.messegesList+" "+s[props.class] }>
            <Avatar />
            <div className={ s.text }>{ props.messege }</div>
        </div>
    )
}


export default Dialogs;