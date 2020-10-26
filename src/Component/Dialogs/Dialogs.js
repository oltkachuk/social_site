import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'


const UsersDialog = (props) => {
    return (
        <div className={ s.dialogsItem }>
            <NavLink to={`/dialogs/${ props.id }`} activeClassName={ s.activeLink }>{ props.name }</NavLink> 
        </div>
    )
}

const Messeges = (props) => {
    return (
        <div className={ s.messegesItem }>
            <div>{ props.messege }</div>
        </div>
    )
}

let dialogsData = [
    {id: 1, name: 'Oleh'},
    {id: 2, name: 'Vika'},
    {id: 3, name: 'Uliana'},
    {id: 4, name: 'Roman'},
    {id: 5, name: 'Dima'}
]

let messegesData = [
    {id: 1, messeges: 'Hello'},
    {id: 1, messeges: 'Are you OK?'},
    {id: 1, messeges: 'Yes. I am fine'},
    {id: 1, messeges: 'Thanks'}
]

const dialogsItems = dialogsData
    .map( dialog => <UsersDialog name = { dialog.name } id = { dialog.id }/> );

const messegesItems = messegesData
    .map( messege =>  <Messeges messege = {messege.messeges} />)


const Dialogs = (props) => {
    return (
        <div className={ s.dialogs }>
            <div className={ s.dialogsWrapper }>
                { dialogsItems }
            </div>
            <div className={ s.messeges }>
                { messegesItems }
            </div>
        </div>
    )
}

export default Dialogs;