import s from './Avatar.module.css';

const Avatar = () => {
    const img = "https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg"
    return (
        <div className={ s.avatar }>
            <img src={img} alt="ava"/>
        </div>
    )
}

export default Avatar;