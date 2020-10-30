import s from './../Profile.module.css';
import Post from './Post/Post';
import React from 'react';
import { AddPostActionCreater, UpdateTextPostActionCreater } from '../../../Redux/profileReducer'


const AddNewPost = (props) => { 
  const add = () => { 
    props.dispatch(AddPostActionCreater())
  }

  const changeText = (e) => {
    let text = e.target.value
    props.dispatch(UpdateTextPostActionCreater(text))
  }


  const postItem = props.profilePage.postData
    .map( post => <Post messege={post.messege} countLike={post.countLike} />)
  
  return (
    <div>
      <div className={ s.addPost }>
        <textarea 
          onChange = { changeText } 
          value = { props.profilePage.currentTextPost } 
        />
        <button onClick = { add } >Add new post</button>
      </div>
      <div>
        { postItem }
      </div>
    </div>
  );
}

export default AddNewPost;