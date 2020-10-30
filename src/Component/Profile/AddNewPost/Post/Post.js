import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={ s.post }>
        <div className={ s.wrapper }>
            <div className={ s.avatar }>
                <img src="https://www.indiewire.com/wp-content/uploads/2019/03/shutterstock_5885988bd.jpg" alt="avatar" />
            </div>
            <div className={ s.text }>
                { props.messege }
            </div>
        </div>
        <div>
            like <span>{ props.countLike }</span>
        </div>
  </div>
  );
};

export default Post;