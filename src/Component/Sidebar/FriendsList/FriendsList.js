import Avatar from '../../Items/Avatar/Avatar';
import s from './../Sidebar.module.css';

const FriendsList = (props) => {
    return (
        <div className={ s.friend }>
            <Avatar />        
            <div>{ props.name }</div>
        </div>
    )
}

export default FriendsList;