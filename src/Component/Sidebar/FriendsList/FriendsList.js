import Avatar from '../../Items/Avatar/Avatar';
import s from './../Sidebar.module.css';

const FriendsList = () => {
    return (
        <div className={ s.friend }>
            <Avatar />        
            <div>Names</div>
        </div>
    )
}

export default FriendsList;