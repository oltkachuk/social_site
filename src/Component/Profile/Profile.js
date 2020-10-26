import s from './Profile.module.css'
import Post from './Post/Post';
import ProfileInfo from './ProfileInfo/ProfileInfo';


let postData = [
  {id: 1, messege: 'Hello! How are you?', countLike: 5},
  {id: 2, messege: 'Hello! I am fine. Are you?', countLike: 4},
  {id: 3, messege: 'I am fine too', countLike: 2}
]

const postItem = postData
  .map( post => <Post messege={post.messege} countLike={post.countLike} />)

const AddNewPost = () => {
  return (
    <div>
      <div className={ s.addPost }>
        <textarea></textarea>
        <button>Add new post</button>
      </div>
      <div>
        { postItem }
      </div>
    </div>
  );
}

const Content = () => {
  return (
    <main className={ s.content }>
      <div className={ s.content_header_img }>
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt="content_picture"
        />
      </div>
      <ProfileInfo />
      <AddNewPost />
    </main>
  );
};

export default Content;

