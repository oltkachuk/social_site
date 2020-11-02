
import AddNewPostContainer from './AddNewPost/AddNewPostContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = ( props ) => {
  return (
    <main className={ s.content }>
      <div className={ s.content_header_img }>
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt="content_picture"
        />
      </div>
      <ProfileInfo />
      <AddNewPostContainer  
        profilePage = { props.profilePage } 
        store = { props.store }
      />
    </main>
  );
};

export default Profile;

